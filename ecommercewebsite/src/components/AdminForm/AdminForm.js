import React, { useEffect, useState } from "react";
import "./adminForm.scss";
import { useForm } from "react-hook-form";
import { Button, Form, NavLink } from "react-bootstrap";
import classNames from "classnames";
import { useCreateCard, useGetCardByUuid, useUpdatedCard } from "../../query/user/adduser/userquery";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AdminTable from "../AdminTable/AdminTable";
import { useRecoilState } from 'recoil'
import { formState } from '../../recoils/Store'

const AdminForm = () => {
  const [isHeaderPresent, setIsHeaderPresent]= useRecoilState(formState);
  const navigate = useNavigate();
  const{mutateAsync: createCardMutateAsync} = useCreateCard();
  const { mutateAsync: updateCardMutateAsync } = useUpdatedCard();

  const params = useParams();
  const{data: GetCardDataByUUid} = useGetCardByUuid(params.id);


  // console.log(data);

  const[imagee, setImagee] = useState();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset
  } = useForm();

  useEffect(()=> {
    reset(GetCardDataByUUid)
  },[GetCardDataByUUid])

  useEffect(()=> {
    setIsHeaderPresent(false);
  },[])


  const onSubmit = (data,e) => {
    debugger;
    if(params.id){
      updateCardMutateAsync({...data, "image":imagee, "card_uuid": params.id}).then(() => navigate("/admin-table"));
    }
    else{
      createCardMutateAsync({...data, "image":imagee});
    }
    e.target.reset();
  };
  const handleOnChange = (e) => {
    const [imageFile] = e.target.files;
    const fileReader = new FileReader();
    fileReader.onload = function () {
      var cardImage = fileReader.result;
      console.log(cardImage);
      setImagee(cardImage);
    };
    fileReader.readAsDataURL(imageFile);
  }

  return (
    <>
      <div className="adminform-main-outer-div">
        <h3>ADMIN PORTAL</h3>
        <Link to="/admin-table">
          <Button className="btn btn-success mb-3">Show me all card</Button>
        </Link>
        <div className="custom-form-element">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              {...register("title", {
                required: "Please enter the title.",
                minLength: {
                  value: 2,
                  message: "Please enter title of minimum 2 characters."
                },
              })}
              className={classNames({ "is-invalid": errors.title })}
            />
            {errors.title?.type === "required" && (
              <div className="text-danger">{errors.title.message}</div>
            )}
            {errors.title?.type === "minLength" && (
              <div className="text-danger">{errors.title.message}</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price : </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              {...register("price", {
                required: "Please enter the price.",
              })}
              className={classNames({ "is-invalid": errors.price })}
            />
            {errors.price?.type === "required" && (
              <div className="text-danger">{errors.price.message}</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3 radio-btn-element" controlId="formBasicGender">
          <Form.Label>Gender : </Form.Label>
          <Form.Check 
            type="radio"
            id='default-radio'
            label='Male'
            value='male'
            className="px-5"
            {
              ...register("gender",{
                required: "Please fill the gender."
              })
            }
          />
          <Form.Check 
            type="radio"
            id='default-radio'
            label='Female'
            value='female'
            {
              ...register("gender",{
                required: "Please fill the gender."
              })
            }
          />
          </Form.Group>
          {
              errors.gender?.type && (
                <div className="text-danger">{errors.gender.message}</div>
              )
          }
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Insert Image : </Form.Label>
            <Form.Control type="file" size="sm" 
            {
              ...register("image",{
                required: "Please browse the image."
              })
            }
            onChange={handleOnChange}
            className={classNames({ "is-invalid": errors.price })}
            />
          </Form.Group>
          {
              errors.image?.type && (
                <div className="text-danger">{errors.image.message}</div>
              )
          }
          <Button variant="primary" type="submit">
          {
              params.id ? "Update" : "Submit"
          }
          </Button>
        </Form>
        </div>
      </div>
    </>
  );
};

export default AdminForm;
