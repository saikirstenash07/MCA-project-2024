package com.spbank.bankbackendjwt1.controller;

import java.util.List;

import com.spbank.bankbackendjwt1.dto.AccountTransactionsDto;
import com.spbank.bankbackendjwt1.dto.AccountsDto;
import com.spbank.bankbackendjwt1.dto.CardsDto;
import com.spbank.bankbackendjwt1.dto.LoansDto;
import com.spbank.bankbackendjwt1.service.ServiceClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spbank.bankbackendjwt1.model.AccountTransactions;
import com.spbank.bankbackendjwt1.model.Accounts;
import com.spbank.bankbackendjwt1.model.Cards;
import com.spbank.bankbackendjwt1.model.Loans;
import com.spbank.bankbackendjwt1.repository.AccountTransactionsRepository;
import com.spbank.bankbackendjwt1.repository.AccountsRepository;
import com.spbank.bankbackendjwt1.repository.CardsRepository;
import com.spbank.bankbackendjwt1.repository.LoanRepository;
import com.spbank.bankbackendjwt1.security.services.UserDetailsImpl;

@RestController
@RequestMapping("/api/private")
public class PrivateController {

    @Autowired
    private ServiceClass serviceClass ;
    

    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("/myAccount")
    public ResponseEntity<?> getAccountDetails(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        Long userId = userDetails.getId(); 

         AccountsDto accountsDto = serviceClass.getAccountData(userId) ;

        if (accountsDto != null) {
            return ResponseEntity.ok(accountsDto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account not found"); 
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("/myBalance")
    public ResponseEntity<?> getBalanceDetails(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        Long userId = userDetails.getId();

        List<AccountTransactionsDto> accountTransactionsDtos= serviceClass.getTransactionData(userId);
        if (accountTransactionsDtos.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Transcation Data");
        } else {

            return   ResponseEntity.ok(accountTransactionsDtos);
        }

    }



    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("/myCards")
    public ResponseEntity<?> getCardDetails(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        Long userId = userDetails.getId();

        List<CardsDto> cardsDtoList = serviceClass.getCardsData(userId);
        if (cardsDtoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Cards Data");
        } else {

           return   ResponseEntity.ok(cardsDtoList);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @GetMapping("/myLoans")
    public ResponseEntity<?> getLoanDetails(Authentication authentication) {
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        Long userId = userDetails.getId();

        List<LoansDto>  cardsDtoList = serviceClass.getLoansData(userId);
        if (cardsDtoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Loans Data");
        } else {
              return   ResponseEntity.ok(cardsDtoList);
        }


    }

    
    
}
