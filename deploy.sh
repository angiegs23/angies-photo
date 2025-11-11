#!/bin/bash

# Deployment script for Captured by Angie photography portfolio
# Run this script after installing Git/Xcode Command Line Tools

echo "🚀 Deploying to GitHub..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
fi

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Photography portfolio website"

# Set main branch
git branch -M main

# Add remote (if not already added)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/angiegs23/angies-photo.git

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://angiegs23.github.io/angies-photo/"

