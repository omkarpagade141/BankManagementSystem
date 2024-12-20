package com.BMS.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.BMS.entity.BankBranch;
import com.BMS.repository.BankBranchRepository;

@Service
public class BankBranchServices {
	
	@Autowired
	private BankBranchRepository bankbranchrepo;
	
	
	
	public ResponseEntity<?> addNewBranch(BankBranch branch){
		Optional<BankBranch> byBranchName = bankbranchrepo.findByBranchName(branch.getBranchName());
		if(byBranchName.isPresent()) {
			return new ResponseEntity<>("branch name "+ branch.getBranchName()+" is already exist",HttpStatus.BAD_REQUEST);
		}
		
		Optional<BankBranch> byBranchName2 = bankbranchrepo.findByBranchIFSC(branch.getBranchIFSC());
		if(byBranchName.isPresent()) {
			return new ResponseEntity<>("IFSC code "+ branch.getBranchIFSC()+" is already used",HttpStatus.BAD_REQUEST);
		}
		branch.setCreatedOn(LocalDate.now());
		
		BankBranch save = bankbranchrepo.save(branch);
		
		return new ResponseEntity<>("Branch added Successfully",HttpStatus.OK);
		
	}



	public ResponseEntity<?> getBranchByID(int branchID) { 
		Optional<BankBranch> byId = bankbranchrepo.findById(branchID);
		if(byId.isEmpty()) {
			return new ResponseEntity<>("branch with id "+ branchID+" is not found",HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<>(byId.get(),HttpStatus.OK);
	}



	public ResponseEntity<?> getAllBranches() { 
		List<BankBranch> all = bankbranchrepo.findAll();
		 
		return new ResponseEntity<>(all.toArray(),HttpStatus.OK);
	}

}
