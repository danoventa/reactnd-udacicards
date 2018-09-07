import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {pink, purple, white} from "../utils/colors";

class Quiz extends Component {
    static navigationOptions = ({navigation}) => {
        const {questions} = navigation.state.params;

        return {
            title: 'Quiz Time'
        }
    };

    state = {
        questionIndex: 0,
        toggle: 1,
        score: 0,
    };

    // on restart do this
    restart = () => {
        this.setState({
            questionIndex: 0,
        })
    };

    toggle = () => {
        const toggle = this.state.toggle * -1;
        this.setState({
            toggle,
        })
    };

    next = () => {
        // check if last
        this.setState({
            toggle: 1
        })
    };

    done = () => {
        this.setState({
            questionIndex: 0,
            toggle: 1,
            score: 0,
        })
    };

    // flip cards ( toggle display )
    // correct button
    // incorrect button

    render() {
        return (
            <View style={styles.container}>
                <Text >{JSON.stringify(this.props.navigation.state.params.questions)}</Text>>
                <View style={styles.correctAnswer}>
                    <TouchableOpacity
                        onPress={() => {
                        }}>
                        <Text style={styles.correctAnswerText}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrongAnswer}>
                    <TouchableOpacity
                        onPress={() => {
                        }}>
                        <Text style={styles.wrongAnswerText}>
                            Wrong
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Quiz;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    correctAnswer: {
        paddingTop: 20,
    },
    correctAnswerText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: purple,
        padding: 5,
        color: white,
    },
    wrongAnswer: {
        paddingTop: 20,
    },
    wrongAnswerText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: pink,
        padding: 5,
        color: white,
    },
});