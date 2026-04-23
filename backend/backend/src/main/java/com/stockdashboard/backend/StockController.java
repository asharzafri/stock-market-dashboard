package com.stockdashboard.backend;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/stocks")
public class StockController {
    @GetMapping("/hello")
    public String hello(){
        return "Stock Dashboard API is working!";
    }
}