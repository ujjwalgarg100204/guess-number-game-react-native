import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import Title from "../components/UI/Title";
import tw from "../lib/tailwind";
import PrimaryButton from "../components/UI/PrimaryButton";

type Props = {
	roundsNumber: number;
	userNumber: number;
	onStartNewGame: () => void;
};

const GameOverScreen = ({
	onStartNewGame,
	userNumber,
	roundsNumber,
}: Props) => {
	return (
		<View style={tw`flex-1 p-7 justify-center items-center`}>
			<Title>GAME OVER !</Title>
			<View
				style={tw`rounded-full w-72 h-72 items-center border-4 border-primary-800 overflow-hidden m-8`}
			>
				<Image
					style={tw`w-full h-full`}
					source={require("../../assets/images/success.png")}
				/>
			</View>
			<Text style={tw`text-center text-2xl mb-6`}>
				Your phone needed{" "}
				<Text style={tw`font-bold text-primary-500`}>
					{roundsNumber}
				</Text>{" "}
				rounds to guess the number{" "}
				<Text style={tw`font-bold text-primary-500`}>{userNumber}</Text>
			</Text>
			<PrimaryButton onPress={onStartNewGame}>
				Start New Game
			</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;
