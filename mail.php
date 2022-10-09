<?php
require_once('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$comment = $_POST['comment'];
$name = $_POST['name'];
$email = $_POST['mail'];
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'sergey.komarov.2004@mail.ru';
$mail->Password = 'Lk2ozq987!';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('sergey.komarov.2004@mail.ru');
$mail->addAddress($email);
$mail->isHTML(true);
$mail->Subject = '' .$name 'оставил мнение';
$mail->Body    = '' .$name . ' решил рассказать<br> ' .$comment. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Что-то пошло не так...';
} else {
    echo 'Письмо отправлено';
}
?>
