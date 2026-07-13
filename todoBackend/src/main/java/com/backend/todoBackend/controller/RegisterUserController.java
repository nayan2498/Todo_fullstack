package com.backend.todoBackend.controller;


import com.backend.todoBackend.model.RegisterUser;
import com.backend.todoBackend.repository.RegisterUserRepository;
import com.backend.todoBackend.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class RegisterUserController {
    @Autowired
    private RegisterUserRepository registerUserRepository;

    @PostMapping("/registeruser")
    RegisterUser RegisterNewUser(@RequestBody RegisterUser RegisterNewUser){
        return registerUserRepository.save(RegisterNewUser);
    }

    @PostMapping("/loginuser")
    public Boolean loginUser(@RequestBody LoginRequest loginRequest){
        Optional<RegisterUser> user = registerUserRepository.findById(loginRequest.getUserId());
        if(user == null){
            return false;
        }
        RegisterUser user1 = user.get();
        if(!user1.getPassword().equals(loginRequest.getPassword())){
            return false;
        }

        return true;
    }

}
