import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../css/ChickenDetail.css';

const ChickenDetail = () => {
    // {} = 특정값을 받아오는 것 , [] = 변수명을 설정하는 것
    const {id} = useParams();
    console.log("id : " , id);
    const [chicken, setChicken] = useState(null);
    
    useEffect(() => {
        axios
        .get(`http://localhost:9090/api/chicken/${id}`)
        .then((response) => {
            setChicken(response.data);
        })
        .catch(e => alert("불러오는데 문제가 발생했습니다."));
    }, [])

    //만약 치킨 데이터가 없으면 로딩중
    if(!chicken){
        return(
            <div>
                로딩중...
            </div>
        )
    }
    return(
        <div className="chicken-detail-container">
            <h1>{chicken.chickenName}</h1>
            <p>{chicken.description}</p>
            <p>{chicken.price}원</p>
        </div>
    )
}

export default ChickenDetail;