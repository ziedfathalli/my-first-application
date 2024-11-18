package com.example.userService.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class UserDB {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "firstname", nullable = false)
    private String firstname;

    public UserDB() {
    }

    public UserDB(Long id, String firstname, String name) {
        this.id = id;
        this.firstname = firstname;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
}
