<?php
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
require './phpmailer/Exception.php';

$c = true;
$title = "Обратная связь";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet      = "UTF-8";
    $mail->SMTPAuth     = true;

    $mail->Host         = 'smtp.gmail.com';
    $mail->Username     = 'sergey.komarov.2004@mail.ru'
    $mail->Password     = '28bMSD8GmZfv4JLkpnRu';
    $mail->SMTPSecure   = 'ssl';
    $mail->Port         = 465;

    $mail->setFrom('sergey.komarov.2004@mail.ru', 'Заявка с вашего сайта');

    $mail->addAddress('sergey.komarov.2004@mail.ru');
    $mail->addAddress('korolnyy2@mail.ru');

    $mail->isHTML(true);
    $mail->Subject      = $title;
    $mail->Body         = $body;

    $mail->send();

} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
