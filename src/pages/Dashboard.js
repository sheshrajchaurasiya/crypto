import React from 'react'
import {useEffect, useState } from "react";
import axios from 'axios';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';

function DashboardPage() {
  const [coins, setCoins] = useState([]);


  useEffect(() => {
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    // )
    //   .then((res) => res.json())
    //   .then((data) => {});

    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
      .then((response) => {
        //Code for handling the response
        console.log("RESPONSE>>>",response);
        setCoins(response.data);
      })
      .catch((error) => {
        //Code for handling the error
        console.log("ERROR",error);
      });
  }, []);
  return (
    <div>
      <Header />
      <TabsComponent coins={coins}/>
    </div>
  )
}

export default DashboardPage;
