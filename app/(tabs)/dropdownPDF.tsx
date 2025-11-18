import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';

type PdfDropdownProps = {
  title: string;
  localPdf: any; // imported PDF asset
};

export default function PdfDropdown({ title, localPdf }: PdfDropdownProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [pdfUri, setPdfUri] = useState<string | null>(null);

  const rotateValue = useRef(new Animated.Value(0)).current;

  // Load asset when component mounts
  useEffect(() => {
    async function loadPdf() {
      const asset = Asset.fromModule(localPdf);
      await asset.downloadAsync();   // ensures file exists on device
      setPdfUri(asset.localUri!);
    }
    loadPdf();
  }, []);

  const toggleDropdown = () => {
    Animated.timing(rotateValue, {
      toValue: isVisible ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setIsVisible(!isVisible);
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View style={styles.dropdown}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.dropdownTitle}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <Ionicons name="chevron-forward-outline" size={20} />
        </Animated.View>
      </TouchableOpacity>

      {isVisible && pdfUri && (
        <View style={styles.dropdownContent}>
          <WebView
            originWhitelist={['*']}
            source={{ uri: pdfUri }}   // LOCAL PDF loaded here!
            style={{ width: '100%', height: 600 }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: { marginBottom: 20, width: '100%' },
  dropdownHeader: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownTitle: {
    fontSize: 20,
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  dropdownContent: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
});
