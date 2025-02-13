package com.project.taskflow.dtos;



public class SubServiceDTO {
    private Long serviceId;
    private String name;
    private String subCategory;

    // Constructors
    public SubServiceDTO() {}

    public SubServiceDTO(Long serviceId, String name, String subCategory) {
        this.serviceId = serviceId;
        this.name = name;
        this.subCategory = subCategory;
    }

    // Getters and Setters
    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }
}

