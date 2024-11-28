package com.example.myapp.userService.service;

import com.example.myapp.userService.model.UserDB;
import com.example.myapp.userService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDB> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserDB> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public UserDB saveUser(UserDB user) {
        return userRepository.save(user);
    }

    public UserDB updateUser(Long id, UserDB userDetails) {
        UserDB user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Use non trouvé avec id " + id));

        user.setName(userDetails.getName());
        user.setFirstname(userDetails.getFirstname());

        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
