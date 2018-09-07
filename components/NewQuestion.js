import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {lightPurp, purple, white} from "../utils/colors";

class NewQuestion extends Component{
    static navigationOptions = ({navigation}) => {
        const { deckId } = navigation.state.params;
        return {
            title: 'new question'
        }
    };


    state = {
        question: "",
        answer: "",
    };


    render() {
        const { navigation } = this.props;
        const { deckId } = navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.questionView}>
                    <Text style={styles.questionText}>Question: </Text>
                    <TextInput
                        style={styles.userInput}
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                    />
                </View>
                <View style={styles.answerView}>
                    <Text style={styles.answerText}>Answer: </Text>
                    <TextInput
                        style={styles.userInput}
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                    />
                </View>
                <View style={styles.submitQuestion}>
                    <TouchableOpacity
                        onPress={() => {
                        }}>
                        <Text style={styles.submitQuestionText}>
                            Submit New Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default NewQuestion;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionView: {
        paddingTop: 20,

    },
    questionText: {
        color: purple,
        fontSize: 20,
    },
    answerView: {
        paddingTop: 40,

    },
    answerText: {
        fontSize: 20,
        color: purple,
    },
    submitQuestion: {
        paddingTop: 130,
    },
    submitQuestionText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: purple,
        padding: 5,
        color: white,
    },
    userInput: {
        color: lightPurp,
        padding: 6,
        width: 300,
        height: 50,
        borderColor: 'white',
        borderWidth: 2,
    }
});