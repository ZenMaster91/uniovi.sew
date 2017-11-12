<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <title>P4. Ejercicio1 - Tarea1</title>
      </head>
      <body>
        <h1>Ejercicio1 - Tarea1</h1>
        <h2>Todos los artículos</h2>

        <xsl:for-each select="articulos/articulo">
          <h3><xsl:value-of select="titulo"/></h3>
          <h4><xsl:value-of select="autores"/></h4>
          <p><xsl:value-of select="resumen"/></p>
          <p>Keywords:

            <xsl:value-of select="keywords"/></p>
          <p>Revista:

            <xsl:value-of select="revista"/></p>
          <p>Pag. Inicio:

            <xsl:value-of select="pag-inicio"/></p>
          <p>Pag. Fin:

            <xsl:value-of select="pag-fin"/></p>
          <p>Año de Publicación:

            <xsl:value-of select="year"/></p>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
