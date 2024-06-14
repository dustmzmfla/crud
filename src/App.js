import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import NotFound from "./components/notFound";
import AddForm from "./components/addForm";
import Header from "./components/header";
import styled from "styled-components";
import { useState } from "react";

const StyleCss = styled.div`
  .index {
    position: relative;
    width: 720px;
    margin: auto;
    min-height: 100vh;
    height: auto;
    background: #e2eeff;
    border-left: 2px solid #eee;
    border-right: 2px solid #eee;
  }

  @media screen and (max-width: 720px) {
    .index {
        width: 100%;
        border: 0;
    }
  }
`;

function App() {

  // 헤더 타이틀 변경
  const [ headerTitle, setHeaderTitle ] = useState('메인화면');
  function changeHeaderTitle(headerTitle){ setHeaderTitle(headerTitle); }

  return (
    <StyleCss className="App">
      <div className="index">
        <BrowserRouter>
          <Header title={headerTitle}/>
          <Routes>
            <Route path="/" element={<Main headerTitle={changeHeaderTitle}/>}></Route>
            <Route path="/schedule" element={<AddForm headerTitle={changeHeaderTitle}/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </StyleCss>
  );
}

export default App;
