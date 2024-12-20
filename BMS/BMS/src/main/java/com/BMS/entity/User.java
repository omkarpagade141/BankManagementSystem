package com.BMS.entity;
 

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int userId;
		
		private String name;
		
		private String contact;

	    private String userName;
	    

	    private String email;

	    private  String password;

	    private  String role;
	    
	    @ManyToOne
	    @JsonIgnore
	    private BankBranch branch;
	    
	    private LocalDate createdOn;

}
