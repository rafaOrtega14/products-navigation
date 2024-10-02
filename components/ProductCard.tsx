import { View, StyleSheet, Pressable } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { Fruit } from '../repository/types';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({ fruit }: { fruit: Fruit}) {
    const navigation = useNavigation()
    return(
        <View>
            <Card>
                <Card.Content>
                    <Pressable onPress={() => navigation.navigate('singleProduct', { fruit })}>
                        <Text style={styles.link} variant="titleLarge">{fruit.name}</Text>
                    </Pressable>
                    
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <View style={styles.productInfoContainer}>
                        <Text variant="bodyMedium">{fruit.description}</Text>
                        <Text variant='titleMedium'>{fruit.price}€</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    link: {
        padding: 5,
        color: 'blue'
    },
    productInfoContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
});