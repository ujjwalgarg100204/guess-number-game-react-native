import React, { useState } from "react";
import { View, Alert, TextInput, Text } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import tw from "../lib/tailwind";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "./InstructionText";

type Props = {
	onPickNumber: (num: number) => void;
};
const StartGameScreen = ({ onPickNumber }: Props) => {
	const [enteredNum, setEnteredNum] = useState("");
	const numInputHandler = (inpNum: string) => setEnteredNum(inpNum);
	const confirmInputHandler = () => {
		const chosenNumber = +enteredNum;
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			// show alert
			Alert.alert(
				isNaN(chosenNumber) ? "Not a number" : "Out of range",
				isNaN(chosenNumber) ? "Not a number" : "Out of range",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetInputHandler,
					},
				],
			);
			return;
		}
		onPickNumber(chosenNumber);
	};
	const resetInputHandler = () => setEnteredNum("");

	return (
		<View style={tw`flex-1 portrait:mt-28 landscape:mt-8 items-center`}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter a Number</InstructionText>
				<TextInput
					style={tw`h-12 text-3xl border-b-2 border-b-accent-500 my-2 font-bold w-12 text-center text-accent-500`}
					maxLength={2}
					keyboardType="number-pad"
					value={enteredNum}
					onChangeText={numInputHandler}
				/>
				<View style={tw`flex-row`}>
					<View style={tw`flex-1`}>
						<PrimaryButton onPress={resetInputHandler}>
							Reset
						</PrimaryButton>
					</View>
					<View style={tw`flex-1`}>
						<PrimaryButton onPress={confirmInputHandler}>
							Confirm
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
};

export default StartGameScreen;
