from PyPDF2 import PdfReader
def extractData(path):
    text = ""
    reader = PdfReader(path)
    for page in reader.pages:
            text += page.extract_text()
    return text

