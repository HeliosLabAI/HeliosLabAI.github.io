import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const TeamPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    skills: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Submitting team application to Supabase:', formData);
      
      const { data, error } = await supabase
        .from('team_applications')
        .insert([
          {
            name: formData.name,
            email: formData.email || null,
            message: formData.message,
            skills: formData.skills,
            status: 'pending', // Add status field if required
            created_at: new Date().toISOString()
          }
        ]);

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error details:', error);
        setSubmitStatus('error');
        alert(`Error submitting application: ${error.message}. Please check if the 'team_applications' table exists in your Supabase project.`);
      } else {
        console.log('Team application submitted successfully:', data);
        setSubmitStatus('success');
        alert('Thank you for your interest in joining our team!');
        setFormData({ name: '', email: '', message: '', skills: '' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      alert(`Error submitting application: ${error}. Please check your Supabase configuration.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-background min-h-screen">
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
        <Link
          to="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/feedback"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Feedback
        </Link>
        <button className="text-xs text-foreground font-semibold">
          Team
        </button>
        <Link
          to="/research"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Research
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* Decorative vertical lines */}
        <div className="absolute inset-0 flex justify-between max-w-7xl mx-auto px-6 pointer-events-none">
          <div className="w-px bg-section-divider opacity-40" />
          <div className="w-px bg-section-divider opacity-40 hidden md:block" />
          <div className="w-px bg-section-divider opacity-40 hidden md:block" />
          <div className="w-px bg-section-divider opacity-40" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-2xl"
        >
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tighter text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              We're always looking for talented individuals who are passionate about building the future of autonomous intelligence.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="skills" className="block font-body text-sm font-medium text-foreground mb-2">
                Skills *
              </label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Tell us about your skills, experience, and expertise..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Why do you want to join HeliosLab? What are you passionate about?"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Join Team'}
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
};

export default TeamPage;
