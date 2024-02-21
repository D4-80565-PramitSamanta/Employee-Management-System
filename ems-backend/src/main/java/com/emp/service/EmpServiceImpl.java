package com.emp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.dto.ApiResponse;
import com.emp.dto.EmpDTO;
import com.emp.entity.Department;
import com.emp.entity.Employee;
import com.emp.exc.customeExc;
import com.emp.repository.DepRepo;
import com.emp.repository.EmpRepo;


@Service
public class EmpServiceImpl implements EmpService {

	@Autowired
	EmpRepo erepo;
	
	@Autowired
	DepRepo drepo;
	
	
	ModelMapper mapper = new ModelMapper();
	
	@Override
	public ApiResponse createEmployee(EmpDTO empDTO) {
		Department dep = drepo.findById(empDTO.getDepartmentID())
				.orElseThrow(()->new customeExc("Dep not found"));
		Employee e = mapper.map(empDTO, Employee.class);
		e.setDepartment(dep);
		erepo.save(e);
		return (new ApiResponse(201,"Employee created and added successfully!!"));
	}

	@Override
	public EmpDTO getEmployee(long id) {
		Employee e = erepo.findById(id).orElseThrow(()->new customeExc("Employee with given id not found !!!"));
		return mapper.map(e, EmpDTO.class);
	}

	@Override
	public List<EmpDTO> getAllEmployees() {
		return erepo.findAll()
				.stream()
				.map(x->mapper.map(x, EmpDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse editEmployee(long id, EmpDTO dto) {
		Department dep = drepo.findById(dto.getDepartmentID())
				.orElseThrow(()->new customeExc("Dep not found"));
		Employee e = erepo.findById(id).orElseThrow(()->new customeExc("Employee with given id not found !!!"));
		e.setEmail(dto.getEmail());
		e.setFirstName(dto.getFirstName());
		e.setLastName(dto.getLastName());
		e.setDepartment(dep);
		erepo.save(e);
		return (new ApiResponse(201,"Employee updated successfully!!"));
	}

	@Override
	public ApiResponse deleteEmployee(long id) {
		if(erepo.existsById(id)==false)throw new customeExc("Employee with given id not found !!!");
		erepo.deleteById(id);
	    return new ApiResponse(200, "Employee deleted successfully!!");
	}

}
