import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // Constante array de listagem de dados
  const dataList = [
    {
      name: "Cardbiard boxes pack",
      price: "25,58",
      category: "Tools, objects and decorations",
      onSale: false,
    },

    {
      name: "Ultra Dynamic Sky",
      price: "179,40",
      category: "Procedural systems",
      onSale: true,
    },

    {
      name: "Stylized Water",
      price: "161,46",
      category: "Nature and terrain",
      onSale: true,
    },
  ];

  const userName = "Laymon";

  return (
    <View style={styles.container}>

      // saudacao interpolada
      <Text style={styles.Texts}>Olá, {userName}!</Text>
      {dataList.map((item, index) => (
        <View key={index}>

          //lista dados / nome
          <Text>name: {item.name}</Text>

          // categoria
          <Text>category: {item.category}</Text>
          {/*cor com base no bool*/}
          <Text
            style={{
              color: item.onSale ? "green" : "gray",
            }}
          >
            R$ {item.price}
          </Text>

          //mostra texto somente quando onSale == true
          {item.onSale ? <Text>Oferta Expecial!</Text> : null}
          <Text></Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Texts: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
