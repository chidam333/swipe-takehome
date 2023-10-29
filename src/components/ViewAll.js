import { useDispatch,useSelector } from "react-redux";
import {del,modalSwitch} from '../app/allSlice'
import {navigate} from '../app/formSlice'
import {AiFillCopy,AiFillEye,AiFillEdit} from 'react-icons/ai'
import { useEffect } from "react";
import { useState } from "react";
import {change} from '../app/currentSlice'
import InvoiceModal from './InvoiceModal';
export default function ViewAll(){
    const states = useSelector((state)=>state.all)
    const dispatch = useDispatch()
    let [itemUI,setItems] = useState([])
    let modalInvoiceNo;
    let copyCur = (newState)=>{
        dispatch(change(newState))
        dispatch(navigate())
    }
    let closeModal = () =>{
        console.log("close")
        dispatch(modalSwitch({no:modalInvoiceNo,action:false}));
    }
    let openModal = () =>{
        console.log("open")
        dispatch(modalSwitch({no:modalInvoiceNo,action:true}))
    }
    useEffect(()=>{
        let arr = []
        console.log({states})
        for(let i in states){
            // console.log({i},states[i].billTo)
            arr.push(
                <li class="list-group-item position-relative border-2 border-dark mb-2" key={states[i].invoiceNumber}>
                    <InvoiceModal showModal={states[i].isOpen} closeModal={closeModal} info={states[i]} items={states[i].items} currency={states[i].currency} subTotal={states[i].subTotal} taxAmmount={states[i].taxAmmount} discountAmmount={states[i].discountAmmount} total={states[i].total} onClick={modalInvoiceNo=states[i].invoiceNumber}/>
                    <div className="item fw-bold text-secondary mb-1">{`invoiceNo.#: ${states[i].invoiceNumber}`}</div>
                    <div class="d-flex position-absolute " style={{top:'10%',right:'0%'}}>
                        <button class="btn btn-outline-danger py-1 mx-2" onClick={()=>{dispatch(del(states[i].invoiceNumber))}}>X</button>
                        <button class="btn btn-outline-primary py-1 mx-2" onClick={()=>{copyCur(states[i])}}><AiFillCopy/></button>
                        <button class="btn btn-outline-success py-1 mx-2" onClick={()=>{dispatch(del(states[i].invoiceNumber));copyCur(states[i])}}><AiFillEdit/></button>
                        <button class="btn btn-outline-secondary py-1 mx-2" onClick={()=>{openModal();modalInvoiceNo=states[i].invoiceNumber}}><AiFillEye/></button>
                    </div>
                </li>
            )
        }
        setItems(arr)
    },[states])

    return(
        <>
        <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 text-light fs-3 fw-bold ">Invoices</span>
        </div>
        </nav>
        <ul class="list-group container p-1 my-4">
            {itemUI}
        </ul>
        <button type="button" class="btn btn-outline-primary fs-5 mx-4" onClick={(e)=>{dispatch(navigate())}}>Create a new invoice</button>
        </>
    );
}
