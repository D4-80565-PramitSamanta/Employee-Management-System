package com.emp.service;


import com.emp.dto.ApiResponse;
import com.emp.dto.EmpDTO;

public interface EmpService {
	ApiResponse createEmployee(EmpDTO empDTO);
}
