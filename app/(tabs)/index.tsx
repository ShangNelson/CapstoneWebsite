import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback, TextInput, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');

type HomeScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const PopupMenu = ({ visible, onClose }: { visible: boolean, onClose: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear the fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  const submit = () => {
    handleSubmit();
    onClose();
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.popupContainer}>
              <Text style={styles.popupTitle}>Connect with me!</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Your Email Address"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Message"
                multiline
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.submitButton} onPress={submit}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};


export default function HomeScreen({ setIndex }: HomeScreenProps) {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleButtonPress = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };


  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('@/assets/images/moroccan_flower.png')}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image source={require('@/assets/images/bgLess.png')} style={styles.profileImage} />
          <Text style={styles.name}>Shang Nelson</Text>
          <Text style={styles.title}>Software Developer, Baker, Mathematics Major</Text>
          {/* Add Social Media Icons Here */}
        </View>

        <View style={styles.body}>
          {/* About Me Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.aboutText}>Heyo, my name is Shang Nelson, and I am a student of Weber State University and NUAMES. I work professionally as a baker and I enjoy spending my free time working on personal programming projects, expanding my skills and refining old ones. I am currently a mathematics major at Weber State, and will attend graduate school at the University of Utah in Fall of 2026. I hope to become a professor in mathematics. </Text>
          </View>

          {/* Contact Section */}
          <View style={styles.section}>
            <Button title="Let's Connect" onPress={handleButtonPress} />
            <Text style={styles.subText}>Email: shangnelson6@gmail.com</Text>
            <Text style={styles.subText}>Phone: 385-297-1979</Text>
          </View>
        </View>

        {/* Popup Menu */}
        <PopupMenu visible={popupVisible} onClose={handleClosePopup} />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: '#3c2a13',
    fontSize: 48,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#3c2a13',
  },
  body: {
    flex: 1,
    width: '50%', // Take up the full width
    alignSelf: 'center',
    padding: 20, // Increased padding for spacing
    alignItems: 'flex-start', // Align content to the left
    borderColor: 'black',
  },
  section: {
    marginBottom: 30,
    width: '100%', // Ensure sections take full width
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3c2a13',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: '#3c2a13',
    lineHeight: 24,
  },
  popupContainer: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    right: '10%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 50,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3c2a13',
  },
  popupTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: '#3c2a13',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: '#3c2a13',
  },
});
