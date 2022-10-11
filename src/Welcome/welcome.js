import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import LoginImage from "../../assets/Images/mainScreen.png";
import WomenImage from "../../assets/Images/Women.png";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./loginStyel";

function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.MainCon}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <View style={styles.LogoCon}>
        <Image source={LoginImage} style={styles.image}></Image>
      </View>
      <View style={styles.TitleCon}>
        <Text style={styles.TitleText}>History Taking</Text>
      </View>
      <View style={styles.BottomCon}>
        <View style={styles.LoginTextCon}>
          <View>
            <Image source={WomenImage} style={styles.imageDr} />
          </View>
        </View>
      </View>
      <View style={styles.LoginTextback}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.LoginText}> Lets Start</Text>
        </TouchableOpacity>
        <Ionicons name="caret-forward" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
}

export { Welcome };
