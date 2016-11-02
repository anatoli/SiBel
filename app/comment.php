<?php
$fileData = file_get_contents("php://input");
$json = json_decode( $fileData, true);

// пример использования
$file = $json['href']; // файл
$mailTo = "Sibel.by@yandex.ru"; // кому
$from = ($json['email']) ? $json['email']: "anonim@sibel.by" ; // от кого
$subject = "Отзыв о компании
 Sibel.by"; // тема письма
$message = '<html><body>'; // текст письма
$message .= " <p><b>Имя: </b>" . strip_tags($json['name'])  ."</p>";
$message .= " <p><b>Номер телефона: </b>" . strip_tags($json['phone'])  ."</p>";
$message .= " <p><b>Организация, должность: </b>" . strip_tags($json['company'])  ."</p>";

$message .= " <p><b>Коментарий: </b>" . strip_tags($json['message'])  ."</p>";

$message .= " <title>info Sibel.by portal</title>";
$message .= "</body></html>";

  $r = sendMailAttachment($mailTo, $from, $subject, $message, $file); // отправка письма c вложением
  echo ($r)? json_encode(array( 'response' => 'true')): json_encode(array( 'response' => 'false'));
//}else{
//  $r = sendMailAttachment($mailTo, $from, $subject, $message); // отправка письма без вложения
//  echo ($r)?'Письмо отправлено':'Ошибка. Письмо не отправлено!';
//}

/**
* Отправка письма с вложением
* @param string $mailTo
* @param string $from
* @param string $subject
* @param string $message
* @param string|bool $file - не обязательный параметр, путь до файла
*
* @return bool - результат отправки
*/

function sendMailAttachment($mailTo, $from, $subject, $message, $file = false){
    $separator = "---"; // разделитель в письме
    // Заголовки для письма
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $from\nReply-To: $from\n"; // задаем от кого письмо
    $headers .= "Content-Type: multipart/mixed; boundary=\"$separator\""; // в заголовке указываем разделитель
    // если письмо с вложением
    if($file){
        $bodyMail = "--$separator\n"; // начало тела письма, выводим разделитель
        $bodyMail .= "Content-type: text/html; charset='utf-8'\n"; // кодировка письма
        $bodyMail .= "Content-Transfer-Encoding: quoted-printable"; // задаем конвертацию письма
        $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n"; // задаем название файла
        $bodyMail .= $message."\n"; // добавляем текст письма
        $bodyMail .= "--$separator\n";
        $fileRead = fopen($file, "r"); // открываем файл
        $contentFile = fread($fileRead, filesize($file)); // считываем его до конца
        fclose($fileRead); // закрываем файл
        $bodyMail .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode(basename($file))."?=\n";
        $bodyMail .= "Content-Transfer-Encoding: base64\n"; // кодировка файла
        $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n";
        $bodyMail .= chunk_split(base64_encode($contentFile))."\n"; // кодируем и прикрепляем файл
        $bodyMail .= "--".$separator ."--\n";
    // письмо без вложения
    }else{
        $bodyMail = $message;
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: <". strip_tags($from) ."> \r\n";
        $headers .= "Bcc:". strip_tags($from) ."\r\n";
    }
    $result = mail($mailTo, $subject, $bodyMail, $headers); // отправка письма
    return $result;
    var_dump($mailTo);
}
?>




