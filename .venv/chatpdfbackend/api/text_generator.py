# import os
# from dotenv import load_dotenv
# from langchain.llms import HuggingFaceHub
# from langchain.document_loaders import TextLoader
# from langchain.text_splitter import CharacterTextSplitter
# from api.extract_data import extractData
# load_dotenv()

# def querry_with_pdf(text,question):
#     # HUGGINGFACEHUB_API_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN")
#     # # print(HUGGINGFACEHUB_API_TOKEN)
#     # if not HUGGINGFACEHUB_API_TOKEN :
#     #     raise ValueError("hugging face api token is missing")
#     # llm = HuggingFaceHub(
#     # repo_id="deepset/roberta-base-squad2",
#     # huggingfacehub_api_token=HUGGINGFACEHUB_API_TOKEN
#     # )

#     # text_splitter = CharacterTextSplitter(chunk_size=1000,chunk_overlap=100)
#     # docs = text_splitter.split_text(text)

#     # langchain_docs = [TextLoader(docs) for docs in docs]

#     # qa_chain = load_qa_chain(llm, chain_type = "stuff")

#     # answer = qa_chain.run(input_documents=langchain_docs, question= question)
#     # return answer
#     # print(text,question)
#     # return ""
#     HUGGINGFACEHUB_API_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN")
#     if not HUGGINGFACEHUB_API_TOKEN:
#         raise ValueError("HUGGINGFACEHUB_API_TOKEN is missing. Please set it in the environment variables.")

#     # Initialize Hugging Face Hub LLM
#     llm = HuggingFaceHub(
#         repo_id="deepset/roberta-base-squad2",  # Correct repo ID format
#         huggingfacehub_api_token=HUGGINGFACEHUB_API_TOKEN,
#     )

#     # Split the text into manageable chunks
#     text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
#     chunks = text_splitter.split_text(text)

#     # Convert chunks to LangChain Document objects
#     documents = [Document(page_content=chunk) for chunk in chunks]

#     # Set up QA chain
#     qa_chain = load_qa_chain(llm, chain_type="stuff")

#     try:
#         # Run the chain to get the answer
#         answer = qa_chain.run(input_documents=documents, question=question)
#         return answer
#     except Exception as e:
#         raise RuntimeError(f"An error occurred while processing the QA chain: {e}")


