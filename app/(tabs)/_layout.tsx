import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, Animated, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import { TabView, TabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import HomeScreen from './index';
import StatementScreen from './statement';
import AwardsScreen from './awards';
import AcademicScreen from './academic';
import CreativeScreen from './creative';

type Route = {
  key: string;
  title: string;
};

type State = NavigationState<Route>;

const Layout: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    { key: 'home', title: 'Home' },
    { key: 'statement', title: 'Statement' },
    { key: 'awards', title: 'Awards' },
    { key: 'academic', title: 'Academic' },
    { key: 'creative', title: 'Creative' },
  ]);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const isSmallScreen = layout.width < 600; // Adjust this threshold based on your design

  const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.tabLabel, { color: focused ? '#000000' : '#888888' }]}>
          {route.title}
        </Text>
      )}
    />
  );

  const handleTabPress = (key: string) => {
    setIndex(routes.findIndex(route => route.key === key));
    if (showDropdown) setShowDropdown(false); // Close dropdown when a tab is selected
  };

  const handleOutsidePress = () => {
    if (showDropdown) setShowDropdown(false);
  };

  const renderDropdown = () => (
    <Modal
      transparent
      animationType="slide"
      visible={showDropdown}
      onRequestClose={() => setShowDropdown(false)}
    >
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={styles.dropdownOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.dropdownContainer}>
              <FlatList
                data={routes}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleTabPress(item.key)}
                  >
                    <Text style={styles.dropdownItemText}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {isSmallScreen ? (
          <>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setShowDropdown(!showDropdown)}
            >
              <Text style={styles.dropdownButtonText}>☰</Text>
            </TouchableOpacity>
            {renderDropdown()}
          </>
        ) : (
          <View style={styles.tabBar}>
            {renderTabBar({
              navigationState: { index, routes },
              position: new Animated.Value(index),
              layout: { width: layout.width, height: layout.height },
              jumpTo: (key) => setIndex(routes.findIndex(route => route.key === key)),
            })}
          </View>
        )}
      </View>

      <View style={styles.content}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={({ route }) => {
            switch (route.key) {
              case 'home':
                return <HomeScreen setIndex={setIndex} />;
              case 'statement':
                return <StatementScreen setIndex={setIndex} />;
              case 'awards':
                return <AwardsScreen setIndex={setIndex} />;
              case 'academic':
                return <AcademicScreen setIndex={setIndex} />;
              case 'creative':
                return <CreativeScreen setIndex={setIndex} />;
              default:
                return null;
            }
          }}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={() => null}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: "7%",
    backgroundColor: '#FFFFFF',
  },
  tabBar: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: "70%",
    marginHorizontal: "15%",
  },
  indicator: {
    backgroundColor: '#333333',
  },
  tabLabel: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  dropdownOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownButton: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginLeft: 'auto',
  },
  dropdownButtonText: {
    fontSize: 24,
    color: '#333',
  },
});

export default Layout;
