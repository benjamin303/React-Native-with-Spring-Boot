// package com.benjamin.blog.controller;

// import java.security.Principal;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
// import org.springframework.util.MultiValueMap;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.benjamin.blog.model.Post;
// import com.benjamin.blog.repository.PostRepository;

// @RestController
// @RequestMapping("api/posts")
// public class PostController {

//     @Autowired
//     private PostRepository postRepository;

//     @RequestMapping(value = "", method = RequestMethod.GET)
//     @ResponseBody
//     public Page<Post> findAll(Pageable pageable, @RequestParam MultiValueMap<String, String> parameters,
//         Principal principal) throws Exception {

//             Page<Post> page = postRepository.searchFull(pageable, 
//             parameters.getFirst("id") == null ? "" : parameters.getFirst("id"),
//             parameters.getFirst("title") == null ? "" : parameters.getFirst("title"),
//             parameters.getFirst("description") == null ? "" : parameters.getFirst("description"),
//             parameters.getFirst("created") == null ? "" : parameters.getFirst("created"),
//             parameters.getFirst("updated") == null ? "" : parameters.getFirst("updated")
//             );

//             return page;
//         } 

//         @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//         @ResponseBody
//         public Post findOne(@PathVariable long id, Principal principal) throws Exception {
    
//             Optional<Post> existingPost = postRepository.findById(id);
    
//             return existingPost.get();
//         }

//         @RequestMapping(value = "", method = RequestMethod.POST)
//         @ResponseBody
//         public Post create(@RequestBody Post post, Principal principal) throws Exception {
//         Post p = new Post();
//         p.setId(post.getId());
//         p.setTitle(post.getTitle());
//         p.setDescription(post.getDescription());
//         p.setCreated(post.getCreated());
//         p.setUpdated(post.getUpdated());
       
//         postRepository.save(p);

//         return p;
//     }

//     @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
//     @ResponseBody
//     public Post update(@PathVariable long id, @RequestBody Post post, Principal principal) throws Exception {

//         Optional<Post> postUpdate = postRepository.findById(post.getId());

//         {
//             Post p = postUpdate.get();
//             p.setId(post.getId());
//             p.setTitle(post.getTitle());
//             p.setDescription(post.getDescription());
//             p.setCreated(post.getCreated());
//             p.setUpdated(post.getUpdated());
//             postRepository.save(p);
//         }
//         return null;
//     }

//     @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
//     @ResponseBody
//     public Post delete(@PathVariable long id, Principal principal) throws Exception {
//         Optional<Post> existingPost = postRepository.findById(id);
//         // if (!existingPost.isPresent()) {
//         //     throw new FormValidException("WORKER_DOES_NOT_EXIST");
//         // }
//         postRepository.delete(existingPost.get());
//         return existingPost.get();
//     }

// }

package com.benjamin.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benjamin.blog.model.Post;
import com.benjamin.blog.service.PostService;

@RestController
@RequestMapping("/post")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/add")
    public String add(@RequestBody Post post){
        postService.savePost(post);
        return "New post is added";
    }

    @GetMapping("/getAll")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @PutMapping("/{id}")
    public String put(@RequestBody Post post){
        postService.savePost(post);
        return "Post is changed";
    }

    @DeleteMapping("/{id}")
    public String delete(@RequestBody Post post){
        postService.savePost(post);
        return "Post is deleted";
    }
    
}
