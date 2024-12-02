import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

const { width } = Dimensions.get('window'); // Device width for responsive styles

type HomeScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

// Popup menu for the contact form
const PopupMenu = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission using emailjs
  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert('All fields are required.');
      return;
    }

    const templateParams = { user_name: name, user_email: email, message };

    emailjs
      .send('service_nxck3ab', 'template_9zk1vce', templateParams, 'uUiV-mAoy_Iul98tj')
      .then(() => {
        alert('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
  };

  // Trigger form submission and close the popup
  const submit = () => {
    handleSubmit();
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
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

// Main home screen component
export default function HomeScreen({ setIndex }: HomeScreenProps) {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pageContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image source={require('@/assets/images/bgLess.png')} style={styles.profileImage} />
          <Text style={styles.name}>Shang Nelson</Text>
          <Text style={styles.title}>Software Developer, Baker, Mathematics Major</Text>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.aboutText}>
            Heyo, my name is Shang Nelson, and I am a student of Weber State University. I work
            professionally as a baker and enjoy personal programming projects. I am currently a
            mathematics major and plan to attend graduate school at the University of Utah in Fall
            2026. My goal is to become a professor of mathematics.
          </Text>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Phone:</Text> 385-297-1979
          </Text>
          <Text style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Email:</Text> shangnelson6@gmail.com
          </Text>
          <TouchableOpacity style={styles.contactButton} onPress={() => setPopupVisible(true)}>
            <Text style={styles.contactButtonText}>Let's Connect</Text>
          </TouchableOpacity>
        </View>

        {/* Popup Menu */}
        <PopupMenu visible={popupVisible} onClose={() => setPopupVisible(false)} />
      </View>
    </ScrollView>
  );
}

// Centralized styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pageContainer: {
    width: '66%',
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    minWidth: 250,
    minHeight: 250,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#3c2a13',
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    color: '#3c2a13',
  },
  section: {
    marginBottom: 30,
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
  contactInfo: {
    fontSize: 16,
    color: '#3c2a13',
    marginBottom: 10,
  },
  contactLabel: {
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: '#FB8F67',
    paddingVertical: 15,
    borderRadius: 55,
    alignItems: 'center',
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3c2a13',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '40%',
    minWidth: 300,
    alignSelf: 'center',
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
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FB8F67',
    padding: 15,
    borderRadius: 55,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3c2a13',
  },
});
