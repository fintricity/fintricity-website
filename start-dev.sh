#!/bin/bash

# Navigate to the frontend directory
cd frontend

# Check if port 3001 is already in use and kill the process if it is
PID=$(lsof -t -i:3001)
if [ ! -z "$PID" ]; then
  echo "Port 3001 is already in use by process $PID. Killing it..."
  kill -9 $PID
fi

# Start the Next.js development server on port 3001
echo "Starting Kendra Labs Website on http://localhost:3001..."
npm run dev -- -p 3001
