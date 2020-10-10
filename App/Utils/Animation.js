import { UIManager, LayoutAnimation, Platform } from "react-native";

const CONFIG = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
  },
};
export const xyConfig = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    duration: 200,
    property: LayoutAnimation.Properties.scaleXY,
  },
};
export function enableAnimation() {
  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export function animate() {
  LayoutAnimation.configureNext(CONFIG);
}
export function customAnimate(config = xyConfig) {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
}
