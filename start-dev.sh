#!/bin/bash

# Navigate to the frontend directory
cd frontend

# Check if port 4001 is already in use and kill the process if it is
PID=$(lsof -t -i:4001)
if [ ! -z "$PID" ]; then
  echo "Port 4001 is already in use by process $PID. Killing it..."
  kill -9 $PID
fi

# Start the Next.js development server on port 4001
echo "Starting Fintricity Website on http://localhost:4001..."
npm run dev -- -p 4001
