package com.benjamin.blog.service;

import java.util.List;

import com.benjamin.blog.model.Post;

public interface PostService {
    
    public Post savePost(Post post);
    public List<Post> getAllPosts();
}
