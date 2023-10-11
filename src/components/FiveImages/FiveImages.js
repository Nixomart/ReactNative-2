import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TodayImage from '../TodayImage/TodayImage';

export default function FiveImages({fiveImages}) {
    /* console.log("five IMAGESSS: ", fiveImages); */
  return fiveImages !== undefined ? (
    <View style={{flex: 0.2}}>
      <ScrollView style={{borderWidth: 1}}>
        {fiveImages.map((item, index)=>(
            <TodayImage {...item} />
        ))}
      </ScrollView>
    </View>
  ) : <Text>No hay data</Text>
}