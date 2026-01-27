#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Starting Fintricity Full Test Suite..."

cd frontend

# 1. Linting
echo "🔍 Running Linter..."
npm run lint

# 2. Type Checking
echo "⌨️ Running Type Check..."
# We use --noEmit to check types without building
npx tsc --noEmit

# 3. Playwright Smoke Tests
echo "🎭 Running Playwright Smoke Tests..."
npx playwright test

echo "✅ All tests passed! Ready for release."
