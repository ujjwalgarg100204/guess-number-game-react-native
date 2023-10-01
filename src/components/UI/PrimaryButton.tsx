import { FC, ReactElement } from "react";
import { Text, View, Pressable } from "react-native";
import tw from "../../lib/tailwind";

type Props = { children: string | ReactElement; onPress?: () => void };
const PrimaryButton: FC<Props> = ({ children, onPress }) => {
	return (
		<View style={tw`m-1 overflow-hidden rounded-full`}>
			<Pressable
				style={({ pressed }) =>
					tw.style(
						`android:shadow-md bg-primary-600 px-4 py-2`,
						pressed && `opacity-75`,
					)
				}
				android_ripple={{ color: tw.color("primary-500") }}
				onPress={onPress}
			>
				<Text style={tw`text-center text-white`}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;
