package com.victor.container.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victor.container.domain.ContainerEntity;
import com.victor.container.repositories.ContainerRepository;
import com.victor.container.services.exceptions.ObjectNotFoundException;

@Service
public class ContainerService {
	
	@Autowired
	private ContainerRepository repo;
	
	public ContainerEntity find(Long id) {
		Optional<ContainerEntity> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não identificado! Id: " + id + ", Tipo: " + ContainerEntity.class.getName()));
	}
	
	public List<ContainerEntity> findAll(){
		return repo.findAll();
	}
	
	public ContainerEntity insert(ContainerEntity obj) {
		obj.setId(null);
		return repo.save(obj);
	}
}
