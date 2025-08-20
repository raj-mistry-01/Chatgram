import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"

import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const t = <h1>hi</h1>;


const Employee = (props) => {
  return (
    <>
    <h1>Salary is : {props.name}</h1>
    <h2>Name is : {props.salary}</h2>
    </>
  )
}

class EmpClass extends React.Component {
  render() {
    return(
      <>
      Name is : {this.props.name}
      <br />
      Salary is : {this.props.salary}
      </>
    )
  }
}

const EmpTag = <Employee name = "raj" salary = "1L"></Employee>
const EmpTag1 = <EmpClass name = "raj" salary = "1L"></EmpClass>


const MovieSelect = () => {


  const [selectedMovie, setselectedMovie] = useState(null)
  const [selectedSeats, setselectedSeats] = useState([])

  const movies = [
    {id : 1 , availableSeats : 100},
    {id : 2 , availableSeats : 50},
    {id : 3 , availableSeats : 70}
  ]


  const handleMovieSelect = (mov) => {
    setselectedMovie(mov.id)
    setselectedSeats([])
  }

  const handleSeatSelect = (index) => {
    setselectedSeats([...selectedSeats , index])
  }

  
  return(
    <>
    <h2>Select Your Movie</h2>
      <ul>
        {
          movies.map(mov => {
            return <li key={mov.id} onClick={()=> handleMovieSelect(mov)}>Movie : {mov.id}</li>
          })
        }
      </ul>

    <div>
      <h3>Seleced movie : 
        {
          selectedMovie ? 
          (
            <>
            {selectedMovie}
            <div>
              <br />
              {
                Array.from({length : movies[selectedMovie-1].availableSeats} , (_ , index)=> {
                  return <button key={index} onClick={() => handleSeatSelect(index+1)} disabled={selectedSeats.includes(index+1)}> {index+1}</button>
                })
              }
            </div>
            </>
          )
          :
          ("Please select A movie first")
        }
      </h3>
    </div>

    <div>
      {
        selectedMovie && 
        (
          <div>
            {
              selectedSeats.length === 0 ? 
              ("No seats selected")
              : 
              (`Select seats are : ${selectedSeats.join(', ')}`)
            }
          </div>
        )
      }
    </div>
    </>
  )
} 

const mov = <MovieSelect></MovieSelect>





root.render(mov);
