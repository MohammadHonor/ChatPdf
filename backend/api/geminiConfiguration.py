import google.generativeai as GenAI
from dotenv import load_dotenv
import os
load_dotenv()

def querry_with_pdf(text,question):

    api_key = os.getenv('GEMINI_API_KEY')
    
    if not api_key :
        return "api key not found"
    
    GenAI.configure(api_key=api_key)

    available_models = [m.name for m in GenAI.list_models()]
    # print("Available models:", available_models)

    model_name = "models/gemini-1.5-pro-latest"
    model = GenAI.GenerativeModel(model_name)

    prompt = f"{text}\n\n{question}"

    try:
        response = model.generate_content(prompt)
        return response.text if response.text else "No response recieved ."
    except Exception as e:
        return f"error : {str(e)}"

    
    
    return "hi"