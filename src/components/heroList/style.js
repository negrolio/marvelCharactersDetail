import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Card = styled.div`
  background-color: #282828;
  width: 250px;
  margin: 15px;
  border: 2px solid black;
  position: relative;
  transition: all 300ms ease-out;
  opacity: 0.97;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const Description = styled.div`
  color: white;
  margin-left: 17px;
`;

export const Title = styled.h1`
  color: #bf3a2b;
  text-align: center;
  margin-left: -17px
`

export const OverBox = styled.div`
  background-color: #e64242;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  z-index: 100;
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
  opacity: .0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px

  &:hover {
    opacity: .9
  }
`
export const TitleHover = styled.div`
  text-align: center
`;

export const DescriptionHover = styled.div`
  padding: 8px
`;

export const ButtonLink = styled.a`
  background-color: white;
  border: unset;
  color: #e95555;
  border-radius: 10px;
  font-style: oblique;
  width: 86px;
  text-align: center;
  text-decoration: none
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15%;
  align-items: center;

  &:hover {
    cursor: pointer
  }
`;