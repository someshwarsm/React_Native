import { ScrollView, Text, View, Image } from "react-native";
import {Link} from "expo-router"

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 15
      }}
    >

      <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
        <View style={{borderColor:'black'}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'TwoWheeler'}}}> 
            <View style={{alignItems:"center"}}>
              <Image source={require('../assets/images/TwoWheelerImage.jpg')} style={{width:130, height:130, margin: 10, borderRadius: 20}} />
            </View>
          </Link>
        </View>

        <View style={{borderColor:'black'}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'privateCar'}}}> 
            <View style={{alignItems:"center"}}>
              <Image source={require('../assets/images/privateCarImage.jpg')} style={{width:130, height:130, margin: 10, borderRadius: 20}} />
            </View>
          </Link>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
        <View style={{borderColor:'black', borderRadius: 20, borderWidth: 1, margin: 5}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'pcv3Wheeler'}}}> 
            <View style={{alignItems:"center"}}>
              <Image source={require('../assets/images/pcv3WheelerImage.jpg')} style={{width:100, height:100, marginBottom: 10}} />
              <Text>PCV (3 Wheeler)</Text>
            </View>
          </Link>
        </View>

        <View style={{borderColor:'black', borderRadius: 20, borderWidth: 1}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'pcv4WheelerUpto6Passangers'}}}> 
            <View style={{alignItems:"center"}}>
              {/* <Image source={require('../assets/images/privateCarImage.jpg')} style={{width:150, height:70, marginTop: 20}} /> */}
              <Text>PCV (4 Wheeler)</Text>
              <Text>(Upto 6 Passengers)</Text>
            </View>
          </Link>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
        <View style={{borderColor:'black', borderRadius: 20, borderWidth: 1, margin: 5}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'pcv4WheelerExceeding6Passangers'}}}> 
            <View style={{alignItems:"center"}}>
              {/* <Image source={require('../assets/images/pcv3WheelerImage.jpg')} style={{width:100, height:100, marginBottom: 10}} /> */}
              <Text>PCV (4 Wheeler)</Text>
              <Text>(Exceeding 6 Passengers)</Text>
            </View>
          </Link>
        </View>

        <View style={{borderColor:'black', borderRadius: 20, borderWidth: 1}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'gcv3Wheeler'}}}> 
            <View style={{alignItems:"center"}}>
              {/* <Image source={require('../assets/images/privateCarImage.jpg')} style={{width:150, height:70, marginTop: 20}} /> */}
              <Text>GCV (3 Wheeler)</Text>
            </View>
          </Link>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
        <View style={{borderColor:'black', borderRadius: 20, borderWidth: 1, margin: 5}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'gcv4Wheeler'}}}> 
            <View style={{alignItems:"center"}}>
              {/* <Image source={require('../assets/images/pcv3WheelerImage.jpg')} style={{width:100, height:100, marginBottom: 10}} /> */}
              <Text>GCV (4 Wheeler)</Text>
            </View>
          </Link>
        </View>

        {/* <View style={{borderColor:'black', borderRadius: 20, borderWidth: 1}}>
          <Link href={{pathname: "/policyType", params:{vehicleType: 'gcv3Wheeler'}}}> 
            <View style={{alignItems:"center"}}>
              <Image source={require('../assets/images/privateCarImage.jpg')} style={{width:150, height:70, marginTop: 20}} />
              <Text>Two Wheeler</Text>
              <Text>(Upto 2 Passengers)</Text>
            </View>
          </Link>
        </View> */}
      </View>


      


      
      {/* <Link href={{pathname: "/policyType", params:{vehicleType: 'pcv3Wheeler'}}}>PCV (3 Wheeler) (Upto 6 Passengers)</Link>
      <Link href={{pathname: "/policyType", params:{vehicleType: 'pcv4WheelerUpto6Passangers'}}}>PCV (4 Wheeler) (Upto 6 Passengers)</Link>
      <Link href={{pathname: "/policyType", params:{vehicleType: 'pcv4WheelerExceeding6Passangers'}}}>PCV (4 Wheeler) (Exceeding 6 Passengers)</Link>
      <Link href={{pathname: "/policyType", params:{vehicleType: 'gcv3Wheeler'}}}>GCV (3 Wheeler) (Public and Private)</Link>
      <Link href={{pathname: "/policyType", params:{vehicleType: 'gcv3Wheeler'}}}>GCV (4 Wheeler) (Public and Private)</Link> */}
    </ScrollView>
  );
}
