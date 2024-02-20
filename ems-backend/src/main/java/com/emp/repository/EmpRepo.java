package com.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emp.entity.Employee;

public interface EmpRepo extends JpaRepository<Employee, Long> {
	
}
