import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import * as Contacts from "expo-contacts";
import Constants from "expo-constants";

export default function ContatosScreen() {
  const [contacts, setContacts] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      setHasPermission(status === "granted");

      if (status === "granted") {
        // Exercício 5: só o primeiro nome
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // Exercício 4: só quem começa com "C"
          const filtrados = data.filter((c) =>
            c.firstName?.toUpperCase().startsWith("C")
          );
          setContacts(filtrados);
        }
      }
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to contacts</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.firstName}</Text>
            {item.phoneNumbers && item.phoneNumbers.map((phone, index) => (
              <Text key={index} style={styles.number}>{phone.number}</Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#222" },
  row: { width: "100%", marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#bbb", paddingBottom: 10, paddingLeft: 10 },
  name: { color: "yellow" },
  number: { color: "#fff" },
});