import random
import tkinter as tk
from tkinter import font

def generate_string():

    day_of_year = str(random.randint(1, 366)).zfill(3)
    year = str(random.randint(95, 103)).zfill(2)
    
   
    remaining_sum = random.randint(0, 6)
    num1 = random.randint(0, 99)
    num2 = random.randint(0, 99)
    num3 = (700 - num1 - num2 - remaining_sum) % 100
    nnnnnnn = str(num1).zfill(2) + str(num2).zfill(2) + str(num3).zfill(2)
    
    
    zzzzz = ''.join(str(random.randint(0, 9)) for _ in range(5))
    
 
    return f"{day_of_year}{year}-OEM-{nnnnnnn}-{zzzzz}"

def create_window():
    window = tk.Tk()
    window.title("95Gen")
    window.geometry("648x605")
    
  
    consolas = font.Font(family="Consolas", size=20)

 
    header_label = tk.Label(window, text="95Gen", font=("Consolas", 30))
    header_label.pack(pady=20)

  
    paragraph_label = tk.Label(window, text="95Gen is a very simple program that", font=("Consolas", 12))
    paragraph_label2 = tk.Label(window, text="generates a random string of characters that", font=("Consolas", 12))
    paragraph_label3 = tk.Label(window, text="works with Windows 95.", font=("Consolas", 12))
    paragraph_label.pack(pady=0)
    paragraph_label2.pack(pady=0)
    paragraph_label3.pack(pady=0)

   
    button = tk.Button(window, text="Give me my keys! >:(", command=lambda: output_text.insert(tk.END, generate_string() + "\n"), font=consolas)
    button.pack(pady=20)
    
    
    output_text = tk.Text(window, height=10, width=50, font=("Consolas", 14))
    output_text.pack()
    
    window.mainloop()

create_window()
