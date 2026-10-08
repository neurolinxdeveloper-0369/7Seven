package com.seven.hotel.controller;
import com.seven.hotel.model.GallerySubmission;
import com.seven.hotel.repository.GallerySubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/gallerysubmissions") @CrossOrigin(origins = "*")
public class GallerySubmissionController {
    @Autowired private GallerySubmissionRepository repository;
    @GetMapping public List<GallerySubmission> getAll() { return repository.findAll(); }
    @PostMapping public GallerySubmission create(@RequestBody GallerySubmission entity) { return repository.save(entity); }
}