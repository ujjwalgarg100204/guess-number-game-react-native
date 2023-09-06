import React, { useState } from "react";
import { View, Alert, TextInput } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import tw from "../lib/tailwind";

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
		console.log("Valid Number!");
	};
	const resetInputHandler = () => setEnteredNum("");

	return (
		<View
			style={tw`p-4 items-center mt-24 bg-[#4e0329] mx-6 rounded-lg shadow-md`}
		>
			<TextInput
				style={tw`h-12 text-3xl border-b-2 border-b-yellow my-2 font-bold w-12 text-center text-yellow`}
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
		</View>
	);
};

export default StartGameScreen;
