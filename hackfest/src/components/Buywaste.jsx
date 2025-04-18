import React, { useEffect } from "react";
import Card from './Card'

function Buywaste() {
    const [product,setProduct]=React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:5174/sellwaste');
            const data = await response.json();
            console.log(data);
            setProduct(data);
        }
        catch(error){
            console.error(
                'Error fetching data:',error);
        }
    }
    fetchData();
}, []);

return (
    <>
    {
        Array.isArray(product) && product.map((item) => (
            <Card
            key={item._id}
            productImage={`data:${item.productImage.contentType};base64,$(item.productImage.data).toString('base64')}`}
            productName={item.productName}
            productDescription={item.productDescription}
            productPrice={item.productPrice}
            productQuantity={item.productQuantity}
            />
        ))
    }
    </>
)
}

export default Buywaste