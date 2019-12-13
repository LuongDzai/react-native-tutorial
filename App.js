import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Shawn");
  const [person, setPerson] = useState({ name: "mario", age: 40 });

  const clickHandler = () => {
    setName("Vu Xuan Luong");
    setPerson({ name: "Luongvx", age: 30 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update state" onPress={clickHandler} />
      </View>
    </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 20
  }
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
});
