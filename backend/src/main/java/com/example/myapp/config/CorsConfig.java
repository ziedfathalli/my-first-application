package com.example.myapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Applique les règles CORS à toutes les routes
                        .allowedOrigins("http://localhost:9001", "http://localhost:3000", "http://myapp.local") // Autorise les appels depuis le frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Méthodes HTTP autorisées
                        .allowedHeaders("*") // Tous les en-têtes sont autorisés
                        .exposedHeaders("Authorization") // Expose l'en-tête Authorization si nécessaire
                        .allowCredentials(true); // Permet l'envoi des cookies et des informations d'authentification
            }
        };
    }
}
