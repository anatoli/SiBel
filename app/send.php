<?php
$req = json_decode( file_get_contents('php://input'), true );

////подключаем класс для работы с email
//
//require ('php/class.simple_mail.php');
//
//if ( $req ) {
    //отправляем данные с помощью функции mail


//    if (!empty($req['name']) && !empty($req['message']) && !empty($req['email'])) {
//    $to = 'info@toto.by';
//
   $subject = 'Website Change Request';

   $headers = "From: " . strip_tags($req['email']) . "\r\n";
   $headers .= "Reply-To: ". strip_tags($req['email']) . "\r\n";

   $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
//
//    $message = '<html><body>';
//    $message .= '<img src="//css-tricks.com/examples/WebsiteChangeRequestForm/images/wcrf-header.png" alt="Website Change Request" />';
//    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
//    $message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
//    $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($req['email']) . "</td></tr>";
//    $message .= "<tr><td><strong>Type of Change:</strong> </td><td>" . strip_tags($_POST['typeOfChange']) . "</td></tr>";
//    $message .= "<tr><td><strong>Urgency:</strong> </td><td>" . strip_tags($_POST['urgency']) . "</td></tr>";
//    $message .= "<tr><td><strong>URL To Change (main):</strong> </td><td>" . $_POST['URL-main'] . "</td></tr>";
//    $addURLS = $_POST['addURLS'];
//    if (($addURLS) != '') {
//        $message .= "<tr><td><strong>URL To Change (additional):</strong> </td><td>" . strip_tags($addURLS) . "</td></tr>";
//    }
//    $curText = htmlentities($_POST['curText']);
//    if (($curText) != '') {
//        $message .= "<tr><td><strong>CURRENT Content:</strong> </td><td>" . $curText . "</td></tr>";
//    }
//    $message .= "<tr><td><strong>NEW Content:</strong> </td><td>" . htmlentities($_POST['message']) . "</td></tr>";
//    $message .= "</table>";
//    $message .= "</body></html>";

$message = '<html><body>';
$message .= '<h1>Hello, '. strip_tags($req['name']) .'! </h1>';
$message .= '</body></html>';

////    mail('anatoliy.arinovich@sibel.by', 'My Subject', $message );
//    var_dump(mail('info@toto.by', 'My Subject', $message ));
//////
//    }else{
//        //поля не заполнены
//        $res = array( 'res'=>false, 'msg'=>'Заполните все поля.' );
//        echo json_encode($res);
//    }
//} else {
//    $res = array( 'res'=>false, 'msg'=>'Заполните все поля.' );
//}

var_dump(mail('info@toto.by', $subject, $message, $headers ));
exit;




?>
