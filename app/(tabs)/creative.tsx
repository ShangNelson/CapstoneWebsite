import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

// Define a type for the GitHub repositories
type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};
type CreativeScreenProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
const GITHUB_USERNAME = 'ShangNelson'; // Replace with your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export default function CreativeScreen({setIndex}: CreativeScreenProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch repositories from GitHub
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) throw new Error('Error fetching repositories');
        const data: GitHubRepo[] = await response.json(); // Explicitly type the API response
        setRepos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const openRepo = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>Creative Works  </Text>
          <Image
            source={require("@/assets/images/github.png")}
            style={styles.githubIcon}
          />
        </View>
      </View>

      {/* Repositories Section */}
      <View style={styles.body}>
        {loading ? (
          <ActivityIndicator size="large" color="#3c2a13" />
        ) : repos.length > 0 ? (
          repos.map((repo) => (
            <TouchableOpacity
              key={repo.id}
              style={styles.repoCard}
              onPress={() => openRepo(repo.html_url)}
            >
              <Text style={styles.repoName}>{repo.name}</Text>
              <Text style={styles.repoDescription}>
                {repo.description || 'No description available'}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No repositories found.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  githubIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#f4f9e9",
    resizeMode: "contain",
  },
  body: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
  },
  repoCard: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  repoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3c2a13',
    fontFamily: 'Montserrat-Regular',
  },
  repoDescription: {
    fontSize: 14,
    color: '#6c757d',
    marginTop: 5,
  },
});
