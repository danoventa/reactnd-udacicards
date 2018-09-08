import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {lightPurp, pink, purple, white} from "../utils/colors";

class Quiz extends Component {
    static navigationOptions = () => {
        return {
            title: 'Quiz Time'
        }
    };

    state = {
        questionIndex: 0,
        toggle: 1,
        score: 0,
        questionCount: 0,
        questions: [],
    };

    toggle = () => {
        const toggle = this.state.toggle * -1;
        this.setState({
            toggle,
        })
    };

    right = () => {
        const score = this.state.score + 1;
        const questionIndex = this.state.questionIndex + 1;

        this.setState({
            score,
            questionIndex,
            toggle: 1
        });
    };

    wrong = () => {
        const questionIndex = this.state.questionIndex + 1;
        this.setState({
            questionIndex,
            toggle: 1
        });
    };

    back = () => {
        this.props.navigation.goBack();
    };

    done = () => {
        this.setState({
            questionIndex: 0,
            toggle: 1,
            score: 0,
        })
    };

    componentDidMount() {
        const {questions} = this.props.navigation.state.params;
        const questionCount = questions.length;

        this.setState({
            questionIndex: 0,
            toggle: 1,
            score: 0,
            questionCount,
            questions,
        })
    };
    // flip cards ( toggle display )
    render() {
        const { questionIndex, toggle, score, questionCount, questions } = this.state;

        console.log(questions);
        return (
            <View style={styles.container}>
                { questionIndex < questionCount
                    ? <View style={styles.inner}>
                        <Text style={styles.statusText}>
                            On Card { questionIndex + 1 } of { questionCount }
                        </Text>
                        <View style={styles.display}>

                            <Text style={styles.displayText}>
                                { toggle > 0
                                    ? questions[questionIndex].question
                                    : questions[questionIndex].answer
                                }
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={this.toggle}>
                            <Text style={styles.flipText}>
                                See { toggle > 0 ? "Answer" : "Question"}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.correctAnswer}>
                            <TouchableOpacity
                                onPress={this.right}>
                                <Text style={styles.correctAnswerText}>
                                    Correct
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.wrongAnswer}>
                            <TouchableOpacity
                                onPress={this.wrong}>
                                <Text style={styles.wrongAnswerText}>
                                    Wrong
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : <View style={styles.inner}>
                        <View style={styles.display}>
                            <Text style={styles.displayText}>
                                Done! {score} out of {questionCount}!
                            </Text>
                        </View>
                        <View style={styles.correctAnswer}>
                            <TouchableOpacity
                                onPress={this.done}>
                                <Text style={styles.correctAnswerText}>
                                    Do it again
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.wrongAnswer}>
                            <TouchableOpacity
                                onPress={this.back}>
                                <Text style={styles.wrongAnswerText}>
                                    Back to deck
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
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
    inner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    display: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    displayText: {
        color: purple,
        fontSize: 30,
    },
    correctAnswer: {
        padding: 20,
        flex: 0,
    },
    correctAnswerText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: white,
        padding: 10,
        color: purple,
    },
    wrongAnswer: {
        flex: 1,
    },
    wrongAnswerText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        backgroundColor: purple,
        padding: 10,
        color: white,
    },
    flip: {
        flex: 1,
    },
    flipText: {
        textAlign: 'center',
        width: 300,
        fontSize: 20,
        padding: 10,
        backgroundColor: purple,
        color: white,
    },
    statusText: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        color: lightPurp,
    },
});
