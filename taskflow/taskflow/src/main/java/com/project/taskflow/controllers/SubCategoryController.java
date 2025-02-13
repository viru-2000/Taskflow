package com.project.taskflow.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.taskflow.models.Service;
import com.project.taskflow.models.SubCategory;
import com.project.taskflow.repositories.ServiceRepository;
import com.project.taskflow.repositories.SubCategoryRepository;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/subcategories")
public class SubCategoryController {

    private final SubCategoryRepository subCategoryRepository;
    private final ServiceRepository serviceRepository;

    public SubCategoryController(SubCategoryRepository subCategoryRepository, ServiceRepository serviceRepository) {
        this.subCategoryRepository = subCategoryRepository;
        this.serviceRepository = serviceRepository;
    }

    @GetMapping("/{serviceId}")
    public ResponseEntity<List<SubCategory>> getSubCategoriesByService(@PathVariable Long serviceId) {
        List<SubCategory> subCategories = subCategoryRepository.findByService_Id(serviceId);
        return ResponseEntity.ok(subCategories);
    }

    @PostMapping("/add")
    public ResponseEntity<?> createSubCategory(@RequestBody SubCategory subCategory) {
        if (subCategory.getServiceId() == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Service ID is required."));
        }

        Service service = serviceRepository.findById(subCategory.getServiceId())
            .orElse(null);

        if (service == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Service not found with ID: " + subCategory.getServiceId()));
        }

        subCategory.setService(service);

        try {
            SubCategory savedSubCategory = subCategoryRepository.save(subCategory);
            return ResponseEntity.ok(savedSubCategory);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Could not save sub-category.", "message", e.getMessage()));
        }
    }

}

