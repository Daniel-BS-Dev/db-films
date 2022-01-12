package com.danielbenedito.movieflix.entities.dto;

import java.io.Serializable;

import com.danielbenedito.movieflix.entities.Score;

public class ScoreDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long idMovie;
	private String emailUser;
	private Double value;
	
	public ScoreDTO() {
		
	}
	
	public ScoreDTO(Long idMovie, String emailUser, Double value) {
		this.idMovie = idMovie;
		this.emailUser = emailUser;
		this.value = value;
	}
	
	public ScoreDTO(Score entity) {
	    idMovie = entity.getMovie().getId();
		emailUser = entity.getUser().getEmail();
		value = entity.getValue();
	}

	public Long getIdMovie() {
		return idMovie;
	}

	public void setIdMovie(Long idMovie) {
		this.idMovie = idMovie;
	}

	public String getEmailUser() {
		return emailUser;
	}

	public void setEmailUser(String emailUser) {
		this.emailUser = emailUser;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}
