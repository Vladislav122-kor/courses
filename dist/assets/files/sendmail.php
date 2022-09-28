<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //От кого
    $mail->SetFrom('xpymctik.96@mail.ru', 'Хрумстик');
    //Кому
    $mail->addAddress('kolka.96@mail.ru');
    //Тема письма
    $mail->Subject = 'Привет! Это я';

    //Тело письма
    $body = 'Новое сообщение';

    if(trim(!empty($_POST['name']))) {
        $body.='<p>Имя: </p> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))) {
        $body.='<p>Телефон: </p> '.$_POST['phone'].'</p>';
    }

    $mail->Body = $body;

    //Отправить
    if(!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>
