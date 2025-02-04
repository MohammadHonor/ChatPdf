from PyPDF2 import PdfReader
def extractData(path):
      # pdf_path='media/uploads/CutOff-CSE-23-engl-180424.pdf'
      text = ""
      reader = PdfReader(path)
      #print("jkskkjskjlsjljsj",len(reader.pages))
      for page in reader.pages:
            text += page.extract_text()
      return text

