package com.BMS.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BMS.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	Optional<User> findByEmail(String email);
	
	Optional<User> findByUserName(String userName);

}
