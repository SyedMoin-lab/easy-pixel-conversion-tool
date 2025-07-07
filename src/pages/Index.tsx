import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, Mail, MapPin, Users, Heart, Target, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import heroChild from '@/assets/hero-child.jpg';
import therapyChild from '@/assets/therapy-child.jpg';
import childrenTogether from '@/assets/children-together.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">StarRise</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-hero-bg via-hero-secondary/20 to-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Let's Bring Out the <span className="text-primary">Star</span> in Your Child!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Compassionate, Personalized ABA Therapy for Children with Autism
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral text-coral-foreground hover:bg-coral/90">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroChild} 
                alt="Happy child playing with educational toys" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow text-yellow-foreground p-4 rounded-full">
                <Star className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Overlay */}
        <div className="absolute top-8 right-8 bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border max-w-sm">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-t-lg -m-6 mb-4">
            <h3 className="font-bold text-center">Let's Get Started! CONTACT US</h3>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm font-medium">No Waitlist.</p>
              <p className="text-sm font-medium">Immediate Access to Care.</p>
            </div>
            <div className="space-y-3">
              <Input placeholder="Name" />
              <Input placeholder="Phone" />
              <Input placeholder="Email" />
              <Input placeholder="Your Message" />
            </div>
            <Button className="w-full bg-coral text-coral-foreground hover:bg-coral/90">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={therapyChild} 
                alt="Child in therapy session" 
                className="rounded-full w-64 h-64 object-cover mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                At StarRise ABA Therapy, we believe every child has a star inside them—waiting to shine.
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                We know that as a parent, you're at that challenging, that's why we bring our mission a complete bundle of growth and development.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is simple: to help every child discover their strengths, build true confidence, and achieve meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Our Services: Helping Your Child Shine Brighter Every Day
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-secondary text-secondary-foreground">
              <CardContent className="p-8 text-center">
                <div className="bg-background/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Reducing Challenging Behaviors</h3>
                <p className="text-sm">
                  We guide you to understand behavioral patterns and create personalized strategies for navigating challenging moments with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground">
              <CardContent className="p-8 text-center">
                <div className="bg-background/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Communication Development</h3>
                <p className="text-sm">
                  We help children find their voice—whether through speech, sign language, or assistive technology—to express their needs and feelings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground">
              <CardContent className="p-8 text-center">
                <div className="bg-background/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Social Skills Building</h3>
                <p className="text-sm">
                  Through play-based learning and structured activities, we help children develop meaningful connections and friendships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-coral text-coral-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">GET STARTED TODAY – NO WAITLIST!</h2>
          <Button size="lg" variant="outline" className="border-coral-foreground text-coral-foreground hover:bg-coral-foreground hover:text-coral">
            GET STARTED
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Why Families Choose StarRise ABA Therapy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <img src="/api/placeholder/200/150" alt="No Waitlist" className="w-full h-32 object-cover rounded mb-4" />
                <h3 className="font-bold mb-2">No Waitlist</h3>
                <p className="text-sm text-muted-foreground">
                  Start getting services right away. No waiting or delays.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img src="/api/placeholder/200/150" alt="Experienced Team" className="w-full h-32 object-cover rounded mb-4" />
                <h3 className="font-bold mb-2">Experienced Team</h3>
                <p className="text-sm text-muted-foreground">
                  Our certified ABA therapists are dedicated to helping your child succeed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img src="/api/placeholder/200/150" alt="In-Home ABA Therapy" className="w-full h-32 object-cover rounded mb-4" />
                <h3 className="font-bold mb-2">In-Home ABA Therapy</h3>
                <p className="text-sm text-muted-foreground">
                  Therapy delivered in your child's natural environment for maximum comfort.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img src="/api/placeholder/200/150" alt="Family-Focused Approach" className="w-full h-32 object-cover rounded mb-4" />
                <h3 className="font-bold mb-2">Family-Focused Approach</h3>
                <p className="text-sm text-muted-foreground">
                  We work with your family to create lasting positive changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                How We Bring Out the Star in Every Child
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-coral text-coral-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Initial Assessment</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your child's unique strengths and challenges through comprehensive evaluation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-coral text-coral-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Custom Therapy Plan</h3>
                    <p className="text-muted-foreground">
                      A personalized plan tailored to your family's specific needs, goals, and preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-coral text-coral-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Ongoing Support & Therapy</h3>
                    <p className="text-muted-foreground">
                      Regular therapy sessions with continuous progress monitoring and plan adjustments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-coral text-coral-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Family Collaboration</h3>
                    <p className="text-muted-foreground">
                      We guide and support families, helping you feel confident in your journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-coral text-coral-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Celebrate Growth</h3>
                    <p className="text-muted-foreground">
                      We track and celebrate every step forward together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={childrenTogether} 
                alt="Children supporting each other" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8">
            Insurance & Accessibility
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We accept a wide range of insurance providers and work with you to ensure you get the coverage you need. We're here to help you navigate the process.
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold">
              United Healthcare
            </div>
            <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-bold">
              Medicaid
            </div>
            <div className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold">
              Kaiser Permanente
            </div>
            <div className="bg-navy text-white px-6 py-3 rounded-lg font-bold">
              Anthem
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 bg-coral text-coral-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Serving North Carolina & Surrounding Areas</h2>
          <Button size="lg" variant="outline" className="border-coral-foreground text-coral-foreground hover:bg-coral-foreground hover:text-coral">
            GET STARTED
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-yellow-foreground mb-12">
            What Families Are Saying About StarRise ABA Therapy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "StarRise really helped my daughter learn communication skills. The staff were very professional and caring."
                </p>
                <p className="font-bold">– Sarah L., Gary, NC</p>
              </CardContent>
            </Card>

            <Card className="bg-background/90">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "We are grateful to have been connected to StarRise and feel proud knowing our son has the guidance & support he needs."
                </p>
                <p className="font-bold">– Elijah, Winston-Salem, NC</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-coral text-coral-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">SCHEDULE YOUR CONSULTATION</h2>
          <Button size="lg" variant="outline" className="border-coral-foreground text-coral-foreground hover:bg-coral-foreground hover:text-coral">
            GET STARTED
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-6 w-6" />
                <span className="text-xl font-bold">StarRise</span>
              </div>
              <p className="text-sm text-gray-300">
                StarRise ABA Therapy proudly serves North Carolina. ABA therapy for families in North Carolina and nearby communities.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@starrise-aba.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>North Carolina</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>ABA Therapy</li>
                <li>Behavior Support</li>
                <li>Communication Development</li>
                <li>Social Skills Training</li>
                <li>Family Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 StarRise ABA Therapy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;