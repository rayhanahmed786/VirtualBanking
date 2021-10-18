import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-2.svg'
  
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP

} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                            <ServicesH2>Reduce expenses</ServicesH2>
                            <ServicesP>we help reduce your fess and incrase your
                            overall revenue.
                            </ServicesP>
                    </ServicesCard>
                     <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                            <ServicesH2>Reduce expenses</ServicesH2>
                            <ServicesP>we help reduce your fess and incrase your
                            overall revenue.</ServicesP>
                    </ServicesCard>
                     <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                            <ServicesH2>Reduce expenses</ServicesH2>
                            <ServicesP>we help reduce your fess and incrase your
                            overall revenue.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>            
        </ServicesContainer>
    )
}

export default Services
