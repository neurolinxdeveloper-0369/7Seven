package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class GallerySubmission {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String firstName; private String city; private String message; private String imagePath;
}