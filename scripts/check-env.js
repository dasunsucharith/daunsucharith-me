#!/usr/bin/env node

/**
 * Environment Variables Checker
 * Run this script to verify all required environment variables are set
 * Usage: node scripts/check-env.js
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT', 
  'SMTP_USER',
  'SMTP_PASS',
  'EMAIL_FROM',
  'EMAIL_TO'
];

console.log('🔍 Checking environment variables...\n');

let allGood = true;
const missing = [];
const present = [];

requiredEnvVars.forEach(envVar => {
  if (process.env[envVar]) {
    present.push(envVar);
    // Mask sensitive values
    const value = envVar.includes('PASS') 
      ? '***' 
      : process.env[envVar];
    console.log(`✅ ${envVar} = ${value}`);
  } else {
    missing.push(envVar);
    console.log(`❌ ${envVar} = MISSING`);
    allGood = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('🎉 All environment variables are set!');
  console.log('📧 Email functionality should work correctly.');
} else {
  console.log('⚠️  Missing environment variables:');
  missing.forEach(envVar => {
    console.log(`   - ${envVar}`);
  });
  console.log('\n📝 Add missing variables to:');
  console.log('   - Local: .env.local file');
  console.log('   - Production: Your hosting platform dashboard');
}

console.log('\n📚 See DEPLOYMENT_GUIDE.md for detailed setup instructions.');

process.exit(allGood ? 0 : 1);