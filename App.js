import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Shawn");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>
        Enter Name:
      </Text>
      <TextInput style={styles.input}
      multiline
      placeholder='e.g Luong Vu Xuan'
      onChangeText={(val)=>setName(val)}
      />
      
      <Text>
        Enter Age:
      </Text>
      <TextInput style={styles.input}
      placeholder='e.g 20'
      keyboardType='numeric'
      onChangeText={(val)=>setAge(val)}
      />
      <Text>
        name is {name} and age is {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});

// <View style={styles.container}>
//   <View style={styles.header}>
//     <Text style={styles.boldText}>Hello, World</Text>
//   </View>
//   <View style={styles.body}>
//     <Text style={styles.boldText}>Thajat <Text>khong the tin</Text>abcxyz</Text>
//     <Text>abcxyz</Text>
//     <Text>abcxyz</Text>
//   </View>
// </View>

// header: {
//   backgroundColor: "pink",
//   padding: 20,
// },
// boldText: {
//   fontWeight: "bold",
// },
// body: {
//   backgroundColor:'yellow',
//   padding: 20,
// }
