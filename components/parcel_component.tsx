import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

interface props {
  item: string;
  status: string;
  route: string;
}

export default function ParcelComponent(props: props) {
  return (
    <View className="border-b-2 border-gray-200 ">
      <TouchableOpacity>
        <View className="flex-row items-center justify-between mx-5 py-4">
          <View className="flex-row items-center">
            <View className=" bg-gray-200 p-1 rounded-lg">
              <Image
                className="h-12 w-12"
                source={require("../assets/images/logo.png")}
              />
            </View>
            <View className="flex-col mx-3 space-x-15">
              <Text className="text-xl font-medium">{props.item}</Text>
              <Text className="text-gray-400 text-sm font-medium">
                {props.route}
              </Text>
            </View>
          </View>
          <View className="items-end justify-end">
            <Text>{props.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
