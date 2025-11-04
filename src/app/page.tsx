"use client";

import { createContext } from "react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, ChefHat, Crown, HelpCircle, Instagram, Linkedin, MessageSquare, Music, Star, Users, Wine, Globe } from 'lucide-react';

const ThemeProvider = createContext(null);

export default function Home() {
  return (
    <div>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          brandName="Prime Steakhouse"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Prime Steakhouse Experience"
          description="Indulge in the finest cuts of beef and exceptional dining in an elegant atmosphere"
          tag="Premium Dining"
          tagIcon={Crown}
          mediaItems={[
            {
              imageSrc: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant steakhouse dining room"
            },
            {
              imageSrc: "https://images.pexels.com/photos/20036097/pexels-photo-20036097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium ribeye steak"
            },
            {
              imageSrc: "https://images.pexels.com/photos/6309832/pexels-photo-6309832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wine collection"
            },
            {
              imageSrc: "https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Gourmet appetizers"
            },
            {
              imageSrc: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Signature ribeye dish"
            }
          ]}
          buttons={[
            {
              text: "Make Reservation",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "product"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Since 1985, Prime Steakhouse has been serving the finest cuts of beef in an atmosphere of unparalleled elegance and sophistication.",
            "Our commitment to quality ingredients, expert preparation, and exceptional service has made us the premier destination for discerning diners who appreciate the art of fine dining."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "team"
            }
          ]}
          showBorder={true}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="What Sets Us Apart"
          description="Discover the elements that make Prime Steakhouse an extraordinary dining destination"
          tag="Excellence"
          tagIcon={Award}
          features={[
            {
              title: "Prime Aged Beef",
              description: "Our steaks are dry-aged for 28 days to achieve maximum tenderness and flavor concentration",
              icon: ChefHat
            },
            {
              title: "Expert Wine Pairing",
              description: "Curated selection of over 300 wines personally chosen by our sommelier to complement every dish",
              icon: Wine
            },
            {
              title: "Private Dining",
              description: "Intimate private dining rooms perfect for special occasions and business gatherings",
              icon: Users
            },
            {
              title: "Live Music",
              description: "Enjoy smooth jazz performances every Friday and Saturday evening in our main dining room",
              icon: Music
            }
          ]}
          buttons={[
            {
              text: "Explore Menu",
              href: "product"
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardOne
          title="Signature Dishes"
          description="Our most celebrated creations, prepared with precision and artistry"
          tag="Chef's Selection"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Prime Ribeye 32oz",
              price: "$85",
              imageSrc: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Prime ribeye steak",
              onProductClick: () => {}
            },
            {
              id: "2",
              name: "Lobster Tail Surf & Turf",
              price: "$95",
              imageSrc: "https://images.pexels.com/photos/20150651/pexels-photo-20150651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lobster tail with steak",
              onProductClick: () => {}
            },
            {
              id: "3",
              name: "A5 Wagyu Filet",
              price: "$150",
              imageSrc: "https://images.pexels.com/photos/12884547/pexels-photo-12884547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wagyu beef filet",
              onProductClick: () => {}
            }
          ]}
          buttons={[
            {
              text: "Full Menu",
              href: "https://example.com/menu"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Culinary Team"
          description="The talented chefs who bring passion and artistry to every dish"
          tag="Our Chefs"
          tagIcon={ChefHat}
          members={[
            {
              id: "1",
              name: "Chef Marcus Romano",
              role: "Executive Chef",
              description: "James Beard Award winner with 20+ years of experience in fine dining establishments across New York and Chicago.",
              imageSrc: "https://images.pexels.com/photos/8093922/pexels-photo-8093922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Marcus Romano",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/chefmarcus"
                },
                {
                  icon: Globe,
                  url: "https://chefmarcus.com"
                }
              ]
            },
            {
              id: "2",
              name: "Chef Sofia Martinez",
              role: "Sous Chef",
              description: "Culinary Institute graduate specializing in innovative flavor combinations and perfect execution of classic techniques.",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chef Sofia Martinez",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/chefsofia"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sofia-martinez"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Testimonials from our valued customers who have experienced our exceptional dining"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              role: "CEO",
              company: "TechCorp Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7821282/pexels-photo-7821282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Marketing Director",
              company: "Creative Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Williams"
            },
            {
              id: "3",
              name: "David & Emma Rodriguez",
              role: "Anniversary Dinner",
              company: "Celebrating 25 Years",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4695783/pexels-photo-4695783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David and Emma Rodriguez"
            },
            {
              id: "4",
              name: "James Patterson",
              role: "Business Owner",
              company: "Patterson Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8921562/pexels-photo-8921562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Patterson"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us"
          tag="Information"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/323910/pexels-photo-323910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Prime Steakhouse dining room"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can book online or call us directly at (555) 123-STEAK."
            },
            {
              id: "2",
              title: "What is your dress code?",
              content: "We maintain a smart casual to business casual dress code. Collared shirts and dress pants are preferred, and we kindly ask guests to avoid athletic wear, flip-flops, or overly casual attire."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely. Our chefs can accommodate most dietary restrictions including gluten-free, vegetarian, and allergy-specific requests. Please inform us when making your reservation or speak with your server."
            },
            {
              id: "4",
              title: "Is valet parking available?",
              content: "Yes, complimentary valet parking is available Tuesday through Sunday starting at 5:00 PM. Street parking and a nearby parking garage are also available."
            },
            {
              id: "5",
              title: "Do you offer private dining options?",
              content: "We have three private dining rooms that can accommodate groups from 8 to 40 guests. Each room features custom menus and dedicated service staff for your special event."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Make Your Reservation"
          description="Experience the finest dining with our expert chefs and exceptional service. Reserve your table today for an unforgettable culinary journey."
          imageSrc="https://images.pexels.com/photos/323910/pexels-photo-323910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant dining room atmosphere"
          mediaPosition="right"
          buttonText="Reserve Table"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "special_requests",
            placeholder: "Special requests or dietary restrictions...",
            rows: 4,
            required: false
          }}
          onSubmit={() => {}}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoWidth={140}
          logoHeight={45}
          copyrightText="© 2025 Prime Steakhouse. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Appetizers",
                  href: "https://example.com/appetizers"
                },
                {
                  label: "Steaks",
                  href: "https://example.com/steaks"
                },
                {
                  label: "Seafood",
                  href: "https://example.com/seafood"
                },
                {
                  label: "Wine List",
                  href: "https://example.com/wine"
                }
              ]
            },
            {
              title: "Restaurant",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Chefs",
                  href: "team"
                },
                {
                  label: "Private Dining",
                  href: "https://example.com/private"
                },
                {
                  label: "Events",
                  href: "https://example.com/events"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "https://maps.google.com"
                },
                {
                  label: "Hours",
                  href: "https://example.com/hours"
                },
                {
                  label: "Gift Cards",
                  href: "https://example.com/gifts"
                }
              ]
            }
          ]}
          onPrivacyClick={() => {}}
        />
      </div>
    </div>
  );
}