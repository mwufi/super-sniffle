import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const registerView = async (slug_text: string) => {
  let { data, error } = await supabase.rpc('increment', {
    slug_text,
  })

  if (error) console.error(error)
  else console.log(data)
}

export const getViews = async (slug: string) => {
  const { error, data: views } = await supabase
    .from('posts')
    .select(`count`)
    .match({ slug: slug })
    .single()

  console.log('views is:', views)

  if (error && error.details.includes('0 rows')) {
    const { data } = await supabase
      .from(`posts`)
      .insert({ slug: slug, count: 1 }, { returning: `representation` })
      .single()
    return data.count
  }

  if (!views) {
    return 0
  }
  return views.count
}
