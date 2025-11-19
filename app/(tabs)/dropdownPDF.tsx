import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import * as Linking from "expo-linking";

type Props = {
  title: string;
  pdfPath: string | any; // string path for web, require() asset for native
};

export default function PdfButton({ title, pdfPath }: Props) {
  const handlePress = () => {
    let pdfUri: string;

    if (Platform.OS === "web") {
      // Web: direct URL to PDF in public folder
      pdfUri = typeof pdfPath === "string" ? pdfPath : pdfPath.default;
      if (!pdfUri) return;
      window.open(pdfUri, "_blank"); // open PDF in a new tab
    } else {
      // Native: open PDF in system viewer
      pdfUri = pdfPath.localUri ?? pdfPath.uri ?? pdfPath;
      Linking.openURL(pdfUri);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3c2a13",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
