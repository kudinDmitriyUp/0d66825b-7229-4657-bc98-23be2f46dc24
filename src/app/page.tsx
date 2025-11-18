"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, CalendarDays, Clock, Crown, Facebook, Heart, Instagram, MapPin, Sparkles, Star, Users, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Hotel Siracusa Mare"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Eleganza Siciliana sul Mare"
          description="Experience the enchanting beauty of Sicily at our boutique hotel, where Mediterranean luxury meets timeless Italian hospitality off the coast of historic Siracusa"
          tag="Luxury Coastal Retreat"
          tagIcon={Crown}
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "contact"
            },
            {
              text: "Explore Our Story",
              href: "about"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478888293-pwcswxi4.jpg",
              imageAlt: "Hotel Siracusa Mare luxury terrace with Mediterranean sea view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478889194-d264mrqz.jpg",
              imageAlt: "Elegant hotel suite with Sicilian coastal design"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478890195-jw3ffic3.jpg",
              imageAlt: "Siracusa ancient architecture at golden sunset"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478891256-8jmk9tgy.jpg",
              imageAlt: "Mediterranean infinity pool with coastal luxury"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478892061-o3qc8p22.jpg",
              imageAlt: "Hotel restaurant terrace with panoramic sea view"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="La Nostra Storia"
          description="Nestled on the enchanting shores of Sicily, our boutique hotel captures the essence of Mediterranean elegance. With breathtaking views of the Ionian Sea and the ancient wonders of Siracusa as our backdrop, we offer an intimate escape where Sicilian tradition meets contemporary luxury."
          tag="Our Heritage"
          tagIcon={MapPin}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478893014-cb2vm97a.jpg"
          imageAlt="Hotel Siracusa Mare luxury lobby with Sicilian architectural elements"
          buttons={[
            {
              text: "Discover More",
              href: "amenities"
            }
          ]}
          bulletPoints={[
            {
              title: "Prime Coastal Location",
              description: "Perched on Sicily's stunning coastline with direct access to crystalline waters and panoramic Mediterranean views",
              icon: Waves
            },
            {
              title: "Historic Siracusa",
              description: "Minutes from UNESCO World Heritage sites including Ortigia Island and ancient Greek theaters",
              icon: Clock
            },
            {
              title: "Authentic Sicilian Experience",
              description: "Immerse yourself in local culture with curated experiences showcasing Sicily's rich culinary and artistic heritage",
              icon: Heart
            },
            {
              title: "Personalized Service",
              description: "Intimate boutique atmosphere with dedicated concierge services tailored to create unforgettable memories",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardNine
          title="Amenità di Lusso"
          description="Indulge in world-class amenities designed to elevate your Sicilian escape with authentic Mediterranean luxury and unparalleled comfort"
          tag="Premium Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          showStepNumbers={false}
          features={[
            {
              id: 1,
              title: "Wellness & Spa Sanctuary",
              description: "Rejuvenate your senses in our Mediterranean-inspired spa featuring traditional Sicilian treatments, thermal pools, and panoramic sea views from every treatment room.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478894199-w24wthlg.jpg",
                imageAlt: "Luxury spa wellness sanctuary with Mediterranean design"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478894199-w24wthlg.jpg",
                imageAlt: "Spa treatment room with sea view"
              }
            },
            {
              id: 2,
              title: "Culinary Excellence",
              description: "Savor authentic Sicilian cuisine at our acclaimed restaurant, where our chef creates innovative dishes using the finest local ingredients and time-honored family recipes.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478894852-rv0x6hjl.jpg",
                imageAlt: "Fine dining restaurant with Sicilian cuisine"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478894852-rv0x6hjl.jpg",
                imageAlt: "Chef preparing authentic Sicilian dishes"
              }
            },
            {
              id: 3,
              title: "Infinity Pool Paradise",
              description: "Immerse yourself in our stunning infinity pool that seamlessly blends with the Mediterranean horizon, complete with exclusive poolside service and private cabanas.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478895711-pysh3xg0.jpg",
                imageAlt: "Infinity pool with Mediterranean sea view"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478895711-pysh3xg0.jpg",
                imageAlt: "Poolside luxury cabanas and service"
              }
            },
            {
              id: 4,
              title: "Concierge & Experiences",
              description: "Our dedicated concierge team curates personalized Sicilian adventures, from private yacht excursions to exclusive wine tastings at historic Etna vineyards.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478896681-limit7tn.jpg",
                imageAlt: "Professional concierge service luxury hospitality"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478896681-limit7tn.jpg",
                imageAlt: "Curated Sicilian experiences and excursions"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Ospiti Soddisfatti"
          description="Discover why discerning travelers from around the world choose Hotel Siracusa Mare for their authentic Sicilian luxury experience"
          tag="Guest Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="reveal-blur"
          testimonials={[
            {
              id: "1",
              name: "Isabella Martinez",
              role: "Travel Writer",
              testimonial: "Hotel Siracusa Mare exceeded every expectation. The seamless blend of Sicilian authenticity with modern luxury created an unforgettable Mediterranean escape. The staff's attention to detail and genuine warmth made us feel like cherished family.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478900962-keslhzmn.jpg",
              imageAlt: "Isabella Martinez travel writer portrait"
            },
            {
              id: "2",
              name: "James Wellington",
              role: "Luxury Travel Consultant",
              testimonial: "As someone who evaluates the world's finest hotels, I can confidently say this property sets the standard for boutique luxury in Sicily. The location is breathtaking, the service impeccable, and the culinary experience truly extraordinary.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478901914-0b8zhhs5.jpg",
              imageAlt: "James Wellington luxury travel consultant portrait"
            },
            {
              id: "3",
              name: "Sophie & Marco Dubois",
              role: "Honeymooners",
              testimonial: "Our honeymoon at Hotel Siracusa Mare was pure magic. From the infinity pool sunsets to the private beach access, every moment felt like a dream. The personalized service and romantic atmosphere created memories we'll treasure forever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478902771-95ocihl4.jpg",
              imageAlt: "Sophie and Marco Dubois honeymoon couple portrait"
            },
            {
              id: "4",
              name: "Aria Thompson",
              role: "Lifestyle Blogger",
              testimonial: "This hidden gem captures the soul of Sicily beautifully. The spa treatments using local ingredients, the cooking classes with the chef, and the sunset yoga sessions created an authentic wellness retreat unlike any other.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478903822-y9lfr4ge.jpg",
              imageAlt: "Aria Thompson lifestyle blogger portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Riconoscimenti di Prestigio"
          description="Featured and trusted by the world's leading travel platforms and hospitality networks, ensuring exceptional service standards"
          tag="Travel Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478905054-42qf2yw0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478906279-dl267gdp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478907049-9y1cr13j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478908236-w43qa1ei.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478909298-hxs4hccx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478910119-mlrlpcvy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763478910881-2pkla13o.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Prenotazioni"
          tagIcon={CalendarDays}
          title="Reserve Your Sicilian Escape"
          description="Begin your journey to Mediterranean luxury. Contact us to secure your dates and discover personalized packages for your perfect Sicilian getaway."
          inputPlaceholder="Your email address"
          buttonText="Request Availability"
          termsText="By submitting your inquiry, you agree to receive booking information and exclusive offers from Hotel Siracusa Mare."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Hotel Siracusa Mare"
          copyrightText="© 2025 Hotel Siracusa Mare | Luxury Sicilian Hospitality"
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Accommodation", href: "hero" },
                { label: "Our Story", href: "about" },
                { label: "Amenities", href: "amenities" },
                { label: "Gallery", href: "hero" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Fine Dining", href: "amenities" },
                { label: "Concierge", href: "amenities" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Siracusa Tours", href: "contact" },
                { label: "Wine Tasting", href: "contact" },
                { label: "Yacht Excursions", href: "contact" },
                { label: "Cooking Classes", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Special Offers", href: "contact" },
                { label: "Group Bookings", href: "contact" },
                { label: "Concierge Services", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}