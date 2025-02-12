package com.project.taskflow.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.taskflow.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmailAndPassword(String email, String password);
	Optional<User> findByEmail(String email);
}
