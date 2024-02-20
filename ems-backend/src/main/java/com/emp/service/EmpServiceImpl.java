package com.emp.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.dto.ApiResponse;
import com.emp.dto.EmpDTO;
import com.emp.entity.Employee;
import com.emp.repository.EmpRepo;


@Service
public class EmpServiceImpl implements EmpService {

	@Autowired
	EmpRepo erepo;
	
	ModelMapper mapper = new ModelMapper();
	
	@Override
	public ApiResponse createEmployee(EmpDTO empDTO) {
		Employee e = mapper.map(empDTO, Employee.class);
		erepo.save(e);
		return (new ApiResponse(201,"Employee created and added successfully!!"));
	}

}
