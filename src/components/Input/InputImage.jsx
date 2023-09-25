import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 320px;
  height: 198px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
`;

const UploadBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: #F3F3F3;
  border: 1px solid #BBBBBB;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
`;

const UploadText = styled.p`
  text-align: center;
  line-height: 1.5;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImagePreview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const InputImage = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Wrapper>
      <Label>사진 등록</Label>
      <UploadBox>
        {preview && <ImagePreview src={preview} alt="Image preview" />}
        <UploadText>
          이미지<br />등록하기
        </UploadText>
        <HiddenInput type="file" onChange={handleImageChange} />
      </UploadBox>
    </Wrapper>
  );
};

export default InputImage;