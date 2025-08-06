<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar y limpiar datos
    $nombre = trim(htmlspecialchars($_POST["nombre"] ?? ''));
    $email = trim(htmlspecialchars($_POST["email"] ?? ''));
    $mensaje = trim(htmlspecialchars($_POST["mensaje"] ?? ''));

    // Validación 
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "Por favor, completa todos los campos.";
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El correo electrónico no es válido.";
        exit;
    }
    // Evitar inyección de cabeceras
    if (preg_match("/[\r\n]/", $email)) {
        echo "El correo electrónico no es válido.";
        exit;
    }

    // Datos del correo
    $destino = "manuelgc.css@gmail.com";
    $asunto = "Nuevo mensaje de contacto de $nombre";
    $contenido = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Enviar correo
    if (mail($destino, $asunto, $contenido, $headers)) {
        echo "¡Mensaje enviado correctamente! Gracias por contactarnos.";
    } else {
        echo "Hubo un error al enviar el mensaje. Intenta de nuevo.";
    }
} else {
    echo "Acceso no permitido.";
}
