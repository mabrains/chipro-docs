import {
  Zap,
  MessageSquare,
  Package,
  CreditCard,
  Cpu,
  Workflow,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import styles from "./index.module.css";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  const features = [
    {
      title: "Chipro",
      description: "Advanced chip design tools with AI-powered optimization",
      icon: Zap,
      gradient: "yellow-orange",
    },
    {
      title: "Mohet Chat",
      description: "Intelligent conversation interface for design assistance",
      icon: MessageSquare,
      gradient: "blue-cyan",
    },
    {
      title: "Bring Your PDK",
      description: "Seamless integration with your existing PDK libraries",
      icon: Package,
      gradient: "purple-pink",
    },
    {
      title: "Billing",
      description: "Transparent, flexible billing for your organization",
      icon: CreditCard,
      gradient: "green-emerald",
    },
  ];

  const whyFeatures = [
    {
      title: "AI-Powered Design",
      description:
        "Leverage agentic AI to accelerate chip design from schematics to layout",
      icon: Sparkles,
    },
    {
      title: "Integrated Workflow",
      description:
        "All tools in one platform. No context switching, maximum productivity",
      icon: Workflow,
    },
    {
      title: "Hierarchical Management",
      description:
        "Organize designs with powerful hierarchical structures and reusable blocks",
      icon: Layers,
    },
  ];

  return (
    <Layout
      title="Mabrains Docs"
      wrapperClassName=""
      description="Agentic EDA & AI-Driven Chip Design Platform"
    >
      <div className={styles.page}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroGrid}></div>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Cpu className={styles.badgeIcon} />
              Next-Generation Design + AI Platform
            </div>

            <div className={styles.heroHeadings}>
              <h1 className={styles.heroTitle}>Agentic EDA</h1>
              <h2 className={styles.heroSubtitle}>Chip Design Platform</h2>
            </div>

            <p className={styles.heroDescription}>
              AI-driven chip-design environment. From schematics to layout,
              Mabrains integrates AI assistants, design automation, and
              open-source PDKs — everything you need to design chips faster.
            </p>

            <div className={styles.heroButtons}>
              <Link className={styles.buttonPrimary} to="/docs/intro">
                Get Started
                <ArrowRight className={styles.buttonIcon} />
              </Link>

              {/* External link */}
              <Link
                className={styles.buttonSecondary}
                href="https://mabrains.com"
                rel="noopener noreferrer"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </header>

        {/* Why Mabrains Section */}
        <section className={styles.why}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Why Mabrains</h2>
              <p className={styles.sectionSubtitle}>
                Everything engineers need to design better chips, faster
              </p>
            </div>

            <div className={styles.whyGrid}>
              {whyFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className={styles.whyCard}>
                    <div className={styles.whyIconWrapper}>
                      <Icon className={styles.whyIcon} />
                    </div>

                    <h3 className={styles.whyCardTitle}>{feature.title}</h3>
                    <p className={styles.whyCardDescription}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>
              Ready to accelerate your design?
            </h2>
            <p className={styles.ctaDescription}>
              Join thousands of engineers using Mabrains to design chips faster
            </p>
            <Link className={styles.buttonPrimary} to="/docs/intro">
              Start Building
              <ArrowRight className={styles.buttonIcon} />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
