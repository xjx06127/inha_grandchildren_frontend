import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Navigator from "../Navigator";
import TestNavigator from "../pages_Test/TestNavigator";
import "../pages_Test/Bar.css";

const Result = () => {
  const navigate = useNavigate();
  const { OX, OX2, OX3, OX4, OX5 } = useParams();

  return (
    <div>
      <h1>냥</h1>
    </div>
  );
};

export default Result;
