package com.spbank.bankbackendjwt1.controller;

import java.sql.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spbank.bankbackendjwt1.model.Contact;
import com.spbank.bankbackendjwt1.model.Notice;
import com.spbank.bankbackendjwt1.repository.ContactRepository;
import com.spbank.bankbackendjwt1.repository.NoticeRepository;


@RestController
@RequestMapping("/api/public")
public class PublicController {

	@Autowired
	private NoticeRepository noticeRepository;

	@GetMapping("/notices")
	public ResponseEntity<List<Notice>> getNotices() {
		List<Notice> notices = noticeRepository.findAllActiveNotices();
		if (notices.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().cacheControl(CacheControl.maxAge(60, TimeUnit.SECONDS)).body(notices); // *
	}

	@Autowired
	private ContactRepository contactRepository;

	@PostMapping("/contact")
	public ResponseEntity<?> saveContactInquiryDetails(@RequestBody Contact contact) {
		contact.setContactId(getServiceReqNumber());
		contact.setCreateDt(new Date(System.currentTimeMillis()));
		Contact savedContact = contactRepository.save(contact) ;
		return  ResponseEntity.status(HttpStatus.CREATED).body("Response Submitted Successfully");
	}

	public String getServiceReqNumber() {
		Random random = new Random();
		int ranNum = random.nextInt(999999999 - 9999) + 9999;
		return "SR" + ranNum;
	}
}
