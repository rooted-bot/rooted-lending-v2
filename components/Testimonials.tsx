import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Daniel R.',
    location: 'Phoenix, AZ',
    deal: '$450k Fix & Flip',
    closeTime: '6 days',
    quote: 'Rooted Lending made our fix & flip project possible. We had funds in hand within days and were able to move quickly on the property. Their team understood exactly what we needed.',
    rating: 5,
    image: '/testimonials/daniel.jpg',
  },
  {
    name: 'Maria S.',
    location: 'Dallas, TX',
    deal: '$1.2M New Construction',
    closeTime: '5 days',
    quote: 'Securing 90% LTC for our new build was a game changer. Rooted Lending understood our goals and structured the financing perfectly. They\'re now our go-to lender for all projects.',
    rating: 5,
    image: '/testimonials/maria.jpg',
  },
  {
    name: 'James K.',
    location: 'Boise, ID',
    deal: '$800k DSCR Portfolio',
    closeTime: '8 days',
    quote: 'Rooted Lending helped us expand our portfolio with a DSCR loan tailored to our needs. The process was smooth, and their investor-focused approach made all the difference.',
    rating: 5,
    image: '/testimonials/james.jpg',
  },
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    deal: '$325k Bank Statement Loan',
    closeTime: '7 days',
    quote: 'As a self-employed investor, traditional banks kept turning me down. Rooted Lending used my bank statements and got me approved in a week. Finally, a lender that gets it.',
    rating: 5,
    image: '/testimonials/sarah.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-rooted">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Investors Nationwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real estate investors say about working with Rooted Lending.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-emerald-200" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Deal Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-100 rounded-lg px-3 py-1">
                  <span className="text-emerald-800 font-semibold text-sm">{testimonial.deal}</span>
                </div>
                <div className="bg-amber-100 rounded-lg px-3 py-1">
                  <span className="text-amber-800 font-semibold text-sm">Closed in {testimonial.closeTime}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-700">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-700">500+</div>
            <div className="text-gray-600">Deals Funded</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-700">$500M+</div>
            <div className="text-gray-600">Total Funded</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-700">85%</div>
            <div className="text-gray-600">Repeat Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
