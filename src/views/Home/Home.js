import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Api from "../../utils/fetch";
import TodayImage from "../../components/TodayImage/TodayImage";
import dayjs from "dayjs";
import FiveImages from "../../components/FiveImages/FiveImages";
export default function Home() {
  const [todaysImage, setTodaysImage] = useState();
  const [fiveImages, setFiveImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = await Api();
        setTodaysImage(today);
      } catch (error) {
        console.log(error);
        setTodaysImage(undefined);
      }

      try {
        const date = dayjs().format("YYYY-MM-DD");
        const fiveDaysAgo = dayjs().subtract(5, "days").format("YYYY-MM-DD");
        const data = await Api(`&start_date=${fiveDaysAgo}&end_date=${date}`);
        setFiveImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  /* console.log("FIVE IMAGES: ", fiveImages); */
  return todaysImage !== undefined ? (
    <View style={{ paddingHorizontal: 10 }}>
      <Header />
      {<Text style={{ fontSize: 30 }}>Foto de Hoy</Text>}
      <TodayImage {...todaysImage} />
      {<Text style={{ fontSize: 30, paddingTop: 20 }}>Ultimas 5 fotos</Text>}
      <ScrollView style={{maxHeight: '30%'}}>
        {fiveImages.map((item, index) => (
          <View key={index}>
          <TodayImage {...item} />
          </View>
        ))}
      </ScrollView>
    </View>
  ) : (
    <View style={{ alignItems: "center" }}>
      <Text>No hay data</Text>
    </View>
  );
}
