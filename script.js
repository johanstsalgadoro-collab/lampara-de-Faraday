const progressBar=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progressBar.style.width=`${max>0?(window.scrollY/max)*100:0}%`});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
let charge=0;const chargeBtn=document.getElementById('chargeBtn'),level=document.getElementById('batteryLevel'),batteryText=document.getElementById('batteryText');chargeBtn.addEventListener('click',()=>{charge+=20;if(charge>100)charge=0;level.style.height=`${charge}%`;batteryText.textContent=`${charge}%`;chargeBtn.textContent=charge===100?'Reiniciar simulación':'Agregar pulso de carga'});
const toggleLed=document.getElementById('toggleLed'),ledBulb=document.getElementById('ledBulb');toggleLed.addEventListener('click',()=>{const on=ledBulb.classList.toggle('on');toggleLed.textContent=on?'Apagar LED':'Encender LED'});
