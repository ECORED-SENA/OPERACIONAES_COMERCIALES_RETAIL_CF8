<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-0
    .titulo-principal.color-acento-contenido(data-aos='flip-left')
      .titulo-principal__numero
        span 2
      h1 Arqueo de caja y entrega del puesto de trabajo
    
    .row.mb-5
      .col-lg-7.slideInLeft
        p.mb-5  También conocido como cierre de caja, es un método de contabilidad realizado al final del día, después de la jornada de ventas, que se debe realizar obligatoriamente con el fin de saber si el dinero en efectivo, además de otros documentos de pago físicos, concuerdan con el dinero que se reporta de ventas en cada una de las cajas en un <i>retail</i>.
        h3.titulo-tercero 
          i.fas.fa-angle-right 
          | &nbsp;Informe del arqueo
        p.mb-3  Es el control estricto de ingresos y egresos ocurridos en cada caja del punto de venta, en el <i>retail</i> el proceso de arqueo o cierre de caja, que se desarrolla diariamente, es necesario una formación técnica e integral, de lo contrario se puede convertir en un asunto complejo para los cajeros.
        p.mb-3  Es por esto que el arqueo de caja puede convertirse en un proceso complicado cuando:
      .col-lg-5.slideInLeft
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t2-i1.jpg' alt='imagen decorativa')

    p.mb-5  De otro modo, el objetivo principal del arqueo de caja es resguardar el dinero en efectivo existente en las cajas del punto de venta, teniendo en cuenta que el dinero está siempre expuesto al público y por lo tanto, hay facilidad de perderlo, bien sea por robo, fraude o por descuido del cajero en su administración y/o contabilización.  
    SlyderD.mb-5(:datos="datosSlyder")
    .neg-margin-x.bg-curved
      h3.titulo-tercero 
        i.fas.fa-angle-right 
        | &nbsp;Entregar puesto de trabajo
      .row.mb-5
        .col-lg-5
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t2-i3.png' alt='imagen decorativa')        
        .col-lg-7
          p.mb-4  En todo <i>retail</i> después de recibir pagos en efectivo, cheque, tarjeta de crédito, débito automático o en bonos, empacar mercancía y proporcionar información a los clientes compradores son la base de la jornada laboral en el punto de pago. Cumple su objetivo, responder a las políticas de la organización y en especial el servicio de la atención al cliente.
          .cajon.color-secundario.p-4.mb-4
            p.mb-0  En el punto de pago o caja no debe quedar nada con relación a dinero en efectivo, bonos, cheques u otros documentos de valor y, toda la gestión de la jornada debe reportarse en el departamento de recaudo respectivo en cada <i>retail</i>.
          .tarjeta.color-acento-contenido.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.nW(src="@/assets/curso/t1-ic1.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Verificación del funcionamiento de la caja
                    p.small Tanto al entregar como al recibir el puesto de trabajo es importante validar el correcto funcionamiento de esta, <b>se invita a ver el siguiente recurso externo.</b>
                  .col-sm-auto
                    a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=uFe65nDNpIQ' target="_blank")
                      span Ver video
                      i.fas.fa-link
          
      h3.titulo-tercero 
        i.fas.fa-angle-right 
        | &nbsp;Rotaciones
      .row.mb-5.justify-content-center
        .col-lg-10
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos='flip-up') 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img.nW.centered(src='@/assets/curso/t2-ic1.svg' alt='imagen decorativa')
              .col-lg-8
                .bloque-texto-a__texto.p-4.shadow-box
                  p En los <i>retail</i> es muy común ver la rotación del trabajador en diferentes áreas de la superficie comercial, el mismo puede rotar en diferentes áreas e incluso cajas, no presentándose un rol estático durante su jornada laboral, para estos casos es importante tener en cuenta que para realizar los arqueos o entrega del puesto de trabajo es necesario que el colaborador maneje un código especial que le servirá para este momento y sobre este es que debe responder al cierre de la jornada laboral.
      

      h3.titulo-tercero 
        i.fas.fa-angle-right 
        | &nbsp;Entrega a conformidad
      .row.mb-5
        .col-lg-7
          p.mb-4  Es muy importante desde el rol poder hacer una entrega a conformidad de la caja, según cada organización se pueden manejar diferentes políticas para garantizar una buena entrega de esta, a su vez de manejar diferentes protocolos para el manejo de inconformidades. Como entrega no conforme se puede entender las situaciones derivadas de la gestión del cajero y donde él se vea afectado por algún o algunos descuadres de dicha caja, situaciones que en muchos casos ninguno está exento del todo, ya que como se sabe el manejo del dinero puede dar para muchas situaciones positivas o no tan positivas, al recibir dinero falso, por ejemplo, haría que efectivamente haya faltantes en este punto.
          .cajon.color-secundario.p-4.mb-4
            p.mb-0  Es importante tratar dentro de las posibilidades del cajero que lo que se registre durante la jornada sea lo presentado al finalizar la misma, para evitar novedades se debe procurar laborar con mucho cuidado y atención. Manejar todos los ingresos del día con responsabilidad, validar en lo posible que en el dinero a recibir no haya presencia de falsificaciones y estar atentos a una correcta facturación, ya que de lo contrario esta puede derivar novedades en este proceso.
          .tarjeta.color-acento-contenido.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.nW(src="@/assets/curso/t1-ic1.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Proceso general del cajero
                    p.small.yellowText Para garantizar este punto es importante recordar realizar un adecuado proceso de manejo de caja, se invita a repasar el mismo a través del siguiente recurso.
                  .col-sm-auto
                    a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=nYWj9Tru7mc' target="_blank")
                      span Ver video
                      i.fas.fa-link
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Mejora continua
                    p.small.yellowText Esta es la gran aliada para mejorar día a día su labor, revise el siguiente recurso externo.
                  .col-sm-auto
                    a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=voMnsvZgVjw' target="_blank")
                      span Ver video
                      i.fas.fa-link          
        .col-lg-5
          figure
            img(src='@/assets/curso/t2-i7.png' alt='imagen decorativa')


















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'No contar con un sistema automatizado para los ingresos o egresos de la caja, como lo son el registro de ventas, compras y demás costos o pagos.',
        texto: '',
        imagen: require('@/assets/curso/s1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Recibir distintos documentos de pago que se combinan entre sí para el monto total de una compra.',
        texto: '',
        imagen: require('@/assets/curso/s2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Mover el dinero de la caja con el fin de pagar, bien sea a proveedores o pagar cualquier otro gasto del establecimiento.',
        texto: '',
        imagen: require('@/assets/curso/s3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Tener varias cajas con una gran cantidad de operaciones en el día.',
        texto: '',
        imagen: require('@/assets/curso/s4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'No tener un control de facturación.',
        texto: '',
        imagen: require('@/assets/curso/s5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
