import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"


const MovieDetail= ()=>{

    const params= useParams()
    // alert(params.no)

    const items= useSelector( state=> state.itemReducer.items )

    
    // const item= items.filter((item)=>{
    //     return item.no == params.no
    // })


    const item = items.find(item=> item.no == params.no)
    const itemImg= item.backImg

    if(item){
        //alert(item.backImg + params.no)
    }else{
        alert('에러')
    }

    const cast = item.cast.map((v,i)=>{
        return <React.Fragment key={i}>
                {v}<br/>
        </React.Fragment>
        
    })

    


    //https://cdn.pixabay.com/photo/2023/08/17/17/03/dahlia-8197027_1280.jpg


    return(
        <Container aa={itemImg}>
            <div className="title">
            <img alt="title" src={item.img}/>

            <button>디즈니+ 가입</button>
            <h4>{item.title}</h4>      
            
            </div>
            <h3>상세&nbsp;정보</h3>
   
            <div className="content">

            <div className="content-left">
            <h2>{item.content1}</h2>
            <p>{item.content2}</p>
            <p><br/><br/>일부 섬광 장면이 빛에 민감한 시청자에게 영향을 줄 수 있음.</p>
            </div>

            <div className="content-right">
            <div>
                <p className="aa">공개일:</p>
                <p className="bb">{item.date}</p>
                <p className="aa">장르:</p>
                <p className="bb">{item.genre}</p>
                <p className="aa">시리즈 등급:</p>
                <p className="bb">{item.seriesRating}</p>
                <p className="aa">시즌1 등급:</p>
                <p className="bb">{item.seasonRating}</p>
            </div>

            <div>
                <p className="aa">출연:</p>
                <p className="bb">{cast}</p>
            </div>

            </div>
            </div>

        
            
        </Container>
    )
}

// const mapStateToProps= (store)=>{
//     return {items:store.itemReducer.items}
// }


export default MovieDetail
//export default connect(mapStateToProps)(MovieDetail)


const Container = styled.div`

    width: 100%;
    height: 100%;
    color: white;        
    background: linear-gradient(to right, rgba(27, 29, 41, 1), rgba(27, 29, 41, 0.2), transparent),url('${props=>props.aa}');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;

    .title{
        width: 90%;
        height: 60%;
        margin: 3rem auto 0;


        img{
            height: 200px;
            display: block;
            margin-bottom: 2rem;
        }

        h4{
            max-width: 800px;
            color: silver;
            font-size: 17px;
            
        }

        button{
            height: 50px;
            background-color: darkturquoise;
            border-radius: 4px;
            border: 0 ;
            font-size: 16px;
            padding: 12px;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 2rem;

            &:hover{
                cursor: pointer;
                background-color: aqua;
            } 
        }
    }

    h3{     
        width: 90%;
        color: darkgray;
        font-weight: 700;
        margin: 2rem auto .5rem;
        }

    .content{
        width: 90%;
        height: 40%;
        margin: 0 auto 1rem;
        display: flex;
        border-top: 3px solid gray;

        .content-left {
            width: 50%;
            margin-top: 1rem;

        h2{
            margin-bottom: 1rem;
        } 

        p{
            word-wrap: break-word;
            text-align: left;
            font-weight: 700;
            line-height: 1.5rem;
            color: whitesmoke;
            font-size: 16px;
        }
        
        }

        .content-right{
            width: 50%;
            margin-left: 7rem;
            display: flex;
            margin-top: 2rem;

            div{
                flex-grow: 1;
            }

            p{
                font-size: 14px;
                margin-bottom: 10px;
                font-weight: 700;
            }

            .aa{
                color: silver;
                font-size: 16px;
            }
        }

    }

    
`