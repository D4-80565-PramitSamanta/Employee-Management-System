package com.emp.dto;

import com.emp.entity.Department;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EmpDTO {
	private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Long departmentID;
}
