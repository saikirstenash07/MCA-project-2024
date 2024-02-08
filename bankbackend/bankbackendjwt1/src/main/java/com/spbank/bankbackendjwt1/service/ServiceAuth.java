package com.spbank.bankbackendjwt1.service;

import com.spbank.bankbackendjwt1.model.ERole;
import com.spbank.bankbackendjwt1.model.Role;
import com.spbank.bankbackendjwt1.model.User;
import com.spbank.bankbackendjwt1.model.request.LoginRequest;
import com.spbank.bankbackendjwt1.model.request.SignupRequest;
import com.spbank.bankbackendjwt1.model.respose.JwtResponse;
import com.spbank.bankbackendjwt1.model.respose.MessageResponse;
import com.spbank.bankbackendjwt1.repository.RoleRepository;
import com.spbank.bankbackendjwt1.repository.UserRepository;
import com.spbank.bankbackendjwt1.security.jwt.JwtUtils;
import com.spbank.bankbackendjwt1.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceAuth {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
    private Authentication authentication;


    public  ResponseEntity<?> loginUser(LoginRequest loginRequest){
        authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));

    }


    @Transactional
    public ResponseEntity<?> saveUser(SignupRequest signUpRequest) {

        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }


        User user = new User(
                signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword())
        );

        // Always assign the "user" role
        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        user.getRoles().add(userRole);
        userRole.getUser().add(user);

        userRepository.save(user);
        roleRepository.save(userRole);


        return ResponseEntity.status(HttpStatus.CREATED).body("Registration Successful");
    }
}
