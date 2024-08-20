# server.py

from fastapi import FastAPI
from pydantic import BaseModel
from transformers import LlamaForCausalLM, LlamaTokenizer
import torch

app = FastAPI()

# Load LLaMA model and tokenizer
model_name = "huggingface/llama-7b"
tokenizer = LlamaTokenizer.from_pretrained(model_name)
model = LlamaForCausalLM.from_pretrained(model_name)

class FinancialData(BaseModel):
    totalBudget: float
    totalIncome: float
    totalSpend: float

@app.post("/get-financial-advice")
async def get_financial_advice(data: FinancialData):
    user_prompt = f"""
    Based on the following financial data:
    - Total Budget: {data.totalBudget} USD 
    - Expenses: {data.totalSpend} USD 
    - Incomes: {data.totalIncome} USD
    Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    """

    inputs = tokenizer(user_prompt, return_tensors="pt")
    outputs = model.generate(**inputs, max_length=50)
    advice = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"advice": advice}
