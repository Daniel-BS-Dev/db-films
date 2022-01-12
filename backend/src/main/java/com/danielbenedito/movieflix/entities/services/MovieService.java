package com.danielbenedito.movieflix.entities.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.danielbenedito.movieflix.entities.Movie;
import com.danielbenedito.movieflix.entities.MovieDTO;
import com.danielbenedito.movieflix.entities.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(PageRequest page){
		Page<Movie> list = repository.findAll(page);
		return list.map(x -> new MovieDTO(x));
	}
	
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie entity = repository.findById(id).get();
		return new MovieDTO(entity);
		
	}

}
