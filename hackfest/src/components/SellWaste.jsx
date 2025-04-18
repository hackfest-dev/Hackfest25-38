import React from 'react';
import { useForm } from 'react-hook-form';
import './Sellwaste.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Sellwaste() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = React.useState('');

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('productName', data.productName);
    formData.append('productDescription', data.productDescription);
    formData.append('productPrice', data.productPrice);
    formData.append('productQuantity', data.productQuantity);
    formData.append('productImage', data.productImage[0]); 

    try {
      const res = await axios.post('http://localhost:3001/api/sellwaste', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setSuccessMsg('Added your waste details successfully!');
      reset(); 
      navigate('/address', { state: data }); 
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <div className="sell">
      <h1>Please add your Selling waste details</h1>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form first">
            <div className="details personal">
              <div className="fields">
                <div className="input-field">
                  <label>Product Name</label>
                  <input
                    type="text"
                    placeholder="Enter your product name"
                    {...register("productName", {
                      required: "Product name is required",
                      minLength: {
                        value: 3,
                        message: "Product name must be at least 3 characters"
                      }
                    })}
                  />
                  {errors.productName && <p className="error red">{errors.productName.message}</p>}
                </div>

                <div className="input-field">
                  <label>Product Description</label>
                  <input
                    type="text"
                    placeholder="Enter your product description"
                    {...register("productDescription", {
                      required: "Product description is required",
                      minLength: {
                        value: 10,
                        message: "Description must be at least 10 characters"
                      }
                    })}
                  />
                  {errors.productDescription && <p className="error red">{errors.productDescription.message}</p>}
                </div>

                <div className="input-field">
                  <label>Product Price</label>
                  <input
                    type="number"
                    placeholder="Enter your product price"
                    {...register("productPrice", {
                      required: "Price is required",
                      min: {
                        value: 0,
                        message: "Price cannot be negative"
                      }
                    })}
                  />
                  {errors.productPrice && <p className="error red">{errors.productPrice.message}</p>}
                </div>

                <div className="input-field">
                  <label>Product Quantity (in KG)</label>
                  <input
                    type="number"
                    placeholder="Enter your product quantity"
                    {...register("productQuantity", {
                      required: "Quantity is required",
                      min: {
                        value: 1,
                        message: "Quantity must be at least 1"
                      }
                    })}
                  />
                  {errors.productQuantity && <p className="error red">{errors.productQuantity.message}</p>}
                </div>

                <div className="input-field">
                  <label>Product Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("productImage", {
                      required: "Product image is required",
                      validate: {
                        acceptedFormats: (files) =>
                          ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
                          "Only PNG, JPEG, and GIF files are allowed",
                      }
                    })}
                  />
                  {errors.productImage && <p className="error red">{errors.productImage.message}</p>}
                </div>
              </div>
            </div>

            <button type="submit" className="nextBtn">
              <span className="btnText">Add Product</span>
              <i className="uil uil-navigator"></i>
            </button>

            {successMsg && <p className="success green">{successMsg}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sellwaste;
