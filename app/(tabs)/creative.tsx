import ParallaxScrollView from '@/components/ParallaxScrollView';
import {Image, StyleSheet} from 'react-native';

export default function CreativeScreen() {
    return (
<ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
        />
      }> 
      
      </ParallaxScrollView>   )
}

const styles = StyleSheet.create({

})