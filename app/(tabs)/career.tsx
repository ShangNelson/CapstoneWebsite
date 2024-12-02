import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import SectionItem from './recognitionImage';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

type AwardScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const softSkills = () => {

};
export default function AwardScreen({setIndex}: AwardScreenProps) {
    return (
      <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>Career</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work History</Text>
          <View style={styles.sectionItems}>
            <SectionItem
              title='Parsons Bakery, Utah'
              details='Feburary 2022 - CURRENT' />
            <SectionItem
              title='Davis Learning Center, Weber State University'
              details='January 2024 - CURRENT' />
            <SectionItem
              title='Jeons World Martial Arts, Utah'
              details='July 2024 - CURRENT' />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soft Skills</Text>
          <FlatList style={[styles.sectionItems, {marginHorizontal: 15,}]} data={[
            {key: "Logical Thinking"},
            {key: "Effective Communication"},
            {key: "Time Management"},
            {key: "Fast Learner"},
            {key: "Active Listener"},
            
          ]} renderItem={({item}) => <Text style={{flex: 1, fontSize: 22, fontWeight: '500',padding:4,color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',}}>{item.key}</Text>}/>
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
  name: {
    marginTop: 15,
    fontSize: 50,
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    width: "60%",
    minWidth: 400,
    alignSelf: 'center',
    padding: 20,
    alignItems: 'flex-start',
  },
  section: {
    marginBottom: 30,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 38,
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    marginBottom: 10,
  },
  sectionItems: {
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 20,
  },
});