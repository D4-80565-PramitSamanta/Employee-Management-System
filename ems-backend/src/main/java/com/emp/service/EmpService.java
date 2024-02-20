package com.emp.service;


import java.util.List;

import com.emp.dto.ApiResponse;
import com.emp.dto.EmpDTO;

public interface EmpService {
	List<EmpDTO> getAllEmployees();;

	ApiResponse createEmployee(EmpDTO empDTO);

	EmpDTO getEmployee(long id);

	ApiResponse editEmployee(long id, EmpDTO dto);

	ApiResponse deleteEmployee(long id);
}
