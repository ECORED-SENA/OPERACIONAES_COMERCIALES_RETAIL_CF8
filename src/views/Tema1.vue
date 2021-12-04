<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos='flip-left')
      .titulo-principal__numero
        span 1
      h1 Cierre de la operación

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Los protocolos en esta labor se desarrollan cotidianamente en el instante en el que se va a cerrar el <i>retail</i> o también parcialmente cuando se presentan cambios de jornadas o turno en los cajeros, con la finalidad de conocer si el dinero o documentos semejantes que estén en la caja coinciden con los datos de ventas reportados en las tirillas de compra, además del <i>software</i> usado por el establecimiento comercial.

    
    
    #t_1_1.titulo-segundo.color-secundario
      h2 1.1  Procedimiento técnico
    .row.mb-5
      .col-lg-7(data-aos='slide-right')
        p.mb-3  Se refiere a las acciones secuenciadas y sistematizadas que conducen a la consecución de un fin predeterminado, en el caso de los colaboradores de los puntos de pago es el proceso de registro tanto del dinero como de las diferentes formas de pago que existen en el mercado, es un proceso de concentración y mucho cuidado de lo que se está haciendo durante el turno para no tener equivocaciones, ni a favor de la empresa, ni a favor del cliente.
        p.mb-4  Cada empresa cuenta con instrucciones sobre cómo llevar a cabo la técnica para el registro en la caja, ya que cada uno debe seguir un método, el método se vale de los procedimientos para su desarrollo.
        .cajon.color-secundario.p-4
          p.mb-0  <b>Nota.</b> Los procedimientos técnicos definen una secuencia de pasos para ejecutar una tarea determinada; los procesos transforman las entradas en salidas mediante el empleo de recursos, a su vez, los procedimientos se centran en el cumplimiento de normas.
      .col-lg-5
        figure(data-aos='slide-left')
          img(src='@/assets/curso/t1-i2.jpg' alt='imagen decorativa')





    Separador
    br
    br
    #t_1_2.titulo-segundo.color-secundario
      h2 1.2  Clasificar efectivo y medios de pago

    .row.mb-5
      .col-lg-7(data-aos='slide-right')
        p.mb-4  Al punto de pago llegan diferentes medios de pago que el cajero debe saber identificar de acuerdo con las características de seguridad indicadas como, por ejemplo, el proceso para autorizar el recibo de cheques, si es que se puede recibir dicho tipo de pago en determinado <i>retail</i>.
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t1-ic1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 ¿Qué forma de pagos existen?
                .col-sm-auto
                  a.boton.color-acento-botones(href='https://www.google.com/url?q=https://www.youtube.com/watch?v%3DNMcQatosBOo&sa=D&source=docs&ust=1637553326079000&usg=AOvVaw0msid3GyvWI9ar8Zjmus9u' target="_blank")
                    span Ver video
                    i.fas.fa-link
        p.mb-3.text-bold  A continuación, se abordarán diferentes tipos de medios de pago:
      .col-lg-5
        figure(data-aos='slide-left')
          img(src='@/assets/curso/t1-i3.jpg' alt='imagen decorativa')

    h3.titulo-tercero 
      i.fas.fa-angle-right 
      | &nbsp;La orden de compra
    .row.mb-5
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-i3-1.jpg' alt='imagen decorativa')
      .col-lg-7
        p.mb-3(data-aos='fade-up')  Son órdenes especiales emitidas por la compañía. Este documento lo pueden adquirir los clientes o empresas en los almacenes por diferentes valores ($5.000, $10.000, $20.000, $50.000 u otro monto), son compradas frecuentemente para realizar regalos.
        p.mb-4(data-aos='fade-up') El cliente debe comprar únicamente mercancía del almacén, su objetivo es generar ventas. En algunos casos se puede devolver en efectivo el 10 % del valor de la orden de compra, que es el porcentaje máximo promedio autorizado por las compañías, de $20.000 lo máximo serían $2.000, de $50.000 lo máximo serían $5.000 y así sucesivamente.
        .cajon.color-secundario.p-4(data-aos='flip-up')
          .h4  Características de seguridad:
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  Marca de agua con el logo del formato comercial, visible a contraluz.
            li
              i.fas.fa-check
              p.mb-0  Calibre del papel similar al de un billete. 
            li
              i.fas.fa-check
              p.mb-0  Numeración roja impresa con tinta tri-reactiva, similar a la de los cheques. 
            li
              i.fas.fa-check
              p.mb-0  El diseño del marco, fondos, código de barras. 
            li
              i.fas.fa-check
              p.mb-0  Firma y fibrillas invisibles, que se pueden observar con una lámpara ultravioleta. 

    h3.titulo-tercero 
      i.fas.fa-angle-right 
      | &nbsp;Los bonos regalo
    .row.mb-5
      .col-lg-7    
        p.mb-4(data-aos='slide-up')  Son los bonos ganados por los clientes con el programa de puntos o en su defecto adquiridos como obsequio por terceros (personas y empresas), sus denominaciones suelen ir entre $5.000 y $200.000.
        .cajon.color-secundario.p-4(data-aos='flip-up')
          .h4  Para recibirlos hay que tener en cuenta que:
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  Solo pueden ser redimidos en el almacén que lo emite. 
            li
              i.fas.fa-check
              p.mb-0  El cliente puede comprar cualquier producto del almacén (no concesionario).
            li
              i.fas.fa-check
              p.mb-0  Las compras realizadas con estos bonos no acumulan puntos en los almacenes que tienen este sistema.
            li
              i.fas.fa-check
              p.mb-0  En la compra se debe utilizar el valor total del bono.
              
      .col-lg-5
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t1-i4.jpg' alt='imagen decorativa')

    h3.titulo-tercero 
      i.fas.fa-angle-right 
      | &nbsp;Las nota cambio

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos='flip-up') 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.nW.centered(src='@/assets/curso/t1-ic2.svg' alt='imagen decorativa')
            .col-lg-8
              .bloque-texto-a__texto.p-4.shadow-box
                p Es un documento valor que el cliente recibe al cambiar un producto que le haya salido defectuoso o por alguna situación adversa y, lo debe utilizar como pago en una nueva compra en el mismo almacén. Puede devolver en efectivo usualmente hasta el <b>10 %</b> del valor de la <b>nota cambio</b>, porcentaje máximo autorizado por las compañías.


    h3.titulo-tercero 
      i.fas.fa-angle-right 
      | &nbsp;Los bonos
    .row.mb-5
      .col-lg-7
        p.mb-3  Los clientes obtienen estos documentos en sus respectivas empresas, también se adquieren en el almacén al momento de registrar el producto indicado en ellos. La emisión de los bonos por algún producto es anunciada en la cartelera de los cajeros. Los mismos se suelen entregar a las personas por las empresas sin periodicidad, principalmente como bonificación o incentivo.
        p.mb-3  Las empresas más conocidas en la emisión de estos bonos son <b>Edenred</b> y <b>Sodexo</b>.
      .col-lg-5
        .cajon.color-secundario.p-4(data-aos='flip-left')
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  <b>Los bonos</b> no pueden ser negociados por dinero en efectivo.           
            li
              i.fas.fa-check
              p.mb-0  Solo se reciben en perfecto estado, sin enmendaduras, tachones o borrones.
            li
              i.fas.fa-check
              p.mb-0  No se aceptan después de la fecha de vencimiento.
            li
              i.fas.fa-check
              p.mb-0  Se debe emplear la totalidad del valor del bono en compra de mercancía.
            li
              i.fas.fa-check
              p.mb-0  Solo se reciben <b>los bonos</b> que estén autorizados para el almacén.

    h3.titulo-tercero 
      i.fas.fa-angle-right 
      | &nbsp;Los <i>tickets</i>
    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t1-i6.jpg' alt='imagen decorativa')
      .col-lg-7
        p.mb-4  Son productos soportados en empresas como Accor (actualmente Edenred) o Sodexo, entre otras, que normalmente se ofrecen como beneficio adicional a los trabajadores (salarial o no salarial) entregado de forma periódica y cuyo uso es para la compra de productos principalmente alimenticios, así como para otros rubros. Es posible que este modelo de pago migre al 100 % digital, a través de tarjetas recargadas directamente a solicitud de los empleadores, como ha sucedido ya en algunos países.
        .cajon.color-secundario.p-4(data-aos='flip-left')
          .h4 Características de seguridad:
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  El color del fondo en algunos tickets.
            li
              i.fas.fa-check
              p.mb-0  Puntos termosensibles que reaccionan a los cambios de temperatura (frío: oscuro / caliente: claro).
            li
              i.fas.fa-check
              p.mb-0  Año de vigencia.
            li
              i.fas.fa-check
              p.mb-0  Logos de las empresas proveedoras.
            li
              i.fas.fa-check
              p.mb-0  Tipo de papel importado, nitidez en las imágenes.
            li
              i.fas.fa-check
              p.mb-0  El desprendible, que lo quita el cajero (no se debe recibir sin desprendible).
            li
              i.fas.fa-check
              p.mb-0  Marcas de agua con el logo, visible a contraluz.
            li
              i.fas.fa-check
              p.mb-0  El isotipo (logo para identificar marcas, instituciones, productos o servicios) de cada bono se observan figuras tridimensionales con micro líneas curvas muy delgadas.
            li
              i.fas.fa-check
              p.mb-0  El valor es igual en el bono y en el desprendible.
            li
              i.fas.fa-check
              p.mb-0  Enteros, sin sellos o rayas con indicaciones no legibles.
            li
              i.fas.fa-check
              p.mb-0  En algunos casos al uso del reactivo aparece una mancha sepia en el frente y en el reverso del bono.

    .neg-margin-x.bg-curved.mb-5
      h3.titulo-tercero 
        i.fas.fa-angle-right 
        | &nbsp;Las tarjetas débito y crédito
      .row.mb-5.justify-content-center
        .col-lg-6
          h4.titulo-cuarto
            i.fas.fa-angle-double-right
            | &nbsp;Las tarjetas débito
          p.mb-4  Son las que permiten deducir el valor de la transacción directamente de la cuenta bancaria del cliente.
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  Para las transacciones con las tarjetas débito no se requiere al cliente la cédula, el sistema exige su número de clave.
            li
              i.fas.fa-check
              p.mb-0  El valor mínimo de compra para recibir el pago con tarjetas débito suele ser de $5.000.              
            li
              i.fas.fa-check
              p.mb-0  El valor de la transacción se realiza por el valor de la compra o por un mayor valor sin exceder los $20.000 de cambio o “vueltas”, valor máximo usualmente autorizado por las compañías. 
          
        .col-lg-4
          figure
            img(src='@/assets/curso/t1-i7.png' alt='una tarjeta débito y un datáfono')          
        .clearfix.mb-4
        .col-lg-8
          .cajon.color-secundario.p-4(data-aos='flip-up')
            p.mb-0  <b>Nota.</b> Siempre verifica el valor digitado para evitar las devoluciones e inconvenientes con los clientes.

      .row.mb-5.justify-content-center
        .col-lg-5
          .titulo-quinto.color-primario
            .h4 Anverso
          ImagenInfografica.color-primario.mb-5.customDots(data-aos='flip-right')
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1-info1.svg', alt='Ejemplo de tarjeta débito - cara frontal')
            .tarjeta.color-acento-botones.p-3.shadow-box(x="50%" y="10%" numero="1")
              p Apariencia general de la tarjeta con buen brillo, sin zonas opacas, colores y logotipos de la entidad o sistema bien definido.   
            .tarjeta.color-acento-botones.p-3.shadow-box(x="8%" y="30%" numero="2")
              p Chip de seguridad
            .tarjeta.color-acento-botones.p-3.shadow-box(x="35%" y="30%" numero="3")
              p Icono <i>contactless</i>              
            .tarjeta.color-acento-botones.p-3.shadow-box(x="5%" y="60%" numero="6")
              p Número de la tarjeta
            .tarjeta.color-acento-botones.p-3.shadow-box(x="5%" y="73%" numero="4")
              p Fecha de vencimiento
            .tarjeta.color-acento-botones.p-3.shadow-box(x="5%" y="85%" numero="5")
              p Titular de la tarjeta
            .tarjeta.color-acento-botones.p-3.shadow-box(x="85%" y="73%" numero="5")
              p Franquicia de la tarjeta


        .col-lg-5
          .titulo-quinto.color-secundario
            .h4 Reverso
          ImagenInfografica.color-secundario.customDots.mb-5(data-aos='flip-left')
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1-info2.svg', alt='Ejemplo de tarjeta débito - cara posterior')
            .tarjeta.color-acento-botones.p-3(x="5%" y="25%" numero="1")
              p Banda magnética, sin deterioros o levantada. 
            .tarjeta.color-acento-botones.p-3(x="5%" y="50%" numero="2")
              p Panel de firma, no es una cinta pegada sobre la tarjeta. No se desprende al raspar con la uña.
            .tarjeta.color-acento-botones.p-3(x="70%" y="50%" numero="3")
              p Código de seguridad 
            .tarjeta.color-acento-botones.p-3(x="50%" y="70%" numero="4")
              p Datos de contacto de la entidad que emitió la tarjeta. 
            .tarjeta.color-acento-botones.p-3(x="5%" y="88%" numero="5")
              p Red de cajeros en los que puede retirar el dinero disponible en su cuenta de ahorros.

      .row.mb-5.justify-content-center
        .col-lg-6
          h4.titulo-cuarto
            i.fas.fa-angle-double-right
            | &nbsp;Las tarjetas crédito        
          p.mb-3  Son las que les permite a los clientes obtener dinero en préstamo del banco para realizar sus compras.
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  Deben ser presentadas por el dueño, son personales e intransferibles.
            li
              i.fas.fa-check
              p.mb-0  Siempre debe requerir la cédula del dueño o titular, el sistema no exige el número de clave.
            li
              i.fas.fa-check
              p.mb-0  El valor mínimo de compra con estas tarjetas suele ser de $5.000.
            li
              i.fas.fa-check
              p.mb-0  El valor de la transacción siempre debe ser menor o igual a la compra. 
            li
              i.fas.fa-check
              p.mb-0  Si la posición del datáfono o el pin pad lo permite, el cliente debe digitar el número de cuotas.              
                        
        .col-lg-4
          figure
            img(src='@/assets/curso/t1-i8.png' alt='una tarjeta crédito')   

      .row.justify-content-center
        .col-lg-5
          .titulo-quinto.color-secundario
            .h4 Anverso
          ImagenInfografica.color-secundario.customDots.mb-5(data-aos='flip-right')
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1-info3.svg', alt='Ejemplo de tarjeta crédito - cara frontal')
            .tarjeta.color-acento-botones.p-3(x="50%" y="10%" numero="1")
              p Apariencia general del plástico, buen brillo, sin zonas opacas, colores y logotipos de la entidad o sistema bien definidos. 
            .tarjeta.color-acento-botones.p-3(x="5%" y="55%" numero="2")
              p El número impreso debe coincidir con el realzado, no debe haber líneas o figuras arriba o abajo del realce, como tratando de ocultar otro número.
            .tarjeta.color-acento-botones.p-3(x="85%" y="50%" numero="3")
              p El realce debe estar en perfecto estado de brillo, forma y nitidez, especialmente en los 4 últimos números.
            .tarjeta.color-acento-botones.p-3(x="90%" y="70%" numero="4")
              p Holograma nítido, no se debe desprender o pelar con el paso de la uña, la imagen es bien definida.
            .tarjeta.color-acento-botones.p-3(x="90%" y="90%" numero="6")
              p Logotipos, (VISA, MasterCard, Diners Club, Credencial, American Expres), con características y colores de contornos muy definidos. No se desprende al frotarlo con la uña.           
            .tarjeta.color-acento-botones.p-3(x="50%" y="95%" numero="5")
              p Al reverso de las tarjetas está el código CVV o CVC que consta de 3 o 4 números y se utiliza como método de seguridad en transacciones en las que la tarjeta no está físicamente presente, como en compras por teléfono o Internet.           


    h3.titulo-tercero 
      i.fas.fa-angle-right 
      | &nbsp;Los cheques y su autorización
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i9.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0  Esta modalidad de pago es aún utilizada, aunque en menor proporción, por lo cual se debe tener las precisiones para cada tipo.

    .row.mb-5.justify-content-center
      .col-lg-10
        h4.titulo-cuarto
            i.fas.fa-angle-double-right
            | &nbsp;Cheque personal
        p.mb-5  El valor del cheque debe ser máximo por el valor de la compra, si el cliente requiere cambio o “vueltas” se tiene en cuenta la cantidad autorizada por la compañía.
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0  Autorizado con tarjeta Cadenalco el 50 % de la compra.        
          li
            i.fas.fa-check
            p.mb-0  Autorizado por Fenalcheque $20.000.   
    .row.mb-5.justify-content-center
      .col-lg-4
        figure
          img(src='@/assets/curso/t1-i10.jpg' alt='una tarjeta crédito')             
      .col-lg-6
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Características")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Elaborado a mano con bolígrafo.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Girado a nombre del almacén donde se esté haciendo la compra.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Firmado por la persona que lo elabora.

          .row(titulo="Características de seguridad")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | La calidad del papel.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Nombre del banco impreso en el cheque.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Impresión nítida del número del cheque y el número de cuenta en algunos cheques que aún la traen.

          .row(titulo="Requisito de diligenciamiento")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Elaborado con bolígrafo, sin tachones o enmendaduras.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Girados a nombre del almacén, Éxito, Ley o Pomona.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Cantidad igual en número y letras.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Ciudad y fecha completa (fecha del día en que lo estás recibiendo).
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Firma autógrafa del girador no impresa.            

    .row.mb-5.justify-content-center
      .col-lg-6
        h4.titulo-cuarto
          i.fas.fa-angle-double-right
          | &nbsp;La autorización de recibo
        p.mb-3  La autorización para recibir los cheques personales siempre se debe obtener de la entidad Fenalcheque siempre y cuando el valor del cheque no exceda de $500.000, valor máximo que autorizan los almacenes.
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0  Si el valor del cheque excede los $500.000, el supervisor(a) es el encargado de requerir la autorización a Fenalcheque.  
          li
            i.fas.fa-check
            p.mb-0  El número de autorización que da el datáfono siempre lo debe colocar detrás del cheque con los demás datos del sello (nombre, cédula, dirección, teléfono).                  
      
      .col-lg-4
        figure
          img(src='@/assets/curso/t1-i11.jpg' alt='un cheque')   

      .clearfix.mb-4
      .col-lg-8
        .cajon.color-secundario.p-4(data-aos='flip-up')
          p.mb-0  <b>Nota.</b> Según las políticas de cada almacén puede haber ciertas variaciones en cada procedimiento, de igual forma, no olvide revisar la elaboración del cheque antes de pedir la autorización, es su responsabilidad.


    .row.mb-5.justify-content-center
      .col-lg-10
        h4.titulo-cuarto
            i.fas.fa-angle-double-right
            | &nbsp;Cheque de empresa (nómina)
        p.mb-5  El valor de la compra debe ser mínimo el 10 % del valor del cheque, porcentaje establecido por la compañía.
      .col-lg-4
        figure
          img(src='@/assets/curso/t1-i12.jpg' alt='imagen decorativa')             
      .col-lg-6
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Características")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Tiene sello de la empresa que lo suministra.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Girado a nombre de la persona que lo presenta.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Elaborado con impresora.
          .row(titulo="Características de seguridad")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | La calidad del papel.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Nombre del banco impreso en el cheque.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Número de la cuenta impresa en el cheque.
                  
          .row(titulo="Requisito de diligenciamiento")
            .col-md-12.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Cantidad igual en número y letras.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Ciudad y fecha completa.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Firma del girador.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Sin tachones o enmendaduras.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | La autorización de recibo.
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | La autorización para recibir estos cheques la debe realizar siempre el supervisor o el encargado de esta labor, utilizando el sistema Pressman (o el que aplique) que permita verificar las cuentas y las firmas de los cheques.


    h3.titulo-tercero 
      i.fas.fa-angle-right 
      | &nbsp;El efectivo y la seguridad de los billetes
    
    .row.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t1-i13.jpg' alt='imagen decorativa')         
      .col-lg-9
        p.mb-3  Hay que tener en cuenta recomendaciones para la detección de falsificaciones. Siempre que se dude de la autenticidad de un billete o moneda, la mejor manera de verificar es comparándolo con otro billete o moneda del cual tenga la certeza que es auténtico. De esta forma será muy fácil detectar que alguna de las características de autenticidad está ausente en la falsificación. Sin embargo, si no dispone de un billete o moneda para efectuar la comparación, es importante tener presente los siguientes elementos de seguridad a encontrar para el cono monetario:

    p.mb-5
      i.fas.fa-check
      | &nbsp;<b>En los billetes antiguos se pueden encontrar los siguientes elementos de seguridad a tener en cuenta:</b>

    .tarjeta.bg-sliders.p-5.mb-5.shadow-box
      SlyderA
        .row
          .col-md-5.mb-4.mb-md-0
            ul.lista-ul
              li
                i.fas.fa-check 
                p Las áreas con relieve en la mayoría de los casos, son las zonas más oscuras del billete.
              li
                i.fas.fa-check 
                p Al exponer el billete a la luz ultravioleta se pueden apreciar en el hilo de seguridad color plateado la palabra “COLOMBIA” aparece en color amarillo sobre fondo violeta  y el texto “50 MIL PESOS”.<br><br> También los números de serie del billete aparecen en colores verde y rojo.                 
              li
                i.fas.fa-check 
                p Al exponer el billete a la luz ultravioleta se puede apreciar que el hilo de seguridad reacciona en color verde y que en la parte superior del árbol se ve en el color naranja. Los extremos superior e inferior del billete se observan en color amarillo.         
          .col-md-7
            figure
              img.mb-2(src='@/assets/curso/t1-s1.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)

        .row
          .col-md-5.mb-4.mb-md-0
            ul.lista-ul
              li
                i.fas.fa-check 
                p Las áreas con relieve, en la mayoría de los casos, son las zonas más oscuras del billete.
              li
                i.fas.fa-check 
                p Al exponer el billete a la luz ultravioleta se puede apreciar que el  hilo de seguridad se ve en colores amarillo, azul y rojo. Con mayor nitidez en las secciones que salen del papel. La denominación “20000” y el texto “VEINTE MIL PESOS” parecen en dos sellos en el costado izquierdo, así como en sentido vertical la denominación “20000” en el centro del billete, los cuales reaccionan en color amarillo.             

          .col-md-7
            figure
              img.mb-2(src='@/assets/curso/t1-s2.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)
        .row
          .col-md-5.mb-4.mb-md-0
            ul.lista-ul
              li
                i.fas.fa-check 
                p Las áreas con relieve, en la mayoría de los caos, son las zonas más oscuras del billete.
              li
                i.fas.fa-check 
                p Los dos hilos de seguridad están ubicados en posición vertical. Visto por el anverso, el hilo de la derecha es transparente y a la contraluz permite leer el texto “BRC 10000”. El de la izquierda no es transparente y se aprecia como opaco a contraluz.          
              li
                i.fas.fa-check 
                p Ubicada en el extremo izquierdo del billete a contraluz se observa la imagen de la heroína, con los mismos rasgos del retrato utilizado como motivo principal, a la derecha se aprecia la marca de agua resaltada formada por las letras P y S.
          .col-md-7
            figure
              img.mb-2(src='@/assets/curso/t1-s3.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)


    p.mb-5
      i.fas.fa-check
      | &nbsp;<b>En los nuevos billetes también se encuentran elementos de seguridad como los siguientes:</b>

    .tarjeta.bg-sliders2.p-5.mb-5.shadow-box
      SlyderA
        .row.justify-content-center.mb-4
          .col-md-12.mb-4
            p.higlighted-text Imágenes y textos en relieve y elementos en sistema braille para personas con discapacidad visual.
          .col-md-8
            figure
              img.mb-2(src='@/assets/curso/t1-s4.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)

        .row.justify-content-center.mb-4
          .col-md-12.mb-4
            p.higlighted-text2 Imágenes coincidentes, efectos en la cinta de seguridad y marcas de agua a trasluz.
          .col-md-8
            figure
              img.mb-2(src='@/assets/curso/t1-s5.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)

        .row.justify-content-center.mb-4
          .col-md-12.mb-4
            p.higlighted-text Efectos de color y movimiento, así como imágenes ocultas.
          .col-md-8
            figure
              img.mb-2(src='@/assets/curso/t1-s6.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)

        .row.justify-content-center.mb-4
          .col-md-12.mb-4
            p.higlighted-text2 Reacción a luz ultravioleta.
          .col-md-8
            figure
              img.mb-2(src='@/assets/curso/t1-s7.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)

        .row.justify-content-center.mb-4
          .col-md-12.mb-4
            p.higlighted-text Microtextos para observar con lupa.
          .col-md-8
            figure
              img.mb-2(src='@/assets/curso/t1-s8.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)

        .row.justify-content-center.mb-4
          .col-md-12.mb-4
            p.higlighted-text2 Variación de color.
          .col-md-8
            figure
              img.mb-2(src='@/assets/curso/t1-s9.png', alt='elementos de seguridad en billetes')
              figcaption (Banco de la República, s.f.)

  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
