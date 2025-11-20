import { View, Text, Image, ScrollView, StyleSheet, Dimensions, } from 'react-native';
import SectionItem from './recognitionImage';
import  PdfButton from './dropdownPDF';
import Dropdown from './dropdown';

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
          pdfPath={'/pdfs/MCM-Final.pdf'}
        />
        <PdfButton
          title="Open SCUDEM X 2025 Final Presentation"
          pdfPath={'/pdfs/SCUDEM.pdf'} />
      </View>


      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>English Works</Text>
      </View>
      <View style={styles.bodyWorks}>  
        <PdfButton 
          title='Essay on Superheros'
          pdfPath={'/pdfs/Research Paper 1.pdf'} />  
        <PdfButton 
          title="Research Bibliography on Youth Sports" 
          pdfPath={'/pdfs/Research Paper 2.pdf'} />
      </View>
    
      <View style={styles.header}>
        <Text style={styles.name}>Academic Acheivements</Text>
      </View>

      <View style={styles.bodyAcheivements}>
        <SectionItem
          title='Mathematics Club President -- 2025-2026'
          details='Organized outreach to students accross campus through stands setup at events. Handled budget and funding.'
          style={styles.sectionItemStyle}/>
        <SectionItem
          title='Mathematics Club Secretary -- 2024-2025'
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
    width: "60%",            // keeps them narrower than full width
    minWidth: 380,
    alignSelf: 'center',     // centers the container itself
    alignItems: 'center',    // centers children (buttons) horizontally
    marginBottom: 20,
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
  button: {
    backgroundColor: "#3c2a13",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    margin: 8,               // adds space between buttons
  },
});
