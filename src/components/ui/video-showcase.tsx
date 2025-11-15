import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoShowcaseProps {
  videoUrl: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export function VideoShowcase({ 
  videoUrl, 
  title = "See It In Action",
  subtitle = "Watch how Codova transforms your customer engagement with AI-powered automation",
  badge = "Live Demo"
}: VideoShowcaseProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_65%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6 shadow-lg shadow-primary/20">
            {badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-ubuntu mb-6 bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-roboto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Video Container with Premium Border Effect */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-2 shadow-2xl shadow-primary/20">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                style={{ aspectRatio: "640 / 360" }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Product Demo Video"
              />
              
              {/* Gradient Overlay on Edges */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
        </motion.div>

        {/* Optional Stats or Features Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center space-y-2">
            <Play className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground font-ubuntu">Real-Time Demo</h4>
            <p className="text-sm text-muted-foreground font-roboto">See actual AI conversations</p>
          </div>
          <div className="text-center space-y-2">
            <Play className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground font-ubuntu">24/7 Automation</h4>
            <p className="text-sm text-muted-foreground font-roboto">Never miss a lead again</p>
          </div>
          <div className="text-center space-y-2">
            <Play className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground font-ubuntu">Instant Integration</h4>
            <p className="text-sm text-muted-foreground font-roboto">Deploy in 21 days or less</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
