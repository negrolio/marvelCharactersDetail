import React, { Component } from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import * as styledComponents from './style';

const HeroList = (props) => {

    const {
      Container,
      Card,
      Img,
      Description,
      OverBox,
      Title,
      TitleHover,
      DescriptionHover,
      ButtonsContainer,
      ButtonLink
    } = styledComponents;

    const cardsList = props.heroesIds.map( id => {
      const hero = props.heroesById[id]
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
    <BottomScrollListener onBottom={()=>{props.fetch()}} debounce='1000'>
      <Container>
        { cardsList }
      </Container>
    </BottomScrollListener>
  );
}

export default HeroList;