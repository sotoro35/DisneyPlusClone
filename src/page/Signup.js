import styled from 'styled-components'
import logo from '../img/logo.JPG'
import aa from '../img/aaa.JPG'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'



const Signup= ()=>{

    const emailRef= useRef(null)
    const passwordRef= useRef(null)
    const loginNavigate= useNavigate()

    const submitPost= (event)=>{
        event.preventDefault()
    
        const email= emailRef.current.value
        const password = passwordRef.current.value
        //alert(email)
    
        const data= JSON.stringify({
            email,
            password
        })

        fetch('./backend/signup.php',{
            method:'POST',
            headers: {
                "Content-Type":'application/json'
            },
            body: data
        })
        .then(res=>res.text())
        .then(text=> {
            alert(text)
            loginNavigate('/login')}
        )
        .catch(error=>alert('에러:'+error))
    
    }
    return (
        <Container>
            <img className="titleLogo" src="https://cnbl-cdn.bamgrid.com/assets/478bf74ef5ffc184e7c96808eef869a4ca967cbcc5a8db8f7e3c4005d93bbfd5/original" alt="disneyLogo"></img>

            <div className='input'>
                <img src={logo}/>
                <h2>디즈니+ 회원가입</h2>
                <h4>MyDisney계정 생성</h4>

                <form onSubmit={submitPost}>
                    <input placeholder='이메일을 입력하세요' ref={emailRef}></input>
                    <input placeholder='비밀번호를 입력하세요' ref={passwordRef}></input>
                    <button type='submit'>가입</button>
                </form>

                <div className='line'></div>
                <h5>디즈니+는 The Walt Disney Family of Companies의 계열사입니다.</h5>
                <p>MyDisney가입으로 디즈니+, ESPN, Walt Disney World, 기타 다른 서비스 등 The Walt Disney Family of Companies의 다양한 서비스를 이용해보세요.</p>
                <img className="aa" src={aa} alt='img'></img>
            </div>
        </Container>

    )
}

export default Signup

const Container= styled.div`
    height: 100%;
    padding: 1rem;
    background: linear-gradient(to left, rgba(5, 36, 52, 1), rgba(5, 85, 100, 1),rgba(5, 74, 89, 1));

    .titleLogo{
        width: 150px;
        margin: 0 auto;
        display: block;
        text-align: center;
    }

    .input{
        min-width: 580px;
        min-height: 600px;
        width: 30%;
        margin: 1rem auto;
        background-color: white;
        border-radius: 16px;
        padding: 3rem 4rem;
        box-sizing: border-box;

        h4{
            color: rgba(95, 97, 102, 1);
            margin-top: 4px;
        }

        form{
        text-align: center;
        margin: 2rem auto 0;
        display: flex;
        flex-direction: column;

        input{
            font-size: 16px;
            box-sizing: content-box;
            padding: 1rem;
            margin: .5rem 0;
            font-weight: bold;
            background-color: rgba(233, 235, 240, 1);
            border: 0;
            border-radius: 4px;
        }

        button{
            margin: 1rem 0;
            font-size: 14px;
            color: white;
            background-color: black;
            border-radius: 60px;
            padding: 1rem;
            font-weight: bold;
            border: 0;

            &:hover{
                cursor: pointer;
            }
        }
    }

    h5{
        margin-top: 2rem;
        color: rgba(95, 97, 102, 1);
        font-size: 14px;
    }

    p{
        margin-top: 1rem;
        margin-bottom: 2rem;
        color: rgba(95, 97, 102, 1);
        font-size: 12px;
    }
    
    }

    .line{
        width: 100%;
        height: 1px;
        background-color: silver;
    }
   

`