import { siteConfig } from '@/lib/config';
import '@/app/preset-override.css';
import { NavHeader } from '@/components/nav-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { MenuSection } from '@/components/menu-section';
import { InfoSection } from '@/components/info-section';
import { SnsSection } from '@/components/sns-section';
import { QuickActions } from '@/components/quick-actions';
import { Footer } from '@/components/footer';

function PresetSync() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: "document.documentElement.setAttribute('data-preset','" + (siteConfig.designPreset || 'default') + "')"
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <PresetSync />
      <NavHeader config={siteConfig} />
      <main id="main">
        <HeroSection config={siteConfig} />
        <QuickActions config={siteConfig} />
        <AboutSection config={siteConfig} />
        <MenuSection items={siteConfig.menuItems} />
        <InfoSection config={siteConfig} />
        <SnsSection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
    </>
  );
}
