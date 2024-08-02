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

    $sql = "SELECT * FROM clone_web WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($db, $sql);
    $conut= mysqli_num_rows($result);

    
    if($conut > 0){
        $board= mysqli_fetch_array($result, MYSQLI_ASSOC);
        $email = $board['email'];

        echo $email;
    }else echo "실패";

    mysqli_close($db);

    // if($result){
    //     echo "성공";
    // }else {
    //     echo "실패";
    // }

?>