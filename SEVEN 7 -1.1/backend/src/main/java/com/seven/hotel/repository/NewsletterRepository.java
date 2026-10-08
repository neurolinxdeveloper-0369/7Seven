package com.seven.hotel.repository;
import com.seven.hotel.model.Newsletter;
import org.springframework.data.jpa.repository.JpaRepository;
public interface NewsletterRepository extends JpaRepository<Newsletter, Long> {}