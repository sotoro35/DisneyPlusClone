<?php
    header('Content-Type:text/plain; charset=utf-8');

    // client가 보낸 json은 파일로 받기에 이를 읽어들여야 함
    $jsonData= file_get_contents('php://input');

    // json parsing ---> associate array
    $data= json_decode($jsonData, true);  //두번째 파라미터 true : 연관배열 변환 여부
    $email= $data['email'];
    $password= $data['password'];

    $db = mysqli_connect('localhost','ruaris','a1s2d3f4!','ruaris');
    mysqli_query($db, 'set names utf8');

    $sql= "INSERT INTO clone_web(email, password) VALUES('$email','$password')";
    $result = mysqli_query($db, $sql);

    mysqli_close($db);

    if($result){
        echo "회원가입이 완료되었습니다. 로그인 해주세요 \n계정: " . $email;
    }else {
        echo "실패";
    }

    // if ($data === null) {
    //     echo "JSON 데이터 파싱 에러";
    //     error_log("JSON parsing error: " . json_last_error_msg());
    // } else {
    //     $email = $data['email'];
    //     echo "회원가입이 완료되었습니다. 이메일: " . $email;
    // }
?>