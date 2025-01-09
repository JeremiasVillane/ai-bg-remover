![preview](/public/preview.png)

# AI Background Remover

A modern web application that uses artificial intelligence to automatically remove backgrounds from images. Built with React and TensorFlow.js, this application processes images directly in the browser, ensuring privacy and fast results.

## Features

- 🎯 Real-time background removal
- 🔒 Client-side processing (no server uploads required)
- 📱 Responsive design
- ⚡ Fast processing using WebGL acceleration
- 💾 One-click download of processed images
- 🖼️ Support for common image formats (PNG, JPEG, etc.)

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **AI Model**: TensorFlow.js with BodyPix model
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository

```bash
git clone https://github.com/JeremiasVillane/ai-bg-remover.git
cd ai-bg-remover
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How It Works

1. The application uses the BodyPix model from TensorFlow.js to detect people in images
2. When an image is uploaded, it's processed entirely in the browser using WebGL acceleration
3. The model creates a segmentation mask to identify the person in the image
4. The background is made transparent while preserving the subject
5. The resulting image can be downloaded as a PNG with transparent background

## Performance Considerations

- The AI model is loaded when the application starts
- WebGL backend is used for optimal performance
- Image processing happens in real-time using the device's GPU when available
- The model is automatically cleaned up when the component unmounts

## Browser Compatibility

The application works best in modern browsers that support:

- WebGL
- Canvas API
- File API
- Blob API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- TensorFlow.js team for the excellent BodyPix model
- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework

## Contact me

- [LinkedIn](https://snppr.vercel.app/2Vt7W2xMe)
