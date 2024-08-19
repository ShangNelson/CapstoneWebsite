import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions, Animated } from 'react-native';
import { TabView, TabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import HomeScreen from './index';

type Route = {
  key: string;
  title: string;
};

type State = NavigationState<Route>;

const SecondRoute = () => <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />;
const ThirdRoute = () => <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />;
const FourthRoute = () => <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />;
const FifthRoute = () => <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />;

const Layout: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    { key: 'home', title: 'Home' },
    { key: 'products', title: 'Products' },
    { key: 'career', title: 'Career' },
    { key: 'about', title: 'About' },
    { key: 'blog', title: 'Blog' },
  ]);

  const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.tabLabel, { color: focused ? '#000000' : '#333333' }]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header Row with Logo, Tabs, and Buttons */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/ideaflo.png')} style={styles.logo} />
        </View>

        {/* Manually rendered TabBar outside of TabView */}
        <View style={styles.tabBar}>
          {renderTabBar({
            navigationState: { index, routes },
            position: new Animated.Value(index),
            layout: { width: layout.width, height: layout.height }, // Include layout property
            jumpTo: (key) => setIndex(routes.findIndex(route => route.key === key)),
          })}
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonTextLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignUp}>
            <Text style={styles.buttonTextSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Page Content Below the Custom TabBar */}
      <View style={styles.content}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={({ route }) => {
            switch (route.key) {
              case 'home':
                return <HomeScreen />;
              case 'products':
                return <SecondRoute />;
              case 'career':
                return <ThirdRoute />;
              case 'about':
                return <FourthRoute />;
              case 'blog':
                return <FifthRoute />;
              default:
                return null;
            }
          }}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={() => null} // No TabBar inside TabView
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
    height: "8%",
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '20%',
    maxHeight: '80%',
  },
  logo: {
    width: 180,
    height: 40,
    marginRight: 10,
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
  buttonsContainer: {
    flexDirection: 'row',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    maxWidth: '20%',
    maxHeight: '20%',
  },
  buttonLogin: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  buttonSignUp: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  buttonTextLogin: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSignUp: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  scene: {
    flex: 1,
  },
});

export default Layout;
