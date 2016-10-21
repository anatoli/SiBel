<?php
$fileData = file_get_contents("php://input");
$json = json_decode( $fileData, true);

   $subject = 'Запрос с портала Sibel.by';

$message = '<html><body>';
$message .= " <p><b>Имя: </b>" . strip_tags($json['name'])  ."</p>";
$message .= " <p><b>Номер телефона: </b>" . strip_tags($json['phone'])  ."</p>";
$message .= " <p><b>Организация, должность: </b>" . strip_tags($json['company'])  ."</p>";

$message .= " <p><b>Текст запроса: </b><br>" . strip_tags($json['message'])  ."</p>";

$message .= " <title>info Sibel.by portal</title>";
$message .= "</body></html>";

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <". strip_tags($json['email']) ."> \r\n";
$headers .= "Bcc:". strip_tags($json['email']) ."\r\n";


////////////////////////////////
$fileatt = json['href']; // Path to the file (example)
$fileatt_type = json['fileType']; // File Type
$fileatt_name = json['fileName']; // Filename that will be used for the file as the attachment
$file = fopen($fileatt,'rb');

$data = fread($file,filesize($fileatt));
fclose($file);
$semi_rand = md5(time());
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
$headers="From: $email_from"; // Who the email is from (example)
$headers .= "\nMIME-Version: 1.0\n" .
"Content-Type: multipart/mixed;\n" .
" boundary=\"{$mime_boundary}\"";
$message .= "This is a multi-part message in MIME format.\n\n" .
"--{$mime_boundary}\n" .
"Content-Type:text/html; charset=\"iso-8859-1\"\n" .
"Content-Transfer-Encoding: 7bit\n\n" . $email_txt;
$message .= "\n\n";
$data = chunk_split(base64_encode($data));
$message .= "--{$mime_boundary}\n" .
"Content-Type: {$fileatt_type};\n" .
" name=\"{$fileatt_name}\"\n" .
"Content-Transfer-Encoding: base64\n\n" .
$data . "\n\n" .
"--{$mime_boundary}--\n";

////////////////////////////////




var_dump(mail('Sibel.by@yandex.ru', $subject, $message, $headers ));
$error = json_last_error();
var_dump($json, $error === JSON_ERROR_UTF8);

exit;



?>




