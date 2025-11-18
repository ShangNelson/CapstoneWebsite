import { View, Text, Image, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import SectionItem from './recognitionImage';
import  PdfButton from './dropdownPDF';
import Dropdown from './dropdown';

const MCMFinal = require('@/assets/pdfs/MCM-Final.pdf')
const { width } = Dimensions.get('window');

type AcademicScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};


export default function AcademicScreen({setIndex}: AcademicScreenProps) {
    return (
      <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.name}>Mathematics Works</Text>
      </View>

      <View style={styles.bodyWorks}>  
        <PdfButton 
          title="Open MCM/ICM 2025 Final Paper"
          localPdf={MCMFinal}
        />
      </View>


      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>English Works</Text>
      </View>
      <View style={styles.bodyWorks}>  
        <Dropdown 
          title='Essay on Superheros'
          uri="https://docs.google.com/document/d/e/2PACX-1vTcaXJ1b84OaSIp2BAi3ep-CBnE1JVR2fmr3rOMcgaWZX13dtN1r5EXlzY8kJol6En5gQaF9-paZxQ3/pub?embedded=true"/>
        <Dropdown 
          title="Research Bibliography on Youth Sports" 
          uri="https://docs.google.com/document/d/e/2PACX-1vQZ5J8ZKVWyXK2hFEXDXMmtsLFMGdYcGrkWUU37dck35PaPNtoVyVPxMLH61qMHFpSXp2XVYegNAJu5/pub?embedded=true"/>
      </View>
    
      <View style={styles.header}>
        <Text style={styles.name}>Academic Acheivements</Text>
      </View>

      <View style={styles.bodyAcheivements}>  
        <SectionItem
          title='Student Grader'
          details='Graded student assignments, offering quality feedback, for an Ordinary Differential Equations class'
          style={styles.sectionItemStyle}/>
        <SectionItem
          title='Tutor'
          details='Helped students understand and relate with Mathematics and Computer Science. CRLA Master Certified.'
          style={styles.sectionItemStyle}/>
        <SectionItem
          title='Mathematics Club Secretary'
          details='Helped organize and encourage attendance to club meetings, as well as handling budgeting for the club.'
          style={styles.sectionItemStyle}/>
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Ensure no overflow
  },
  header: {
    alignItems: 'center',
    marginVertical: 10, // Reduced margin to minimize the gap
    paddingBottom: 15,
  },
  name: {
    fontSize: 50,
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  bodyWorks: {
    flex:1,
    width: "60%", // Adjust width to parent container
    alignSelf: 'center',
    minWidth: 380,
    alignItems: 'flex-start',
    marginBottom: 20, // Ensures separation from "Academic Achievements"
  },
  bodyAcheivements: {
    width: "60%",
    minWidth: 380,
    alignSelf: 'center',
    alignItems: 'center',
  },
  sectionItemStyle: {
    width: "100%",
    flex: 1,
    alignSelf: 'center',
  },
});
