package com.seven.hotel.controller;
import com.seven.hotel.model.Newsletter;
import com.seven.hotel.repository.NewsletterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/newsletters") @CrossOrigin(origins = "*")
public class NewsletterController {
    @Autowired private NewsletterRepository repository;
    @GetMapping public List<Newsletter> getAll() { return repository.findAll(); }
    @PostMapping public Newsletter create(@RequestBody Newsletter entity) { return repository.save(entity); }
}