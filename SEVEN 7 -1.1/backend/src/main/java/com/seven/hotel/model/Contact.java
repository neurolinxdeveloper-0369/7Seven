package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Contact {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String name; private String email; private String subject; private String message;
}