package com.emp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.dto.ApiResponse;
import com.emp.dto.DepDTO;
import com.emp.entity.Department;
import com.emp.exc.customeExc;
import com.emp.repository.DepRepo;

@Service
public class DepServiceImpl implements DepService {

    @Autowired
    DepRepo depRepo;

    ModelMapper mapper = new ModelMapper();

    @Override
    public ApiResponse createDepartment(DepDTO depDTO) {
        Department department = mapper.map(depDTO, Department.class);
        depRepo.save(department);
        return new ApiResponse(201, "Department created and added successfully!!");
    }

    @Override
    public DepDTO getDepartment(long id) {
        Department department = depRepo.findById(id)
                .orElseThrow(() -> new customeExc("Department with given id not found !!!"));
        return mapper.map(department, DepDTO.class);
    }

    @Override
    public List<DepDTO> getAllDepartments() {
        return depRepo.findAll()
                .stream()
                .map(x -> mapper.map(x, DepDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public ApiResponse editDepartment(long id, DepDTO dto) {
        Department department = depRepo.findById(id)
                .orElseThrow(() -> new customeExc("Department with given id not found !!!"));
        department.setDepartmentName(dto.getDepartmentName());
        department.setDepartmentDescription(dto.getDepartmentDescription());
        depRepo.save(department);
        return new ApiResponse(201, "Department updated successfully!!");
    }

    @Override
    public ApiResponse deleteDepartment(long id) {
        if (!depRepo.existsById(id))
            throw new customeExc("Department with given id not found !!!");
        depRepo.deleteById(id);
        return new ApiResponse(200, "Department deleted successfully!!");
    }
}
