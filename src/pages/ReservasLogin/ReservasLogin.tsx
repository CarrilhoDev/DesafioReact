import Header from '../../shared/components/Header/Header'
import Footer from '../../shared/components/Footer/Footer'
import { Button } from '../../shared/styledComponents/index'
import { Label } from '../../components/Main/styledComponents/index'
import React from 'react'
import FormConsultarReservas from '../../components/FormConsultarReservas/FormConsultarReservas'

const ReservasLogin = () => {

    return(
    <>
        <Header/>
        <FormConsultarReservas/>
        
        <Button 
            negativeMargin={-5} 
            width={250}
            onClick={()=>{}}
        >
        CONSULTAR
        </Button>
        <Footer />
    </>
    )
}
export default ReservasLogin;