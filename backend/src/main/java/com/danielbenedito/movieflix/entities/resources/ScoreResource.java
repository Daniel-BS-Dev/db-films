package com.danielbenedito.movieflix.entities.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danielbenedito.movieflix.entities.dto.MovieDTO;
import com.danielbenedito.movieflix.entities.dto.ScoreDTO;
import com.danielbenedito.movieflix.entities.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreResource {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public ResponseEntity<MovieDTO> update(@RequestBody ScoreDTO dto){
		MovieDTO movie = service.update(dto);
		return ResponseEntity.ok().body(movie);
	}

}
