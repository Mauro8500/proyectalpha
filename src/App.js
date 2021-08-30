import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

const url="https://localhost:44302/api/empresas/";

class App extends Component {

state={
  data:[]
}

  peticionGet=()=>{
    axios.get(url).then(response=>{
      console.log(response.data)
    })
  }

  componentDidMount(){
      this.peticionGet();
  }


  render(){
   return(
    <div className="App">
      <br />
      <button className="btn btn-succes">Agregar tarea</button>
    <br /><br />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>País</th>
            <th>Capital</th>
            <th>Acciones</th>
          </tr>

        </thead>
      </table>
    </div>
   ); 
  }
}