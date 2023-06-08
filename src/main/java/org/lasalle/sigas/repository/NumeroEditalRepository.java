package org.lasalle.sigas.repository;

import org.lasalle.sigas.model.NumeroEdital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NumeroEditalRepository extends JpaRepository<NumeroEdital, Long>{

}
