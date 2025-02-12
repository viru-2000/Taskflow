package com.project.taskflow.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.taskflow.models.Role;
import com.project.taskflow.models.User;
import com.project.taskflow.repositories.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        System.out.println("Received User: " + user);
        
        // Default role to USER if not provided
        if (user.getRole() == null) {
            user.setRole(Role.USER);
        }

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }
    
    @PostMapping("/login")
	public String login(@RequestBody User user) {
		User existingUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if (existingUser != null) {
			return "Login successful";
		} else {
			return "Login failed";
		}
	}
 

}
