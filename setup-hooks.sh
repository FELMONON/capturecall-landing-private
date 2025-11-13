#!/bin/bash
# Setup git hooks to protect build configuration

echo "Setting up git hooks..."

# Create post-merge hook
cat > .git/hooks/post-merge << 'EOF'
#!/bin/bash
# Post-merge hook to ensure vite.config.ts always uses 'dist'

VITE_CONFIG="vite.config.ts"

# Check if vite.config.ts was modified in the merge
if git diff --name-only HEAD@{1} HEAD | grep -q "$VITE_CONFIG"; then
  # Check if outDir is set to 'build' instead of 'dist'
  if grep -q "outDir: 'build'" "$VITE_CONFIG"; then
    echo "⚠️  Detected Figma update - fixing vite.config.ts..."
    sed -i "s/outDir: 'build'/outDir: 'dist'/g" "$VITE_CONFIG"
    git add "$VITE_CONFIG"
    git commit -m "Auto-fix: Restore dist output directory after Figma update"
    echo "✅ Fixed vite.config.ts - outDir set to 'dist'"
  fi
fi
EOF

# Make it executable
chmod +x .git/hooks/post-merge

echo "✅ Git hooks installed successfully!"
echo "The post-merge hook will automatically fix vite.config.ts after Figma updates."
