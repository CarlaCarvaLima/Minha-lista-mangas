package br.com.meusmangas.meusMangas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.meusmangas.meusMangas.model.MangaModel;

@Repository
public interface MangaRepository extends JpaRepository<MangaModel, Long> {	
	public List<MangaModel> findAllByTituloContainingIgnoreCase (String titulo);

}
