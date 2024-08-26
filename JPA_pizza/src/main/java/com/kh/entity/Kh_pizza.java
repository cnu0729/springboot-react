package com.kh.entity;

import jakarta.persistence.Entity; // lombok에도 존재하기 때문에 자카르타 표기 명시 필수
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

/*
 * model = dto, entity, vo
 기존 DB에 테이블이 존재하는 것을 연결 = dto
 기존 DB에 테이블이 없어서  생성해줘야 할 때 = entity
 DB랑 관계 없음 = vo
*/
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity // 만약에 DB에는 pizzas로 테이블을 저장하길 원하면 @Table에 이름명시를 해주면 됨
public class Kh_pizza {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String description;
	private double price;
}
