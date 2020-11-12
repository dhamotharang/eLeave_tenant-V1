#!/bin/sh
#!/bin/sh
export PYTHON=/usr/bin/python
export NODE_OPTIONS="--max_old_space_size=4096"
cd /app/project
npm install
ionic build --engine=browser --production
cp -r www ../www
cd /app
rm -rf /app/project/*
