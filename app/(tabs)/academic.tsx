import { View, Text, Image, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import Iframe from 'react-iframe';

import Dropdown from './dropdown';
const { width } = Dimensions.get('window');

type AcademicScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};


export default function AcademicScreen({setIndex}: AcademicScreenProps) {
    return (
      <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>Academic Works</Text>
      </View>

      <View style={styles.body}>  
        <Dropdown 
          title='Essay on Superheros'
          uri="https://docs.google.com/document/d/e/2PACX-1vTcaXJ1b84OaSIp2BAi3ep-CBnE1JVR2fmr3rOMcgaWZX13dtN1r5EXlzY8kJol6En5gQaF9-paZxQ3/pub?embedded=true"/>
        <Dropdown 
          title="Research Bibliography on Youth Sports" 
          uri="https://docs.google.com/document/d/e/2PACX-1vQZ5J8ZKVWyXK2hFEXDXMmtsLFMGdYcGrkWUU37dck35PaPNtoVyVPxMLH61qMHFpSXp2XVYegNAJu5/pub?embedded=true"/>
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
    fontSize: 48,
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    width: '66%',
    alignSelf: 'center',
    padding: 20,
    alignItems: 'flex-start',
  },
});