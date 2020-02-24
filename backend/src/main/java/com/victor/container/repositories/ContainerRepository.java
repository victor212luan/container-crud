package com.victor.container.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.victor.container.domain.ContainerEntity;

@Repository
public interface ContainerRepository extends JpaRepository<ContainerEntity, Long> {

}
