const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: '/security-guards-bangalore',
    title: 'Security Guards in Bangalore | Trained & Supervised',
    h1: 'Security Guards in Bangalore',
    desc: 'Professional security guards in Bangalore. Highly trained, vetted and supervised personnel for all your security needs.',
    eyebrow: 'SECURITY PERSONNEL',
    image: 'hero',
    sectionHeading: 'PROFESSIONAL GUARDING SERVICES',
    p1: 'Kingsmen provides elite guarding services across Bangalore. Our personnel are carefully selected, thoroughly vetted, and undergo rigorous training before deployment to ensure the highest standards of protection.',
    p2: 'Whether you require armed guards, unarmed personnel, or specialized security officers, our teams are equipped with the skills and discipline necessary to secure your assets, people, and property against any threat.',
    bullets: [
      'Stringent Physical & Background Vetting',
      'Extensive Guarding & Patrolling Training',
      'Armed and Unarmed Personnel',
      '24/7 Control Room Support',
      'Rapid Response Mobile Squads'
    ]
  },
  {
    path: '/facility-management-bangalore',
    title: 'Facility Management Company in Bangalore',
    h1: 'Facility Management Company in Bangalore',
    desc: 'Integrated facility management services in Bangalore. Maintenance, operations and housekeeping for pristine environments.',
    eyebrow: 'FACILITY MANAGEMENT',
    image: 'facility',
    sectionHeading: 'INTEGRATED FACILITY SOLUTIONS',
    p1: 'Beyond security, Kingsmen delivers comprehensive facility management solutions designed to keep your corporate and residential spaces pristine, functional, and efficient.',
    p2: 'Our integrated approach combines expert housekeeping, technical maintenance, and operational support. We tailor our facility management contracts to meet the specific operational demands of your site.',
    bullets: [
      'Comprehensive Corporate Housekeeping',
      'Technical Maintenance & Operations',
      'Pest Control & Sanitization Services',
      'Waste Management Solutions',
      'Vendor & Contractor Supervision'
    ]
  },
  {
    path: '/housekeeping-services-bangalore',
    title: 'Housekeeping Services in Bangalore',
    h1: 'Housekeeping Services in Bangalore',
    desc: 'Professional commercial housekeeping services in Bangalore. Spotless environments and meticulous attention to detail.',
    eyebrow: 'HOUSEKEEPING',
    image: 'facility',
    sectionHeading: 'METICULOUS HOUSEKEEPING',
    p1: 'A clean environment is essential for productivity and health. Our commercial housekeeping services in Bangalore deploy trained staff equipped with modern cleaning technology to maintain spotless facilities.',
    p2: 'From daily office cleaning to deep sanitization protocols for healthcare and industrial sectors, our housekeeping teams follow strict checklists and are monitored by dedicated facility managers.',
    bullets: [
      'Daily Office & Commercial Cleaning',
      'Deep Cleaning & Sanitization',
      'Restroom Hygiene Management',
      'Floor Care & Maintenance',
      'Eco-Friendly Cleaning Products'
    ]
  },
  {
    path: '/apartment-security-services-bangalore',
    title: 'Apartment Security Services in Bangalore',
    h1: 'Apartment Security Services in Bangalore',
    desc: 'Gated community and apartment security services in Bangalore. 24/7 protection, visitor management, and peace of mind.',
    eyebrow: 'APARTMENT SECURITY',
    image: 'hero',
    sectionHeading: 'GATED COMMUNITY PROTECTION',
    p1: 'Securing an apartment complex requires a balance of vigilance and hospitality. Kingsmen provides specialized security teams for gated communities that prioritize resident safety while managing visitors efficiently.',
    p2: 'Our personnel are trained in modern visitor management systems, access control, and emergency response, ensuring peace of mind for all residents around the clock.',
    bullets: [
      'Digital Visitor Management Integration',
      '24/7 Gate & Access Control',
      'Night Patrolling & Perimeter Checks',
      'Fire Safety & Emergency Response',
      'Courteous Resident Interaction'
    ]
  },
  {
    path: '/warehouse-security-services-bangalore',
    title: 'Warehouse Security Services in Bangalore',
    h1: 'Warehouse Security Services in Bangalore',
    desc: 'Logistics and warehouse security services in Bangalore. Asset protection, access control, and round-the-clock guarding.',
    eyebrow: 'WAREHOUSE SECURITY',
    image: 'patrol',
    sectionHeading: 'LOGISTICS & ASSET PROTECTION',
    p1: 'Warehouses and logistics hubs are high-risk environments prone to theft and pilferage. We deploy specialized industrial security guards trained specifically for supply chain and warehouse protection.',
    p2: 'Our warehouse security protocols include rigorous material inward/outward checks, vehicle inspections, and extensive night patrolling to safeguard your inventory and infrastructure.',
    bullets: [
      'Strict Material Inward/Outward Checking',
      'Vehicle Inspection & Gate Control',
      'Extensive Night Patrolling Protocols',
      'Anti-Pilferage Supervision',
      'Loading Bay Security Monitoring'
    ]
  },
  {
    path: '/industrial-security-services-bangalore',
    title: 'Industrial Security Services in Bangalore',
    h1: 'Industrial Security Services in Bangalore',
    desc: 'Factory and industrial security services in Bangalore. Comprehensive protection for large-scale manufacturing facilities.',
    eyebrow: 'INDUSTRIAL SECURITY',
    image: 'patrol',
    sectionHeading: 'FACTORY & PLANT SECURITY',
    p1: 'Large-scale manufacturing facilities require robust, highly disciplined security operations. Kingsmen offers industrial security services designed to handle the complexities of factory environments.',
    p2: 'Our guards are trained in industrial safety, fire fighting, and emergency evacuation procedures, ensuring that your production lines run safely and without disruption.',
    bullets: [
      'Industrial Safety & Fire Fighting Trained',
      'Labor & Contractor Access Control',
      'Perimeter Security & Perimeter Fencing Checks',
      'Emergency Evacuation Coordination',
      'Scrap & Material Movement Tracking'
    ]
  },
  {
    path: '/corporate-security-services-bangalore',
    title: 'Corporate Security Services in Bangalore',
    h1: 'Corporate Security Services in Bangalore',
    desc: 'Corporate office security services in Bangalore. Professional, smartly uniformed personnel for a secure corporate environment.',
    eyebrow: 'CORPORATE SECURITY',
    image: 'hero',
    sectionHeading: 'CORPORATE OFFICE SECURITY',
    p1: 'The first point of contact at any corporate office should exude professionalism. Kingsmen provides smartly uniformed, highly trained corporate security personnel who represent your brand with excellence.',
    p2: 'We focus on seamless access control, executive protection, and discreet surveillance, ensuring a safe and welcoming environment for your employees and high-profile clients.',
    bullets: [
      'Smartly Uniformed & Articulate Guards',
      'Corporate Reception & Front Desk Security',
      'Employee & Visitor Access Control',
      'CCTV Monitoring & Surveillance',
      'Executive Protection Services'
    ]
  },
  {
    path: '/school-security-services-bangalore',
    title: 'School Security Services in Bangalore',
    h1: 'School Security Services in Bangalore',
    desc: 'Education and school security services in Bangalore. Ensuring a safe and secure learning environment for students and staff.',
    eyebrow: 'SCHOOL SECURITY',
    image: 'hero',
    sectionHeading: 'SAFE EDUCATIONAL ENVIRONMENTS',
    p1: 'Protecting students, staff, and educational infrastructure is a profound responsibility. We provide specialized school security services focusing on vigilance, child safety, and strict campus access control.',
    p2: 'Our personnel are thoroughly vetted and trained to handle the unique dynamics of educational institutions, ensuring a secure environment where learning can thrive without compromise.',
    bullets: [
      'Strict Campus Access & Boundary Control',
      'Student Drop-off/Pick-up Traffic Management',
      'Child Safety & Vigilance Training',
      'Emergency & Evacuation Procedures',
      'Thoroughly Vetted & Verified Personnel'
    ]
  },
  {
    path: '/hospital-security-services-bangalore',
    title: 'Hospital Security Services in Bangalore',
    h1: 'Hospital Security Services in Bangalore',
    desc: 'Healthcare and hospital security services in Bangalore. Sensitive, responsive, and 24/7 protection for medical facilities.',
    eyebrow: 'HOSPITAL SECURITY',
    image: 'facility',
    sectionHeading: 'HEALTHCARE FACILITY PROTECTION',
    p1: 'Hospitals are high-stress, 24/7 environments that require a nuanced approach to security. Our guards are trained to handle crowds, distressed visitors, and sensitive medical situations with empathy and firmness.',
    p2: 'We secure critical areas like ICUs, emergency rooms, and pharmacies while ensuring smooth traffic flow and adherence to strict hygiene and safety protocols.',
    bullets: [
      'Emergency Room & ICU Access Control',
      'Crowd Management & Distressed Visitor Handling',
      'Pharmacy & Sensitive Area Protection',
      'Ambulance Traffic Management',
      'Infection Control Compliance Support'
    ]
  },
  {
    path: '/commercial-security-services-bangalore',
    title: 'Commercial Security Services in Bangalore',
    h1: 'Commercial Security Services in Bangalore',
    desc: 'Commercial building and retail security services in Bangalore. Protecting assets and ensuring safety for customers and staff.',
    eyebrow: 'COMMERCIAL SECURITY',
    image: 'hero',
    sectionHeading: 'RETAIL & COMMERCIAL SECURITY',
    p1: 'Retail spaces and commercial buildings require security that deters theft while welcoming genuine customers. We deploy highly trained personnel to monitor storefronts, shopping malls, and commercial complexes.',
    p2: 'Our teams excel at loss prevention, crowd control during peak hours, and managing multi-tenant commercial spaces to ensure the safety of all patrons and property.',
    bullets: [
      'Retail Loss Prevention & Anti-Theft',
      'Mall & Commercial Complex Patrolling',
      'Multi-Tenant Access Management',
      'Customer-Friendly Crowd Control',
      'After-Hours Property Surveillance'
    ]
  },
  {
    path: '/security-audit-bangalore',
    title: 'Free Security Assessment in Bangalore',
    h1: 'Free Security & Facility Assessment in Bangalore',
    desc: 'Request a free, comprehensive security and facility assessment for your premises in Bangalore.',
    eyebrow: 'FREE ASSESSMENT',
    image: 'hero',
    sectionHeading: 'COMPREHENSIVE RISK EVALUATION',
    p1: 'Every facility has unique vulnerabilities. Our senior security experts provide comprehensive, no-obligation security and facility assessments to identify risks and operational gaps in your current setup.',
    p2: 'We evaluate perimeter defenses, access control systems, manpower deployment, and fire safety protocols to deliver a tailored, actionable security blueprint for your organization.',
    bullets: [
      'Perimeter Vulnerability Analysis',
      'Access Control & CCTV Evaluation',
      'Manpower Optimization & Deployment Strategy',
      'Fire Safety & Emergency Route Checks',
      'Detailed Post-Assessment Report'
    ]
  },
  {
    path: '/case-studies',
    title: 'Security & Facility Management Case Studies',
    h1: 'Security & Facility Management Case Studies',
    desc: 'Read how Kingsmen delivers real-world security and facility management solutions for clients across Bangalore.',
    eyebrow: 'OUR WORK',
    image: 'facility',
    sectionHeading: 'PROVEN OPERATIONAL SUCCESS',
    p1: 'With over 25 years of experience, Kingsmen has successfully secured and managed hundreds of facilities across Bangalore, ranging from massive industrial plants to premium corporate offices.',
    p2: 'Explore our case studies to see how our rigorous training, continuous supervision, and strategic deployment have solved complex security and facility management challenges for our clients.',
    bullets: [
      'Corporate Campus Security Overhauls',
      'Industrial Plant Theft Reduction Programs',
      'Gated Community Access Modernization',
      'Large-Scale Event Crowd Management',
      'Integrated Facility Management Transitions'
    ]
  },
  {
    path: '/services',
    title: 'Security & Facility Management Services in Bangalore',
    h1: 'Our Services',
    desc: 'Explore our complete range of security and facility management services tailored for businesses and residences in Bangalore.',
    eyebrow: 'SERVICES HUB',
    image: 'patrol',
    sectionHeading: 'TOTAL SECURITY & DETECTIVE SOLUTIONS',
    p1: 'Kingsmen offers a comprehensive suite of security and facility management services. Whether you need elite bodyguards, a VIP mobile squad, or integrated housekeeping, we are your single point of contact.',
    p2: 'Our dual expertise in manpower deployment and facility operations ensures that your premises are not only impeccably secure but also immaculately maintained.',
    bullets: [
      'Armed & Unarmed Guarding Services',
      'VIP Mobile Squad & Bodyguards',
      'Security Consultancy & Audits',
      'Integrated Facility Management',
      'Fire Fighting & Karate Training'
    ]
  },
  {
    path: '/industries',
    title: 'Industries We Serve | Kingsmen Security',
    h1: 'Industries We Serve',
    desc: 'Specialized security and facility management solutions for apartments, warehouses, corporates, schools, and hospitals.',
    eyebrow: 'INDUSTRIES',
    image: 'hero',
    sectionHeading: 'SPECIALIZED SECTOR EXPERTISE',
    p1: 'Security is not a one-size-fits-all service. We deeply understand the nuanced operational requirements of various sectors and tailor our deployment, training, and SOPs accordingly.',
    p2: 'From the sensitive environment of a school or hospital to the rugged demands of an industrial warehouse, our specialized teams are equipped to handle industry-specific challenges with precision.',
    bullets: [
      'Corporate & Commercial IT Parks',
      'Manufacturing & Industrial Plants',
      'Logistics Hubs & Warehouses',
      'Hospitals & Healthcare Facilities',
      'Educational Institutions & Campuses'
    ]
  },
  {
    path: '/blog',
    title: 'Security & Facility Management Blog | Kingsmen',
    h1: 'Security & Facility Management Resources',
    desc: 'Latest insights, guides, and best practices for security and facility management in Bangalore.',
    eyebrow: 'RESOURCES',
    image: 'facility',
    sectionHeading: 'EXPERT INSIGHTS & BEST PRACTICES',
    p1: 'Stay informed on the latest trends, technologies, and strategies in physical security and facility management. Our leadership team regularly shares operational insights drawn from decades of field experience.',
    p2: 'Whether you are looking for tips on reducing guard attrition, optimizing your CCTV layout, or improving commercial hygiene, our resource hub provides actionable intelligence.',
    bullets: [
      'Security Audit Checklists',
      'Vendor Selection Guides',
      'Facility Management Best Practices',
      'Fire Safety Compliance Updates',
      'Operational SOP Templates'
    ]
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | Kingsmen',
    h1: 'Frequently Asked Questions',
    desc: 'Answers to your common questions regarding security guards, facility management, pricing, and deployment.',
    eyebrow: 'KNOWLEDGE BASE',
    image: 'patrol',
    sectionHeading: 'COMMON QUESTIONS ANSWERED',
    p1: 'Choosing the right security and facility management partner is a critical decision. We have compiled answers to the most common questions regarding our deployment process, training, and pricing.',
    p2: 'Transparency is a core value at Kingsmen. If you cannot find the answer to your specific query below, our operational team is always available for a direct consultation.',
    bullets: [
      'How are your security guards trained?',
      'Do you provide 24/7 supervision?',
      'What is the process for replacing a guard?',
      'Do you offer integrated security and FM?',
      'How quickly can you deploy a team?'
    ]
  }
];

const template = (page) => {
  const bulletList = page.bullets.map(b => '<li>• ' + b + '</li>').join('\\n                ');
  
  return `import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "../page.module.css";

export const metadata = {
  title: "${page.title}",
  description: "${page.desc}",
};

export default function Page() {
  return (
    <>
      <section className={styles.hero} style={{ minHeight: '60vh' }}>
        <div className={styles.heroBackground}>
          <Image src="/images/${page.image}.jpg" alt="${page.h1}" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <FadeIn delay={0.2}>
              <span className={styles.eyebrow}>${page.eyebrow}</span>
            </FadeIn>
            <h1 className={styles.headline}>
              <FadeIn delay={0.3}><span>${page.h1.split(' ').slice(0, Math.ceil(page.h1.split(' ').length/2)).join(' ')}</span></FadeIn>
              <FadeIn delay={0.4}><span>${page.h1.split(' ').slice(Math.ceil(page.h1.split(' ').length/2)).join(' ')}</span></FadeIn>
            </h1>
            <FadeIn delay={0.5}>
              <p className={styles.supportCopy}>
                ${page.desc}
              </p>
              <Link href="/security-audit-bangalore" className="primary-btn">
                REQUEST FREE SITE ASSESSMENT
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn y={30}>
            <span className={styles.sectionNumber}>${page.sectionHeading}</span>
            <h2 className={styles.introStatement} style={{ marginBottom: '60px' }}>
              TRAINED. VERIFIED. SUPERVISED.
            </h2>
          </FadeIn>

          <div className={styles.bentoGrid}>
            <FadeIn delay={0.2} y={30} className={styles.bentoCard}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--accent)' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                ${bulletList}
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.4} y={30} className={styles.bentoCard}>
              <p style={{ marginBottom: '15px' }}>
                ${page.p1}
              </p>
              <p>
                ${page.p2}
              </p>
              <h3 style={{ marginTop: '30px', color: 'var(--accent)', marginBottom: '15px', fontSize: '1.2rem' }}>Our Deployment Process:</h3>
              <ol style={{ paddingLeft: '20px', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <li>Comprehensive Site Assessment</li>
                <li>Customized Deployment Plan</li>
                <li>Rigorous Verification & Induction</li>
                <li>Deployment & 24/7 Supervision</li>
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}`;
}

pages.forEach(page => {
  const dir = path.join(__dirname, 'src/app', page.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.js'), template(page));
  console.log('Regenerated ' + page.path + ' with unique content.');
});
