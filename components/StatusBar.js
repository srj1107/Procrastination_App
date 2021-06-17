import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Procrastinate from "../screens/Procrastinating";
import Entries from "../screens/Entries";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Results from "../screens/Results";
import Settings from "../screens/Settings";

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
        component={Results}
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
        name="About"
        component={Settings}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={26}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
