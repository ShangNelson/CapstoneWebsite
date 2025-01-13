import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import ImageModal from './imageModal'; // Adjust the import path as needed

const { width } = Dimensions.get('window');

const SectionItem = ({ title, details, imageSource, style }: { title: string, details: string, imageSource?: any, style?: object }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={[styles.itemContainer, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDetails}>
          {details.split("\\n").map((line, index) => (
            <Text key={index}>
              {line}
              {index < details.split('\\n').length - 1 && '\n'}
            </Text>
          ))}
        </Text>      </View>
      {imageSource && (
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={imageSource} style={styles.itemImage} />
        </TouchableOpacity>
      )}

      {/* Image Modal */}
      <ImageModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        imageSource={imageSource}/>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemImage: {
    width: width * 0.1, // Adjust width as needed
    height: width * 0.1, // Adjust height as needed
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    padding: 15,
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular.ttf',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular.ttf',
  },
});

export default SectionItem;
