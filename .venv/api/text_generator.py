import os
from dotenv import load_dotenv
from langchain.llms import HuggingFaceHub
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from api.extract_data import extractData
from langchain.chains.question_answering import load_qa_chain
load_dotenv()
def questionAnswereWithPdf(text,question):
      HUGGINGFACEHUB_API_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN")
      if not HUGGINGFACEHUB_API_TOKEN :
            print("error")
      llm = HuggingFaceHub(
      repo_id="deepest/roberta-base-squad2",  
      huggingfacehub_api_token=HUGGINGFACEHUB_API_TOKEN
      )
      text_splitter = CharacterTextSplitter(chunk_size=1000,chunk_overlap=100)
      docs = text_splitter.split_text(text)

      langchain_docs = [TextLoader(docs) for docs in docs]

      qa_chain = load_qa_chain(llm, chain_type = "stuff")
      answer = qa_chain.run(input_documents=langchain_docs, question= question)
      return answer


