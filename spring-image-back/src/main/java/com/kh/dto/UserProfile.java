package com.kh.dto;

import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor //기본생
@NoArgsConstructor  //필수생
public class UserProfile {
	private int userId;
	private String username;
	private String profileImageUrl;
	private LocalDateTime createdAt;
	// LocalDataTime = 현재 날짜와 시간
}
