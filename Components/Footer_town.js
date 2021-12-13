import Image from 'next/Image';
import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature : 0,
            temp_cel : 0,
            temp_fa: 0,
            temp_sel:"C"
        }
        this.fetchData = this.fetchData.bind(this);
    }
            
        fetchData() {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=614a8ae936cde996adcc6864cb46b560")
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    //console.log(response.main.temp);
                    this.setState({
                        temperature: response.main.temp,
                        temp_cel:Math.round(response.main.temp-273.15),
                        temp_fa:Math.round((response.main.temp-273.15)*(9/5)+32)
                    })
                    
                });
        }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <div>
                <div className="pl-12">
                   
                { 
                    (this.state.temp_cel)<=10?
                    <Image src="/cold.png" alt="Cold" height="120" width="120"/> :
                        this.state.temp_cel > 10 & this.state.temp_cel < 20 ?
                                <Image src="/mild.png" alt="Mild" height="120" width="120"/> : 
                                    <Image src="/sunny.png" alt="Sunny" height="120" width="120"/>
                                   
                }  
                </div>
                
                <div className="text-xl font-bold pl-20 pb-10">
                <h1 className="pl-4">{this.state.temp_sel === 'C' ? (this.state.temp_cel) : (this.state.temp_fa)}</h1>
                <button className="p-2 font-bold focus:ring-2 focus:ring-blue-600 visited:text-purple-600 outline-8 rounded-full" onClick={()=>this.setState({temp_sel:"C"})}>°C</button>
                <button className="p-2 focus:ring-2 focus:ring-blue-600 font-bold visited:text-purple-600 outline-8 rounded-full" onClick={()=>this.setState({temp_sel:"F"})}>°F</button>                
                </div>     
            </div>
            
            
        )
    }
}

export default Footer