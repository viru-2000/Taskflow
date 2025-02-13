package com.project.taskflow.models;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "sub_categories")
public class SubCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(name = "sub_category", nullable = false, unique = true)
    private String subCategory;  // Add this field

    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    @JsonIgnore
    private Service service;

    @Transient  // Used for JSON request handling
    private Long serviceId;

    public SubCategory() {}

    public SubCategory(String name, String subCategory, Service service) {
        this.name = name;
        this.subCategory = subCategory;
        this.service = service;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSubCategory() { return subCategory; }
    public void setSubCategory(String subCategory) { this.subCategory = subCategory; }

    public Service getService() { return service; }
    public void setService(Service service) { this.service = service; }

    public Long getServiceId() { return service != null ? service.getId() : serviceId; }
    public void setServiceId(Long serviceId) { this.serviceId = serviceId; }
}


