# Utpanna Acharya's Portfolio

A modern, responsive portfolio website showcasing the professional profile, experience, and achievements of Utpanna Acharya - an HR/IR professional specializing in Labour Welfare, Employee Relations, and HR Operations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations and transitions
- **Comprehensive Sections**:
  - Hero section with professional profile image
  - About Me & Key Highlights
  - Education timeline with ongoing status indicators
  - Professional Experience with detailed achievements
  - Skills organized by category
  - Certifications showcase
  - Volunteering & Additional Information
  - Contact section with direct links
- **Resume Download**: Direct download functionality for resume PDF
- **Smooth Navigation**: Sticky header with smooth scroll to sections

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React
- **Deployment Ready**: Optimized build configuration

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd utpanna-acharya's-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your assets**
   - Place your profile image as `ua_dp.png` in `public/images/`
   - Place your resume PDF in the `public/` folder

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── components/           # React components
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── AdditionalInfo.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── KeyHighlights.tsx
│   ├── Section.tsx
│   ├── Skills.tsx
│   ├── Volunteering.tsx
│   └── icons/           # Custom icon components
├── public/              # Static assets
│   └── images/          # Images folder
├── constants.ts         # Portfolio data and content
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.html          # HTML template
```

## ✏️ Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit `constants.ts` to update:
   - Personal details (name, email, phone, LinkedIn)
   - About me description
   - Education history
   - Work experience
   - Skills and certifications
   - Achievements and volunteering activities

2. **Replace Assets**:
   - Add your profile picture to `public/images/`
   - Add your resume PDF to `public/`
   - Update the file references in `constants.ts`

3. **Styling**: Customize colors and design in component files using Tailwind CSS classes

## 🎨 Color Palette

- Navy: `#0A192F` (Primary dark)
- Teal: `#14B8A6` (Accent color)
- Light Slate: `#A8B2D1` (Secondary text)
- Off White: `#F8FAFC` (Background)

## 📦 Deployment

This portfolio can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **Other platforms**: Build with `npm run build` and deploy the `dist/` folder

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 About

This portfolio belongs to **Utpanna Acharya**, a postgraduate student specializing in Industrial Relations and Personnel Management with hands-on experience in labour welfare compliance, employee engagement, and HR operations from leading organizations like JSW Steel and AMNS India.

---

Built with ❤️ using React and TypeScript
