<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="articulo">
    <html>
      <body>
        <h1>Ejercicio1 - Tarea1</h1>
        <h2>Todas las recetas de cocina</h2>
        <p><xsl:value-of select="titulo"/></p>
        <p><xsl:value-of select="autores"/></p>
        <p><xsl:value-of select="resumen"/></p>
        <p><xsl:value-of select="keywords"/></p>
        <p><xsl:value-of select="revista"/></p>
        <p><xsl:value-of select="pag-inicio"/></p>
        <p><xsl:value-of select="pag-fin"/></p>
        <p><xsl:value-of select="año"/></p>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
