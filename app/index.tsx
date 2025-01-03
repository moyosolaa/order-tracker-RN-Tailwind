import DeliveryBoyIcon from "@/assets/images/DeliveryBoyIcon";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import ParcelComponent from "@/components/parcel_component";
import Octicons from "@expo/vector-icons/Octicons";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView bounces={false}>
      <SafeAreaView className="bg-blue-700 rounded-b-3xl">
        <View className="flex-row justify-between items-center px-4">
          <TouchableOpacity>
            <View className="flex-row items-center bg-blue-400 p-3 rounded-full">
              <MaterialIcons name="qr-code-scanner" size={22} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center">
              <Image
                className="h-12 w-12 rounded-full"
                source={require("../assets/images/pp.jpeg")}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>
        <DeliveryBoyIcon height={200} />
        <View className="justify-center items-center space-y-5">
          <Text className="font-bold text-4xl text-white">
            Track Your Parcel
          </Text>
          <Text className="mx-14 font-medium text-xl text-white text-center my-3">
            Enter your track number to search for your parcel
          </Text>
        </View>
        <View className="flex-row p-4 bg-white rounded-2xl m-4">
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            className="flex-1 ml-2"
            placeholder="Enter tracking number"
          />
        </View>
      </SafeAreaView>
      <View>
        <View className="flex-row items-center justify-between m-5">
          <Text className="font-medium text-3xl">Your Parcels</Text>
          <TouchableOpacity>
            <View className="flex-row items-center bg-gray-300 p-2 rounded-xl">
              <Octicons name="filter" size={20} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ParcelComponent
        item="XD 2342 8126 00"
        route="China to London"
        status="Delivered"
      />
      <ParcelComponent
        item="DR 1142 3452 22"
        route="Lagos to Russia"
        status="Pending"
      />
      <ParcelComponent
        item="AB 1234 5678 90"
        route="New York to Tokyo"
        status="In Transit"
      />
      <ParcelComponent
        item="CD 2345 6789 01"
        route="Berlin to Paris"
        status="Delivered"
      />
      <ParcelComponent
        item="EF 3456 7890 12"
        route="Sydney to New Delhi"
        status="Pending"
      />
      <ParcelComponent
        item="GH 4567 8901 23"
        route="Toronto to Mexico City"
        status="In Transit"
      />
      <ParcelComponent
        item="IJ 5678 9012 34"
        route="Cape Town to Cairo"
        status="Delivered"
      />
      <ParcelComponent
        item="KL 6789 0123 45"
        route="Moscow to Dubai"
        status="Pending"
      />
      <ParcelComponent
        item="MN 7890 1234 56"
        route="Rio de Janeiro to Buenos Aires"
        status="In Transit"
      />
      <ParcelComponent
        item="OP 8901 2345 67"
        route="Los Angeles to San Francisco"
        status="Delivered"
      />
    </ScrollView>
  );
}
