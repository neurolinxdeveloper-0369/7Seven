package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Newsletter {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String email;
}