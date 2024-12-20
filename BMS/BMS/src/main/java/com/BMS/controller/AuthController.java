package com.BMS.controller;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BMS.DTO.JwtResponse;
import com.BMS.DTO.LoginRequestDTO;
import com.BMS.entity.User;
import com.BMS.repository.UserRepository;
import com.BMS.security.CustomUserDetailsService;
import com.BMS.security.JwtHelper; 

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository userrepo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	 @Autowired
	 private JwtHelper helper;
	
	 @Autowired
	 private CustomUserDetailsService userDetailsService;
	
	@Autowired
    private AuthenticationManager manager;
	
	
	@PostMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody LoginRequestDTO loginRequest){
		if(userrepo.findAll().size() ==0) {
			User user=new User();
			user.setUserName("admin");
			user.setEmail("omkarpagade141@gmail.com");
			user.setRole("ADMIN");
			user.setPassword(encoder.encode("Admin123"));
			user.setCreatedOn(LocalDate.now());
			
			
			User save = userrepo.save(user);
			
			return new ResponseEntity<>("initialization, login again",HttpStatus.BAD_REQUEST);
		}	
		 
		this.doAuthenticate(loginRequest.getUserName(), loginRequest.getPassword());
		 
		UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUserName());
        String token = this.helper.generateToken(userDetails);
        
        Optional<User> getUser= userrepo.findByUserName(loginRequest.getUserName());

//        JwtResponse response = JwtResponse.builder()
//                .jwtToken(token)
//                .userName(userDetails.getUsername())
//                .build();

        JwtResponse response = new JwtResponse();
        response.setJwtToken(token);
        response.setUser(getUser.get());

        return new ResponseEntity<>(response, HttpStatus.OK);	
	}
	
	
	
	private void doAuthenticate(String userName, String password) {
		 

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userName, password); 
        try { 
            manager.authenticate(authentication); 


        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password !!");
        }

    }

}
