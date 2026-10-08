package com.seven.hotel.repository;
import com.seven.hotel.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ContactRepository extends JpaRepository<Contact, Long> {}