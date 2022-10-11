import { View, FlatList, SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../Home/homeStyel";
import { TextB } from "../Components/Text";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
function DataScreen({ navigation, route }) {
  let { SubTitle, Title } = route.params;

  let datalist = require("../../assets/Data/f1.json");
  switch (Title) {
    case "Fever":
      datalist = require("../../assets/Data/Fever.json");
      break;

    case "weight loss":
      datalist = require("../../assets/Data/weight loss.json");
      break;

    case "Generalised swelling":
      datalist = require("../../assets/Data/Generalised swelling.json");
      break;
    case "Vomiting":
      datalist = require("../../assets/Data/Vomiting.json");
      break;
    case "Haematemesis":
      datalist = require("../../assets/Data/Haematemesis.json");
      break;
    case "Dysphagia":
      datalist = require("../../assets/Data/Dysphagia.json");
      break;
    case "Dyspepsia":
      datalist = require("../../assets/Data/Dyspepsia.json");
      break;
    case "Diarrhoea":
      datalist = require("../../assets/Data/Diarrhoea.json");
      break;
    case "Constipation":
      datalist = require("../../assets/Data/Constipation.json");
      break;
    case "Jaundice":
      datalist = require("../../assets/Data/Jaundice.json");
      break;
    case "Abdominal Distension":
      datalist = require("../../assets/Data/Abdominal Distension.json");
      break;
    case "Cough and Expectoration":
      datalist = require("../../assets/Data/Cough and Expectoration.json");
      break;
    case "Haemoptysis":
      datalist = require("../../assets/Data/Haemoptysis.json");
      break;
    case "Breathlessness":
      datalist = require("../../assets/Data/Breathlessness.json");
      break;

    case "chest pain":
      datalist = require("../../assets/Data/chest pain.json");
      break;

    case "Palpitations":
      datalist = require("../../assets/Data/Palpitations.json");
      break;

    case "Polyuria":
      datalist = require("../../assets/Data/Polyuria.json");
      break;
    case "Pain Lumber Region":
      datalist = require("../../assets/Data/Pain Lumber Region.json");
      break;
    case "Haematuria":
      datalist = require("../../assets/Data/Haematuria.json");
      break;
    case "Muscular weakness":
      datalist = require("../../assets/Data/Muscular weakness.json");
      break;
    case "Headache":
      datalist = require("../../assets/Data/Headache.json");
      break;
    case "Fits(Seziures)":
      datalist = require("../../assets/Data/Fits(Seziures).json");
      break;
    case "Vertigo":
      datalist = require("../../assets/Data/Vertigo.json");
      break;
    case "Pallor (Anaemia)":
      datalist = require("../../assets/Data/Pallor (Anaemia).json");
      break;
    case "BleedingTendency":
      datalist = require("../../assets/Data/BleedingTendency.json");
      break;
    case "Itching ( Prurits)":
      datalist = require("../../assets/Data/Itching ( Prurits).json");
      break;
    case "Joint pain":
      datalist = require("../../assets/Data/Joint pain.json");
      break;
    case "Syncope (Faintng)":
      datalist = require("../../assets/Data/Syncope (Faintng).json");
      break;

    default:
      datalist = require("../../assets/Data/f1.json");
  }

  let [TextSel, setTextSel] = useState('"' + SubTitle + '"');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.TitleCon}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          {SubTitle}
        </Text>
      </View>
      <BannerAd
        unitId={"ca-app-pub-5621150008566854/2091141950"}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
      />
      <View style={styles.DataListCon}>
        <FlatList
          data={datalist[JSON.parse(TextSel)].name}
          renderItem={({ item }) => (
            <View style={styles.DataFlatListStyel}>
              <TextB title={item} des={item}></TextB>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export { DataScreen };
