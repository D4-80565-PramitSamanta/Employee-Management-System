package com.emp.service;

import java.util.List;
import com.emp.dto.ApiResponse;
import com.emp.dto.DepDTO;

public interface DepService {
    List<DepDTO> getAllDepartments();

    ApiResponse createDepartment(DepDTO depDTO);

    DepDTO getDepartment(long id);

    ApiResponse editDepartment(long id, DepDTO dto);

    ApiResponse deleteDepartment(long id);
}
