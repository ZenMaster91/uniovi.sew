<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <title>P4. Ejercicio2 - Tarea5</title>
      </head>
      <body>
        <h1>Ejercicio2 - Tarea5</h1>
        <h2>Todas las recetas para veganos</h2>

        <xsl:for-each select="recetas/receta">

          <xsl:if test="(not (contains(lower-case(ingredientes), 'pollo'))) and (not (contains(lower-case(ingredientes), 'pescado'))) and (not (contains(lower-case(ingredientes), 'carne'))) and (not (contains(lower-case(huevos), 'leche'))) and (not (contains(lower-case(ingredientes), 'leche'))) and (not (contains(lower-case(ingredientes), 'queso')))">
            <h3><xsl:value-of select="titulo"/></h3>
            <h4><xsl:value-of select="tipo"/></h4>
            <h4>Dificultad:

              <xsl:value-of select="dificultad"/></h4>
            <h4>Tiempo:

              <xsl:value-of select="tiempo-de-elavoracion"/></h4>
            <h4>Calorias:

              <xsl:value-of select="calorias"/></h4>
            <h4>Ingredientes</h4>

            <xsl:for-each select="ingredientes/ingrediente">
              <p><xsl:value-of select="."/>.

                <xsl:value-of select="@cantidad"/></p>
            </xsl:for-each>

            <h4>Utensilios necesarios</h4>

            <xsl:for-each select="elementos/elemento">
              <p><xsl:value-of select="."/></p>
            </xsl:for-each>

            <h4>Proceso</h4>

            <xsl:for-each select="proceso/paso">

              <xsl:sort select="@orden" order="descending"/>
              <p><xsl:value-of select="@orden"/>.

                <xsl:value-of select="."/></p>
            </xsl:for-each>

            <h4>Origen:

              <xsl:value-of select="origen"/></h4>
          </xsl:if>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
