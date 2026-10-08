package com.seven.hotel.controller;
import com.seven.hotel.model.Contact;
import com.seven.hotel.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/contacts") @CrossOrigin(origins = "*")
public class ContactController {
    @Autowired private ContactRepository repository;
    @GetMapping public List<Contact> getAll() { return repository.findAll(); }
    @PostMapping public Contact create(@RequestBody Contact entity) { return repository.save(entity); }
}