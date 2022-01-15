import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function ProgressBar(props) {
  const Container = styled.div`
    position: relative;
    height: 4px;
    width: calc(${props.width || '100%'} - 15px);
    background-color: #c9bbdc;
    border-radius: 5px;
  `;

  const Point = styled.div`
    position: absolute;
    left: ${props.progressPercent};
    top: 50%;
    transform: translate(-50%, -50%);
    bottom: 10px;
    height: 8px;
    width: 8px;
    background-color: #7364a9;
    border-radius: 50%;
  `;
  const Progress = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 10px;
    height: inherit;
    width: ${props.progressPercent};
    background-color: #7364a9;
    border-radius: 5px;
  `;

  return (
    <Container>
      <Point />
      <Progress />
    </Container>
  );
}

ProgressBar.propTypes = {
  progressPercent: PropTypes.string,
  width: PropTypes.string,
};
