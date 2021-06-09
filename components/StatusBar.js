import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Procrastinate from "../screens/Procrastinating";
import { Icon } from "react-native-elements";
import Entries from "../screens/Entries";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

//Bottom Navigator for accessing various screens

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Procrastinating?"
      activeColor="#000000"
      inactiveColor="#696969"
      barStyle={{
        backgroundColor: "#1f8eff",
        borderRadius: 8,
        paddingBottom: 5,
      }}
    >
      <Tab.Screen
        name="Procrastinating?"
        component={Procrastinate}
        options={{
          tabBarLabel: "Procrastinating?",
          tabBarIcon: ({ color }) => (
            <Ionicons name="leaf-outline" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Results"
        component={Procrastinate}
        options={{
          tabBarLabel: "Results",
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart-outline" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Entries"
        component={Entries}
        options={{
          tabBarLabel: "Entries",
          tabBarIcon: ({ color }) => (
            <AntDesign name="bars" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Procrastinate}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={26} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
