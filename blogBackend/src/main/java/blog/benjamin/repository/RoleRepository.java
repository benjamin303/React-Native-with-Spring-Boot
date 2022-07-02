package blog.benjamin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import blog.benjamin.model.Role;
import blog.benjamin.model.User;

public interface RoleRepository extends JpaRepository<Role, Long>{

    Role findByName(String name);
    
}
