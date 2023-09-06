import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";

type Props = { children: React.ReactNode };

const NumberContainer = ({ children }: Props) => {
	return (
		<View
			style={tw`border-4 border-accent-500 rounded-md p-6 m-6 items-center justify-center`}
		>
			<Text style={tw`text-accent-500 text-4xl font-bold`}>
				{children}
			</Text>
		</View>
	);
};

export default NumberContainer;
