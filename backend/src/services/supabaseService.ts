import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const supabase = createClient(env.supabase.url, env.supabase.serviceRoleKey);

export function verifySupabaseJWT(token: string): { sub: string } {
  const decoded = jwt.verify(token, env.supabase.jwtSecret) as { sub: string };
  return decoded;
}

export async function getSignedUploadUrl(path: string, contentType: string): Promise<string> {
  const { data, error } = await supabase.storage
    .from(env.supabase.bucket)
    .createSignedUploadUrl(path, { contentType });
  if (error || !data) throw error || new Error('Failed to get signed upload URL');
  return data.signedUrl;
}


