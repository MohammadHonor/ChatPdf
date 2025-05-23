import google.generativeai as GenAI
from dotenv import load_dotenv
import os
load_dotenv()

def querry_with_pdf(text,question):

    api_key = os.getenv('GEMINI_API_KEY')
    # print(api_key)
    
    if not api_key :
        return "api key not found"
    
    GenAI.configure(api_key=api_key)

    available_models = [m.name for m in GenAI.list_models()]
    # print("Available models:", available_models)

    model_name = "models/gemini-1.5-flash"
    model = GenAI.GenerativeModel(model_name)

    prompt = f"{text}\n\n{question}"

    try:
        response = model.generate_content(prompt)
        return response.text if response.text else "No response recieved ."
    except Exception as e:
        return f"error : {str(e)}"

    
    
    return "hi"



# import google.generativeai as GenAI
# from dotenv import load_dotenv
# import os
# import time
# from google.api_core.exceptions import ResourceExhausted, GoogleAPIError

# load_dotenv()

# def querry_with_pdf(text, question, max_retries=5, delay=21):
#     api_key = os.getenv('GEMINI_API_KEY')
#     if not api_key:
#         return "API key not found in environment."

#     GenAI.configure(api_key=api_key)

#     model_name = "models/gemini-1.5-pro-latest"
#     model = GenAI.GenerativeModel(model_name)

#     prompt = f"{text.strip()}\n\nQuestion: {question.strip()}"

#     for attempt in range(max_retries):
#         try:
#             print(f"Attempt {attempt + 1}: Calling Gemini API...")
#             response = model.generate_content(prompt)
#             return response.text if response.text else "No response received."
        
#         except ResourceExhausted as e:
#             print(f"Rate limit hit. Waiting {delay} seconds before retry...")
#             time.sleep(delay)
#         except GoogleAPIError as e:
#             print(f"API Error: {e}")
#             return f"Google API Error: {e}"
#         except Exception as e:
#             return f"Unexpected error: {e}"

#     return "Failed to get a response after retries."
