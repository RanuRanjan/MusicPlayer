import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {
  ic_play_arrow,
  ic_pause,
  ic_stop,
  ic_skip_next,
  ic_skip_previous,
} from 'react-icons-kit/md/';

import { ProgressBar } from './ProgressBar';
import { PlaylistContext } from '../../store/playlist';

const getSecondsToMinutesAndSeconds = time => {
  if (time === 0) {
    return '0 : 00';
  }
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes} : 0${seconds}`;
};

const iconStyles = {
  cursor: 'pointer',
  color: '#472F90',
};

export function Audio(props) {
  let audioPlayer;

  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
  const [currentTrackMoment, setCurrentTrackMoment] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState('0');
  const [isPlaying, setIsPlaying] = useState(false);

  const Counter = styled.p`
    font-size: 0.65rem;
    margin: 0 1rem;
    color: #472f90;
  `;

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const initPlayer = () => {
    audioPlayer = document.getElementById('audioPlayer');
  };

  const handleStop = () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0.0;
    setIsPlaying(false);
    setCurrentTrackMoment(0);
  };

  const handlePlay = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

  const handleMetadata = () => {
    const duration = Math.floor(audioPlayer.duration);
    setCurrentTrackDuration(getSecondsToMinutesAndSeconds(duration));
  };

  const handleTimeupdate = playNext => {
    setCurrentTrackMoment(Math.floor(audioPlayer.currentTime));
    setProgressBarWidth(
      Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%'
    );
    if (audioPlayer.currentTime === audioPlayer.duration) {
      playNext();
    }
  };

  useEffect(
    () => {
      setCurrentTrackDuration(0);
      setCurrentTrackMoment(0);
      setProgressBarWidth('0');
      handlePlay();
    },
    [props.url]
  );

  useLayoutEffect(() => {
    initPlayer();
  });

  return (
    <PlaylistContext.Consumer>
      {value => (
        <div key={props.url}>
          <audio
            id="audioPlayer"
            preload="metadata"
            onLoadedMetadata={handleMetadata}
            onTimeUpdate={() => handleTimeupdate(value.handleNextTrack)}
          >
            <source src={props.url} type="audio/ogg" />
            Ooops, your browser is sooo old.
          </audio>
          <Container>
            <Icon
              style={iconStyles}
              icon={ic_skip_previous}
              onClick={value.handlePrevTrack}
              size={30}
            />
            <Icon
              style={iconStyles}
              icon={isPlaying ? ic_pause : ic_play_arrow}
              onClick={handlePlay}
              size={30}
            />
            <Icon
              size={30}
              style={iconStyles}
              icon={ic_stop}
              onClick={handleStop}
            />
            <Icon
              style={iconStyles}
              icon={ic_skip_next}
              onClick={value.handleNextTrack}
              size={30}
            />
            <Counter>
              {getSecondsToMinutesAndSeconds(currentTrackMoment)}
            </Counter>
            <ProgressBar progressPercent={progressBarWidth} width={'200px'} />
            <Counter>{currentTrackDuration || '0 : 00'}</Counter>
          </Container>
        </div>
      )}
    </PlaylistContext.Consumer>
  );
}
