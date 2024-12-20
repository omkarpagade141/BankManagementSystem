package com.BMS.DTO;

import org.springframework.security.core.userdetails.UserDetails;

import com.BMS.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {
	
	String jwtToken;
	User user;

}
