import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import ChickenList from "./component/ChickenList";
import ChickenForm from "./component/ChickenForm";
import Modal from "./component/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 사용자가 보고싶을 때 볼 수 있도록 처음에는 false 보이지않음 설정 해줌

  // 오픈 true 닫음 false
  // const에서 동작하는 기능이 1개일 때 {} 중괄호 생략 가능
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <h1>치킨 가게 메뉴 관리</h1>
      <ChickenList />

      <button onClick={openModal}>메뉴 등록하기</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ChickenForm />
      </Modal>
    </div>
  );
}

export default App;
