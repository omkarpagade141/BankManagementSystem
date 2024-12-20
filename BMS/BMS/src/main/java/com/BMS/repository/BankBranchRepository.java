package com.BMS.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BMS.entity.BankBranch;

public interface BankBranchRepository extends JpaRepository<BankBranch, Integer> {

	Optional<BankBranch> findByBranchName(String branchName);

	Optional<BankBranch> findByBranchIFSC(String branchIFSC);

}
