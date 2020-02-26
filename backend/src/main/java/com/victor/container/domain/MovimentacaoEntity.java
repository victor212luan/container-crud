package com.victor.container.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@Entity	
@AllArgsConstructor
@NoArgsConstructor
public class MovimentacaoEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nm_navio", nullable = false)
	private String navio;
	
	@Column(name = "nm_movimentacao", nullable = false)
	private String tpMovimentacao;
	
	@Column(name = "dt_inicio_movimentacao", nullable = false)
	private Date dataInicio;
	
	@Column(name = "dt_fim_movimentacao", nullable = true)
	private Date dataFim;
	
	@ManyToOne
	@JoinColumn(name="container_id")
	private ContainerEntity container;
}
