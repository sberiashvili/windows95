export function generateKey() {
  const dayOfYear = String(Math.floor(Math.random() * 366) + 1).padStart(3, '0')
  
  const year = String(Math.floor(Math.random() * 9) + 95).padStart(2, '0')
  
  const remainingSum = Math.floor(Math.random() * 7)
  const num1 = Math.floor(Math.random() * 100)
  const num2 = Math.floor(Math.random() * 100)
  const num3 = (700 - num1 - num2 - remainingSum) % 100
  const middleSection = String(num1).padStart(2, '0') + 
                       String(num2).padStart(2, '0') + 
                       String(num3).padStart(2, '0')
  
  const suffix = Array.from({length: 5}, () => Math.floor(Math.random() * 10)).join('')
  
  return `${dayOfYear}${year}-OEM-${middleSection}-${suffix}`
}