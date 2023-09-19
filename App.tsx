import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./src/screen/StartGameScreen";
import tw from "./src/lib/tailwind";
import { useCallback, useState } from "react";
import GameScreen from "./src/screen/GameScreen";
import GameOverScreen from "./src/screen/GameOverScreen";
import { useFonts } from "expo-font";
import { useDeviceContext } from "twrnc";

export default function App() {
	useDeviceContext(tw);
	const [userNumber, setUserNumber] = useState<number | null>(null);
	const [gameIsOver, setGameIsOver] = useState<boolean>(true);
	const [rounds, setRounds] = useState<null | number>(null);

	const [loaded, error] = useFonts({
		"OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
		"OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	const pickedNumberHandler = useCallback((num: number) => {
		setUserNumber(num);
		setGameIsOver(false);
	}, []);

	const startNewGameHandler = useCallback(() => {
		setUserNumber(null);
		setGameIsOver(false);
		setRounds(null);
	}, []);

	const gameOverHandler = useCallback((rounds: number) => {
		setGameIsOver(true);
		setRounds(rounds);
	}, []);

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
	if (userNumber)
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	if (gameIsOver && userNumber)
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				roundsNumber={rounds!}
				onStartNewGame={startNewGameHandler}
			/>
		);

	return loaded ? (
		<LinearGradient
			colors={[tw.color("primary-700")!, tw.color("accent-500")!]}
			style={tw`flex-1`}
		>
			<ImageBackground
				source={require("./assets/images/background.jpg")}
				resizeMode="cover"
				style={tw`flex-1`}
				imageStyle={tw`opacity-20`}
			>
				<SafeAreaView style={tw`flex-1`}>{screen}</SafeAreaView>
			</ImageBackground>
			<StatusBar style="auto" />
		</LinearGradient>
	) : (
		<SafeAreaView style={tw`flex-1 items-center justify-center`}>
			<Text style={tw`font-bold text-3xl`}>Loading...</Text>
		</SafeAreaView>
	);
}
