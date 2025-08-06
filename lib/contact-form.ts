import { supabase } from './supabase'

export interface ContactFormData {
  name: string
  email?: string
  phone?: string
  subject?: string
  message: string
  created_at?: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: data.name,
          email: data.email || null,
          phone: data.phone || null,
          subject: data.subject || null,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Error submitting contact form:', error)
      throw error
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
} 