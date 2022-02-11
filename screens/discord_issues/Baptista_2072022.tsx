import React, {useEffect, useRef} from 'react';

import {
  ViroARScene,
  ViroBox,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
// import {ViroRotation} from '@viro-community/react-viro/dist/components/Types/ViroUtils';

const EventsTestScene = () => {
  const ref = useRef<ViroBox>(null);
  // const rotationRef = useRef<ViroRotation>([0, 0, 0]);

  // useEffect(() => {
  //   const timeout = setInterval(() => {
  //     rotationRef.current = [0, 0, (rotationRef.current[2] + 45) % 360];
  //     ref.current?.setNativeProps({
  //       rotation: rotationRef.current,
  //     });
  //   }, 2000);

  //   return () => {
  //     clearInterval(timeout);
  //   };
  // }, []);

  const dragEvent = (e: any) => {
    // Triggered with no physicsBody
    console.log('Drag Event Triggered');
    console.log('Event info: ' + e);
  };

  const clickEvent = (e: any) => {
    // Triggered & works
    console.log('Click Event Triggered');
    console.log('Event info: ' + e);
  };

  const hoverEvent = (e: any) => {
    // Triggered & works
    console.log('Hover Event Triggered');
    console.log('Event info: ' + e);
  };

  const pinchEvent = (e: any) => {
    // should be working!
    // https://virocommunitycore.readme.io/docs/input-events#supported-controllers
    console.log('Pinch Event Triggered');
    console.log('Event info: ' + e);
  };

  const rotateEvent = (e: any) => {
    // should be working!
    // https://virocommunitycore.readme.io/docs/input-events#supported-controllers
    console.log('Rotate Event Triggered');
    console.log('Event info: ' + e);
  };

  const scrollEvent = (e: any) => {
    // Not supported for AR
    // https://virocommunitycore.readme.io/docs/input-events#supported-controllers
    console.log('Scroll Event Triggered');
    console.log('Event info: ' + e);
  };

  const swipeEvent = (e: any) => {
    // Not supported for AR
    // https://virocommunitycore.readme.io/docs/input-events#supported-controllers
    console.log('Swipe Event Triggered');
    console.log('Event info: ' + e);
  };

  const touchEvent = (e: any) => {
    // Not supported for AR
    // https://virocommunitycore.readme.io/docs/input-events#supported-controllers
    console.log('Touch Event Triggered');
    console.log('Event info: ' + e);
  };

  const collisionEvent = (...e: any) => {
    console.log('Collision Event Triggered');
    console.log('Event info: ' + e);
  };

  return (
    <ViroARScene>
      <ViroBox
        ref={ref}
        position={[0, 0, -2]}
        // dragType="FixedDistance"
        // physicsBody={{
        //   type: 'Dynamic',
        //   mass: 1,
        // }}
        onClick={clickEvent}
        onDrag={dragEvent}
        onHover={hoverEvent}
        onPinch={pinchEvent}
        onRotate={rotateEvent}
        onScroll={scrollEvent}
        onSwipe={swipeEvent}
        onTouch={touchEvent}
        onCollision={collisionEvent}
      />
      {/* Doesn't work: onDrag with physicsBody */}
      <ViroBox
        position={[-2, 0, -2]}
        physicsBody={{
          type: 'Kinematic',
          mass: 0,
        }}
        onDrag={dragEvent}
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
