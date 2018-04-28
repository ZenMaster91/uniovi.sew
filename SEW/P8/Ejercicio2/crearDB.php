<!DOCTYPE html>
<html lang="es">
<head>
    <title>Creación de la DB</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="https://s3-eu-west-1.amazonaws.com/cssfonts/SF/sf-font.css" />
    <link href="Ejercicio2.css" rel="stylesheet" />
</head>

<body>

        <header>
     <form  action="crearDB.php">
        <input type="submit" value="Crear la base de datos: db">
     </form>

    <form  action="crearTabla.php">
         <input type="submit" value="Crear la tabla: alumnado">
    </form>

     <form action="Ejercicio2.html">
             <input type="submit" value="DATOS">
        </form>
    </header>



    <section>
        <?php

             $db = new mysqli('localhost','sa','sa');

            if($db->connect_error) {
                echo "<p>ERROR de conexión:".$db->connect_error.". No existe el usuario</p>";
                exit();
            } else {echo "<p>Conexión establecida.</p>";}

            $cadenaSQL = "CREATE DATABASE IF NOT EXISTS db COLLATE utf8_spanish_ci";
            if($db->query($cadenaSQL) === TRUE){
                echo "<p>Base de datos alumnado creada con éxito (o ya existe)</p>";
            } else {
                echo "<p>ERROR en la creación de la Base de Datos alumnado</p>";
                exit();
            }

        ?>
    </section>

</body>
</html>
