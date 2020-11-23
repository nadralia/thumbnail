import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import components
import { WhiteLayout } from '../../components/Layouts';

import { Header } from '../../components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  videoBox: {
    width: 380,
    height: 230,
  },
  detailContent: {
    flexDirection: 'column',
  },
  into: {
    alignItems: 'center',
  },
});

const notes = [
  {
    id: 1,
    date: '18/2 2020',
    text: 'Today i made a big step in my life',
  },
  {
    id: 2,
    date: '19/2 2020',
    text: 'Today i made a big step in my life',
  },
];

const DetailScreen = ({ route, navigation }) => {
  const { list } = route.params;
  const { video } = list;
  return (
    <WhiteLayout>
      <Header onPress={() => navigation.goBack()} checkBox />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.videoBox}>
            <WebView
              style={{ marginLeft: 20, marginTop: 10, marginBottom: 20, width: 320, height: 230 }}
              javaScriptEnabled
              domStorageEnabled
              source={{ uri: video }}
            />
          </View>
          <View style={styles.detailContent}>
            <View style={styles.into}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Introduction</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Paragraph style={{ textDecorationLine: 'underline', marginLeft: 5, width: 320 }}>
                  This will be some short information about the course and why it is important to
                  find our passion in life
                </Paragraph>
              </View>
              <View>
                <Ionicons name="swap-vertical-sharp" size={30} color="black" />
              </View>
            </View>
            <View>
              <Paragraph style={{ marginLeft: 5 }}>Click on the box to start the course</Paragraph>
              <Paragraph style={{ marginLeft: 5 }}>
                The box contains all the materials you need
              </Paragraph>
            </View>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 20 }}>
                  <Ionicons name="ios-file-tray-sharp" size={80} color="black" />
                </View>
                <View style={{ marginLeft: 30, width: 200 }}>
                  <Paragraph style={{ textDecorationLine: 'underline' }}>
                    1. why finding our passion is important
                  </Paragraph>
                  <Paragraph style={{ textDecorationLine: 'underline' }}>
                    2 . Reflect and write down
                  </Paragraph>
                </View>
              </View>

              <View style={{ flexDirection: 'column', backgroundColor: '#eee' }}>
                <View>
                  <Text>Daily Notes</Text>
                </View>
                {notes.map((note) => (
                  <View
                    key={note.id}
                    style={{
                      backgroundColor: 'white',
                      flexDirection: 'row',
                      marginTop: 5,
                      marginBottom: 5,
                    }}>
                    <View>
                      <Ionicons name="ios-checkmark-circle" size={30} color="black" />
                    </View>
                    <View>
                      <View>
                        <Text>{note.date}</Text>
                      </View>
                      <View>
                        <Text>{note.text}</Text>
                      </View>
                    </View>
                    <View style={{ marginLeft: 80 }}>
                      <Ionicons name="swap-vertical-sharp" size={30} color="black" />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </WhiteLayout>
  );
};

export default DetailScreen;
