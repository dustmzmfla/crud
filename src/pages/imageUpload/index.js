import styled from "styled-components";
import UploadBtn from "../../svgs/uploadBtn";
import { useState } from "react";
import InformationIcon from "../../svgs/informationIcon";


const StyleCss = styled.div`
    .imageUpload {
        position: relative;
        transition: all 0.25s;
        border: 1px dashed #ddd;
        height: 300px;
        border-radius: 6px;
        background-color: #fff;

        &:hover {
            background-color: #f5f5f5;
            border: 1px dashed #549d50;
        }

        label {
            position: relative;
            transition: all 0.25s;
            width: 100%;
            height: 100%;
            cursor: pointer;
            
            text-align: center;
            &.active {
                background-color: #f5f5f5;
                border: 1px dashed #549d50;
            }
            > div {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                gap: 6px;
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            p {
                font-weight: 300;
            }
        }

        #upload {
            display: none;
        }
    }
`;


const ImageUpload = () => {
    // 이미지 유효성 검사
    const [ error, setError ] = useState(false);

    function checkImage (e){
        if ( e === undefined ) {
            return false;
        }else {
            if ( e.type.includes('image') ) {
                setError(false);
                setPreview(true);
                setIsActive(true);
                imgUpload(e);
            }else {
                setIsActive(false);
                setPreview(false);
                setError(true);
                return false;
            }
        }
    }

    // 이미지 미리보기
    const [ preview, setPreview ] = useState(false);
    function imgUpload (file){
        const test = document.querySelector('#preview');
        const route = URL.createObjectURL(file);
        document.querySelector('#preview').src = route;
    }

    // 이미지 드래그
    const [ isActive, setIsActive ] = useState(false);
    const [ upload, setUpload ] = useState('');
    
    function dragStart(){ setIsActive(true); }
    function dragEnd() { setIsActive(false); }

    function fileInfo (file) {
        const { name, size: byteSize, type } = file;
        const size = (byteSize / (1024*1024)).toFixed(2) + 'mb';
        setUpload({ name, size, type});
    }

    function handleDrop(e){
        e.preventDefault();
        
        const file = e.dataTransfer.files[0];
        checkImage(file);
        fileInfo(file);
    }

    // 드래그 시 새창 뜨는거 방지
    function dragOver(e){ e.preventDefault(); };

    // 클릭 업로드
    function clickUpload (e){
        
        const file = e.target.files[0];
        checkImage(file);
    }

    return(
        <StyleCss>
            <div className="imageUpload">
                <label className={`${isActive ? 'active' : ''}`} htmlFor="upload" onDragOver={dragOver} onDragEnter={dragStart} onDragLeave={dragEnd} onDrop={handleDrop}>
                    { error === false ? 
                        <>
                            <div className={preview === false ? '' : 'hide'}>
                                <UploadBtn/>
                                <p>드래그 또는 클릭하여 업로드</p>
                            </div>
                            <div className={preview === true ? '' : 'hide'}>
                                <img id="preview" alt="미리보기" />
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <InformationIcon color={'#ff0000'}/>
                                <p className="error">업로드된 파일을 다시 확인해주세요</p>
                            </div>
                        </>
                        }
                        
                </label>
                <input id="upload" type="file" name="imageurl" accept="image/*" onChange={clickUpload}/>
            </div>
        </StyleCss>
    )
}

export default ImageUpload;