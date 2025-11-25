# Mansehra Sports Arena (MSA) - Design Guidelines

## Design Approach
**Style**: Sleek, sporty, energetic sports arena aesthetic with futuristic elements and high-energy visual language.

## Color Palette
- **Primary Dark**: Deep navy background
- **Accent Colors**: Bright neon green, electric blue, vibrant red
- **Theme**: Dark-mode aesthetic with glowing highlights and high contrast
- **Treatment**: Neon glow effects on accents, sharp contrasts for readability

## Typography
- **Headline Style**: Bold, sports-themed typography with strong presence
- **Characteristics**: Futuristic angles, sharp edges, athletic energy
- **Hierarchy**: 
  - Hero headlines: Extra bold, large scale
  - Section headers: Bold, uppercase styling
  - Body text: Clean, highly readable against dark backgrounds
  - Accent text: Neon-colored highlights for key information

## Layout System
- **Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- **Containers**: Max-width containers (max-w-7xl) for content sections
- **Grid Patterns**: Multi-column layouts for sports cards, reviews, and gallery
- **Full-bleed**: Hero sections use full viewport width with dramatic imagery

## Component Library

### Navigation
- Sticky navbar with dark background and subtle transparency
- Logo placement left, navigation links center/right
- Prominent CTA buttons: "Book a Slot", "Call Now"
- Mobile: Hamburger menu with smooth slide-in

### Hero Section
- Full-screen image slider or video background showcasing indoor cricket, soccer, fitness
- Large, bold tagline overlays
- Multiple CTA buttons with blurred glass-morphism backgrounds
- Quick info badges: 4.5★ rating, 24/7 hours, key sports icons

### Info Cards
- Glass-morphism style cards with subtle backdrop blur
- Icon + Title + Description layout
- Neon border glow on hover
- Grid layout: 4 columns desktop, 2 tablet, 1 mobile

### Sports Facility Cards
- Large feature cards with imagery
- Sport icon or photo background
- Feature lists with checkmarks or bullet points
- "Book Now" CTA button per card
- Layout: 3 columns desktop, stacked mobile

### Testimonial Carousel
- Card-based slider with customer reviews
- Star rating display (⭐⭐⭐⭐⭐)
- Customer name and review text
- Navigation arrows and dots
- Auto-play with pause on hover

### Gallery Grid
- Masonry or uniform grid layout
- Lightbox zoom functionality on click
- 3-4 columns desktop, 2 tablet, 1 mobile
- Hover overlay with zoom icon

### Contact Form
- Dark themed form fields with neon border focus states
- Fields: Name, Phone, Message
- Large submit button
- Embedded Google Maps beside form (2-column layout)

### Footer
- Dark background with subtle separation
- Quick links, social media icons, contact info
- Business hours: "Open 24/7" prominently displayed
- Copyright and address information

## Animations & Motion
- **Scroll Animations**: Fade-in and slide-up effects for sections
- **Parallax**: Subtle parallax on hero images
- **Hover Effects**: Scale transforms on cards (1.02-1.05)
- **Button Interactions**: Smooth color transitions and glow effects
- **Transitions**: 300-500ms ease-in-out for all interactive elements
- **Slider**: Smooth transitions between testimonial/image slides

## Images
**Hero Section**: 
- Full-width, high-quality images/video of indoor cricket action, soccer gameplay, and people training
- Dark overlay (30-40% opacity) to ensure text readability
- Alternating slider with 3-5 images showcasing facility diversity

**Sports Cards**:
- Action shots of each sport (cricket batting, soccer dribbling, fitness equipment)
- Bright, well-lit facility photography
- Consistent aspect ratio across all sport images

**Gallery**:
- Mix of daytime and nighttime facility shots
- Team photos, equipment close-ups, facility overview shots
- High-resolution, professionally composed images

**About Page**:
- Team/staff photos, facility exterior/interior shots
- Community engagement imagery

## Responsive Behavior
- **Mobile-first approach**
- **Breakpoints**: Standard Tailwind (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Hero**: Full-height on desktop (90vh), reduced height on mobile (60vh)
- **Navigation**: Collapse to hamburger below 768px
- **Cards**: Stack to single column below 640px
- **Typography**: Scale down 20-30% on mobile

## Page-Specific Guidelines

### Home Page
- Video/slider hero with 3 CTA buttons
- 4 quick info cards below hero
- Featured sports preview (3 cards)
- Testimonial carousel
- Final CTA section before footer

### Sports & Facilities
- Individual sport sections with alternating image/text layouts
- Feature lists with icons
- Booking CTA per section

### Reviews Page
- Large testimonial grid/carousel
- Overall rating display prominently
- Google reviews branding

### Gallery
- Full-width grid with lightbox
- Category filters (Cricket, Soccer, Fitness, Facility)

### Contact
- Split layout: Form (60%) + Map & Info (40%)
- Prominent phone number and 24/7 hours
- Social media links

## Performance Considerations
- Optimize images for web (WebP format)
- Lazy loading for gallery images
- Smooth scroll behavior
- Fast page transitions