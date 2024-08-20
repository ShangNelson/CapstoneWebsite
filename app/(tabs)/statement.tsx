import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

type StatementScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function StatementScreen({ setIndex }: StatementScreenProps) {

  return (
    <ScrollView style={styles.container}>

      <View style={styles.body}>
        {/* About Me Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Statement</Text>
          <Text style={styles.aboutText}>Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar est justo semper magnis ultrices. Suscipit nascetur nisi penatibus sem a sapien convallis. Laoreet nec amet iaculis vitae nullam vehicula. Erat nascetur sapien quisque aliquam, habitant aenean quisque aliquam facilisis. Dis bibendum pretium feugiat porttitor, curae senectus nullam molestie tristique. Facilisis himenaeos vestibulum porta vel elementum ullamcorper erat scelerisque. Efficitur quisque curabitur ad laoreet nec felis. {"\n"}{"\n"}
Felis integer laoreet dictum cursus tortor quis sem potenti. Aliquam urna proin quam massa lectus ad lacinia. Eros justo malesuada consequat dictum, etiam fermentum erat vivamus. Tempor aenean accumsan laoreet fringilla cubilia consectetur rutrum auctor lacinia. Enim habitant elit congue nec faucibus consequat ad. Tincidunt himenaeos tincidunt ridiculus rhoncus pulvinar.{"\n"}{"\n"}
Eu consequat aliquam vitae netus suscipit litora felis est. Lectus nostra habitasse taciti lobortis; cras mi etiam. Primis integer tincidunt faucibus donec ornare. Amet praesent eu dapibus dapibus mollis finibus finibus. Eleifend augue blandit eros dis vestibulum tincidunt conubia. Nunc praesent tempor nullam fermentum scelerisque. Nostra inceptos dignissim sapien tristique varius nostra id vivamus felis. Neque ante augue euismod phasellus; proin volutpat auctor parturient.{"\n"}{"\n"}
Dictum bibendum egestas tempus posuere suscipit id. Semper libero rutrum molestie; vehicula donec feugiat ultricies. Netus magnis vitae vehicula, viverra massa et semper. Lacinia facilisi enim vulputate iaculis urna. Id blandit volutpat sollicitudin conubia dictum nulla iaculis tellus finibus. Sociosqu metus ultrices aliquet nullam, fringilla mus adipiscing imperdiet. Ornare feugiat efficitur at sed duis nullam maximus fringilla. Duis cras ullamcorper maximus augue euismod sem proin primis.{"\n"}{"\n"}
Libero pulvinar habitasse laoreet ligula pharetra montes cursus dis id. Consequat blandit imperdiet aliquet torquent netus tellus. Vitae pulvinar phasellus conubia lacus cubilia aliquet vehicula placerat phasellus. Duis commodo ullamcorper hac elit cursus ut consequat inceptos mi. Venenatis quam purus id sodales adipiscing aliquet nec. Lacinia magna feugiat turpis turpis sollicitudin bibendum est nunc. Sem faucibus ultrices aliquam sodales magna class posuere porta dapibus.{"\n"}{"\n"}
Efficitur phasellus vehicula, facilisis tincidunt ut nisl at praesent. Litora fermentum ex felis conubia nam. Hendrerit ante magnis senectus, interdum sit dis maecenas viverra. Ultrices leo quis, molestie nostra class sodales nec. Facilisi placerat lacus himenaeos a in varius. Auctor magna felis commodo aptent ut nascetur metus. Lectus auctor mi nibh sodales risus felis et nunc. Scelerisque aenean fringilla viverra; pharetra egestas gravida augue. Dapibus vel augue pulvinar varius libero interdum tortor odio tempus.{"\n"}{"\n"}
Libero molestie taciti platea eros vitae dictumst amet. Odio viverra faucibus taciti pellentesque vestibulum aptent eget. Elit posuere ultrices arcu mollis amet inceptos dignissim. Ex convallis dolor aptent integer nullam primis luctus. Suscipit curabitur habitasse nunc efficitur sollicitudin ex morbi. Cras litora maecenas vestibulum quam varius vitae taciti magnis. Ante sapien ante convallis non sollicitudin natoque vehicula tempus. Pretium platea consectetur venenatis cras varius vehicula nullam. Dictum maximus risus arcu ac sit urna viverra. Nunc sapien rutrum eleifend; urna nisi mus.{"\n"}{"\n"}
Maecenas torquent pretium nullam tortor, leo molestie inceptos condimentum. Cubilia dis ridiculus blandit habitant finibus erat vulputate malesuada. Luctus sociosqu habitasse ornare velit placerat arcu. Lectus donec odio dis vulputate duis pellentesque in. Litora facilisi tempus egestas justo venenatis. Bibendum ultrices amet eleifend venenatis dis pulvinar. Volutpat aliquet efficitur dolor fermentum dapibus. Atempor donec euismod facilisi dapibus felis.{"\n"}{"\n"}
Posuere vel cubilia sem tellus molestie scelerisque. Gravida interdum rhoncus fames nec nunc. Sociosqu nunc venenatis fusce, convallis felis dignissim mattis nibh. Erat ullamcorper nunc nascetur at euismod pellentesque parturient pharetra. Scelerisque litora viverra tempus, aenean in lacinia tristique nunc. Lectus cubilia arcu potenti tempor ante ut conubia ut amet. Mus blandit placerat potenti adipiscing dictumst egestas eget lorem nunc.{"\n"}{"\n"}
Tincidunt metus tortor dapibus vel nec nec magnis odio hac. Bibendum nulla porta potenti convallis at. Curabitur neque consequat velit eros facilisi. Est tortor inceptos sit faucibus; mus faucibus eu vestibulum. Purus felis eleifend tempus praesent quis sed maecenas vestibulum. Imperdiet tempus lacus nec senectus at ornare dis ex.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    flex: 1,
    width: '66%', // Take up the full width
    alignSelf: 'center',
    padding: 20, // Increased padding for spacing
    alignItems: 'flex-start', // Align content to the left
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25,
  },
  section: {
    marginBottom: 30,
    width: '100%', // Ensure sections take full width
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
