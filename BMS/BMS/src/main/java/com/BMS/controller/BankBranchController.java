package com.BMS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BMS.entity.BankBranch;
import com.BMS.service.BankBranchServices;

@RestController
@RequestMapping("/branch")
public class BankBranchController {
	
	@Autowired
	private BankBranchServices bankbranchservice;
	
	@PostMapping("/addbranch")
	public ResponseEntity<?> addNewBranch(@RequestBody BankBranch branch){
		return bankbranchservice.addNewBranch(branch);
		
	}
	
	
	
	@GetMapping("/getbyid/{branchID}")
	public ResponseEntity<?> getBranchByID(@PathVariable int branchID ){
		return bankbranchservice.getBranchByID(branchID);
		
	}
	
	@GetMapping("/allbranchlist")
	public ResponseEntity<?> getAllBranches(){
		return bankbranchservice.getAllBranches();
		
	}
	

}
