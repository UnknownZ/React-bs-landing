import React, { useState } from 'react'
import CardContainer from './component/CardContainer/CardContainer.jsx'
import Card from './component/Card/Card.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import Jumbotron from './component/Jumbotron/Jumbotron.jsx'
import Footer from './component/Footer/Footer.jsx'

function App() {
  const tarjetas = [
    {
      title: "Your title",
      imageURL: "https://via.placeholder.com/500x325",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro ex animi, est rem asperiores dolores, impedit aliquid tempora nihil distinctio dolor pariatur quidem molestias veritatis sapiente iure eius. Quod!",
      btnLabel: "Go to Google",
      btnUrl: "https://www.google.com"
    },
    {
      title: "What a title!",
      imageURL: "https://via.placeholder.com/500x325",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae doloribus mollitia veritatis deleniti laboriosam ad ratione repellat, ipsum eos iusto eum quia quibusdam ea natus voluptates eius impedit? Saepe, corrupti!",
      btnLabel: "Go to Facebook",
      btnUrl: "https://www.Facebook.com"
    },
    {
      title: "Wonderful title",
      imageURL: "https://via.placeholder.com/500x325",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ea ex sunt labore placeat voluptatem obcaecati molestiae magnam officia recusandae id, molestias laboriosam mollitia quaerat deleniti alias animi architecto adipisci.",
      btnLabel: "Go to Amazon",
      btnUrl: "https://www.amazon.com"
    },
    {
      title: "Amazing Title",
      imageURL: "https://via.placeholder.com/500x325",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab repellendus, non necessitatibus cupiditate fugiat deleniti quis commodi error a debitis facilis assumenda reiciendis, culpa est vero. Aliquid, velit dignissimos.",
      btnLabel: "Go to Github",
      btnUrl: "https://www.github.com"
    },
  ]


  return (
    <>
    <Navbar/>
    <Jumbotron/>
    <CardContainer>
      {
        tarjetas.map((item, index) => {
          return <Card key={index} title={item.title} imageURL={item.imageURL} btnLabel={item.btnLabel} description={item.description} btnUrl={item.btnUrl}></Card>
        })
      }
    </CardContainer>
    <Footer/>
    </>
  )
}
export default App