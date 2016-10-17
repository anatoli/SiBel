<?php
$fileData = file_get_contents("php://input");
$json = json_decode( $fileData, true);

   $subject = 'Website Change Request';
if( $json['query']){
$message = '<html><body>';
//    $message .= " <p><b>Here are the birthdays upcoming in August!." . stripslashes($['email']) ."</b></p>";
//    $message .= " <p><b>Here are the birthdays upcoming in August!." . strip_tags($_POST['email']) ."</b></p>";
    $message .= " <p><b>Name:" . strip_tags($json['name'])  ."</b></p>";
    $message .= " <p><b>Your Message:" . strip_tags($json['message'])  ."</b></p>";
    $message .= " <p><b>Your mail:" . strip_tags($json['email'])  ."</b></p>";
    $message .= " <p><b>Your Phone:" . strip_tags($json['phone'])  ."</b></p>";
//    $message .= " <p><b>Here are the birthdays upcoming in August!." . $_POST['email'] ."</b></p>";

    $message .= " <title>info Sibel.by portal</title>";
    $message .= "</body></html>";
}


//$message = '
//<html>
//    <head>
//        <title>Birthday Reminders for August</title>
//    </head>
//    <body>
//        <p>Here are the birthdays upcoming in August!</p>
//    </body>';

//$message .= ''. . '';
//$message .= ''. strip_tags($json['']) .'' ;
//$message .=  '</html>';



$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <". strip_tags['email'] ."> \r\n";
$headers .= "Bcc:". strip_tags['email'] ."\r\n";

//$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
////$headers .= "From: Birthday Reminder <birthday@example.com>\r\n";
//$headers = "From: <info@toto.by> \r\n";
//$headers .= "Bcc: info@toto.by \r\n";



var_dump(mail('arinov@mail.ru', $subject, $message, $headers ));
var_dump($_POST);
$error = json_last_error();

var_dump($json, $error === JSON_ERROR_UTF8);

exit;



?>
