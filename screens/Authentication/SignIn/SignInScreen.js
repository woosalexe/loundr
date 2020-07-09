import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';

//imports from outside
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//constants
import Colors from '../../../constants/colors';
import FontSizes from '../../../constants/fontSizes';

//components
import SignInLogo from '../../../components/Auth/SignInLogo';
import CredInput from '../../../components/Auth/CredInput';
import SubmitButton from '../../../components/SubmitButton';
import MinorButton from '../../../components/MinorButton';

class SignInScreen extends Component {
	static navigationOptions = {};

	state = {
        //contains the values entered of the input fields
		userInputs: {
			username: '',
			password: '',
		},
	};

	/**
	 * updates the state by changing the
	 * username the user entered
	 * @param {*} username - the updated username
	 */
	onChangeUsername = (username) => {
		this.setState((prevState) => {
			return {
				userInputs: {
					username: username,
					password: prevState.userInputs.password,
				},
			};
		});
	};

	/**
	 * updates the state by changing the
	 * password the user entered
	 * @param {*} password - the updated password
	 */
	onChangePassword = (password) => {
		this.setState((prevState) => {
			return {
				userInputs: {
					username: prevState.userInputs.username,
					password: password,
				},
			};
		});
    };
    
    /**
     * called when "Log In" is clicked
     */
    onLogIn = () => {};

    /**
     * navigating to sign up page
     */
    onSignUpNavigate = () => {};

    /**
     * navigating to forgot password screen
     */
    onForgotPassword = () => {};

	render() {
		return (
            // ****** IT IS IMPORTANT TO HAVE flexGrow: 1 HERE ******
			<KeyboardAwareScrollView style={styles.container} contentContainerStyle={{flexGrow:1}}>
                {/* Allows to dismiss keyboard when screen is clicked */}
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.inner}>
						<SignInLogo style={styles.logo} />
						<View style={styles.loginContainer}>
                            {/* Input Fields */}
							<CredInput
								onChangeText={this.onChangeUsername}
								value={this.state.userInputs.username}
								style={styles.input}
								placeholder="username..."
								autoCompleteType="username"
								secureTextEntry={false}
							/>
							<CredInput
								onChangeText={this.onChangePassword}
								value={this.state.userInputs.password}
								style={styles.input}
								placeholder="password..."
								autoCompleteType="password"
								secureTextEntry={true}
							/>
                           
                            {/* Logging In */}
							<SubmitButton style={styles.submitBtn} title="Log In" backgroundColor={Colors.btnColor} onPress={this.onLogIn} />

                            {/* Go to Sign Up Page */}
							<Text style={styles.question}>Don't have an account yet?</Text>
							<MinorButton title="Sign Up" color={Colors.btnColor} style={styles.minorBtn} onPress={this.onSignUpNavigate} />

                            {/* Go to Forgot Password Page */}
							<MinorButton title="Forgot Password?" color={Colors.logoLabelColor} style={styles.minorBtn} onPress={this.onForgotPassword} />

						</View>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.logoColor,
	},
	inner: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
	},
	logo: {
		marginVertical: 50,
	},
	loginContainer: {
		width: '82%',
		alignItems: 'center',
	},
	input: {
		marginVertical: 15,
	},
	submitBtn: {
		marginVertical: 15,
	},
	question: {
		color: Colors.customWhite,
		fontSize: FontSizes.minorText,
		fontFamily: 'mont-alt-regular',
    },
    minorBtn: {
        marginVertical: 15,
    }
});

export default SignInScreen;
