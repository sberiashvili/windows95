(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function d(){const s=String(Math.floor(Math.random()*366)+1).padStart(3,"0"),e=String(Math.floor(Math.random()*9)+95).padStart(2,"0"),r=Math.floor(Math.random()*7),n=Math.floor(Math.random()*100),t=Math.floor(Math.random()*100),o=(700-n-t-r)%100,i=String(n).padStart(2,"0")+String(t).padStart(2,"0")+String(o).padStart(2,"0"),c=Array.from({length:5},()=>Math.floor(Math.random()*10)).join("");return`${s}${e}-OEM-${i}-${c}`}const l=document.querySelector("#app");l.innerHTML=`
  <div class="container">
    <div class="header">
      <div class="logo">
        <span class="logo-text">95</span>
        <span class="logo-gen">GEN</span>
      </div>
      <div class="subtitle">WINDOWS 95 KEY GENERATOR</div>
    </div>
    
    <div class="description">
      <p>AUTHENTIC WINDOWS 95 PRODUCT KEY ALGORITHM</p>
      <p>GENERATES VALID FORMAT KEYS FOR LEGACY SYSTEMS</p>
      <p>EDUCATIONAL AND RESEARCH PURPOSES ONLY</p>
    </div>
    
    <div class="generator-section">
      <button id="generate-btn" class="generate-button">
        <span class="btn-text">GENERATE KEY</span>
      </button>
      
      <div class="output-container">
        <div class="output-header">OUTPUT TERMINAL</div>
        <div id="output" class="output"></div>
      </div>
    </div>
    
    <div class="footer">
      <div class="warning">FOR EDUCATIONAL AND NOSTALGIC PURPOSES ONLY</div>
    </div>
  </div>
`;const a=document.getElementById("generate-btn"),u=document.getElementById("output");a.addEventListener("click",()=>{const s=d();u.innerHTML=`
    <div class="key-item">
      <div class="key-text">${s}</div>
      <div class="key-actions">
        <button class="copy-btn" onclick="copyToClipboard('${s}')">COPY</button>
        <button class="new-btn" onclick="generateNew()">NEW KEY</button>
      </div>
    </div>
  `,a.classList.add("generating"),setTimeout(()=>{a.classList.remove("generating")},300)});window.copyToClipboard=async s=>{try{await navigator.clipboard.writeText(s);const e=event.target,r=e.textContent;e.textContent="COPIED",e.classList.add("copied"),setTimeout(()=>{e.textContent=r,e.classList.remove("copied")},1500)}catch(e){console.error("Failed to copy: ",e);const r=document.createElement("textarea");r.value=s,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r);const n=event.target,t=n.textContent;n.textContent="COPIED",n.classList.add("copied"),setTimeout(()=>{n.textContent=t,n.classList.remove("copied")},1500)}};window.generateNew=()=>{a.click()};window.addEventListener("load",()=>{setTimeout(()=>{a.click()},500)});
