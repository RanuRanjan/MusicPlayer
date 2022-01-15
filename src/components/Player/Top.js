import React, { useState } from 'react';
import styled from 'styled-components';
import PropsTypes from 'prop-types';
import { Audio } from './Audio';

export function Top(props) {
  const Container = styled.div`
    border-radius: 5px 5px 0 0;
    height: 240px;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    color: #27117c;
    box-sizing: border-box;
    background-image: linear-gradient(
      to bottom,
      #ebe6f8,
      #ece5f6,
      #ede4f5,
      #eee4f3,
      #efe3f1
    );
  `;

  const Cover = styled.img`
    width: 135px;
    height: 135px;
    border-radius: 5px;
    margin-right: 1rem;
  `;

  const Info = styled.div`
    margin-top: 1rem;
  `;

  const Title = styled.p`
    font-size: 1rem;
    font-weight: 600;
  `;

  const Author = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0.5rem;
  `;

  const Controls = styled.div`
    flex-basis: 100%;
    margin-top: 1.5rem;
  `;

  return (
    <Container>
      <Cover src={props.track.cover} alt="cover" />
      <Info>
        <Title>{props.track.title}</Title>
        <Author>{props.track.author}</Author>
      </Info>
      <Controls>
        <Audio url={props.track.url} />
      </Controls>
    </Container>
  );
}

Top.propTypes = {
  track: PropsTypes.object,
};
