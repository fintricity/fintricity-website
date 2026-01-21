import torch
from typing import List, Any, Union
import numpy as np

def pad_list(tensors: List[torch.Tensor], padding_value: float = 0.0) -> torch.Tensor:
    """
    Pads a list of PyTorch tensors to the maximum length in the batch.
    """
    return torch.nn.utils.rnn.pad_sequence(tensors, batch_first=True, padding_value=padding_value)

try:
    import jax
    import jax.numpy as jnp
    from jax.tree_util import tree_map

    def pad_pytree(tree: Any, target_shape: tuple, padding_value: float = 0.0) -> Any:
        """
        Pads a JAX PyTree of arrays to a target shape.
        Useful for fixed-shape batching in JAX/Flax.
        """
        def _pad_array(leaf):
            if not hasattr(leaf, 'shape'):
                return leaf
            
            # Create padding config
            pads = []
            for i, dim in enumerate(leaf.shape):
                if i < len(target_shape):
                    pads.append((0, max(0, target_shape[i] - dim)))
                else:
                    pads.append((0, 0))
            
            return jnp.pad(leaf, pads, constant_values=padding_value)

        return tree_map(_pad_array, tree)

except ImportError:
    # JAX not installed, skip JAX-specific utilities
    pass

def get_tokenizer_with_padding(tokenizer_name: str):
    """
    Loads a Hugging Face tokenizer and ensures pad_token is set.
    """
    from transformers import AutoTokenizer
    tokenizer = AutoTokenizer.from_pretrained(tokenizer_name)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
        tokenizer.pad_token_id = tokenizer.eos_token_id
    return tokenizer
