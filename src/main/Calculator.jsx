import React, { Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'
export default class Calculator extends Component {

    /*Limpar o display*/
    clearMemory(){
        console.log('limpar')
    }

    /*Se ele colocou divisão, multiplicação, adição ou subtração*/
    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){

    }

    render() {
        return(
            <div className="calculator">
                <Display value={100}/>
                <Button label="AC"/>
                <Button label="/"/>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="*"/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="_"/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+"/>
                <Button label="0"/>
                <Button label="."/>
                <Button label="="/>
            </div>
        )
    }
}