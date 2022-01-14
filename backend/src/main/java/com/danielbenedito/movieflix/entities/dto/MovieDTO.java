package com.danielbenedito.movieflix.entities.dto;

import java.io.Serializable;

import com.danielbenedito.movieflix.entities.Movie;

public class MovieDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
    private Double score;
    private Integer count;
    private String image;
    private String url;
    
	public MovieDTO() {
		
	}
	
	public MovieDTO(Long id, String title, Double score, Integer count, String image, String url) {
		this.id = id;
		this.title = title;
		this.score = score;
		this.count = count;
		this.image = image;
		this.url = url;
	}
	
	public MovieDTO(Movie entity) {
		id = entity.getId();
		title = entity.getTitle();
		score = entity.getScore();
		count = entity.getCount();
		image = entity.getImage();
		url = entity.getUrl();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
