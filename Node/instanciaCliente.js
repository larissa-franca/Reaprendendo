const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
 
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
 
 
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)// Compartilham o mesmo objeto
 
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)