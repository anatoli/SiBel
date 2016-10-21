<?php
if ( !empty( $_FILES ) or $FILES['file']['size']>5000 ) {
    $path_parts = pathinfo($_FILES[ 'file' ][ 'tmp_name' ]);
    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
    $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . $path_parts['filename'].$_FILES[ 'file' ][ 'name' ];
//    $href = '10.10.1.47' .DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . $path_parts['filename'].$_FILES[ 'file' ][ 'name' ];
    $href = 'uploads' . DIRECTORY_SEPARATOR . $path_parts['filename'].$_FILES[ 'file' ][ 'name' ];
    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => 'File transfer completed', 'href' => $href, 'name' => $_FILES[ 'file' ]['name'], 'type'=> $_FILES['file']['type']  );
    $json = json_encode( $answer );
    echo $json, "\n";
} else {
    echo 'Ошибка или файл слишком большой!!!';
}
?>
