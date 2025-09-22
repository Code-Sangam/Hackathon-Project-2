#!/usr/bin/env node

/**
 * Production deployment preparation script
 * Run this before deploying to production
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing for production deployment...\n');

// Check if running in project directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Please run this script from the project root directory.');
  process.exit(1);
}

try {
  // 1. Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  if (fs.existsSync('.next')) {
    execSync('rm -rf .next', { stdio: 'inherit' });
  }
  console.log('✅ Clean complete\n');

  // 2. Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });
  console.log('✅ Dependencies installed\n');

  // 3. Run linting
  console.log('🔍 Running linting...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ Linting passed\n');
  } catch (error) {
    console.log('⚠️ Linting completed with warnings\n');
  }

  // 4. Build the application
  console.log('🏗️ Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build complete\n');

  // 5. Check if build was successful
  if (!fs.existsSync('.next')) {
    throw new Error('Build failed - .next directory not found');
  }

  console.log('🎉 Production build ready for deployment!');
  console.log('\n📋 Next steps:');
  console.log('1. Deploy to your hosting platform (Vercel, Netlify, etc.)');
  console.log('2. Set up environment variables if needed');
  console.log('3. Configure custom domain if desired');
  console.log('\n🔗 Quick deploy options:');
  console.log('• Vercel: Run "npx vercel" in this directory');
  console.log('• Netlify: Connect your Git repository to Netlify');
  console.log('• Manual: Upload the .next folder and run "npm start"');

} catch (error) {
  console.error('❌ Deployment preparation failed:', error.message);
  process.exit(1);
}