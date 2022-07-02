package blog.benjamin.service;

import java.util.List;

import blog.benjamin.model.Role;
import blog.benjamin.model.User;

public interface UserService {

    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User>getUsers();
    
    
}
