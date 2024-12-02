import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure this library is installed

type DropdownProps = {
  title: string;
  uri: string;
};

export default function Dropdown({ title, uri }: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;

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
      {/* Header Button */}
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.dropdownTitle}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <Ionicons name="chevron-forward-outline" size={20} />
        </Animated.View>
      </TouchableOpacity>

      {isVisible && (
        <View style={styles.dropdownContent}>
          {/* Description Section */}
          <View>
            <iframe width="100%" height="500px" src={uri} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 20,
    width: '100%', // Ensures the dropdown spans the available width
  },
  dropdownHeader: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Centers the title and icon
    alignSelf: 'stretch', // Ensures the button stretches to the parent's width
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
    width: '100%',
  },
});
