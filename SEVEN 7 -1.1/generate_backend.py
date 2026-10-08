import os

base_dir = r'd:\SEVEN 7 -1.1\backend\src\main\java\com\seven\hotel'
os.makedirs(os.path.join(base_dir, 'model'), exist_ok=True)
os.makedirs(os.path.join(base_dir, 'repository'), exist_ok=True)
os.makedirs(os.path.join(base_dir, 'controller'), exist_ok=True)
os.makedirs(os.path.join(base_dir, 'config'), exist_ok=True)

models = {
    'Booking': '''package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Booking {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String name; private String email; private String phone;
    private String checkIn; private String checkOut; private String roomType;
    private Integer guests;
}''',
    'Contact': '''package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Contact {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String name; private String email; private String subject; private String message;
}''',
    'Newsletter': '''package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class Newsletter {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String email;
}''',
    'GallerySubmission': '''package com.seven.hotel.model;
import jakarta.persistence.*;
import lombok.Data;
@Data @Entity public class GallerySubmission {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String firstName; private String city; private String message; private String imagePath;
}'''
}

for name, content in models.items():
    with open(os.path.join(base_dir, 'model', f'{name}.java'), 'w', encoding='utf-8') as f: 
        f.write(content)

    repo_content = f'''package com.seven.hotel.repository;
import com.seven.hotel.model.{name};
import org.springframework.data.jpa.repository.JpaRepository;
public interface {name}Repository extends JpaRepository<{name}, Long> {{}}'''
    with open(os.path.join(base_dir, 'repository', f'{name}Repository.java'), 'w', encoding='utf-8') as f: 
        f.write(repo_content)

    ctrl_content = f'''package com.seven.hotel.controller;
import com.seven.hotel.model.{name};
import com.seven.hotel.repository.{name}Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/{name.lower()}s") @CrossOrigin(origins = "*")
public class {name}Controller {{
    @Autowired private {name}Repository repository;
    @GetMapping public List<{name}> getAll() {{ return repository.findAll(); }}
    @PostMapping public {name} create(@RequestBody {name} entity) {{ return repository.save(entity); }}
}}'''
    with open(os.path.join(base_dir, 'controller', f'{name}Controller.java'), 'w', encoding='utf-8') as f: 
        f.write(ctrl_content)

cors_content = '''package com.seven.hotel.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration public class WebConfig implements WebMvcConfigurer {
    @Override public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
    }
}'''
with open(os.path.join(base_dir, 'config', 'WebConfig.java'), 'w', encoding='utf-8') as f: 
    f.write(cors_content)
