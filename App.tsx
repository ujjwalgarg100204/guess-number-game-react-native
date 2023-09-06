import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./src/screen/StartGameScreen";
import tw from "./src/lib/tailwind";
import { useState } from "react";
import GameScreen from "./src/screen/GameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState<number | null>(null);

	const pickedNumberHandler = (num: number) => {
		setUserNumber(num);
	};

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
	if (userNumber) screen = <GameScreen />;

	return (
		<LinearGradient
			colors={[tw.color("maroon")!, tw.color("yellow")!]}
			style={tw`flex-1`}
		>
			<ImageBackground
				source={require("./assets/images/background.jpg")}
				resizeMode="cover"
				style={tw`flex-1`}
				imageStyle={tw`opacity-20`}
			>
				{screen}
			</ImageBackground>
			<StatusBar style="auto" />
		</LinearGradient>
	);
}
