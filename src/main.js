import './style.css'
import { generateKey } from './keygen.js'

const app = document.querySelector('#app')

app.innerHTML = `
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
`

// Event listeners
const generateBtn = document.getElementById('generate-btn')
const output = document.getElementById('output')

generateBtn.addEventListener('click', () => {
  const key = generateKey()
  
  // Clear previous output and show new key
  output.innerHTML = `
    <div class="key-item">
      <div class="key-text">${key}</div>
      <div class="key-actions">
        <button class="copy-btn" onclick="copyToClipboard('${key}')">COPY</button>
        <button class="new-btn" onclick="generateNew()">NEW KEY</button>
      </div>
    </div>
  `
  
  // Add generation effect
  generateBtn.classList.add('generating')
  setTimeout(() => {
    generateBtn.classList.remove('generating')
  }, 300)
})

// Global functions
window.copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // Show feedback
    const btn = event.target
    const originalText = btn.textContent
    btn.textContent = 'COPIED'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = originalText
      btn.classList.remove('copied')
    }, 1500)
  } catch (err) {
    console.error('Failed to copy: ', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    const btn = event.target
    const originalText = btn.textContent
    btn.textContent = 'COPIED'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = originalText
      btn.classList.remove('copied')
    }, 1500)
  }
}

window.generateNew = () => {
  generateBtn.click()
}

// Auto-generate first key on load
window.addEventListener('load', () => {
  setTimeout(() => {
    generateBtn.click()
  }, 500)
})