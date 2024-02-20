package com.emp.exc;


import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class customeExc extends RuntimeException{
    private String message;
    public customeExc(String message){
        this.message = message;
        }
}
