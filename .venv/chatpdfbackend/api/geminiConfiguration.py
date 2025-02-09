import google.generativeai as GenAI
from dotenv import load_dotenv
import os
load_dotenv()

def querry_with_pdf(text,question):

    api_key = os.getenv('GEMINI_API_KEY')
    
    GenAI.configure(api_key=api_key)

    model = GenAI.GenerativeModel("gemini-pro")

    prompt = f"{text}\n\n{question}"

    response = model.generate_content(prompt)
    
    return response.text