import { useState } from "react";

import "./App.css";

import Banner from "./components/banner";
import Header from "./components/header";
import OneStopShop from "./components/onestopshop";
import ScalingData from "./components/scalingdata";
import EnterpriseReview from "./components/enterprisereview";
import StartUps from "./components/startup";
import BuildFaster from "./components/builder";
import Merchandise from "./components/merchandise";
import GetStarted from "./components/getstarted";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <OneStopShop />
      <ScalingData />
      <EnterpriseReview />
      <StartUps />
      <BuildFaster />
      <Merchandise />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
