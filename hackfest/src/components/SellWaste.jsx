import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import './sellWaste.css';

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




    



