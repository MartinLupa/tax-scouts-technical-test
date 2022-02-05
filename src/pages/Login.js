import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setLoggedUser } from "../redux/actions/actions";

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 0;
  }
  form {
    background-color: #a6f2d3;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    border: 1px solid lightgrey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    label {
      margin-top: 10px;
    }
    input {
      padding-left: 5px;
      height: 40px;
      margin-top: 5px;
      border-radius: 2px;
      border: 1px solid lightgrey;
      &:focus {
        outline: none;
      }
    }
    button {
      color: white;
      height: 40px;
      margin-top: 5px;
      padding: 10px;
      background-color: rgb(0, 60, 215);
      border: 1px solid lightgrey;
      border-radius: 2px;
      &:hover {
        transition: 0.3s;
        background-color: rgb(0, 60, 255);
      }
    }
  }
`;

const formInitialState = { email: "", password: "" };

export const Login = () => {
  const [loginForm, setLoginForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const inputName = e.target.id;
    const inputValue = e.target.value;
    setLoginForm({ ...loginForm, ...{ [inputName]: inputValue } });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setLoggedUser(loginForm));
    setLoginForm(formInitialState);
    navigate("/books");
  };

  return (
    <StyledLogin>
      <form onSubmit={handleLogin} className="login-form" action="">
        <p>Please use any email valid format + password to Log in</p>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required="required"
          onChange={handleInputChange}
          placeholder="Insert your email"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required="required"
          onChange={handleInputChange}
          placeholder="Insert your password"
        />

        <button className="btn-success" type="submit">
          Login
        </button>
      </form>
    </StyledLogin>
  );
};
