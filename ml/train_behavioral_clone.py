import argparse
import torch
from torch.utils.data import DataLoader, Dataset
from accelerate import Accelerator
from transformers import AutoModelForCausalLM, AutoTokenizer
from tqdm import auto as tqdm
import os

from utils.padding import get_tokenizer_with_padding

class AgentTrajectoryDataset(Dataset):
    def __init__(self, data_path, tokenizer, max_length=512):
        # Placeholder for actual data loading logic (e.g., from AlfWorld or WebShop)
        self.data = [] 
        self.tokenizer = tokenizer
        self.max_length = max_length

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        item = self.data[idx]
        encoding = self.tokenizer(
            item['text'],
            truncation=True,
            max_length=self.max_length,
            padding='max_length',
            return_tensors='pt'
        )
        return {
            'input_ids': encoding['input_ids'].squeeze(),
            'attention_mask': encoding['attention_mask'].squeeze(),
            'labels': encoding['input_ids'].squeeze()
        }

def train():
    parser = argparse.ArgumentParser(description="Agentic Behavioral Cloning Training")
    parser.add_argument("--model_name", type=str, default="gpt2", help="Base model name")
    parser.add_argument("--batch_size", type=str, default="4", help="Batch size")
    parser.add_argument("--lr", type=float, default=5e-5, help="Learning rate")
    parser.add_argument("--epochs", type=int, default=3, help="Number of epochs")
    parser.add_argument("--output_dir", type=str, default="./checkpoints", help="Output directory")
    args = parser.parse_args()

    accelerator = Accelerator()
    
    tokenizer = get_tokenizer_with_padding(args.model_name)
    model = AutoModelForCausalLM.from_pretrained(args.model_name)
    
    # Placeholder dataset
    dataset = AgentTrajectoryDataset(None, tokenizer)
    dataloader = DataLoader(dataset, batch_size=int(args.batch_size), shuffle=True)

    optimizer = torch.optim.AdamW(model.parameters(), lr=args.lr)

    model, optimizer, dataloader = accelerator.prepare(model, optimizer, dataloader)

    model.train()
    for epoch in range(args.epochs):
        for batch in tqdm.tqdm(dataloader, desc=f"Epoch {epoch}"):
            outputs = model(**batch)
            loss = outputs.loss
            accelerator.backward(loss)
            optimizer.step()
            optimizer.zero_grad()

    if accelerator.is_main_process:
        accelerator.save_state(args.output_dir)
        model.save_pretrained(args.output_dir)
        tokenizer.save_pretrained(args.output_dir)

if __name__ == "__main__":
    train()
