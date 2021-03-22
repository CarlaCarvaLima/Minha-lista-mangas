package br.com.meusmangas.meusMangas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.meusmangas.meusMangas.model.MangaModel;
import br.com.meusmangas.meusMangas.repository.MangaRepository;

@RestController
@RequestMapping("/mangas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MangaController {
	@Autowired
	private MangaRepository mangaRepository;
	
	@GetMapping
	public ResponseEntity<List<MangaModel>> GetAll(){
		return ResponseEntity.ok(mangaRepository.findAll());
	}
	
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<MangaModel>>GetByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(mangaRepository.findAllByTituloContainingIgnoreCase(titulo));
	}
	
	@PostMapping
	public ResponseEntity<MangaModel>post(@RequestBody MangaModel manga){
		return ResponseEntity.status(HttpStatus.CREATED).body(mangaRepository.save(manga));
	}
	
	@PutMapping
	public ResponseEntity<MangaModel>put(@RequestBody MangaModel manga){
		return ResponseEntity.status(HttpStatus.OK).body(mangaRepository.save(manga));
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		mangaRepository.deleteById(id);
	}	
}
