'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        let errorMessage = 'Failed to send message';
        try {
          const data = await response.json();
          errorMessage = data.error || data.details || errorMessage;
        } catch {
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (error) {
      console.error('Error sending message:', error)
      setError(error instanceof Error ? error.message : 'Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Contact Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Get In Touch
              </CardTitle>
              <CardDescription>
                Whether you need marketing automation, web development, or digital strategy consulting, I'm here to help transform your ideas into reality.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">sucharith.dasun@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-medium">Within 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                  <Input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
                <Textarea 
                  name="message" 
                  required 
                  placeholder="Tell me about your project..." 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                />
                
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="ml-2">→</span>
                    </>
                  )}
                </Button>
                
                {submitted && (
                  <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-600 font-medium">
                      ✨ Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {error && (
                  <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-600 font-medium">
                      ⚠️ {error}
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
