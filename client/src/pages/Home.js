import React from 'react'
import axios from 'axios';
import {useEffect , useState } from 'react';

function Home() {

    const [listOfMAESitRep, setListOfMAESitRep] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/maesitrep").then((response) => {
            setListOfMAESitRep(response.data);
        });
      }, []);

      return (
        <div>
          {listOfMAESitRep.map((value, key) => {
            return (
              <div className="sitrep">
                <div className="attendancest1"> {value.attendancest1} </div>
              </div>
            );
          })}
        </div>
      );
    }
    
    export default Home;
