import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Decks from "./components/Decks";
import NewDeck from "./components/NewDeck";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import NewQuestion from "./components/NewQuestion";
import Quiz from "./components/Quiz";
import {purple, white, lightPurp} from "./utils/colors";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Deck from "./components/Deck";

const Tabs = createBottomTabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>
        },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({tintColor}) => <MaterialIcons name='library-add' size={30} color={tintColor}/>
            },
        },
    },{
    navigationOptions: {
        header: null,
        fontColor: purple,
    },
    tabBarOptions: {
        activeTintColor: purple,
        backgroundColor: lightPurp,

        style: {
            height: 56,
            backgroundColor: white,
        }
    }
});

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
          <StatusBar backgroundColor={purple} barStyle='default' />
          <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
