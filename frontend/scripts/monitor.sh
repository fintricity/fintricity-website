#!/bin/bash

# Configuration
APP_PORT=3001
DEPLOY_PATH="/home/virtual/site/htdocs/frontend/.next/standalone"
LOG_FILE="/home/virtual/site/htdocs/frontend/scripts/monitor.log"
NODE_BIN="/opt/alt/alt-nodejs20/root/usr/bin/node"

# Ensure log directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Check if the app is responding
if ! curl -s -I http://127.0.0.1:$APP_PORT | grep -E "HTTP/1.1 200|HTTP/1.1 30|HTTP/1.1 404" > /dev/null; then
    echo "$(date): Site down on port $APP_PORT. Restarting..." >> "$LOG_FILE"
    
    # Kill any zombie processes
    pkill -9 -f "node server.js" || true
    
    # Start the app
    cd "$DEPLOY_PATH"
    HOSTNAME=127.0.0.1 PORT=$APP_PORT nohup $NODE_BIN --max-old-space-size=512 server.js > output.log 2> error.log &
    
    echo "$(date): Restart command issued." >> "$LOG_FILE"
else
    # Optional: Log healthy status occasionally
    if (( $(date +%M) % 60 == 0 )); then
        echo "$(date): Site is healthy." >> "$LOG_FILE"
    fi
fi
