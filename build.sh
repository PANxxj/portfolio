#!/bin/bash
echo "🏗️ Building portfolio for production..."
echo "⚡ Using Vite's optimized build process..."
echo ""

# Clean previous build
rm -rf dist

# Build the project
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo "📁 Files generated in 'dist' directory"
    echo "📊 Bundle analysis:"
    echo ""
    
    if command -v du &> /dev/null; then
        echo "📦 Build size:"
        du -sh dist/
        echo ""
        echo "📄 Asset breakdown:"
        find dist -name "*.js" -exec du -h {} \; | sort -hr
        find dist -name "*.css" -exec du -h {} \; | sort -hr
    fi
    
    echo ""
    echo "🌐 Ready for deployment!"
    echo "💡 Test locally with: npm run preview"
else
    echo "❌ Build failed!"
    exit 1
fi
