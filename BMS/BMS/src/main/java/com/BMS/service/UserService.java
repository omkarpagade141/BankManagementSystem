package com.BMS.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.BMS.DTO.UserDTO;
import com.BMS.entity.BankBranch;
import com.BMS.entity.User;
import com.BMS.repository.BankBranchRepository;
import com.BMS.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private BankBranchRepository bankbranchrepo;
	
	public ResponseEntity<?> addNewUser(UserDTO user){
		if (userRepository.findByUserName(user.getEmail()).isPresent()) {
            return new ResponseEntity<>("Username already exists",HttpStatus.BAD_REQUEST);
        }
 
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Email already exists");
        }
        
        BankBranch byId = bankbranchrepo.getById(user.getBranchId());
        
        
        User usernew =new User();
        usernew.setName(user.getName());
        usernew.setContact(user.getContact());
        usernew.setUserName(user.getEmail());
        usernew.setEmail(user.getEmail());
        usernew.setPassword(encoder.encode(user.getContact()));
        usernew.setRole(user.getRole());
        usernew.setBranch(byId);
        usernew.setCreatedOn(LocalDate.now());
        
       
        userRepository.save(usernew);

        return ResponseEntity.status(HttpStatus.OK).body("User created successfully");
		
	}

}
