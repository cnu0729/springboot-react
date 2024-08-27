// 메뉴등록버튼 검색버튼
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import PizzaForm from "./PizzaForm";
import '../css/PizzaRouter.css';


const PizzaRouter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); //false 닫음처리
    const openModal = () => {setIsModalOpen(true)};
    const closeModal = () => {setIsModalOpen(false)};

    /* 검색 관련 변수와 기능들 */
    const [search, setSearch] = useState('');

    // 검색하면 검색을 위한 페이지로 이동
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/search?query=${search}`);
    }
    return(
        <div className="app-container">
            <h1>피자 메뉴 검색하기</h1>
            <div className="search-container">
                <input type="text" placeholder="검색하고 싶은 피자 메뉴를 작성해주세요." 
                value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={handleSearch}>검색하기</button>
            </div>

            <button className='modal-btn' onClick={openModal}>메뉴 등록하기</button>
            {/* 모달을 열면 피자메뉴 설명 가격 작성 창이 나오고 닫으면 작성 창이 사라짐 */}
            <Modal isOpen = {isModalOpen} onClose={closeModal}>
                <PizzaForm />
            </Modal>
        </div>
    )
}

export default PizzaRouter;