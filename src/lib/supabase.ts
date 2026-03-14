import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tppsxyfsovlawijtnbeq.supabase.co'
const supabaseAnonKey = 'sb_publishable_rXXTukON2FEGbyuSeMgAig_0PdN2Ku7'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
