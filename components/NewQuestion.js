import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'

class NewQuestion extends Component{

    // flip cards ( toggle display )
    // correct button
    // incorrect button

    static navigationOptions = ({navigation}) => {
        const { deckId } = navigation.state.params;
        return {
            title: 'new question'
        }
    };
    render() {
        const { navigation } = this.props;
        const { deckId } = navigation.state.params;
        return (
            <View>
                <Text>NEW QUESTION for {deckId} </Text>
            </View>
        )
    }
}
export default NewQuestion;

const styles = StyleSheet.create({

});