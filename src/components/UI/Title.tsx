import React from "react";
import { Text } from "react-native";
import tw from "../../lib/tailwind";

type Props = {
	children?: React.ReactNode;
};

const Title = ({ children }: Props) => {
	return (
		<Text
			style={tw`text-2xl font-bold text-white text-center border-2 border-white p-3`}
		>
			{children}
		</Text>
	);
};
export default Title;
