import { Platform, StyleSheet } from "react-native";
import { COLORS } from "@app";

const styles = StyleSheet.create({
    container: (bg =' COLORS.white', insets, insetsBottom) => ({
      flex: 1,
      backgroundColor: bg,
      paddingBottom: insetsBottom
        ? Platform.OS === 'ios'
          ? insets.bottom
          : 0
        : 0,
    }),
    tostWrap: {
      position: 'absolute',
      bottom: 15,
      left: 0,
      right: 0,
    },
  });

  export default styles