package com.danielbenedito.movieflix.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.danielbenedito.movieflix.entities.pk.ScorePK;

@Entity
@Table(name="tb_score")
public class Score implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@EmbeddedId
	private ScorePK id = new ScorePK();
	private Double value;
	
	public Score() {
		
	}
	
	public Score(User user, Movie movie, Double value) {
		id.setUser(user);
		id.setMovie(movie);
		this.value = value;
	}

	public User user() {
		return id.getUser();
	}

	public void user(User user) {
		id.setUser(user);
	}
	
	public Movie movie() {
		return id.getMovie();
	}

	public void user(Movie movie) {
		id.setMovie(movie);
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
	

}
