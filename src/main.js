import './style.css'
import { generateKey } from './keygen.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="container">
    <div class="header">
      <div class="logo">
        <span class="logo-text">95</span>
        <span class="logo-gen">Gen</span>
      </div>
      <div class="subtitle">Windows 95 Key Generator</div>
    </div>
    
    <div class="description">
      <p>A minimalist tool that generates authentic Windows 95 product keys.</p>
      <p>Each key follows the original algorithm and format specifications.</p>
    </div>
    
    <div class="generator-section">
      <button id="generate-btn" class="generate-button">
        <span class="btn-text">Generate Key</span>
        <div class="btn-glow"></div>
      </button>
      
      <div class="output-container">
        <div class="output-header">Generated Keys</div>
        <div id="output" class="output"></div>
        <button id="clear-btn" class="clear-button">Clear All</button>
      </div>
    </div>
    
    <div class="footer">
      <div class="warning">⚠ For educational and nostalgic purposes only</div>
    </div>
  </div>
`

// Event listeners
const generateBtn = document.getElementById('generate-btn')
const clearBtn = document.getElementById('clear-btn')
const output = document.getElementById('output')

generateBtn.addEventListener('click', () => {
  const key = generateKey()
  const keyElement = document.createElement('div')
  keyElement.className = 'key-item'
  keyElement.innerHTML = `
    <span class="key-text">${key}</span>
    <button class="copy-btn" onclick="copyToClipboard('${key}')">Copy</button>
  `
  output.appendChild(keyElement)
  
  // Scroll to bottom
  output.scrollTop = output.scrollHeight
  
  // Add generation effect
  generateBtn.classList.add('generating')
  setTimeout(() => {
    generateBtn.classList.remove('generating')
  }, 300)
})

clearBtn.addEventListener('click', () => {
  output.innerHTML = ''
})

// Global copy function
window.copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // Show feedback
    const btn = event.target
    const originalText = btn.textContent
    btn.textContent = 'Copied!'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = originalText
      btn.classList.remove('copied')
    }, 1000)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}