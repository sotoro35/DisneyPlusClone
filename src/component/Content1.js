import {styled} from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Content1= ()=>{

    const navigate= useNavigate()
    const goMovieDetail= (no)=>{
        navigate('/movie/'+ no)
    }

    return(
        <Container>

            <div className='CardMovie'>
                <h1>인기 콘텐츠</h1>
                <img alt='bestImage' onClick={()=>{goMovieDetail(1)}} src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/391C5251C863F2EA1EBBAC0DB9905255ECF73E4D6FC0D9EA783CA29F5C1E57D5/scale?width=630&aspectRatio=1.78&format=webp'></img>
                <img alt='bestImage' onClick={()=>{goMovieDetail(2)}} src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/510E42CBA8DC82E0356E3A49E7BAA01A696BFD0CA36D5561BDA47A16F892E825/scale?width=630&aspectRatio=1.78&format=webp'></img>
                <img alt='bestImage' onClick={()=>{goMovieDetail(3)}} src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F6C40900684C9964C81DBCB7553C06C809B6397F923A00E19EE0F580B6E6CF8/scale?width=630&aspectRatio=1.78&format=webp'></img>
                <img alt='bestImage' onClick={()=>{goMovieDetail(4)}} src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A8087978F49D5E75C74DA8A7BD4976E3E978D3D29306EFABCDEA81CB59F9245F/scale?width=630&aspectRatio=1.78&format=webp'></img>
                <img alt='bestImage' onClick={()=>{goMovieDetail(5)}} src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EC8DC059F3442D52FF51A91B19765567676E370B7A10B60BB209BB29E58B19C/scale?width=630&aspectRatio=1.78&format=webp'></img>
            </div>
            

            <div className="content">
                <div>
                    <h2>1,200편 이상의 영화</h2>
                    <h5>어워드 수상에 빛나는 블록버스터 및 단독 공개작 포함</h5>
                </div>

                <div>
                    <h2>20,000편 이상의 에피소드</h2>
                    <h5>코미디, 드라마, 범죄, 실화 등 다양한 장르</h5>
                </div>

                <div>
                    <h2>신규 및 단독 공개 콘텐츠</h2>
                    <h5>매주 새로운 영화 및 시리즈 공개</h5>
                </div>

                <div>
                    <h2>다양한 콘텐츠 저장 가능</h2>
                    <h5>최대 10개의 기기에서 원하는 콘텐츠를 자유롭게 저장</h5>
                </div>
            </div>
            
        </Container>
    )
}

export default Content1

const Container= styled.div`

.content{

    display: flex;
    margin: 7rem;

    div{
        color: white;
        text-align: center;
        flex-grow: 1;
        
        border-right: 1px solid white;

        h2{
            font-size: 1.7rem;
        }

        h5{
            margin-top: 30px;
            color: darkgray;
            font-size:15px;
        }

        &:nth-last-child(1){
        border-right: 0;
    }
    }

}

.CardMovie{
    text-align: center;
    margin-top: 2rem;

        h1{ 
            color:white;
            font-size: 2.3rem;
            margin-bottom: 20px;
        }

        img{
            
            height: 180px;
            border-radius: 4px;
            margin: 0 10px;
            cursor: pointer;
            transition: transform 0.3s ease;

            &:hover{
                transform: scale(1.1);

            }
        }

    }
    


`