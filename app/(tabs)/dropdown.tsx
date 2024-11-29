import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextProps} from 'react-native';

type DropdownProps = {
  title: string;
  uri: string;
};


export default function Dropdown({ title, uri }: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.dropdown}>
      {/* Header Button */}
      <TouchableOpacity 
        style={styles.dropdownHeader} 
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.dropdownTitle}>{title}</Text>
      </TouchableOpacity>

      {isVisible && (
        <View style={styles.dropdownContent}>
          {/* Description Section */}
          <View>
              <iframe width="100%" height="500px" src={uri}></iframe>
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
    alignItems: 'center',
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
