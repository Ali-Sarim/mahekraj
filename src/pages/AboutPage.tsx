import React from 'react';
import { Award, Users, Globe, Heart, Sparkles, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: '1995', title: 'Foundation', description: 'Mahekraj was founded with a vision to create exceptional fragrances' },
    { year: '2000', title: 'First Collection', description: 'Launched our signature Oriental collection to critical acclaim' },
    { year: '2010', title: 'Global Expansion', description: 'Expanded to international markets across Europe and Asia' },
    { year: '2015', title: 'Sustainability Initiative', description: 'Committed to sustainable sourcing and eco-friendly practices' },
    { year: '2020', title: 'Digital Innovation', description: 'Launched our premium e-commerce platform and virtual consultations' },
    { year: '2024', title: 'New Horizons', description: 'Continuing to innovate with AI-powered fragrance recommendations' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every bottle, using only the finest ingredients and time-honored techniques.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for fragrance drives us to create scents that evoke emotions and memories.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to ethical sourcing and environmental responsibility in all our practices.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building lasting relationships with our customers and fragrance enthusiasts worldwide.'
    }
  ];

  const team = [
    {
      name: 'Arjun Mahek',
      role: 'Founder & Master Perfumer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'With over 30 years of experience, Arjun founded Mahekraj with a vision to create timeless fragrances.'
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Priya leads our creative team, bringing innovative concepts and artistic vision to every collection.'
    },
    {
      name: 'David Chen',
      role: 'Head of Sustainability',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'David ensures our commitment to sustainable practices and ethical sourcing across all operations.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Three decades of crafting exceptional fragrances that tell stories and create memories
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                  The Art of Fragrance
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded in 1995 by master perfumer Arjun Mahek, Mahekraj began as a small atelier 
                  in the heart of Mumbai with a simple yet profound vision: to create fragrances that 
                  transcend the ordinary and touch the soul.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our name, "Mahekraj," combines "Mahek" (fragrance) and "Raj" (kingdom), 
                  representing our commitment to ruling the realm of exceptional scents. Each 
                  fragrance in our collection is a testament to our dedication to quality, 
                  artistry, and the timeless appeal of luxury perfumery.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we continue to honor traditional perfumery techniques while embracing 
                  innovation, creating fragrances that speak to the modern connoisseur while 
                  respecting the rich heritage of our craft.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Perfume crafting"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Sparkles className="text-luxury-black" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing ingredients to crafting the perfect scent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-luxury-black" size={32} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped Mahekraj into the luxury fragrance house it is today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-luxury-gold"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock size={16} className="text-luxury-gold" />
                        <span className="font-bold text-luxury-gold text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luxury-gold rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind every exceptional fragrance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-luxury-gold font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">29+</div>
              <div className="text-gray-300">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">150+</div>
              <div className="text-gray-300">Unique Fragrances</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">50K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">25+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
            Experience the Mahekraj Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our collection of exceptional fragrances and become part of our story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="px-8 py-4 bg-luxury-black text-white font-semibold rounded-full hover:bg-luxury-charcoal transition-colors"
            >
              Shop Collection
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-luxury-black text-luxury-black font-semibold rounded-full hover:bg-luxury-black hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;