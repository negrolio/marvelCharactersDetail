import React from 'react';
import * as styledComponents from './styledComponents';

const Header = (props) => {

  const { Container, Img, Label, SearchIcon, Input, LabelSpan, Border } = styledComponents;

  const handlerChange = value => {
    props.searchHandler(value.target.value)
  }

  return (
    <Container>
      <Img src={require('../../img/marvel-logo.svg')}/>
      <Label htmlFor="inp">
      <SearchIcon src={require('../../img/search-icon.png')} />
        <Input type="text" id="inp" placeholder="&nbsp;" onChange={handlerChange}/>
        <LabelSpan>Search Character</LabelSpan>
        <Border></Border>
      </Label>
    </Container>
  );

}

export default Header;
