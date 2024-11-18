import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

type StatementScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function StatementScreen({ setIndex }: StatementScreenProps) {

  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>

<Text style={styles.sectionTitle}>My Statement</Text>
      <View style={styles.body}>
        {/* About Me Section */}
        <View style={styles.section}>
          <Text style={styles.aboutText}>Martial arts has changed my life. In my elementary school, every Valentine's day, we would make custom boxes that encompassed our hobbies and interests, and everyone would go around and give little candies, notes or gifts in each box. At the end, we could go through our boxes and see what we had.{"\n"}{"\n"}
            When I was 8, in the third grade, I had a friend handing out invitations to a local Taekwondo studio. Of course, as any eight-year-old would, I thought anything martial arts related would be the coolest thing in the world, as though an opening to adventure. So I asked my mother to let me go, and she agreed reluctantly.{"\n"}{"\n"}
            This led me to try something new, and I have spent the last 9 years learning, practicing, and improving my skills, not only in Taekwondo, but also my life, changing what I value and the beliefs I have. Through Taekwondo, I have learned many life skills and developed habits that help me everyday. Some of the most important habits and behaviors I learned from Taekwondo, including respect, perseverance, and appreciation.{"\n"}{"\n"}
            Taekwondo taught me how to be respectful to others. Through discipline and time, I learned to respect people, especially those younger, less experienced, or different from me in some way. Respect to me isn’t just being nice and polite, but it is about understanding others, and giving them the time and effort that they deserve as another person.{"\n"}{"\n"}
            Taekwondo taught me perseverance and growth. Even when I wanted to quit, which happened on more than one occasion, I kept going, and am better, happier, and glad that I did. I learned to try new things at every opportunity and to accept and push for change and growth. To me, perseverance means that even when the path is difficult or when we feel like giving up, we push forward because we have a goal in mind. As we persevere, we continue to grow through different trials, troubles, and obstacles. These are what helped refine me to be the person I am today.{"\n"}{"\n"}
            Taekwondo taught me to appreciate different cultures and their styles. I found a fascination and love for Korean culture and traditions. This led me to study the Korean language and to appreciate the differences in the cultures. One of the biggest aspects in their culture that I love is the emphasis on respect, even teaching and instilling it into their children at a young age. {"\n"}{"\n"}
            Perhaps most importantly, Taekwondo has taught me the importance of community. Since I started Taekwondo, I developed lasting friendships with people I would never have even seen before without it. I have met people that have left a mark in my life, and have helped me grow further. We are able to connect and share experiences at the dojang, and are able to support one another as we continue training and learning.{"\n"}{"\n"}
            This simple invite and decision changed the entire course of my life. From taekwondo, I made friends that I had never had, and I still have them today. I learned to value the sense of community you get with people who share a mutual trait. I try to bring community everywhere with me now, and find things to relate to others everywhere. Taekwondo has shaped who I am as a martial artist, and as a person: It has developed my sense of respect, perseverance, and appreciation.{"\n"}{"\n"}
          </Text>
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
    width: '50%',
    alignSelf: 'center',
    padding: 20, 
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25,
  },
  section: {
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
