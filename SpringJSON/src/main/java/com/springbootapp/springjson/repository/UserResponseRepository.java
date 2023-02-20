package com.springbootapp.springjson.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.springbootapp.springjson.model.UserResponse;

@Repository
public interface UserResponseRepository extends JpaRepository<UserResponse, Integer> {

}
