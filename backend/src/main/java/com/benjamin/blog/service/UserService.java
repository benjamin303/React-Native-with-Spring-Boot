package com.benjamin.blog.service;

import java.util.List;

import com.benjamin.blog.model.User;

public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();
    
}
