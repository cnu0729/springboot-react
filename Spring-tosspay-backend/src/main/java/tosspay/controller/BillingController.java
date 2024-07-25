package tosspay.controller;

import java.util.Base64;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/billing")
public class BillingController {
	//value값 이용해서 apiSecretKey 가져오기
	@Value("${widgetSecretKey}") //특정한 키 이름을 외부나 다른 곳에서 가져와 사용할 때는 ${키이름} 작성
	private String widgetSecretKey;
	
	@Value("${apiSecretKey}")
	private String apiSecretKey;
	
	private final RestTemplate restTemplate = new RestTemplate();
	
	private String encodeSecretKey(String secretKey) {
		return "Basic" + new String(Base64.getEncoder().encode((secretKey + ":").getBytes()));
	}
	
	//Map 같이 만들기
	private final Map<String, String> billingMap = new ConcurrentHashMap<>();

	
	//server.js confirm-billing url 참조해서 코드 완성하기
	@PostMapping("/comfirm-billing")
	public ResponseEntity<?> confirmBilling(@RequestBody Map<String, String> requestBody, String encodedKey){
		String billingKey = billingMap.get(requestBody.get("customerKey"));
		String url = "https://api.tosspayments.com/v1/billing"+billingKey;
		// HttpHeaders 와 return new까지 완성
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", encodeSecretKey(apiSecretKey));
		//		  "Content-Type": "application/json",
		headers.set("Content-Type", "application/json");
		
		HttpEntity<Map<String, String>> entity = new HttpEntity<>(requestBody, headers);
		
		ResponseEntity<Map> res = restTemplate.exchange(url, HttpMethod.POST, entity, Map.class);
		//requestBody = 본문 고객이 작성한 키 값
		//billinfKey 정기 결제에 관련된 키 값이 들어있음
		billingMap.put(requestBody.get("customerKey"), res.getBody().get("billingKey").toString());
		return new ResponseEntity<>(res.getBody(), res.getStatusCode());
	}

}
