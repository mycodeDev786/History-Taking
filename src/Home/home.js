import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles } from "./homeStyel";
import { Ionicons } from "@expo/vector-icons";
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";
import { useState, useEffect } from "react";

const interstitial = InterstitialAd.createForAdRequest(
  "ca-app-pub-5621150008566854/1170654120",
  {
    requestNonPersonalizedAdsOnly: true,
  }
);

function Home({ navigation, route }) {
  const datalist = require("../../assets/Data/ListData.json");
  const [interstitialLoaded, setInterstitialLoaded] = useState(false);

  // code for loading interstitial add

  const loadInterstitial = () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setInterstitialLoaded(true);
      }
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setInterstitialLoaded(false);
        interstitial.load();
      }
    );

    interstitial.load();

    return () => {
      unsubscribeClosed();
      unsubscribeLoaded();
    };
  };

  useEffect(() => {
    const unsubscribeInterstitialEvents = loadInterstitial();

    return () => {
      unsubscribeInterstitialEvents();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.conatiner}>
        <View style={styles.TitleCon}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Contents
          </Text>
        </View>

        <View style={styles.ListCon}>
          <BannerAd
            unitId={"ca-app-pub-5621150008566854/2091141950"}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
          <FlatList
            data={datalist}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.listContent}
                  onPress={() => {
                    let Title = item;
                    {
                      interstitialLoaded
                        ? interstitial.show()
                        : console.log("");
                    }
                    navigation.navigate("SubScreenList", { Title });
                  }}
                >
                  <Ionicons name="caret-forward" size={30} color="white" />
                  <Text style={styles.ListText}>{item}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export { Home };
