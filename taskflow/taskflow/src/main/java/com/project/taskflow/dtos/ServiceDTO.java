package com.project.taskflow.dtos;

public class ServiceDTO {
	private Long id;
    private String name;
    private String description;
    
    public ServiceDTO() {}

	public ServiceDTO(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
    
    
}
