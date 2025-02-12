package com.project.taskflow.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.taskflow.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmailAndPassword(String email, String password);
	User findByEmail(String email);
}
