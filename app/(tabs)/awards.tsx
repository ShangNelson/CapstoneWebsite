import ParallaxScrollView from '@/components/ParallaxScrollView';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import RecognitionItem from './recognitionImage';

const { width } = Dimensions.get('window');

type AwardScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};


export default function AwardScreen({setIndex}: AwardScreenProps) {
    return (
      <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>Awards & Recognitions</Text>
      </View>

      <View style={styles.body}>
        {/* Awards Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Awards</Text>
          <View style={styles.awardItem}>
            <RecognitionItem
              title="Second Degree Black Belt"
              details='Awarded by Jeons World Martial Arts, October 2022'
              imageSource={require('@/assets/images/bgLess.png')}/>
          </View>
          <View style={styles.awardItem}>
            <RecognitionItem
            title='MirAftabi Award'
            details='Awarded by the Mathematics department, Weber State University, April 2024'
            imageSource={require('@/assets/images/MirAftabi.png')}/>
          </View>
        </View>

        {/* Certificates Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificates</Text>
          <View style={styles.certificateItem}>
            <Text style={styles.certificateTitle}>Certified Full Stack Developer</Text>
            <Text style={styles.certificateDetails}>Completed comprehensive training on Full Stack Development, 2023.</Text>
          </View>
          <View style={styles.certificateItem}>
            <Text style={styles.certificateTitle}>Advanced Mathematics Certification</Text>
            <Text style={styles.certificateDetails}>Specialized certification in Advanced Mathematics, 2022.</Text>
          </View>
        </View>

        {/* Additional Recognitions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Recognitions</Text>
          <View style={styles.recognitionItem}>
            <Text style={styles.recognitionTitle}>Volunteer of the Year</Text>
            <Text style={styles.recognitionDetails}>Recognized for exceptional volunteer service, 2023.</Text>
          </View>
          <View style={styles.recognitionItem}>
            <Text style={styles.recognitionTitle}>Community Leadership Award</Text>
            <Text style={styles.recognitionDetails}>Awarded for leadership and contributions to the community, 2022.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    )
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
    fontSize: 48,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    alignItems: 'flex-start',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25,
  },
  section: {
    marginBottom: 30,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  awardItem: {
    marginBottom: 20,
  },
  awardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  awardDetails: {
    fontSize: 16,
    lineHeight: 24,
  },
  certificateItem: {
    marginBottom: 20,
  },
  certificateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  certificateDetails: {
    fontSize: 16,
    lineHeight: 24,
  },
  recognitionItem: {
    marginBottom: 20,
  },
  recognitionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  recognitionDetails: {
    fontSize: 16,
    lineHeight: 24,
  },
});