/* npm.im/numerologia 0.2.0 */
!function(n){var r="abcdefghijklmnopqrstuvwxyz",t="".join,e="".split,u="".toLowerCase,o=/^\d+$/,a=Math.round,i=/^(.)\1+$/,c=/[\u0300-\u036f]/g,f="".normalize;var l=function n(l){l=l?u.call(l):r;var s=f?m:d;function m(n){return f.call(n,"NFD").replace(c,"")}function d(n){return""+n}function p(n){return v(o.test(n)?n:h(n))}function v(n){return+n?n%9||9:0}function h(n){return n=s(u.call(n)),l.indexOf(n)+1}function g(n){return(n instanceof Array?t:e).call(n,"")}function b(n){for(var r,t=(n=g(n)).length,e=0;t--;)e+=(r=p(r=n[t]))>0?+r:0;return a(e)}function x(n){var r=b(n);return r<10?r:x(r)}function y(n){var r=b(n);return r<10||w(r)?r:y(r)}function w(n){return i.test(n)}function z(n,r){return z[n](r)}return z.base=s,z.bass=m,z.basic=d,z.create=n,z.key=p,z.modulo=v,z.num=y,z.numero=y,z.place=h,z.raiz=x,z.rep=w,z.root=x,z.show=function(n){for(var r=(n=g(n)).length,t=0,e="";t<r;)e+=p(n[t++]);return e},z.sum=b,z.suma=b,z}();"undefined"!=typeof module&&module.exports?module.exports=l:n.numerologia=l}(this);

/* angel interpreter */
!function(esta) {
  var api = esta.numerologia
  var form = document.getElementById("formulario")
  var key = "_"
  var text = form[key]
  var raiz = form.raiz
  var numero = form.numero
  var suma = form.suma
  var title = "numerología: "
  var params = new URLSearchParams(location.search)
  var saved = params.get(key)
  var docile = document.documentElement.dataset

  update(text, saved)

  function update(element, value) {
    value = value || 0
    element.value == value || (element.value = value)
  }

  function calc() {
    var v = text.value
    v = v || v === 0 ? v : saved || 0
    document.title = title + v
    var calc = {
      suma: api.suma(v),
      numero: api.numero(v),
      raiz: api.raiz(v)
    }
    suma.hidden = calc.suma === calc.raiz
    numero.hidden =
      calc.numero === calc.raiz ||
      calc.numero === calc.suma
    update(suma, calc.suma)
    update(numero, calc.numero)
    update(raiz, calc.raiz)
    docile && (docile.raiz = calc.raiz)
  }

  calc()

  form.oninput = calc
  form.onchange = calc
  form.onsubmit = calc
}(this)
