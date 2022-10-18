import { Text, View, StyleSheet, Image } from 'react-native';

export default function UserProfile({
  name,
  location,
  bio
}) {
  return (
      <View style={styles.container}>
          <Image style={styles.imageStyle} source={require("../../assets/userPlaceholder.png")}/>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.locationStyle}>{location}</Text>
          <Text style={styles.bioStyle}>{bio}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      margin: 30
  },
  imageStyle: {
      height: 125,
      width: 125,
      margin: 15,
  },
  nameStyle: {
      fontWeight: 'bold',
      fontSize: 25, 
  },
  locationStyle: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'grey', 
  },
  bioStyle: {
      margin: 10
  }
})