import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(data);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        /* navigate("/cart"); */
    }

    return ( 
    <div className="home-container">
        { isLoading ? <p>Loading</p> : error ? 
        <p>An error occured..</p> : 
        <>

        <h2>Nye Produkter</h2>
        <div className="products">
            {data?.map( product => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                        <span>{product.description}</span>
                        <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>Legg i handlekurv</button>
                </div>
            ))}
        </div>

        </> }
    </div>
    );
}
 
export default Home;