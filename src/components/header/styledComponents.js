import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  background-color: black;
  position: fixed;
  width: 100%;
  z-index: 1;
  opacity: .97;
`;

export const Img = styled.img`
  width: 130px;
  margin: 20px
`;

export const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 40%;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: white;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(34,50,84,0.03);
  }

  &:not(:placeholder-shown) + span {
    color: #5a667f;
    transform: translateY(-26px) scale(0.75);
  }

  &:focus {
    background: none;
    outline: none;
  }

  &:focus + span {
    color: white;
    transform: translateY(-26px) scale(0.75);
  }

  &:focus + span + .border {
    transform: scaleX(1);
  }
`;

export const Border = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #07f;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
`;

export const LabelSpan = styled.span`
  position: absolute
  top: 16px
  left: 0
  font-size: 16px
  color: #9098A9
  font-weight: 500
  transform-origin: 0 0
  transition: all .2s ease
`;

export const SearchIcon = styled.img`
  width: 30px;
  filter: invert(1);
  left: 165px;
  top: 17px;
  position: absolute;
  transform: scaleX(-1);
`;
