package com.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emp.entity.Department;

public interface DepRepo extends JpaRepository<Department, Long> {

}
