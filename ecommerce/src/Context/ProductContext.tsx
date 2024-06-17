import React, { useState } from "react"; // Corregir import de useState
import { Product, ProductContextState } from "../Types/Products"; // Ajustar ruta y nombre de archivo según corresponda

interface ProviderProps {
    children: React.ReactNode;
}

export const Context = React.createContext<ProductContextState | null>(null);

const ProductProvider: React.FC<ProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartNumber, setCartNumber] = useState<number>(0);
    const [search, setSearch] = useState<string>('');

    const addProductToCart = (product: Product) => {
        const existingProduct = products.find(p => p.itemId === product.itemId);

        if (existingProduct) {
            existingProduct.amount += 1;
            setProducts([...products]);
        } else {
            const newProduct: Product = {
                ...product,
                amount: 1,
            };
            setProducts([...products, newProduct]);
        }
    };

    const removeProductFromCart = (productId: number) => {
        setProducts(products.filter(product => product.itemId !== productId));
    };

    const removeAllProductsFromCart = () => {
        setProducts([]);
    };

    const itemInCart = (): number => {
        return cartNumber;
    };

    const updateAmount = (productId: number, n: number) => {
        const updatedProducts = products.map(product => {
            if (product.itemId === productId) {
                return {
                    ...product,
                    amount: product.amount + n,
                };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const cartTotal = (): number => {
        let total = 0;
        products.forEach(product => {
            total += product.price * product.amount;
        });
        return total;
    };

    const itemSearch = (searchTerm: string) => {
        setSearch(searchTerm);
    };

    return (
        <Context.Provider
            value={{
                products,
                addProductToCart,
                removeProductFromCart,
                itemInCart,
                cartTotal,
                cartNumber,
                updateAmount,
                search,
                removeAllProductsFromCart,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ProductProvider;
