package com.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.dto.ApiResponse;
import com.emp.dto.DepDTO;
import com.emp.service.DepService;

@CrossOrigin("*")
@RequestMapping("/dep")
@RestController
public class DepartmentCon {
    @Autowired
    DepService depService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createDepartment(@RequestBody DepDTO dto) {
        ApiResponse response = depService.createDepartment(dto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<DepDTO> getDepartmentByID(@PathVariable long id) {
        DepDTO dto = depService.getDepartment(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<DepDTO>> getDepartments() {
        List<DepDTO> dtos = depService.getAllDepartments();
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<ApiResponse> editDepartment(@PathVariable long id, @RequestBody DepDTO dto) {
        ApiResponse response = depService.editDepartment(id, dto);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteDepartment(@PathVariable long id) {
        ApiResponse response = depService.deleteDepartment(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
