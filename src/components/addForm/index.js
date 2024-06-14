import { useEffect, useState } from "react";

import styled from "styled-components";
import ImageUpload from "../../pages/imageUpload";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


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

            .date {
                display: flex;
                gap: 6px;
                
                width: 100%;
                & > div {
                    width: 100%;
                }

                li {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    
                    label {
                        font-weight: 400;
                        font-size: 14px;
                        width: auto;
                    }

                    .react-datepicker-wrapper {
                        width: 100%;
                    }

                    .react-datepicker__tab-loop {
                        position: absolute;
                    }
                }
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

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [form, setForm] = useState({
        title: '',
        thumbNail: '',
        location: '',
        period: '',
    });

    useEffect(()=>{
        console.log(form)
    }, [form])

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
                    <input type="text" placeholder="미입력시 여행지+여행으로 고정" value={form.title} onChange={e => setForm({...form, title: e.target.value})}></input>
                </div>

                <div className="thumbNail">
                    <label className="contentsTitle">썸네일</label>
                    <ImageUpload  value={form.thumbNail} setForm={e => setForm({...form, thumbNail: e.target.value})}/>
                </div>

                <div className="formContents">
                    <label className="contentsTitle">여행지</label>
                    <input type="text" placeholder="여행지 입력"></input>
                </div>
                

                <div className="formContents">
                    <label className="contentsTitle">여행기간</label>

                    <ul className="date">
                        <li>
                            <label>출국일</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </li>

                        <li>
                            <label>귀국일</label>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </li>
                    </ul>
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
                <button type="button" id="confirmBtn">저장</button>
            </div>
        </StyleCss>
    )
}

export default AddForm;