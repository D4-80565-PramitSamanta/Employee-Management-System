package com.emp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.dto.ApiResponse;
import com.emp.dto.EmpDTO;
import com.emp.service.EmpService;


@RequestMapping("/emp")
@RestController
public class EmployeeCon {
	@Autowired
	EmpService eService;
	
	@PostMapping("/create")
	public ResponseEntity<ApiResponse> createEmployee(@RequestBody EmpDTO dto ) {
		ApiResponse response =  eService.createEmployee(dto);
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
}
