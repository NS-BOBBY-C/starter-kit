import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroConstants,
  ViroText,
} from '@viro-community/react-viro';
import React from 'react';
import {StyleSheet} from 'react-native';

const HelloWorldSceneAR = () => {
  const onInitialized = (state, reason) => {
    console.log('onInitialized', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      console.log('tracking initialized');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroAmbientLight color="#ffffff" />
      <ViroText
        text={'Hello World!'}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <Viro3DObject
        scale={[0.1, 0.1, 0.1]}
        position={[0, 0, -2]}
        source={require('../../assets/LibertyStatue/LibertyStatue.obj')}
        resources={[
          require('../../assets/LibertyStatue/LibertyStatue.mtl'),
          require('../../assets/LibertyStatue/Liberty-DecorazioniMarmo-2.bmp'),
          require('../../assets/LibertyStatue/Liberty-GreenBronze-1.bmp'),
          require('../../assets/LibertyStatue/Liberty-MattoniBasamento-1.bmp'),
          require('../../assets/LibertyStatue/Liberty-Pavimentazione-1.bmp'),
          require('../../assets/LibertyStatue/Liberty-PortaBronzo-1.bmp'),
        ]}
        type="OBJ"
      />

      <ViroAmbientLight />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
