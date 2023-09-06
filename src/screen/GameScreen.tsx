import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import Title from "../components/UI/Title";
import { generateRandomBetween } from "../utils";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "./InstructionText";
import { Ionicons } from "@expo/vector-icons";

type Props = {
	userNumber: number;
	onGameOver: (rounds: number) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }: Props) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState<number[]>([]);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	// whenever new game start reset minBoundary and maxBoundary to original value
	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	const nextGuessHandler = (direction: "lower" | "higher") => {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "higher" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}
		switch (direction) {
			case "lower":
				maxBoundary = currentGuess;
				break;
			case "higher":
				minBoundary = currentGuess + 1;
		}

		const newRndNum = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess,
		);
		setCurrentGuess(newRndNum);
		setGuessRounds(prevRounds => [newRndNum, ...prevRounds]);
	};

	return (
		<View style={tw`flex-1 p-6`}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={tw`mb-4`}>
					Higher or lower?
				</InstructionText>
				<View style={tw`flex-row`}>
					<View style={tw`flex-1`}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(null, "lower")}
						>
							<Ionicons
								name="md-remove"
								size={24}
								color="white"
							/>
						</PrimaryButton>
					</View>
					<View style={tw`flex-1`}>
						<PrimaryButton
							onPress={nextGuessHandler.bind(null, "higher")}
						>
							<Ionicons name="md-add" size={24} color="white" />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<SafeAreaView style={tw`mt-8 flex-1 p-4`}>
				<FlatList
					data={guessRounds}
					renderItem={({ item, index }) => (
						<View
							style={tw`justify-between w-full shadow-md border-primary-800 flex-row border-2 rounded-3xl p-3 my-2 bg-accent-500`}
						>
							<Text style={tw`text-lg`}>
								#{guessRounds.length - index}
							</Text>
							<Text style={tw`text-lg`}>
								Opponent's Guess{" "}
								<Text style={tw`font-bold`}>{item}</Text>
							</Text>
						</View>
					)}
					keyExtractor={item => `${item}`}
				/>
			</SafeAreaView>
		</View>
	);
};

export default GameScreen;
