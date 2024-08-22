package com.kh.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity // mysql에 테이블이 존재하지 않으면 테이블 생성
@Getter // 룸북이나 자카르타가 나오지 않음 -> build.gradle에 spring이나 lombok 설정 있는지 확인
@Setter
@ToString
public class Chicken {
	
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String chickenName;
	private String description;
	private double price; //소수점 고려
}
