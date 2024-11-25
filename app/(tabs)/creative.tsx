import { View, Text, Image, ScrollView, StyleSheet, Dimensions, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

type CreativeScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};


export default function CreativeScreen({setIndex}: CreativeScreenProps) {
    return (
      <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>Creative Works</Text>
      </View>

      <View style={styles.body}>
        {/* Awards Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Github</Text>
          <View style={{marginBottom:20,}}>
            <View style={styles.itemContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>View my Github!</Text>
                <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/Charlotta-16")} style={styles.buttonContainer}>LINK!</TouchableOpacity>
              </View>
            </View>
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
  name: {
    fontSize: 48,
    color: '#3c2a13',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    width: '66%',
    alignSelf: 'center',
    padding: 20,
    alignItems: 'flex-start',
  },
  section: {
    marginBottom: 30,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 40,
    color: '#3c2a13',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  itemContainer: {
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFE6E6',
    color: '#3c2a13',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  
  buttonContainer: {
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#',
    color: '#3c2a13',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    color: '#3c2a13',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 16,
    color: '#3c2a13',
    lineHeight: 24,
  },
});