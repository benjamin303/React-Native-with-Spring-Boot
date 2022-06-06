package com.benjamin.blog.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.benjamin.blog.model.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {

//     @Query(value = "SELECT p FROM Post p " +
//     "WHERE " +
//     "(LOWER(p.id) LIKE LOWER(CONCAT('%',:id,'%')) OR :id = '') " +
//     "AND (LOWER(p.title) LIKE LOWER(CONCAT('%',:title,'%')) OR :title = '') " +
//     "AND (LOWER(p.description) LIKE LOWER(CONCAT('%',:description,'%')) OR :description = '') " +
//     "AND (LOWER(p.created) LIKE LOWER(CONCAT('%',:created,'%')) OR :created = '') " +
//     "AND (LOWER(p.updated) LIKE LOWER(CONCAT('%',:updated,'%')) OR :updated = '') " +
//     "GROUP BY p.id")
// Page<Post> searchFull(
//     Pageable pageable,
//     @Param("id") String id,
//     @Param("title") String title,
//     @Param("description") String description,
//     @Param("created") String created,
//     @Param("updated") String updated

//     );
}

