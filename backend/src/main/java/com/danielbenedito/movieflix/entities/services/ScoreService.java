package com.danielbenedito.movieflix.entities.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.danielbenedito.movieflix.entities.Movie;
import com.danielbenedito.movieflix.entities.Score;
import com.danielbenedito.movieflix.entities.User;
import com.danielbenedito.movieflix.entities.dto.MovieDTO;
import com.danielbenedito.movieflix.entities.dto.ScoreDTO;
import com.danielbenedito.movieflix.entities.repositories.MovieRepository;
import com.danielbenedito.movieflix.entities.repositories.ScoreRepository;
import com.danielbenedito.movieflix.entities.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional
	public MovieDTO update(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmailUser());
		if( user == null) {
			user = new User();
			user.setEmail(dto.getEmailUser());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.getById(dto.getIdMovie());
		
		Score entity = new Score();
		entity.setUser(user);
		entity.setMovie(movie);
		entity.setValue(dto.getValue());
		
		entity = scoreRepository.saveAndFlush(entity);
		
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum += s.getValue();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		
		return new MovieDTO(movie);
		
	}

}
