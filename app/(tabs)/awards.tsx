import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import SectionItem from './recognitionImage';

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
            <SectionItem
              title='BYU Cyber Security CTF'
              details='Utah, Platinum League, 1st Place, November 2023' />
              <SectionItem
              title='MirAftabi Award'
              details='Awarded by the Mathematics department, Weber State University, April 2024'
              imageSource={require('@/assets/images/MirAftabi.png')}/>
              <SectionItem
              title='Roy & Elva Miller Memorial Scholarship'
              details='Awarded through Weber State University for academic excellence, May 2024' />
          </View>
          <View style={styles.awardItem}>
          </View>
        </View>

        {/* Certificates Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificates</Text>
          <View style={styles.certificateItem}>
            <SectionItem
            title='Architectural Design CTE'
            details='Utah Career and Technical Design: Decemember 2022' />
            <SectionItem
            title='Interior Design CTE'
            details='Utah Career and Technical Design: May 2022' />
            <SectionItem
            title='CRLA Level 1 Certified'
            details='CRLA Training completion level 1. May, 2024' />

          </View>
          <View style={styles.certificateItem}>

          </View>
        </View>

        {/* Additional Recognitions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Recognitions</Text>
          <View style={styles.recognitionItem}>
            <SectionItem
              title="Second Degree Black Belt"
              details='Awarded by Jeons World Martial Arts, October 2022'
              imageSource={require('@/assets/images/bgLess.png')}/>
          </View>
          <View style={styles.recognitionItem}>

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
    color: '#3c2a13',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignSelf: 'center',
    padding: 20,
    width: "66%",
    alignItems: 'flex-start',
  },
  section: {
    marginBottom: 30,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3c2a13',
  },
  awardItem: {
    marginBottom: 20,
  },
  awardTitle: {
    fontSize: 20,
    color: '#3c2a13',
    fontWeight: 'bold',
  },
  awardDetails: {
    fontSize: 16,
    color: '#3c2a13',
    lineHeight: 24,
  },
  certificateItem: {
    marginBottom: 20,
  },
  certificateTitle: {
    fontSize: 20,
    color: '#3c2a13',
    fontWeight: 'bold',
  },
  certificateDetails: {
    fontSize: 16,
    color: '#3c2a13',
    lineHeight: 24,
  },
  recognitionItem: {
    marginBottom: 20,
  },
  recognitionTitle: {
    fontSize: 20,
    color: '#3c2a13',
    fontWeight: 'bold',
  },
  recognitionDetails: {
    fontSize: 16,
    color: '#3c2a13',
    lineHeight: 24,
  },
});