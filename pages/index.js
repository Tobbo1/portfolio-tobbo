import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import Skills from '../components/sections/Skills';
import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nyamsi Alex - Software Engineer</title>
        <meta name="description" content="Portfolio de Nyamsi Lemotio Alex Brayen - Software Engineer" />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Hero />
        <AboutPreview />
        <Skills />
        <ProjectsPreview />
      </main>
      
      <Footer />
    </>
  );
}