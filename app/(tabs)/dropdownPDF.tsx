import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import * as Linking from "expo-linking";

type Props = {
  title: string;
  localPdf: any; // require() asset
};

export default function PdfButton({ title, localPdf }: Props) {
  const handlePress = () => {
    if (Platform.OS === "web") {
      // Web: use localPdf.default if it exists
      const pdfUri = typeof localPdf === "string" ? localPdf : localPdf.default;
      if (!pdfUri) return;

      const link = document.createElement("a");
      link.href = pdfUri;
      link.download = pdfUri.split("/").pop() || "document.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // iOS / Android: open PDF in default viewer
      const pdfUri = localPdf.localUri ?? localPdf.uri ?? localPdf;
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
