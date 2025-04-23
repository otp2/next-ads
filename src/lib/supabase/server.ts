import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'

export const createClient = async (): Promise<SupabaseClient> => {
  const cookieStore = cookies()
  const supabaseUrl = 'https://yoxjojhotywjumtivsmv.supabase.co'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlveGpvamhvdHl3anVtdGl2c212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzODAzMTMsImV4cCI6MjA2MDk1NjMxM30.y4PxFAt0Hgn989GQK3Z0U8C8yODpwKNZc-0LJwMXwj4'

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: { path: string; maxAge: number; sameSite: 'lax' | 'strict' | 'none'; domain?: string; secure?: boolean }) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: { path: string; maxAge: number; sameSite: 'lax' | 'strict' | 'none'; domain?: string; secure?: boolean }) {
        cookieStore.set({ name, value: '', ...options })
      },
    },
  })
} 