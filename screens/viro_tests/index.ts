/* PLOP APPEND 1 START */
import Viro360Image from './Viro360Image';
import Viro360Video from './Viro360Video';
import Viro3DObject from './Viro3DObject';
import ViroAmbientLight from './ViroAmbientLight';
import ViroAnimatedImage from './ViroAnimatedImage';
import ViroARImageMarker from './ViroARImageMarker';
// import ViroARObjectMarker from './ViroARObjectMarker';
import ViroARPlane from './ViroARPlane';
import ViroARPlaneSelector from './ViroARPlaneSelector';
import ViroBox from './ViroBox';
import ViroButton from './ViroButton';
import ViroController from './ViroController';
import ViroDirectionalLight from './ViroDirectionalLight';
import ViroFlexView from './ViroFlexView';
import ViroGeometry from './ViroGeometry';
import ViroImage from './ViroImage';
import ViroLightingEnvironment from './ViroLightingEnvironment';
import ViroMaterials from './ViroMaterials';
import ViroMaterialVideo from './ViroMaterialVideo';
import ViroOmniLight from './ViroOmniLight';
import ViroOrbitCamera from './ViroOrbitCamera';
import ViroParticleEmitter from './ViroParticleEmitter';
import ViroPolygon from './ViroPolygon';
import ViroPolyline from './ViroPolyline';
import ViroPortal from './ViroPortal';
import ViroQuad from './ViroQuad';
import ViroSkyBox from './ViroSkyBox';
import ViroSound from './ViroSound';
import ViroSoundField from './ViroSoundField';
import ViroSpatialSound from './ViroSpatialSound';
import ViroSphere from './ViroSphere';
import ViroSpinner from './ViroSpinner';
import ViroSpotLight from './ViroSpotLight';
import ViroText from './ViroText';
import ViroVideo from './ViroVideo';

export const VIRO_TESTS = [
  /* PLOP APPEND 2 START */
  'Viro360Image',
  'Viro360Video',
  'Viro3DObject',
  'ViroAnimatedImage',
  // Is this not working due to GVR removed? what should this look like?
  'ViroAmbientLight',
  'ViroARImageMarker',
  // TODO: Couldn't get a good scan of an object marker to work with AR Scanner
  // https://developer.apple.com/documentation/arkit/content_anchors/scanning_and_detecting_3d_objects?preferredLanguage=occ
  // 'ViroARObjectMarker',
  'ViroARPlane',
  'ViroARPlaneSelector',
  'ViroBox',
  'ViroButton',
  // TODO: Need VR camera to test this
  'ViroController',
  // TODO: Need VR camera to test this
  'ViroDirectionalLight',
  'ViroFlexView',
  'ViroGeometry',
  'ViroLightingEnvironment',
  'ViroImage',
  // TODO: Viro materials doesn't seem to be working.
  // The current lead is that metro is not resolving an asset embedded in the material.
  // I think what is happening is the asset resolver for the .obj files is using the
  // absolute path on my computer, and not the resolved path in the bundle.
  'ViroMaterials',
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  'ViroMaterialVideo',
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  'ViroOmniLight',
  'ViroOrbitCamera',
  'ViroParticleEmitter',
  'ViroPolygon',
  'ViroPolyline',
  'ViroPortal',
  'ViroQuad',
  'ViroSkyBox',
  // TODO: Sound doesn't seem to be working.
  'ViroSound',
  // TODO: Crash with Unrecognized selector sent to instance
  'ViroSoundField',
  // TODO: Crash with Unrecognized selector sent to instance
  'ViroSpatialSound',
  'ViroSphere',
  'ViroSpinner',
  // TODO: Didn't see anything, but didn't crash. Might need VR to test this.
  'ViroSpotLight',
  'ViroText',
  // TODO: Crash with Unrecognized selector sent to instance
  'ViroVideo',
];

export const VIRO_EXAMPLES: any = {
  /* PLOP APPEND 3 START */
  Viro360Image: Viro360Image,
  Viro360Video: Viro360Video,
  Viro3DObject: Viro3DObject,
  ViroAnimatedImage: ViroAnimatedImage,
  ViroAmbientLight: ViroAmbientLight,
  ViroARImageMarker: ViroARImageMarker,
  // ViroARObjectMarker: ViroARObjectMarker,
  ViroARPlane: ViroARPlane,
  ViroARPlaneSelector: ViroARPlaneSelector,
  ViroBox: ViroBox,
  ViroButton: ViroButton,
  ViroController: ViroController,
  ViroDirectionalLight: ViroDirectionalLight,
  ViroFlexView: ViroFlexView,
  ViroGeometry: ViroGeometry,
  ViroLightingEnvironment: ViroLightingEnvironment,
  ViroImage: ViroImage,
  ViroMaterials: ViroMaterials,
  ViroMaterialVideo: ViroMaterialVideo,
  ViroOmniLight: ViroOmniLight,
  ViroOrbitCamera: ViroOrbitCamera,
  ViroParticleEmitter: ViroParticleEmitter,
  ViroPolygon: ViroPolygon,
  ViroPolyline: ViroPolyline,
  ViroPortal: ViroPortal,
  ViroQuad: ViroQuad,
  ViroSkyBox: ViroSkyBox,
  ViroSound: ViroSound,
  ViroSoundField: ViroSoundField,
  ViroSpatialSound: ViroSpatialSound,
  ViroSphere: ViroSphere,
  ViroSpinner: ViroSpinner,
  ViroSpotLight: ViroSpotLight,
  ViroText: ViroText,
  ViroVideo: ViroVideo,
};
