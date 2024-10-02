import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Fruit } from "../repository/types";

export type RootStackParamList = {
    products: undefined;
    singleProduct: { fruit: Fruit};
};
export type Props<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;