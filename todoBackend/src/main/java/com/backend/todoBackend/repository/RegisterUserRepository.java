package com.backend.todoBackend.repository;

import com.backend.todoBackend.model.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterUserRepository extends JpaRepository<RegisterUser, String> {
}
