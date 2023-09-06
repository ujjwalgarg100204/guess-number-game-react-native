import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import tw from "../lib/tailwind";
import { ClassInput } from "twrnc/dist/esm/types";

type Props = { children: React.ReactNode; style?: ClassInput };

const InstructionText = ({ children, style }: Props) => {
	return (
		<Text style={tw.style(`text-accent-500 text-2xl`, style)}>
			{children}
		</Text>
	);
};

export default InstructionText;
