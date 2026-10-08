package com.seven.hotel.controller;
import com.seven.hotel.model.Booking;
import com.seven.hotel.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/bookings") @CrossOrigin(origins = "*")
public class BookingController {
    @Autowired private BookingRepository repository;
    @GetMapping public List<Booking> getAll() { return repository.findAll(); }
    @PostMapping public Booking create(@RequestBody Booking entity) { return repository.save(entity); }
}