#!/bin/bash

# Step 1: Install gh-pages package
echo "Installing gh-pages package..."
npm install --save-dev gh-pages

# Step 2: Update package.json with homepage and deploy script
echo "Updating package.json with homepage and deploy script..."
if [ -f "package.json" ]; then
  # Check if package.json has a "homepage" field, add if missing
  if ! grep -q '"homepage"' package.json; then
    sed -i '/"name":/a \  "homepage": "https://ian874.github.io/Roxxy",' package.json
  fi
  # Check if package.json has a "deploy" script, add if missing
  if ! grep -q '"deploy":' package.json; then
    sed -i '/"scripts": {/a \    "deploy": "gh-pages -d build",' package.json
  fi
else
  echo "Error: package.json not found!"
  exit 1
fi

# Step 3: Build the React app
echo "Building the React app..."
npm run build

# Step 4: Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

# Step 5: Display the live website URL
echo "Deployment complete! Share this link with your client:"
echo "https://ian874.github.io/Roxxy"
