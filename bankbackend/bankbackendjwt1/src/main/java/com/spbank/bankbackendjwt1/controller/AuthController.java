package com.spbank.bankbackendjwt1.controller;

import com.spbank.bankbackendjwt1.model.request.LoginRequest;
import com.spbank.bankbackendjwt1.model.request.SignupRequest;
import com.spbank.bankbackendjwt1.service.ServiceAuth;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  private ServiceAuth serviceAuth ;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        return  serviceAuth.loginUser(loginRequest) ;
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
             return  serviceAuth.saveUser(signUpRequest) ;
  }

}

