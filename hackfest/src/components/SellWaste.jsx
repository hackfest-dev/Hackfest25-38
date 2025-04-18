import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import './SellWaste.css';

function sellWaste(){
    const {
        register,
        formState:{errors},
    
    }=useForm();
}

const [successMsg,setSuccessMsg] =useState('');
const navigate= useNavigate();
const [productname,setProductname] =useState('');
const [productDescription,setProductDescription] =useState('');
const [productPrice,setProductPrice]=useState('');
const [productQuantity,setProductQuantity] =useState('');
const [productImage,setProductImage] =useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('productname',productname);
    formData.append('productDescription', productDescription);
    formData.append('productPrice', productPrice);
    formData.append('productQuantity', productQuantity);
    formData.append('productImage', productImage);

    const goToAddressPage=() =>{
        const product ={
            productNamename : {productname},
            productDescription : {productDescription},
            productPrice : {productPrice},
            productQuantity : {productQuantity},
            productImage : {productImage},
        };
        navigate('/address',{state:product});
    };
    try{
        const res=await axios.post('XXX',formData,
        {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        setSuccessMsg('Product added successfully');

        reset();
    }catch(err){
        console.error(err);
    }
};
    return(
        <>
        <div>
            
        </div>

        </>
    )

    



