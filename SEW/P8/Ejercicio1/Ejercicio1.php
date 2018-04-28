<!DOCTYPE html>
<html lang="es">
<head>
  <title>P8 - E1</title>
  <meta charset="utf-8"/>
  <link href="Ejercicio1.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="https://s3-eu-west-1.amazonaws.com/cssfonts/SF/sf-font.css" />
</head>
<body>
  <h1>Ejercicio 1</h1>
  <section>
        <?php
            echo "<h2>Creador de documento Ejercicio1.txt</h2>";
            echo "<p>Operación:</p>";
            echo "<p>Escritura en el fichero Ejercicio1.txt</p>";
            require("moduloArchivo.php");
            $archivo = new ArchivoTexto ("Ejercicio1.txt");
            $archivo->createFile();
            $archivo->writeFile("Hello mundo!!!\n");
            $archivo->viewFile();
            echo "<p>Operación:</p>";
            echo "<p>Modificación de la información del fichero Ejercicio1.txt</p>";
            $archivo->modifyFile("Modificando fichero: \n");
            $archivo->modifyFile("Linea 1 modificada \n");
            $archivo->modifyFile("Linea 2 modificada \n");


            $archivo->viewFile();

            echo "<p class='oper'>Operación:</p>";
            echo "<p>Eliminación de la información en el fichero Ejercicio1.txt</p>";
            echo "<p class='oper'>Operación:</p>";
            echo "<p>Escritura en el fichero Ejercicio1.txt</p>";
            $archivo->deleteInfoFile();
            $archivo->writeFile("El contenido anterior ha sido borrado correctamente \n");
            $archivo->viewFile();

            echo "<p>Operación:</p>";
            echo "<p>Eliminación del fichero Ejercicio1.txt</p>";
            $archivo->deleteFile();
            $archivo->viewFile();
        ?>
  </section>
</body>
</html>
