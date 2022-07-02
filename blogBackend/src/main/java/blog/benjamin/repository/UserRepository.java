package blog.benjamin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import blog.benjamin.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

    User findByUsername(String username);
    
    
}
