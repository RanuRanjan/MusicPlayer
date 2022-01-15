import React from 'react';
import PropsTypes from 'prop-types';
import styled from 'styled-components';

export function Playlist(props) {
  const Container = styled.div`
    height: 260px;
    box-sizing: border-box;
    overflow: scroll;
  `;

  const Item = styled.div`
    width: 100%;
    height: 45px;
    cursor: pointer;
    color: #b2b2b2;
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    box-sizing: border-box;
  `;

  const Image = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
  `;

  const Descr = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    width: 100%;
    justify-content: center;
  `;

  const Title = styled.p`
    font-weight: bold;
    font-size: 0.8rem;
  `;

  const Author = styled.p`
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 300;
  `;

  return (
    <Container>
      {props.playlist.map(track => (
        <Item key={track.id} onClick={() => props.onChangeTrack(track.id)}>
          <Image src={track.cover} alt="cover" />
          <Descr>
            <Title>{track.title}</Title>
            <Author>{track.author}</Author>
          </Descr>
        </Item>
      ))}
    </Container>
  );
}

Playlist.PropsTypes = {
  playlist: PropsTypes.array,
  onChangeTrack: PropsTypes.func,
};
