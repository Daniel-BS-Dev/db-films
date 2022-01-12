package com.danielbenedito.movieflix.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danielbenedito.movieflix.entities.Score;
import com.danielbenedito.movieflix.entities.pk.ScorePK;

@Repository
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
