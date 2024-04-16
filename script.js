// Array de productos
var productos = [
  { nombre: "Bioseda x 60 ml", precio: 29900 },
  { nombre: "Bioseda x 150 ml", precio: 70200 },
  { nombre: "Champú Frecuente mujer x 400ML", precio: 26000 },
  { nombre: "Sellante para cabello normal x 385ML", precio: 16400 },
  { nombre: "Body splash femenino x 250ML", precio: 27300 },
  { nombre: "Locion para la peluqueada mujer x 270ML", precio: 17300 },
  { nombre: "Agua desenredante x 340ML", precio: 16900 },
  { nombre: "Agua desenredante x 1000ML", precio: 41900 },
  { nombre: "Crema para las manos x 250ML", precio: 17700 },
  { nombre: "Crema para las manos x 1000ML", precio: 37000 },
  { nombre: "Talco perfumado x 200 ML", precio: 18200 },
  { nombre: "Gel antibacterial brisa marina x 70 ml", precio: 4300 },
  { nombre: "Gel antibacterial noche artica x 70 ml", precio: 4300 },
  { nombre: "Gel antibacterial brisa marina x 70 ml", precio: 4300 },
  { nombre: "Gel antibacterial brisa marina x 580 ml", precio: 20800 },
  { nombre: "Gel antibacterial para manos x 680 ml", precio: 18600 },
  { nombre: "JABON LIQUIDO PARA MANOS X 350 ML", precio:  7800},
  { nombre: "JABON LIQUIDO PARA MANOS X 980 MIL", precio: 18600 },
  { nombre: "ALCOHOL ANTIBAC MANOS X 78ML", precio: 3500 },
  { nombre: "ALCOHOL ANTIBAC MANOS X 1000ML", precio: 19200 },
  { nombre: "CH. DOUCHE LOOK TOTAL X 280 ML ANTIBACTERIAL", precio: 15200 },
  { nombre: "CH. DOUCHE MUJER X 280 ML ANTIBACTERIAL", precio: 15200 },
  { nombre: "CH. DOUCHE HOMBRE X 280 ML ANTIBACTERIAL", precio: 15200 },
  { nombre: "ALCOHOL LIMPIADOR SUPERFICIES X 130 ML", precio: 12900 },
  { nombre: "ALCOHOL LIMPIADOR SUPERFICIES X 300 ML", precio: 18600 },
  { nombre: "CH. ROMERO Y QUINA X 200 ML. ANTIBACTERIAL", precio: 13000 },
  { nombre: "CH. ROMERO Y QUINA X 390 ML. ANTIBACTERIAL", precio: 15600 },
  { nombre: "CH. ROMERO Y QUINA X 1000 ML. ANTIBACTERIAL", precio: 26000 },
  { nombre: "CREMA GLYCOLICA HOMBRE X 280 ML ANTIBACTERIAL", precio: 19100 },
  { nombre: "CREMA GLYCOLICA MUJERX 280 ML ANTIBACTERIAL", precio: 19100 },
  { nombre: "CH. NUTRITIV0 X 400 ML", precio: 221000 },
  { nombre: "CH. NUTRITIVO X1000 ML", precio: 39000 },
  { nombre: "MASCARILLA NUTAITIVA X 150 ML", precio: 31600 },
  { nombre: "MASCARILLA NUTRITIVA X 500 ML", precio: 91300 },
  { nombre: "MIRACLE TRATAMIENTO X 100 ML", precio: 13200 },
  { nombre: "MIRACLE TRATAMIENTO X 700 ML", precio: 69100 },
  { nombre: "TTO SUAVIZANTE Y REPAR NOCTURNAX 250 ML", precio: 18700 },
  { nombre: "CH. BIO LIBRE DE SULFATOS X 340 ML", precio: 36500 },
  { nombre: "CH. BIO LIBRE DE SULFATOS X 1000 ML", precio: 86500 },
  { nombre: "TTO FERULA ASSAX 145 ML", precio: 18700 },
  { nombre: "TTO FERULA ASSA X 490 ML", precio: 55300 },
  { nombre: "BIOTRATAMIENTO X 340 ML", precio: 32500 },
  { nombre: "KIT BI0 THERAPY (TRATAMIENTO+CHAMPU)", precio: 59800 },
  { nombre: "CH. ANTICASPA MUJER X 390 ML", precio: 19600 },
  { nombre: "CH. ANTICASPA MUJER X 980 ML", precio: 39000 },
  { nombre: "LOCION ANTICASPA CON OCTOPIROX X 200ML", precio: 11600 },
  { nombre: "CH. ORTIGA X 390 ML", precio: 18200 },
  { nombre: "CH. ORTIGA X 980 ML", precio: 4300 },
  { nombre: "SHAMP00 EN SECO X 300 ML", precio: 4300 },
  { nombre: "SHAMPOO EN SEC0 X 130 ML", precio: 4300 },
  { nombre: "CH. GRASO MUJER X 390 ML", precio: 20800 },
  { nombre: "CH. GRASO MUJER X 980 ML", precio: 18600 },
  { nombre: "LOCIÔN CABELLO GRASO X 120 ML", precio: 29900 },
  { nombre: "LOCIÓN CABELLO GRASO X 400 ML", precio: 70200 },
  { nombre: "KIT DETOX PURIFICANTE DE ARCILLA", precio: 26000 },
  { nombre: "AMP. PARA LA CAIDA DEL CABELLO CROISSANC CAJA X 10", precio: 16400 },
  { nombre: "AVIVER REVITALIZANTE X 120 ML", precio: 27300 },
  { nombre: "AVIVER REVITALIZANTE X 200 ML", precio: 17300 },
  { nombre: "AVIVER REVITALIZANTE X 400 ML", precio: 16900 },
  { nombre: "AVIVER REVITALIZANTE X 690 ML", precio: 41900 },
  { nombre: "KIT TERAPIA FORTIFICANTE ANTICAIDA", precio: 17700 },
  { nombre: "LOCIÓN TRATAMIENTO ANTICAÍDA X 65 ML", precio: 37000 },
  { nombre: "AMPLIFICADOR DE RIZOS", precio: 18200 },
  { nombre: "FRISEUR ESTIMULADOR DE RIzOS X 270 ML", precio: 4300 },
  { nombre: "CH. CABELLOS LISOS INTELIGENTES X 330 ML", precio: 4300 },
  { nombre: "MASCARILLA CABELLOS LISOS INTELIGENTES X 330 ML", precio: 4300 },
  { nombre: "CREMA PARA PEINAR LISOS INTELIG X 300 ML", precio: 20800 },
  { nombre: "KIT CABELLOS LISOS INTELIGENTES", precio: 18600 },
  { nombre: "CH. REESTRUCT ACEITE DE ARGÁN X 270 ML", precio: 4300 },
  { nombre: "MASCARILLA REESTRUCT. ACEITE ARGÁN X 200 ML", precio: 4300 },
  { nombre: "SILICONA REESTRUC ACEITE DE ARGÁN X 95 ML", precio: 4300 },
  { nombre: "KIT REESTRUCTURANTE CON ACEITE DE ARGÁN", precio: 20800 },
  { nombre: "CH. REPARACIÓN INSTANTÁNEA X 350", precio: 18600 },
  { nombre: "TTO. REPARACIÓN INSTANTÁNEA CJ X3X15 ML", precio: 4300 },
  { nombre: "MASCARILLA REPARACIÓN INSTANTÁNEA X 350", precio: 4300 },
  { nombre: "MULTI 12 EN 1 LEAVE IN TREATMENT X 250 ML", precio: 4300 },
  { nombre: "CH. ANTIEDAD X 350 ML", precio: 20800 },
  { nombre: "MASCARILLA ANTIEDAD X 350 ML", precio: 18600 },
  { nombre: "TTO. ANTIEDAD X 100 ML", precio: 4300 },
  { nombre: "KIT ANTIEDAD", precio: 4300 },
  { nombre: "CH. MECHAS RADIANTES X 270 ML.", precio: 4300 },
  { nombre: "TTO MECHAS RADIANTES X 200 ML", precio: 20800 },
  { nombre: "SILICONA MECHAS RADIANTES X 55ML", precio: 18600 },
  { nombre: "KIT MECHAS RADIANTES CAJA", precio: 4300 },
  { nombre: "Gel antibacterial noche artica x 70 ml", precio: 4300 },
  { nombre: "Gel antibacterial brisa marina x 70 ml", precio: 4300 },
  { nombre: "Gel antibacterial brisa marina x 580 ml", precio: 20800 },
  { nombre: "Gel antibacterial para manos x 680 ml", precio: 18600 },
];

// Función para buscar un producto por nombre
// Función para buscar un producto por nombre
function buscarProducto() {
  var busqueda = document.getElementById('search').value.toLowerCase(); // Convertir a minúsculas
  var encontrado = false;
  var resultadoHTML = '';

  for (var i = 0; i < productos.length; i++) {
      var nombreProducto = productos[i].nombre.toLowerCase(); // Convertir a minúsculas
      if (nombreProducto.includes(busqueda)) { // Buscar si el nombre del producto incluye la búsqueda
          resultadoHTML += '<p>Nombre: ' + productos[i].nombre + ', Precio: ' + productos[i].precio + '</p>';
          encontrado = true;
      }
  }

  if (!encontrado) {
      resultadoHTML = '<p>No se encontró ningún producto con ese nombre.</p>';
  }

  document.getElementById('resultado').innerHTML = resultadoHTML;
}

