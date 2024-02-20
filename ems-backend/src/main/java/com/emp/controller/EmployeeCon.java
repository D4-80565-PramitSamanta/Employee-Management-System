package com.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("/get/{id}")
	public ResponseEntity<EmpDTO> getEmployeebyID(@PathVariable long id ) {
		EmpDTO dto =  eService.getEmployee(id);
		return new ResponseEntity<>(dto,HttpStatus.OK);
	}
	
	@GetMapping("/getall")
	public ResponseEntity<List<EmpDTO>> getEmployees() {
		List<EmpDTO> dtos =  eService.getAllEmployees();
		return new ResponseEntity<>(dtos,HttpStatus.OK);
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<ApiResponse> editEmployee(@PathVariable long id, @RequestBody EmpDTO dto) {
		ApiResponse response =  eService.editEmployee(id,dto);
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteEmployee(@PathVariable long id) {
		ApiResponse response =  eService.deleteEmployee(id);
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
}
