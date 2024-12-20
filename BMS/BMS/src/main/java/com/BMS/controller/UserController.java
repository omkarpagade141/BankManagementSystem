package com.BMS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BMS.DTO.UserDTO;
import com.BMS.entity.User;
import com.BMS.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	@PostMapping("/adduser")
	public ResponseEntity<?> addNewUser(@RequestBody UserDTO newuser){
		return userservice.addNewUser(newuser);
		
	}

}
