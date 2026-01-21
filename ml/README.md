# Agentic Behavioral Cloning ML Workflows

This directory contains the machine learning components for Kendra Labs' agentic behavioral cloning research.

## 🚀 Overview

The core goal is to clone agentic behaviors from expert trajectories (e.g., AlfWorld, WebShop) using standard LLM fine-tuning techniques.

## 📂 Structure

- `train_behavioral_clone.py`: Main training script using Hugging Face `accelerate`.
- `utils/padding.py`: Utilities for padding PyTorch tensors and JAX PyTrees.

## 💻 Getting Started

### Prerequisites
- Python 3.10+
- CUDA (optional, for acceleration)

### Installation
```bash
pip install -r requirements.txt
```

### Running Training
Use `accelerate` to launch the training script:
```bash
accelerate launch train_behavioral_clone.py \
    --model_name "gpt2" \
    --batch_size 8 \
    --epochs 3
```

## 🛠️ Utilities

### PyTree Padding (JAX/Flax)
Fixed-shape batching is critical for JAX performance. Use `pad_pytree` to ensure consistent shapes across batches.

### Tensor Padding (PyTorch)
The `pad_list` function simplifies variable-length trajectory padding for PyTorch dataloaders.
