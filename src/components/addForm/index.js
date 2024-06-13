import { useEffect, useState } from "react";

import styled from "styled-components";
import ImageUpload from "../../pages/imageUpload";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const StyleCss = styled.div`
    form {
        position: relative;
        background-color :#fff;
        padding: 30px 15px;
        margin: 15px;
        display: flex;
        flex-direction: column;
        gap: 6px;

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
                width: 60px;
                flex: none;
                font-weight: 500;
            }
        }
    }
`;

const AddForm = (props) => {

    // 헤더 타이틀 변경
    useEffect(()=>{ props.headerTitle('일정추가'); });

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <StyleCss>
            <form method="post">
                <div className="formContents">
                    <label className="contentsTitle">여행제목</label>
                    <input type="text" placeholder="미입력시 여행지+여행으로 고정"></input>
                </div>

                <div className="thumbNail">
                    <label className="contentsTitle">썸네일</label>
                    <ImageUpload/>
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
            </form>
        </StyleCss>
    )
}

export default AddForm;