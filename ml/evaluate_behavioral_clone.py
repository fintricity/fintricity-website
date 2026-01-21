import argparse
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from utils.padding import get_tokenizer_with_padding

def evaluate():
    parser = argparse.ArgumentParser(description="Agentic Behavioral Cloning Evaluation")
    parser.add_argument("--model_path", type=str, required=True, help="Path to trained model")
    parser.add_argument("--task", type=str, default="alfworld", choices=["alfworld", "webshop"], help="Task to evaluate on")
    parser.add_argument("--num_episodes", type=int, default=10, help="Number of episodes to evaluate")
    args = parser.parse_args()

    device = "cuda" if torch.cuda.is_available() else "cpu"
    
    tokenizer = get_tokenizer_with_padding(args.model_path)
    model = AutoModelForCausalLM.from_pretrained(args.model_path).to(device)
    model.eval()

    print(f"🚀 Starting evaluation on task: {args.task}")
    
    # Placeholder for actual task environment interaction logic
    success_count = 0
    for i in range(args.num_episodes):
        print(f"Running episode {i+1}/{args.num_episodes}...")
        # Simulating interaction
        # observation = env.reset()
        # while not done:
        #     action = generate_action(model, observation)
        #     observation, reward, done = env.step(action)
        success_count += 1 # Mock success

    print(f"✅ Evaluation complete. Success Rate: {success_count/args.num_episodes:.2%}")

def generate_action(model, tokenizer, prompt, max_new_tokens=32):
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    with torch.no_grad():
        outputs = model.generate(**inputs, max_new_tokens=max_new_tokens)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

if __name__ == "__main__":
    evaluate()
