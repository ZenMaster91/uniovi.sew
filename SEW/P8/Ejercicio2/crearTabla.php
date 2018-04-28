<!DOCTYPE html>
<html lang="es">
<head>
    <title>Crear tabla</title>
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

                 $db->select_db("db");


                $crearTabla = "CREATE TABLE IF NOT EXISTS alumnado (id INT NOT NULL AUTO_INCREMENT,
                        nombre VARCHAR(255) NOT NULL,
                        Apellidos VARCHAR(255) NOT NULL,
                        dni VARCHAR(30) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        PRIMARY KEY (id))";

                if($db->query($crearTabla) === TRUE){
                    echo "<p>Tabla alumado creada con éxito (o ya existe)</p>";
                 } else {
                    echo "<p>ERROR en la creación de la tabla alumnado</p>";
                    exit();
                 }

            $db->close();
        ?>
    </section>

</body>
</html>
