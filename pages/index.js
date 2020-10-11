
import Layout from './components/baselayout'
import fetch from 'isomorphic-unfetch'
import HEAD from 'next/head'
import ReactPlayer from "react-player"
import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col } from 'reactstrap';



const Index = (props) => (
  <Layout>
      <head>
          <title>Indo Covid-19</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
      </head>

      {props.confirmed.map((corona) => (
        <div>
          <br></br>
          <h3><center><u>DATA KASUS HARI INI</u></center> </h3>
          <p id="sumber"><center>Update data pukul 16.00 WIB</center></p>
         <h4 id="conf">Terkonfirmasi Positif : {corona.confirmed}</h4>
         <h4 id="sembuh">Sembuh : {corona.recovered}</h4>
         <h4 id="active">Kasus masih aktif : {corona.active}</h4>
         <h4 id="meninggal">Meningggal : {corona.deaths} </h4> <br></br>
         <center>
         <ReactPlayer width="300px" height="200px" frameborder="0" 
         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
           url= "https://www.youtube.com/embed/hsls6DzwVGE"  
         />
         <p id="sumber"><center>Video dari CNN Indonesia</center></p>
         </center>   
        </div>
  ))}

  </Layout>
)

Index.getInitialProps = async function (){
  const res = await fetch('https://covid19.mathdro.id/api/countries/idn/confirmed')
  const data = await res.json()
  return {confirmed: data}
}

export default Index