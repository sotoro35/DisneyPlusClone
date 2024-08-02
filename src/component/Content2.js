import {styled} from 'styled-components'
const Content2= ()=>{
    return (
        <Container>
            <div>
            <h1>취향에 따라 골라보는 다양한 콘텐츠가 모두 한<br/>자리에</h1>
            <h5>디즈니+는 디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star의 최고 콘텐츠들을 모두 한곳에 모아 제공<br/>합니다</h5>
            </div>
        
            <img alt="contentImage" src="https://cnbl-cdn.bamgrid.com/assets/b25894c29d8b0a3dc97f64949bbba9d526278fdf57364cb68587712ea3925205/original"></img>
        </Container>

    )
}

const Container= styled.div`
    
    width: 87%;
    height: 650px;
    margin: 20rem auto ;
    display: flex;

        div{
            height: 100%;
            flex-grow: 1;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            h1{
                font-size: 36px;
            }

            h5{
                color: darkgray;
                font-size: 16px;
                margin-top: 20px;
            }
        }

        img{
            margin: 10px;
            flex-grow: 1;
        }
    



`

export default Content2