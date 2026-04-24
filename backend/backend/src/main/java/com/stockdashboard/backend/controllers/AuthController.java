package com.stockdashboard.backend.controllers;

import com.stockdashboard.backend.models.User;
import com.stockdashboard.backend.models.UserRepository;
import com.stockdashboard.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userRepository.save(user);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User found = userRepository.findByEmail(user.getEmail())
                .orElse(null);
        if (found == null) return "User not found!";
        if (!found.getPassword().equals(user.getPassword()))
            return "Invalid password!";
        return jwtUtil.generateToken(found.getEmail());
    }
}
