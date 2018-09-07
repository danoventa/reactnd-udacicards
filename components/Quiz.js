import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Quiz extends Component {
    static navigationOptions = ({navigation}) => {
        const {questions} = navigation.state.params;
        return {
            title: 'quiz'
        }
    };

    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.props.navigation.state.params.questions)}</Text>>
            </View>
        )
    }
}
export default Quiz;

const styles = StyleSheet.create({

});