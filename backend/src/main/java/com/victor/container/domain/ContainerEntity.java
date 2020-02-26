package com.victor.container.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ContainerEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nm_cliente", nullable = false)
	private String nomeCliente;
	
	@Column(name = "cd_container", nullable = false)
	private String numContainer;
	
	@Column(name = "nm_tipo", nullable = false)
	private Integer tipo;
	
	@Column(name = "nm_status", nullable = false)
	private String status;
	
	@Column(name = "nm_categoria", nullable = false)
	private String categoria;
	
	@JsonIgnore
	@OneToMany(mappedBy = "container")
	private List<MovimentacaoEntity> movimentacoes;
	
	
	
}
