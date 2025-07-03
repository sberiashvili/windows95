export function generateKey() {
  // Generate day of year (001-366)
  const dayOfYear = String(Math.floor(Math.random() * 366) + 1).padStart(3, '0')
  
  // Generate year (95-103, representing 1995-2003)
  const year = String(Math.floor(Math.random() * 9) + 95).padStart(2, '0')
  
  // Generate the middle section (sum must be divisible by 7, but not equal to 7)
  const remainingSum = Math.floor(Math.random() * 7)
  const num1 = Math.floor(Math.random() * 100)
  const num2 = Math.floor(Math.random() * 100)
  const num3 = (700 - num1 - num2 - remainingSum) % 100
  const middleSection = String(num1).padStart(2, '0') + 
                       String(num2).padStart(2, '0') + 
                       String(num3).padStart(2, '0')
  
  // Generate random 5-digit suffix
  const suffix = Array.from({length: 5}, () => Math.floor(Math.random() * 10)).join('')
  
  return `${dayOfYear}${year}-OEM-${middleSection}-${suffix}`
}