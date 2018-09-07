import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Decks from "./components/Decks";
import NewDeck from "./components/NewDeck";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import NewQuestion from "./components/NewQuestion";
import Quiz from "./components/Quiz";
import {purple, white, lightPurp, red, pink} from "./utils/colors";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Deck from "./components/Deck";

function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: 1 }}>
            <StatusBar  backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createBottomTabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
    },
    }, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: purple,
        }
    },
    tabBarOptions: {
        activeTintColor: purple,

        style: {
            height: 56,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

var black;
const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }, NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }, Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
