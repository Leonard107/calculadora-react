import React, { Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    /*Valor do display começa com 0*/
    displayValue: '0',
    /*Propriedade para saber se ele precisa ou não limpar o display*/
    clearDisplay: false,
    /*Variavel que vai armazenar a operação*/
    operation: null,
    /*Array com dois valores*/
    values: [0, 0],
    /*Qual o valor do indice estou manipulando, valor 0 ou 1*/
    current: 0
}

export default class Calculator extends Component {

    /*Criei um clone desse objeto e atribui a state*/
    state = { ...initialState }

    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

    }

    /*Limpar o display*/
    clearMemory(){
        /*Voltando o estado, para o estado inicial*/
        this.setState({ ...initialState })
    }

    /*Se ele colocou divisão, multiplicação, adição ou subtração*/
    setOperation(operation){
        if (this.state.current === 0){
            /*Pega a operação seta o current para a posição 1 e limpa o display*/
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            /*Sempre que uma operação for executada o resultado vai ser armazenado no indice 0 e o
            valor do indice 1 vai ser zerado*/
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)

            } catch (e){
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay : !equals,
                values
            })

        }
    }

    /*adicionar digito*/
    addDigit(n){
        /*Se o usuario digitou um "." e no display já tem um "." incluido pelo usuario, saia da função e não faça mais nada*/
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }
        
        /*Vou limpar display se tiver 0 eu vou limpar o display estiver true*/
        const clearDisplay = this.state.displayValue === '0' 
            || this.state.clearDisplay
        /* Se o clearDisplay for verdadeiro ele vai ser vazio, se não for, pego o valor atual que está no display*/
        const currentValue = clearDisplay ? '' : this.state.displayValue
        /*Colocando o valor corrente mais a variavel n que foi digitada*/
        const displayValue = currentValue + n  
        /*Mudando o estado da nossa aplicação e deixando o clearDisplay como false para deixar adicionar os numeros*/
        this.setState({displayValue, clearDisplay: false})  

        if(n !== '.') {
            /*Peguei o indice do valor que estou alterando*/
            const i = this.state.current
            /*Converti para float*/
            const newValue = parseFloat(displayValue)
            /*Clonei */
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="_" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}