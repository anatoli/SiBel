<?php
$fileData = file_get_contents("php://input");
$json = json_decode( $fileData, true);

   $subject = 'Запрос с портала Sibel.by на вакансию';

$message = '<html><body>';
$message .= " <p><b>Имя: </b>" . strip_tags($json['name'])  ."</p>";
$message .= " <p><b>Номер телефона: </b>" . strip_tags($json['phone'])  ."</p>";
$message .= " <p><b>Направление: </b>" . strip_tags($json['selectVok'])  ."</p>";
$message .= " <p><b>Текст запроса: </b><br>" . strip_tags($json['message'])  ."</p>";
$message .= " <title>info Sibel.by portal</title>";
$message .= "</body></html>";

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <". strip_tags($json['email']) ."> \r\n";
$headers .= "Bcc:". strip_tags($json['email']) ." \r\n";


var_dump(mail('Sibel.by@yandex.ru', $subject, $message, $headers ));
$error = json_last_error();
var_dump($json, $error === JSON_ERROR_UTF8);

exit;



?>
