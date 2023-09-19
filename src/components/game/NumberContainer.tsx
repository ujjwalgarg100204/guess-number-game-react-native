import React from "react";
import { View, Text, Dimensions } from "react-native";
import tw from "../../lib/tailwind";

type Props = { children: React.ReactNode };

const deviceWidth = Dimensions.get("window").width;

const NumberContainer = ({ children }: Props) => {
	return (
		<View
			style={tw.style(
				`border-4 border-accent-500 rounded-md m-6 items-center justify-center p-6`,
			)}
		>
			<Text style={tw`text-accent-500 text-4xl font-bold`}>
				{children}
			</Text>
		</View>
	);
};

export default NumberContainer;
