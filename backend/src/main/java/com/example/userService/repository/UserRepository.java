package com.example.userService.repository;

import com.example.userService.model.UserDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserDB, Long> {
    // Méthodes de recherche personnalisées peuvent être ajoutées ici si besoin
}
