import ProductCard from '../components/ProductCard'
import { Props } from '../types/Navigation'

export default function SingleProduct({ route }: Props<'singleProduct'>) {
    return (
        <ProductCard
            fruit={route.params.fruit}
        />
    )
}