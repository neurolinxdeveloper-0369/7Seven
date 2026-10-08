const fs = require('fs');
const path = require('path');

const baseDir = path.join('backend', 'src', 'main', 'java', 'com', 'seven', 'hotel');
fs.mkdirSync(path.join(baseDir, 'model'), { recursive: true });
fs.mkdirSync(path.join(baseDir, 'repository'), { recursive: true });
fs.mkdirSync(path.join(baseDir, 'controller'), { recursive: true });
fs.mkdirSync(path.join(baseDir, 'config'), { recursive: true });

const models = {
    Booking: `package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Booking {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String name; private String email; private String phone;
    private String checkIn; private String checkOut; private String roomType;
    private Integer guests;
}`,
    Contact: `package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Contact {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String name; private String email; private String subject; private String message;
}`,
    Newsletter: `package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Newsletter {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String email;
}`,
    GallerySubmission: `package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class GallerySubmission {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String firstName; private String city; private String message; private String imagePath;
}`
};

for (const [name, content] of Object.entries(models)) {
    fs.writeFileSync(path.join(baseDir, 'model', `${name}.java`), content);

    const repoContent = `package com.seven.hotel.repository;
import com.seven.hotel.model.${name};
import org.springframework.data.jpa.repository.JpaRepository;
public interface ${name}Repository extends JpaRepository<${name}, Long> {}`;
    fs.writeFileSync(path.join(baseDir, 'repository', `${name}Repository.java`), repoContent);

    const ctrlContent = `package com.seven.hotel.controller;
import com.seven.hotel.model.${name};
import com.seven.hotel.repository.${name}Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/${name.toLowerCase()}s") @CrossOrigin(origins = "*")
public class ${name}Controller {
    @Autowired private ${name}Repository repository;
    @GetMapping public List<${name}> getAll() { return repository.findAll(); }
    @PostMapping public ${name} create(@RequestBody ${name} entity) { return repository.save(entity); }
}`;
    fs.writeFileSync(path.join(baseDir, 'controller', `${name}Controller.java`), ctrlContent);
}

const corsContent = `package com.seven.hotel.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration public class WebConfig implements WebMvcConfigurer {
    @Override public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
    }
}`;
fs.writeFileSync(path.join(baseDir, 'config', 'WebConfig.java'), corsContent);

console.log('Backend files generated successfully.');
