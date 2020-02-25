package com.victor.container.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victor.container.domain.MovimentacaoEntity;
import com.victor.container.repositories.MovimentacaoRepository;
import com.victor.container.services.exceptions.ObjectNotFoundException;

@Service
public class MovimentacaoService {

	@Autowired
	private MovimentacaoRepository repo;
	
	public MovimentacaoEntity find(Long id) {
		Optional<MovimentacaoEntity> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não identificado! Id: " + id + ", Tipo: " + MovimentacaoEntity.class.getName()));
	}
	
	public List<MovimentacaoEntity> findAll(){
		return repo.findAll();
	}
	
	public MovimentacaoEntity insert(MovimentacaoEntity obj) {
		obj.setId(null);
		return repo.save(obj);
	}
}
