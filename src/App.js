import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm'
import ViewAll from './components/ViewAll'
import { useDispatch, useSelector } from 'react-redux';
import {navigate} from './app/formSlice'

export default function App(){
  let form = useSelector((state)=>state.form),view = <ViewAll/>,formView =
  <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <InvoiceForm form={form}/>
        </Container>
  </div>
  useEffect(()=>{
    render()
  },[form])
  let render = ()=>{
    return form[0]?formView:view
  }
  return(
    <>
    {render()}
    </>
  );
}