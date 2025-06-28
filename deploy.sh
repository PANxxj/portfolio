#!/bin/bash

echo "🚀 Portfolio Deployment Helper"
echo "=============================="
echo ""
echo "Choose your deployment platform:"
echo "1) Vercel (Recommended)"
echo "2) Netlify" 
echo "3) GitHub Pages"
echo "4) Manual (build only)"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🚀 Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "📦 Installing Vercel CLI..."
            npm install -g vercel
        fi
        npm run build
        vercel --prod
        ;;
    2)
        echo "🚀 Deploying to Netlify..."
        if ! command -v netlify &> /dev/null; then
            echo "📦 Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        npm run build
        netlify deploy --prod --dir=dist
        ;;
    3)
        echo "🚀 Preparing for GitHub Pages..."
        if ! command -v gh-pages &> /dev/null; then
            echo "📦 Installing gh-pages..."
            npm install -g gh-pages
        fi
        npm run build
        gh-pages -d dist
        ;;
    4)
        echo "🏗️ Building for manual deployment..."
        npm run build
        echo "✅ Build complete!"
        echo "📁 Upload the 'dist' folder to your hosting provider"
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac
