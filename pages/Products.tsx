import { ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';
import fruits from '../repository/products'

export default function Products() {
    return(
        <ScrollView>
            {
                fruits.map(fruit => {
                    return (<ProductCard fruit={fruit} />)
                })
            }
        </ScrollView>
    )
}