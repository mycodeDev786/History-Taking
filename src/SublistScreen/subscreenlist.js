import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles } from "../Home/homeStyel";
import { Ionicons } from "@expo/vector-icons";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

function SubScreenList({ navigation, route }) {
  const { Title } = route.params;

  const datalist = require("../../assets/Data/SubContentList.json");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.conatiner}>
        <View style={styles.TitleCon}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            {Title}
          </Text>
        </View>
        <BannerAd
          unitId={"ca-app-pub-5621150008566854/2091141950"}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />

        <View style={styles.ListCon}>
          <FlatList
            data={datalist}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.listContent}
                  onPress={() => {
                    let SubTitle = item;

                    navigation.navigate("DataScreen", { SubTitle, Title });
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
      <View
        style={{
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
        }}
      ></View>
    </SafeAreaView>
  );
}

export { SubScreenList };
