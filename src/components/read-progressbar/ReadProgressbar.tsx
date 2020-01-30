import styled from 'styled-components';
import React, { useEffect, RefObject, useState } from 'react';

interface ReadProgessBarProps {
  backgroundColor?: string;
  color?: string;
  attachTo: RefObject<any>;
}

const ContainerBackground = 'gray';
const ProgressBackground = '#ee5253';

const ReadProgressBarContainer = styled.div<any>`
  display: flex;
  top: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  width: 100%;
  transition: height 0.3s ease;
  z-index: 9999;
  height: ${props => (props.hide ? '0px' : '10px')};
  background: ${props => props.color || ContainerBackground};
  overflow: hidden;
`;
const Bar = styled.div<{ color?: string }>`
  position: relative;
  left: 0px;
  background: ${props => props.color || ProgressBackground};
  top: 0px;
  bottom: 0px;
  width: 100%;
  transform: translateX(-100%);
  transition: transform 0.1s ease;
  will-change: transform;
`;

const ReadProgressBar: React.FC<ReadProgessBarProps> = props => {
  const [progress, setProgress] = useState(0);

  const trackScrollEvent = () => {
    const { top, height } = props.attachTo.current.getBoundingClientRect();
    const progress = (top / (height - window.innerHeight)) * 100;
    const translateValue = progress < -100 ? 0 : -100 - progress;
    setProgress(translateValue < -100 ? -100 : top > 0 ? 0 : translateValue);
  };
  useEffect(() => {
    if (props.attachTo && props.attachTo.current && props.attachTo.current.getBoundingClientRect()) {
      window.addEventListener('scroll', trackScrollEvent);
    }
    return () => {
      window.removeEventListener('scroll', trackScrollEvent);
    };
  }, [props.attachTo]);

  return (
    <ReadProgressBarContainer color={props.backgroundColor} hide={progress === -100 || progress === 0}>
      <Bar color={props.color} style={{ transform: `translateX(${progress}%)` }} />
    </ReadProgressBarContainer>
  );
};

export default ReadProgressBar;
