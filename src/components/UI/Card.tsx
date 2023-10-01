import React from "react";
import tw from "../../lib/tailwind";
import { View } from "react-native";

type Props = { children: React.ReactNode };

const Card = ({ children }: Props) => {
	return (
		<View
			style={tw`p-4 items-center mt-24 landscape:mt-12 bg-primary-800 mx-6 rounded-lg shadow-md`}
		>
			{children}
		</View>
	);
};

export default Card;
