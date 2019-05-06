import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90px;
  background-color: black;
`;

const Img = styled.img`
  width: 130px;
  margin: 20px
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 40%;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

const Input = styled.input`
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

const Border = styled.span`
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

const LabelSpan = styled.span`
  position: absolute
  top: 16px
  left: 0
  font-size: 16px
  color: #9098A9
  font-weight: 500
  transform-origin: 0 0
  transition: all .2s ease
`;

const SearchIcon = styled.img`
  width: 30px;
  filter: invert(1);
  left: 165px;
  top: 17px;
  position: absolute;
  transform: scaleX(-1);
`;
class Header extends Component {

  handlerChange = value => {
    this.props.searchHandler(value.target.value)
  }

  render() {
    return (
      <Container>
        <Img src={require('../img/marvel-logo.svg')}/>
        <Label htmlFor="inp">
        <SearchIcon src={require('../img/search-icon.png')} />
          <Input type="text" id="inp" placeholder="&nbsp;" onChange={this.handlerChange}/>
          <LabelSpan>Search Hero</LabelSpan>
          <Border></Border>
        </Label>
      </Container>
    );
  }
}

export default Header;
