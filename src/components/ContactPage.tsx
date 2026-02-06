import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  Building2,
  CheckCircle2
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Sat: 10 AM - 8 PM',
    value: '+94 11 234 5678',
    link: 'tel:+94112345678',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We reply within 24 hours',
    value: 'info@unityplazalaptophub.lk',
    link: 'mailto:info@unityplazalaptophub.lk',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Available during business hours',
    value: 'Start Chat',
    link: '#',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Unity Plaza, Colombo 04',
    value: 'Get Directions',
    link: '#',
    color: 'from-orange-500 to-red-500'
  }
];

const faqs = [
  {
    question: 'What are your business hours?',
    answer: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM, and Sundays from 11:00 AM to 6:00 PM.'
  },
  {
    question: 'Do you offer warranty on laptops?',
    answer: 'Yes, all laptops come with manufacturer warranty. Additional extended warranty options are available from individual shops.'
  },
  {
    question: 'Can I compare prices from different shops?',
    answer: 'Absolutely! Our platform allows you to compare prices, specifications, and reviews from all shops in Unity Plaza.'
  },
  {
    question: 'Do you provide home delivery?',
    answer: 'Delivery options vary by shop. Please contact the specific shop for their delivery terms and conditions.'
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02ek0wIDM2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions? We're here to help you find the perfect laptop
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:bg-slate-700 hover:border-slate-600 transition group text-center"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-100 mb-1">{method.title}</h3>
                  <p className="text-sm text-slate-400 mb-2">{method.description}</p>
                  <p className="text-cyan-400 text-sm font-medium">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Info */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-100 mb-2">Send us a Message</h2>
                  <p className="text-slate-400">Fill out the form below and we'll get back to you soon</p>
                </div>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <p className="text-green-400">Message sent successfully! We'll respond within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="laptop">Laptop Inquiry</option>
                      <option value="shop">Shop Information</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 mb-2">Unity Plaza</h3>
                    <p className="text-slate-400 text-sm">
                      Colombo 04<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Monday - Saturday</span>
                        <span className="text-slate-300">10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Sunday</span>
                        <span className="text-slate-300">11:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Unity Plaza, Colombo</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 bg-slate-700 text-slate-100 text-center rounded-lg hover:bg-slate-600 transition text-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:bg-slate-700 transition"
              >
                <h3 className="font-bold text-slate-100 mb-2">{faq.question}</h3>
                <p className="text-slate-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Prefer to Visit Us in Person?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Come to Unity Plaza and explore our laptop shops. Our staff is ready to assist you.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition shadow-lg font-medium"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
