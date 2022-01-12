package com.danielbenedito.movieflix.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danielbenedito.movieflix.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
 
	User findByEmail(String email);
}
