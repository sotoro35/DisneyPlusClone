import {styled} from 'styled-components'
import { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

 // 포스터경로가 오기에 기본 주소가 필요함
  // 기본경로: https://image.tmdb.org/t/p/크기/포스터경로
  // 크기 : /w400
  // 포스터 경로: /z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg

const Content3= (props)=>{
    const [translateX, setTranslateX] = useState(0);


  const handleLeftClick = () => {
        if (translateX < 0) { // 추가된 코드
            setTranslateX(translateX + 700);
        }
    };

    const handleRightClick = () => {

        if(translateX > -700 * 3) { // 수정된 코드
            setTranslateX(translateX - 700);
        }
        // if (translateX > -300 * (list.length - 3)) { // 수정된 코드
        //     setTranslateX(translateX - 300);
        // }
    };

    return (
        <Container>
            <div>
                <h1>디즈니+ 오리지널과 블록버스터 영화</h1>
                <h5>다른 어디에서도 볼 수 없는 디즈니+ 오리지널을 만나보세요. 디즈니, 픽사, 마블, 스타워즈의 최고 인기 영화도 마음껏 즐길 수 있습니다.</h5>
            </div>

            <div className='Container2'>
            <MdOutlineKeyboardDoubleArrowLeft onClick={handleLeftClick} className='button'>왼쪽</MdOutlineKeyboardDoubleArrowLeft>
            <div className='Container3'>

            <div className="CardMovie" style={{ transform: `translateX(${translateX}px)` }}>
                {
                    props.movies.slice(0,20).map((movie,i)=>{
                        return <Movie movie={movie} key={movie.id}/>
                    })
                }
            </div>

            </div>
            <MdOutlineKeyboardDoubleArrowRight onClick={handleRightClick} className='button'>오른쪽</MdOutlineKeyboardDoubleArrowRight>
            </div>
           
        </Container>
    )
}

export default Content3

const Movie= ({movie})=>{

    const imageUrl= "https://image.tmdb.org/t/p/w400"
    const poster= movie.poster_path


    return (
        <Card src={imageUrl + poster}></Card>

    )
}

const Card = styled.img`

height: 250px;
border-radius: 4px;
margin: 0 10px;

`

const Container= styled.div`

    width: 100%;

    div{
        text-align: center;
        color: white;
        h1{
            margin: 20px 0;
            font-size: 37px;
        }

        h5{
            font-size: 15px;
            margin: 20px 0;
        }
    }

    .Container2{
        width: 100%;
        height: 300px;
        display: flex;
        overflow: visible;
        align-items: center;
    }

    .button{
        width: 30px;
        height: 75%;
        padding: .5rem;
        margin: 0 .5rem;
        color: white;
        cursor: pointer;
        box-sizing: content-box;

        &:hover{
                transform: scale(1.1);
                background-color: rgba(27, 29, 41, 1);
            }

        /* &[current]{
            background-color: darkgray;
        }         */
        }

    .Container3{
        width: 100%;
        flex-grow: 1;
        overflow: hidden;
    }

    

.CardMovie{
    width: 100%;
    height: 250px;
    display: flex;
    overflow-x: visible;
    transition: transform 0.7s ease-in-out;

}


`

