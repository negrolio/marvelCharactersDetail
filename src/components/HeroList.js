import React, { Component } from 'react';
import styled from 'styled-components';
import BottomScrollListener from 'react-bottom-scroll-listener';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  background-color: #282828;
  width: 250px;
  margin: 15px;
  border: 2px solid black;
  position: relative;
  transition: all 300ms ease-out;
  opacity: 0.97;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const Description = styled.div`
  color: white;
  margin-left: 17px;
`;

const Title = styled.h1`
  color: #bf3a2b;
  text-align: center;
  margin-left: -17px
`

const OverBox = styled.div`
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
const TitleHover = styled.div`
  text-align: center
`;

const DescriptionHover = styled.div`
  padding: 8px
`;

const ButtonLink = styled.a`
  background-color: white;
  border: unset;
  color: #e95555;
  border-radius: 10px;
  font-style: oblique;
  width: 86px;
  text-align: center;
  text-decoration: none
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15%;
  align-items: center;

  &:hover {
    cursor: pointer
  }
`;

class HeroList extends Component {
  constructor (props) {
    super(props);
  }


  render() {
    const cardsList = this.props.heroesIds.map( id => {
      const hero = this.props.heroesById[id]
      return (
        <Card key={id}>
          <Img src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`} />
          <Description>
            <Title>{hero.name}</Title>
            <p>Comics: <b>{hero.comics.available}</b></p>
            <p>Series: <b>{hero.series.available}</b></p>
            <p>Events: <b>{hero.events.available}</b></p>
            <p>Stories: <b>{hero.stories.available}</b></p>
          </Description>
          <OverBox>
            <TitleHover>
              <h1>
                {hero.name}
              </h1>
            </TitleHover>
            <DescriptionHover>
              {hero.description || 'No description available'}
            </DescriptionHover>
            <ButtonsContainer>
              {hero.urls.map( elem => (
                <ButtonLink key={`${elem.type}${id}`} href={elem.url}>
                  {elem.type}
                </ButtonLink>
              ))}
            </ButtonsContainer>
          </OverBox>
        </Card>
       )
    })
  return (
    <BottomScrollListener onBottom={()=>{this.props.fetch()}} debounce='1000'>
      <Container>
        { cardsList }
      </Container>
    </BottomScrollListener>
  );
  }
}

export default HeroList;
