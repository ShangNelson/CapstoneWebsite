import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, Modal, Text, TouchableWithoutFeedback } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// ImageModal Component
const ImageModal = ({ visible, onClose, imageSource }: { visible: boolean, onClose: () => void, imageSource?: any }) => {
  const [imageSize, setImageSize] = useState<{ width: number, height: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imageSource) {
      if (typeof imageSource === 'object' && imageSource.uri) {
        // Remote image
        Image.getSize(imageSource.uri, (width, height) => {
          const aspectRatio = width / height;
          const imageHeight = screenHeight * 0.9; // 90% of screen height
          const imageWidth = imageHeight * aspectRatio;
          setImageSize({ width: imageWidth, height: imageHeight });
          setLoading(false);
        }, (error) => {
          console.error("Error fetching image size:", error);
          setLoading(false);
        });
      } else {
        // Local image
        // Use default or known dimensions
        const localImageSize = { width: screenWidth * 0.9, height: screenWidth * 0.9 }; // Default size for local images
        setImageSize(localImageSize);
        setLoading(false);
      }
    }
  }, [imageSource]);

  if (!visible) {
    return null;
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {loading ? (
                <View style={styles.loadingContainer}>
                  <Text>Loading...</Text>
                </View>
              ) : (
                imageSource && imageSize && (
                  <Image
                    source={imageSource}
                    style={[styles.modalImage, { width: imageSize.width, height: imageSize.height }]}
                    resizeMode="contain"
                  />
                )
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dimmed background
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    borderRadius: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
});

export default ImageModal;
