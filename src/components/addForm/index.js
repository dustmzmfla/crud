import { useEffect, useState } from "react";

import styled from "styled-components";
import ImageUpload from "../../pages/imageUpload";
import DatePicker from "react-datepicker";
import axios from "axios";
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";
import Popup from "../popup";


const StyleCss = styled.div`
    form {
        position: relative;
        background-color :#fff;
        padding: 50px;
        margin: 15px;
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 6px;

        .holes {
            position: absolute;
            display: flex;
            width: 100%;
            left: 0;
            padding: 0 30px;
            justify-content: space-between;

            &.hole01 {
                top: -15px;
            }

            &.hole02 {
                bottom: -15px;
            }

            div {
                width: 30px;
                height: 30px;
                border-radius: 100px;
                background-color: #e2eeff;
                flex: none;
            }
        }

        .formContents {
            display: flex;
            align-items: center;
            gap: 6px;
            width: 100%;

            label {
                width: 60px;
                flex: none;
                font-weight: 500;
            }

            input {
                width: 100%;
                border: 1px solid #ddd;
                border-radius: 4px;
                padding: 6px;
                outline: none;
                font-size: 14px;
                position: relative;
                transition: all 0.25s;

                &:focus {
                    border: 1px solid #549d50;
                    caret-color: #549d50;
                }
            }

            &:last-child {
                align-items: start;
                .contentsTitle {
                    margin-top: 6px;
                }
            }

            .react-datepicker-wrapper {
                width: 100%;
            }

            .react-datepicker__tab-loop {
                position: absolute;
            }
        }

        .thumbNail {
            display: flex;
            flex-direction: column;
            gap: 6px;
            label {
                flex: none;
                font-weight: 500;
            }
        }
    }

    .footerBtn {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        gap: 12px;
        padding: 12px;
        
        button {
            position: relative;
            transition: all 0.25s;
            padding: 15px 0;
            width: 50%;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;

            &#cancleBtn {
                background-color: #eee;
                &:hover {
                    background-color: #d1d0d0;
                }
            }

            &#confirmBtn {
                background-color: #549d50;
                color: #fff;
                &:hover {
                    background-color: #437f40;
                }
            }
        }
    }
`;

const AddForm = (props) => {

    // 헤더 타이틀 변경
    useEffect(()=>{ props.headerTitle('일정추가'); });

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [form, setForm] = useState({
        title: '',
        thumbNail: '',
        location: '',
        startDate: '',
        endDate: ''
    });

    // db.json으로 데이터 보내기 및 유효성 검사
    const navigate = useNavigate();

    function onSubmit(){
        const source = document.querySelector('#preview').src;
        const date = document.querySelector('.datePicker').value.split('-');

        if ( form.thumbNail === '' && form.location === '' && form.startDate === '' && form.endDate === '' ) {
            setPopShow(true);
            return false;
        }else {
            if ( form.title === '' ) {
                form.title = form.location + '여행'
            }
            axios.post('http://localhost:3001/scedule', {
                title: form.title,
                thumbNail: source,
                location: form.location,
                startDate: date[0],
                endDate: date[1],
            });
        }
        
    }

    const [ popShow, setPopShow ] = useState(false);
    const [ popText, setPopText ] = useState('입력칸을 다시 확인해주세요')

    return (
        <StyleCss>
            <form method="post">
                <div className="holes hole01">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="formContents">
                    <label className="contentsTitle">여행제목</label>
                    <input type="text" placeholder="미입력시 여행지+여행으로 고정" value={form.title} onChange={e => setForm({...form, title: e.target.value})}/>
                </div>

                <div className="thumbNail">
                    <label className="contentsTitle">썸네일</label>
                    <ImageUpload/>
                </div>

                <div className="formContents">
                    <label className="contentsTitle">여행지</label>
                    <input type="text" placeholder="여행지 입력"  value={form.location} onChange={e => setForm({...form, location: e.target.value})}/>
                </div>
                

                <div className="formContents">
                    <label className="contentsTitle">여행기간</label>

                    <DatePicker
                        className='datePicker'
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update, e) => {
                            setDateRange(update);
                        }}
                        isClearable={true}
                        dateFormat="yyyy.MM.dd"
                        placeholderText="여행기간 입력"
                    />
                </div>

                <div className="holes hole02">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </form>

            <div className="footerBtn">
                <button type="button" id="cancleBtn">취소</button>
                <button type="button" id="confirmBtn" onClick={onSubmit}>저장</button>
            </div>

            { popShow === true ? <Popup popText={popText}/> : false }
        </StyleCss>
    )
}

export default AddForm;