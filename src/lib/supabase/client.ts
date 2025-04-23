'use client'

import { createClient as supabaseClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

export const createClient = (): SupabaseClient => {
  const supabaseUrl = 'https://yoxjojhotywjumtivsmv.supabase.co'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlveGpvamhvdHl3anVtdGl2c212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzODAzMTMsImV4cCI6MjA2MDk1NjMxM30.y4PxFAt0Hgn989GQK3Z0U8C8yODpwKNZc-0LJwMXwj4'
  
  return supabaseClient(supabaseUrl, supabaseKey)
} 