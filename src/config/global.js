export default {
  global: {
    componenteFormativo: 'Protocolos de cierre de caja',
    descripcionCurso:
      'A través de este componente de formación se pretende instruir para realizar el cierre de caja y entrega del puesto de pago a la hora de terminar un turno, teniendo en cuenta que deben hacer entrega de dinero y soportes de todas la transacciones u operaciones que haya tenido durante el día y para los cuales hay ciertos protocolos a seguir.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cierre de la operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimiento técnico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificar efectivo y medios de pago',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Registro de documentos de valor',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Arqueo de caja y entrega del puesto de trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arenal, C. (2019). Operaciones de caja en la venta. UF0035. Editorial Tutor Formación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/105540',
    },
    {
      referencia: 'Negrete, P. (s.f.) Manual procedimiento de pagos. Scribd.',
      link: 'https://es.scribd.com/doc/42683576/Manual-Procedimiento-de-Pagos',
    },
  ],
  glosario: [
    {
      termino: 'Arqueo de caja',
      significado:
        'recontar las transacciones de dinero (pagos en efectivo, tarjetas débito, crédito o documentos de valor), en un período estimado de tiempo, que por lo general es al final del día, justo cuando el establecimiento comercial cierra sus puertas al público.',
    },
    {
      termino: 'Caja registradora',
      significado:
        'máquina sumadora para uso de comerciantes que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero.',
    },
    {
      termino: 'Cajero',
      significado:
        'persona responsable de la caja en el punto de venta de un establecimiento comercial. Es quien se encarga de cuadrar los ingresos y egresos de caja, logrando que al cierre de esta, todo esté cuadrado.',
    },
    {
      termino: 'Cajero automático',
      significado:
        'máquina sumadora para uso de comerciantes que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero.',
    },
    {
      termino: 'Crédito',
      significado:
        'cuando una transacción se acredita en su cuenta aparece como una transacción positiva (+) y se agrega a su saldo (a diferencia de un débito, que aparece como una transacción negativa (-) y se resta de su saldo). Un ejemplo de crédito sería el dinero en efectivo que depositó.',
    },
    {
      termino: 'Débito',
      significado:
        'cuando una transacción se debita en su cuenta aparece como una transacción negativa (–) y se resta del saldo de su cuenta corriente vinculada, a diferencia de un crédito, que aparece como una transacción positiva (+) y se agrega a su saldo. Un ejemplo de débito en su cuenta corriente es una compra con tarjeta débito en un comercio.',
    },
    {
      termino: 'Firma y fibrillas invisibles',
      significado:
        'Son pares de colores (químicamente distintos) que apenas se diferencian bajo una determinada fuente de iluminación, pero que muestran un claro contraste de color si se observan bajo otra distinta o a través de un filtro, por lo general, un filtro rojo.',
    },
    {
      termino: 'Legalización',
      significado:
        'documento mediante el cual se formaliza los gastos realizados con cargo al anticipo concedido y se reintegran los recursos no gastados.',
    },
    {
      termino: 'Marca de agua',
      significado:
        'es el proceso de superponer un logo o un texto sobre un documento o un archivo de imagen y es un proceso importante en cuanto a la protección de los derechos de autor y a la comercialización de obras digitales.',
    },
    {
      termino: 'Reembolso de caja menor',
      significado:
        'es el soporte del pago de los gastos que se han efectuado en pequeñas cantidades por conceptos tales como: comidas, pasajes, papelería, fotocopias, etc., estos pagos deben contar con las facturas o documentos equivalentes para su verificación.',
    },
    {
      termino: 'Saldo disponible',
      significado:
        'es el dinero en su cuenta de ahorros o cuenta corriente que está actualmente a su disposición para hacer compras, extracciones, etc. Este saldo se actualiza durante el día con las transacciones que realice.',
    },
    {
      termino: 'Tarjeta de crédito',
      significado:
        'instrumento que permite realizar pagos sin tener dinero en efectivo. El cargo en la cuenta se produce, por lo general, al final del mes. También se puede trasladar el pago más allá de ese momento, pero esta operación conlleva el pago de intereses. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque hay que pagar comisiones.',
    },
    {
      termino: 'Tarjeta débito',
      significado:
        'al igual que la tarjeta de crédito es un medio que permite realizar pagos sin tener dinero en efectivo. La diferencia es que con la tarjeta débito el cargo en la cuenta se produce inmediatamente, con lo que si no existe disponible el pago no se podrá realizar. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque normalmente con comisiones si no se utiliza la red propia de la tarjeta.',
    },
    {
      termino: 'Transacción efectiva',
      significado:
        'una transacción se hace efectiva una vez que se ha acreditado o debitado de una cuenta con éxito.',
    },
    {
      termino: 'Transacción rechazada',
      significado:
        'usted deposita un cheque emitido para usted, pero la persona que lo libró no tiene fondos suficientes para cubrirlo. En este caso, si ya se le acreditó el depósito se debitará de su cuenta, ya que no había fondos suficientes.',
    },
  ],
  complementario: [
    {
      texto:
        'Arenal, C. (2019). Operaciones de caja en la venta. UF0035. Editorial Tutor Formación.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/105540',
    },
    {
      texto: 'Martínez, A. (1984). Contabilidad arqueo caja. SENA.',
      tipo: 'Libro',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/626/1/unidad4_arqueo_caja.pdf',
    },
    {
      texto:
        'Somos Bold. (2020). ¿Cómo verificar la autenticidad de una tarjeta de crédito? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GD-ook_LYAo',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Instructora',
        centro:
          'Centro de Gestión Tecnológica de Servicios CGTS - Regional Valle',
      },
      {
        nombre: 'Jaime Pérez Posada',
        cargo: 'Instructor',
        centro: 'Comercio - Regional Antioquia',
      },
      {
        nombre: 'Samuel Pinilla Hurtado',
        cargo: 'Instructor',
        centro: 'Comercio - Regional Antioquia',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jorge Armando',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
