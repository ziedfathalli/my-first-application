package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/login", "/error").permitAll() // Permettre l'accès public aux pages de login et d'erreur
                        .anyRequest().authenticated() // Toutes les autres requêtes nécessitent une authentification
                )
                .csrf(csrf -> csrf // CSRF est activé par défaut et configuré ici
                        .ignoringRequestMatchers("/webhook/**") // Exemple : ignore CSRF pour certaines routes spécifiques
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login") // Page de connexion personnalisée si nécessaire
                )
                .logout(logout -> logout
                        .logoutSuccessUrl("/") // URL de redirection après déconnexion
                        .permitAll()
                );

        return http.build();
    }
}