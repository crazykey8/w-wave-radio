<?php
// Файлы phpmailer
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
require './phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['mail'];
$text = $_POST['comment'];

// Формирование самого письма
$title = "Обратная связь от пользователя $name";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br>
<b>Сообщение:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'korolnyy2@gmail.com'; // Логин на почте
    $mail->Password   = 'lszuhflrpgjrdjka'; // Пароль на почте
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;
    $mail->setFrom('korolnyy2@gmail.com', 'Сергей'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress($email);
    $mail->addAddress('korolnyy2@mail.ru'); // Ещё один, если нужен

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "Письмо отправлено";}
else {$result = "Что-то пошло не так...";}

} catch (Exception $e) {
    $result = "Что-то пошло не так...";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
