import React from "react";
import { Text, View, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import routes from "../../navigation/routes";

import { Screen, Button } from "../../components";
import colors from "../../config/colors";

import {
  ButtonView,
  HeaderView,
  SelectLanguageView,
  WelcomeImage,
  welcomeStyles,
  WelcomeText,
  WelcomeView,
} from "./welcome.styles";

const Welcome = ({ navigation }) => {
  return (
    <Screen>
      <WelcomeView>
        <HeaderView>
          <SelectLanguageView>
            <LanguageSelector />
          </SelectLanguageView>
          <Text
            style={{ fontSize: 18 }}
            onPress={() => navigation.navigate(routes.LOGIN)}
          >
            Skip
          </Text>
        </HeaderView>
        <View style={{ paddingVertical: 10 }}>
          <WelcomeText>Sell your phone, video Game, computer</WelcomeText>
          <WelcomeText> Complety free</WelcomeText>
        </View>
        <WelcomeImage source={require("../../assets/bgimg.png")} />
        <ButtonView>
          <Button
            title={"Sign In"}
            color="secondary"
            style={welcomeStyles.loginButton}
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <Button
            title={"Sign Up"}
            color="white"
            titleStyle={{ color: colors.secondary }}
            style={welcomeStyles.registerButton}
            onPress={() => navigation.navigate(routes.SIGNUP)}
          />
        </ButtonView>
      </WelcomeView>
    </Screen>
  );
};

const LanguageSelector = () => {
  const countriesWithFlags = [
    { title: "English" },
    { title: "French" },
    { title: "Italian" },
  ];

  return (
    <SelectDropdown
      data={countriesWithFlags}
      defaultValueByIndex={1}
      defaultValue={{
        title: "English",
        // image: require('./Images/England.jpg'),
      }}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonStyle={welcomeStyles.dropdown3BtnStyle}
      renderCustomizedButtonChild={(selectedItem, index) => {
        return (
          <View style={welcomeStyles.dropdown3BtnChildStyle}>
            {selectedItem ? (
              // <Image source={selectedItem.image} style={welcomeStyles.dropdown3BtnImage} />
              <Ionicons name="md-earth-sharp" color={"#444"} size={22} />
            ) : (
              <Ionicons name="md-earth-sharp" color={"#444"} size={22} />
            )}
            <Text style={welcomeStyles.dropdown3BtnTxt}>
              {selectedItem ? selectedItem.title : "Select country"}
            </Text>
            <FontAwesome name="chevron-down" color={"#444"} size={14} />
          </View>
        );
      }}
      dropdownStyle={welcomeStyles.dropdown3DropdownStyle}
      rowStyle={welcomeStyles.dropdown3RowStyle}
      renderCustomizedRowChild={(item, index) => {
        return (
          <View style={welcomeStyles.dropdown3RowChildStyle}>
            {/* <Image source={item.image} style={welcomeStyles.dropdownRowImage} /> */}
            <Text style={welcomeStyles.dropdown3RowTxt}>{item.title}</Text>
          </View>
        );
      }}
    />
  );
};

export default Welcome;
