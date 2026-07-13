package com.backend.todoBackend.exception;

public class UserNotFoundException extends  RuntimeException{
    public UserNotFoundException(Long id){
        super("User not Found with id" + id);
    }
}
