import dotenv from 'dotenv';
dotenv.config();

function requireEnv(name: string, optional = false): string | undefined {
  const value = process.env[name];
  if (!value && !optional) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 4000),
  databaseUrl: requireEnv('DATABASE_URL')!,
  supabase: {
    url: requireEnv('SUPABASE_URL')!,
    anonKey: requireEnv('SUPABASE_ANON_KEY')!,
    serviceRoleKey: requireEnv('SUPABASE_SERVICE_ROLE_KEY')!,
    jwtSecret: requireEnv('SUPABASE_JWT_SECRET')!,
    bucket: requireEnv('SUPABASE_STORAGE_BUCKET')!
  },
  razorpay: {
    keyId: requireEnv('RAZORPAY_KEY_ID')!,
    keySecret: requireEnv('RAZORPAY_KEY_SECRET')!,
    webhookSecret: requireEnv('RAZORPAY_WEBHOOK_SECRET')!
  }
};


