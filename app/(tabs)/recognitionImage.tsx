import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import ImageModal from './imageModal'; // Adjust the import path as needed

const { width } = Dimensions.get('window');

const RecognitionItem = ({ title, details, imageSource }: { title: string, details: string, imageSource?: any }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDetails}>{details}</Text>
      </View>
      {imageSource && (
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={imageSource} style={styles.itemImage} />
        </TouchableOpacity>
      )}

      {/* Image Modal */}
      <ImageModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        imageSource={imageSource}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: width * 0.1, // Adjust width as needed
    height: width * 0.1, // Adjust height as needed
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default RecognitionItem;
