package com.spbank.bankbackendjwt1;

import com.spbank.bankbackendjwt1.model.request.SignupRequest;
import com.spbank.bankbackendjwt1.service.ServiceAuth;
import com.spbank.bankbackendjwt1.service.ServiceClass;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Bankbackendjwt1Application {

	public static void main(String[] args) {
	ApplicationContext context =  SpringApplication.run(Bankbackendjwt1Application.class, args);

	ServiceAuth service = context.getBean(ServiceAuth.class) ;



//	service.addUserWithUserInfo("happyhy","happy@gmail.com","123456799" ,"742542455");

		//service.getUserData(1L);

	//	service.getCardsData(1L);


//		SignupRequest signupRequest = new SignupRequest();
//		signupRequest.setEmail("siddlevel@gmail.com");
//		signupRequest.setUsername("Siddwar");
//		signupRequest.setPassword("12345678");
//
//     service.saveUser(signupRequest);


	}

}
