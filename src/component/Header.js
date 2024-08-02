import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Header= (props)=>{

    const[image,setImage]= useState('')
    const[imgName,setimgName]= useState('')
    const[imageBar,setImageBar]= useState('dimgray')
    const user= useSelector(state=> state.userReducer.user)

    //dimgray


    const preventDefault= (event)=>{
        event.preventDefault()
    }

    const [current, setCurrent] = useState(1);

 
    const changeImage= (num,name)=>{

        switch(num){
            case 1: 
                setImage('https://cnbl-cdn.bamgrid.com/assets/639d2100b37e1653498191d7c9e666d2acb4f22a897cc703caab35c5e6613630/original');
                setimgName(name)
                setCurrent(1)
                break;

            case 2: 
                setImage('https://cnbl-cdn.bamgrid.com/assets/b290aab84e9c2de7e634882a21e46977ae6751972e635cd0beec9aed6a855a4d/original');
                setimgName(name)
                setCurrent(2)
                break;

            case 3: 
                setImage('https://cnbl-cdn.bamgrid.com/assets/a5eba364a8b311deccd7b3e022ec016ee986d18d8703184dc9502202e1f379f9/original');
                setimgName(name)
                setCurrent(3)
                break;

            case 4: 
                setImage('https://cnbl-cdn.bamgrid.com/assets/95ae95f78a0ce582eb068f80636a875a96845e9472877d8aced73bbeda55dd7d/original');
                setimgName(name)
                setCurrent(4)
                break;

            case 5: 
                setImage('https://cnbl-cdn.bamgrid.com/assets/ee811934038fba409b0011cd1d11c7c2072b40cbe566558feeb865dea28eb8c1/original');
                setimgName(name)
                setCurrent(5)
                break;

            default:
                console.error('Invalid number'); // num이 1~5가 아닌 경우 처리
                break;  
            
        }
    }

    useEffect(()=>{
        setImage('https://cnbl-cdn.bamgrid.com/assets/639d2100b37e1653498191d7c9e666d2acb4f22a897cc703caab35c5e6613630/original')
        setimgName('삼식이 삼촌')
    },[])

        const navigate= useNavigate()
        const goSignup= ()=>{
            navigate('/login')
        }

        const click= (event)=>{
           return (
            props.onClick == 'goSignup' ? (
                goSignup()
            ) : props.onClick == 'preventDefault' ? (
                event.preventDefault()
            ) : event.preventDefault()
           )
           
        }



    return (
        <Container style={{backgroundImage:`url(${image})`}} bar={imageBar}>

            {
                <div className="pLogin">
                {
                    props.name == 'main' ? (
                        <div className="login">
                            <button onClick={goSignup}><strong>로그인</strong></button>
                        </div>
                    ) : props.name == 'login' ? (
                        <p> 로그인 계정 : {user.email} </p>
                    ) : <p>관리자에게 문의하세요</p>
                }
            </div>
            }

            {/* <div className="login"><button onClick={goSignup}><strong>회원가입</strong></button></div> */}
            <div className="title">
                <img src="https://cnbl-cdn.bamgrid.com/assets/478bf74ef5ffc184e7c96808eef869a4ca967cbcc5a8db8f7e3c4005d93bbfd5/original" alt="disneyLogo"></img>
                <h1>이 모든 이야기가 여기에<br/>지금 스트리밍 중</h1>

                <aside className="side1">
                    <h2>디즈니+ 스탠다드</h2>
                    <h6>최대 1080p Full HD 비디오</h6>
                    <h6>최대 5.1 오디오</h6>
                    <h6>최대 2대 기기 동시 스트리밍</h6>
                    <button onClick={click}>월 &#8361;9,900</button>
                    <br></br>
                    <h6>(부가세 포함)</h6>
                </aside>

                <aside className="side2">
                    <h2>디즈니+ 프리미엄</h2>
                    <h6>최대 4K UHD & HDR 비디오</h6>
                    <h6>최대 Dolby Atmos 오디오</h6>
                    <h6>최대 4대 기기 동시 스트리밍</h6>
                    <button onClick={click}>월 &#8361;13,900</button>
                    <br></br>
                    <h6>(부가세 포함)</h6>
                </aside>

                <section>
                    <h5><string><a href="" onClick={preventDefault}>디즈니+ 프리미엄 연간 멤버십</a></string>을 구독하고 최대 16% 할인*을 받으세요.</h5>
                    <h5>연간 멤버십을 포함한 멤버십 <a href="" onClick={preventDefault}>유형별 세부 정보</a>를 확인해 보세요.</h5>
                    <br></br>
                    <h6>*월간 멤버십 12개월 구독료 대비 할인된 가격입니다. 추가 약관 적용.</h6>
                </section>
                
            </div>

            <div className="titleMovieImage">
                {/* <img src="https://cnbl-cdn.bamgrid.com/assets/639d2100b37e1653498191d7c9e666d2acb4f22a897cc703caab35c5e6613630/original" alt="movieImage"></img>
                <img src="https://cnbl-cdn.bamgrid.com/assets/b290aab84e9c2de7e634882a21e46977ae6751972e635cd0beec9aed6a855a4d/original"alt="movieImage"></img>
                <img src="https://cnbl-cdn.bamgrid.com/assets/a5eba364a8b311deccd7b3e022ec016ee986d18d8703184dc9502202e1f379f9/original"alt="movieImage"></img>
                <img src="https://cnbl-cdn.bamgrid.com/assets/95ae95f78a0ce582eb068f80636a875a96845e9472877d8aced73bbeda55dd7d/original"alt="movieImage"></img>
                <img src="https://cnbl-cdn.bamgrid.com/assets/ee811934038fba409b0011cd1d11c7c2072b40cbe566558feeb865dea28eb8c1/original"alt="movieImage"></img> */}
            </div>

            <div className="selectBar">
                <div onClick={()=>{changeImage(1,'삼식이 삼촌')}}  current={current==1? 'aa' : null}/>
                <div onClick={()=>{changeImage(2,'수사반장 1958')}} current={current==2? 'aa' : null}/>
                <div onClick={()=>{changeImage(3,'크래시')}} current={current==3? 'aa' : null}/>
                <div onClick={()=>{changeImage(4,'지배종')}} current={current==4? 'aa' : null}/>
                <div onClick={()=>{changeImage(5,'가여운 것들')}} current={current==5? 'aa' : null}/>
            </div>

            <p className="movieName">{imgName}<br/>지금 스트리밍 중</p>
        </Container>
    )
}

export default Header

const Container= styled.div`
    width: 100%;
    height: 800px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-image 0.5s ease-in-out;

    .pLogin{
        P{
            text-align: end;
            padding: 20px;
            margin-right: 1rem;
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-decoration: underline;

        }
    }

.login{
    text-align: end;

    button{
        background-color: black;
        color: white;
        padding: 15px;
        border-radius: 4px;
        border: 1px solid white;
        font-size: 1rem;
        margin-top: 10px;
        margin-right: 30px;

        &:hover{
            cursor: pointer;
            color: black;
            background-color: white;
            transition: background-color 0.2s;
        }
    }

}
     

.title{
    padding-top: 4rem;
    padding-left: 7rem;
    color: white;

    img{
        width: 180px;
    }

    h1{
        font-size: 2.5rem;
    }

    aside{
        width: 300px;
        display: inline-block;
        padding: 2rem 0;
        margin-right : 1rem;

        h2{
            font-size: 1.5rem;
        }

        h6{
            color: darkgrey;
            line-height: 1rem;
        }

        button{
            width: 100%;
            height: 60px;
            background-color: darkturquoise;
            border-radius: 4px;
            border: 0 ;
            font-size: 20px;
            margin: 10px 0;
            margin-bottom: 20px;

            &:hover{
                cursor: pointer;
                background-color: aqua;
            }
            
        }
    }

    section{
        h5{
            color: darkgrey;
            line-height: 1.5rem;
            font-size: 15px;

            a{
                color: white;
                cursor: auto;
            }
        }

        h6{
            color: darkgrey;
        }
    }
 
    p{
        font-size: 10px;

    }
}

.selectBar{
    margin: 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    div{
        text-align: center;
        width: 12%;
        height: 4px;
        margin: 0 2px;

        /* background-color: ${props=>props.bar}; */


        background-color: ${props => props.current ? 'darkgray' : 'dimgray'};

        &:hover{
            cursor: pointer;
            height: 3px;
            background-color: darkgray;
        }

        &[current]{
            background-color: darkgray;
            cursor: revert;
            transform: revert;
        }

    }
    
}

#a1{
        background-color: 'red'
    }

.movieName{
    color: darkgray;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    transition: font-size 0.5s ease-in-out;
}

`