# ShopApp - Next.js E-commerce Application

A modern, full-featured e-commerce application built with Next.js 16, featuring authentication, product management, and a responsive design.

## 🚀 Features

### Core Features
- **Landing Page**: Comprehensive homepage with 7 sections (Hero, Features, Products Preview, About, Services, Testimonials, Call-to-Action)
- **Authentication**: Mock login system with NextAuth.js integration
- **Product Catalog**: Browse and search products with filtering capabilities
- **Product Details**: Detailed product pages with full information
- **Protected Routes**: Add new products (authentication required)
- **Responsive Design**: Mobile-first design that works on all devices

### Authentication Features
- Mock login with hardcoded credentials
- NextAuth.js integration for extensibility
- Google OAuth support (configurable)
- Protected routes with middleware
- Session management with cookies

### Product Management
- View all products with search and filtering
- Detailed product pages with images and specifications
- Add new products (authenticated users only)
- Real-time form validation and preview
- Toast notifications for user feedback

## 🛠️ Technologies Used

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS
- **Authentication**: NextAuth.js
- **State Management**: React Hooks
- **Styling**: Tailwind CSS with custom utilities
- **Notifications**: React Hot Toast
- **Images**: Next.js Image optimization
- **API**: Next.js API Routes (RESTful endpoints)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shopapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # Optional: Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Login Credentials

For testing the mock authentication system:

- **Email**: `admin@shopapp.com`
- **Password**: `password123`

## 📚 Route Summary

### Public Routes
- `/` - Landing page with 7 sections
- `/items` - Product catalog with search and filtering
- `/items/[id]` - Individual product details page
- `/login` - Authentication page

### Protected Routes
- `/add-item` - Add new products (requires authentication)

### API Routes
- `GET /api/items` - Fetch all products
- `POST /api/items` - Create new product (returns JSON)
- `GET /api/items/[id]` - Fetch single product by ID
- `/api/auth/[...nextauth]` - NextAuth.js authentication endpoints

## 🎨 Design Features

### Landing Page Sections
1. **Hero Section** - Welcome message with call-to-action buttons
2. **Features Section** - Key benefits (Fast Delivery, Quality, Best Prices)
3. **Products Preview** - Featured products showcase
4. **About Section** - Company information and statistics
5. **Services Section** - Available services (Secure Shopping, Easy Payments, etc.)
6. **Testimonials** - Customer reviews and ratings
7. **Call-to-Action** - Final conversion section

### UI/UX Features
- Responsive navigation with mobile menu
- Search and filter functionality
- Product cards with ratings and availability status
- Loading states and error handling
- Toast notifications for user feedback
- Breadcrumb navigation
- Image optimization and lazy loading

## 🔧 Development Features

### Code Organization
- Component-based architecture
- Custom hooks for state management
- API route handlers for backend logic
- Middleware for route protection
- Environment-based configuration

### Performance Optimizations
- Next.js Image component for optimized images
- Static generation where possible
- Efficient re-rendering with React hooks
- Tailwind CSS for minimal bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 🔮 Future Enhancements

### Potential Features
- Shopping cart functionality
- Payment integration (Stripe, PayPal)
- User profiles and order history
- Product reviews and ratings system
- Inventory management
- Email notifications
- Advanced search with filters
- Wishlist functionality
- Multi-language support

### Technical Improvements
- Database integration (PostgreSQL, MongoDB)
- Real-time updates with WebSockets
- Advanced caching strategies
- Performance monitoring
- Automated testing suite
- CI/CD pipeline

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- NextAuth.js for authentication solutions
- Unsplash for product images
- React Hot Toast for notifications

---

**Built with ❤️ using Next.js 16 and modern web technologies**