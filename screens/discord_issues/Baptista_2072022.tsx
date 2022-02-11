import React from 'react';

import {
  ViroARScene,
  ViroBox,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const EventsTestScene = () => {
  const dragEvent = (e: any) => {
    console.log('Drag Event Triggered');
    console.log('Event info: ' + e);
  };

  const clickEvent = (e: any) => {
    console.log('Click Event Triggered');
    console.log('Event info: ' + e);
  };

  const hoverEvent = (e: any) => {
    console.log('Hover Event Triggered');
    console.log('Event info: ' + e);
  };

  const pinchEvent = (e: any) => {
    console.log('Pinch Event Triggered');
    console.log('Event info: ' + e);
  };

  const rotateEvent = (e: any) => {
    console.log('Rotate Event Triggered');
    console.log('Event info: ' + e);
  };

  const scrollEvent = (e: any) => {
    console.log('Scroll Event Triggered');
    console.log('Event info: ' + e);
  };

  const swipeEvent = (e: any) => {
    console.log('Swipe Event Triggered');
    console.log('Event info: ' + e);
  };

  const touchEvent = (e: any) => {
    console.log('Touch Event Triggered');
    console.log('Event info: ' + e);
  };

  return (
    <ViroARScene>
      <ViroBox
        position={[0, 0, -2]}
        onClick={clickEvent}
        onDrag={dragEvent}
        onHover={hoverEvent}
        onPinch={pinchEvent}
        onRotate={rotateEvent}
        onScroll={scrollEvent}
        onSwipe={swipeEvent}
        onTouch={touchEvent}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: EventsTestScene,
      }}
    />
  );
};
