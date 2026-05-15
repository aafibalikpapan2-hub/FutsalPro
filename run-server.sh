#!/bin/bash
export DATABASE_URL="file:/home/z/my-project/db/custom.db"
export PORT=3000
export HOSTNAME=0.0.0.0
cd /home/z/my-project
exec npx next start -p 3000
