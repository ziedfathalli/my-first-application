package com.example.myapp.userService.repository;

import com.example.myapp.userService.model.UserDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserDB, Long> {
    // Méthodes de recherche personnalisées peuvent être ajoutées ici si besoin
}
