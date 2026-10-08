package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Booking {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String name; private String email; private String phone;
    private String checkIn; private String checkOut; private String roomType;
    private Integer guests;
}