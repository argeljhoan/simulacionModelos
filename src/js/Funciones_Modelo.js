

export  const Ro = (miu, landa) => {
 
  const p = (landa / miu)
  return p.toFixed(4)
}

const miu = 15
const landa = 4
const k = 5
console.log(Ro(miu, landa))
const ro = Ro(miu, landa)

export  const Probabilidad = (ro, k) => {

  const po = (1 - ro) / (1 - (ro ** (k + 1)))
  return po.toFixed(4)
}
const probabilidad = Probabilidad(ro, k)
console.log(Probabilidad(ro, k))

export  const numeroSistema = (ro, k) => {

  const l1 = (ro) / (1 - ro)
  const l2 = ((k + 1) * (ro ** (k + 1))) / (1 - (ro ** (k + 1)))
  const longitud = l1 - l2

  return longitud.toFixed(4)

}

console.log(numeroSistema(ro, k))
const L = numeroSistema(ro, k)

export  const numeroCola = (probabilidad, L) => {

const longitudCola = L - (1-probabilidad)
return longitudCola.toFixed(4)

}

console.log(numeroCola(probabilidad, L));
const Lq = numeroCola(probabilidad, L)

export  const tiempoSistema = (L,landa ) => {

  const W = L/landa
  const Wm = W*60
  return Wm.toFixed()+ " minutos"
}
console.log(tiempoSistema(L,landa ));

export  const tiempoCola = (Lq,landa ) => {
  
  const Wq = Lq / landa
  const Wqm = Wq*60
  return Wqm.toFixed()+ " minutos"
}

console.log( tiempoCola(Lq,landa ));


