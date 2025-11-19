export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses/ccna" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const partners = [
  "Cisco",
  "AWS",
  "Microsoft",
  "Google Cloud",
  "Palo Alto",
  "Fortinet",
  "Red Hat",
  "VMware",
];

export type ServiceIcon =
  | "network"
  | "cloud"
  | "shield"
  | "layers"
  | "briefcase"
  | "award";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
  href: string;
};

export const services: Service[] = [
  {
    title: "Cisco Training",
    description:
      "End-to-end CCNA, CCNP, and CCIE learning paths guided by expert CCIEs.",
    icon: "network",
    href: "/services/cisco-training",
  },
  {
    title: "Cloud Training",
    description:
      "Role-based enablement for AWS, Azure, and Google Cloud engineers.",
    icon: "cloud",
    href: "/services/cloud-training",
  },
  {
    title: "Cybersecurity",
    description:
      "Pentesting, SOC, and zero-trust programs with hands-on labs and scenarios.",
    icon: "shield",
    href: "/services/cybersecurity",
  },
  {
    title: "DevOps Automation",
    description:
      "CI/CD, Infrastructure as Code, and platform engineering bootcamps.",
    icon: "layers",
    href: "/services/devops",
  },
  {
    title: "Corporate Training",
    description:
      "Customized learning journeys aligned to enterprise competency matrices.",
    icon: "briefcase",
    href: "/services/corporate-training",
  },
  {
    title: "Certification Support",
    description:
      "Exam coaching, simulated labs, and dedicated mentors until you pass.",
    icon: "award",
    href: "/services",
  },
];

export const trainingCategories = [
  {
    title: "Cisco",
    summary: "Routing, switching, security, and SD-WAN specializations.",
  },
  {
    title: "Cybersecurity",
    summary: "SOC, ethical hacking, incident response, and blue teaming.",
  },
  {
    title: "Cloud",
    summary: "Multi-cloud architecture, automation, and FinOps.",
  },
  {
    title: "DevOps",
    summary: "Kubernetes, GitOps, CI/CD pipelines, and SRE.",
  },
  {
    title: "Linux",
    summary: "Enterprise Linux, automation, and security hardening.",
  },
];

export const differentiators = [
  {
    title: "Real Lab Environments",
    description: "Dedicated hardware racks and cloud sandboxes for every class.",
  },
  {
    title: "Expert Mentorship",
    description:
      "Certified architects mentor learners before, during, and after courses.",
  },
  {
    title: "Outcome-first Design",
    description:
      "We map training to certifications, adoption metrics, and ROI dashboards.",
  },
];

export const testimonials = [
  {
    name: "Priya Nair",
    title: "Head of Network Engineering, NetAxis",
    quote:
      "TechElevate blended CCIE workshops with remote labs so our engineers could deploy SD-WAN flawlessly the next quarter.",
  },
  {
    name: "Marcus Allen",
    title: "Director of Security, Alloy Bank",
    quote:
      "The cybersecurity cohort accelerated our SOC readiness by six months. The mentors felt like an extension of our team.",
  },
  {
    name: "Hannah Kim",
    title: "Cloud Practice Lead, DevSphere",
    quote:
      "Our consultants loved the immersive AWS-to-Azure migration labs. It’s rare to see enterprise polish with startup agility.",
  },
];

export const achievements = [
  { label: "Learners Trained", value: "18K+" },
  { label: "Enterprise Clients", value: "220+" },
  { label: "Countries Served", value: "32" },
  { label: "Avg. NPS", value: "72" },
];

export const teamMembers = [
  {
    name: "Sonali Pawar",
    role: "Managing Director",
    bio: "",
  },
  {
    name: "Yash Pawar",
    role: "Independent Director",
    bio: "",
  },
  {
    name: "Krishna Sharma",
    role: "Independent Director",
    bio: "",
  },
];

export const blogPosts = [
  {
    title: "Designing a Pragmatic Zero-Trust Roadmap",
    excerpt:
      "Translate executive goals into an actionable 90-day zero-trust execution plan.",
    author: "Emily Carter",
    date: "Nov 12, 2025",
    slug: "zero-trust-roadmap",
  },
  {
    title: "Building Cloud Centers of Excellence",
    excerpt:
      "How to align cloud upskilling, guardrails, and automation in one charter.",
    author: "Marcus Allen",
    date: "Oct 30, 2025",
    slug: "cloud-coe-playbook",
  },
  {
    title: "CCIE Lab Prep: 5 Proven Tactics",
    excerpt:
      "Maximize hands-on practice hours and feedback loops with dedicated mentors.",
    author: "Priya Nair",
    date: "Oct 05, 2025",
    slug: "ccie-lab-prep",
  },
];

export const serviceSlugs = [
  {
    slug: "cisco-training",
    title: "Cisco Training",
    hero: {
      title: "Cisco Excellence Programs",
      description:
        "Master CCNA to CCIE with rack-grade labs, live mentors, and projects mirroring enterprise networks.",
    },
    coverage: [
      "Enterprise routing & switching labs (Catalyst, Nexus, SD-Access)",
      "Security tracks covering ASA, Firepower, and ISE policies",
      "SD-WAN design, deployment, and performance instrumentation",
    ],
    courses: ["CCNA", "CCNP Enterprise", "CCNP Security", "CCIE Enterprise"],
  },
  {
    slug: "cloud-training",
    title: "Cloud Training",
    hero: {
      title: "Multi-Cloud Adoption Tracks",
      description:
        "Advance architects and ops teams across AWS, Azure, and Google Cloud with role-based pathways.",
    },
    coverage: [
      "Architecture design workshops with FinOps embedded",
      "Automation labs with Terraform, Pulumi, and GitOps pipelines",
      "Security blueprints for identity, networking, and data governance",
    ],
    courses: [
      "AWS Solutions Architect",
      "Azure Administrator",
      "Google Professional Cloud Architect",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Programs",
    hero: {
      title: "Adaptive Defense Enablement",
      description:
        "From red-team operations to SOC modernization, give teams battle-tested playbooks.",
    },
    coverage: [
      "Threat hunting and incident response simulations",
      "Offensive security labs with ATT&CK aligned exercises",
      "Governance + compliance accelerators for regulated sectors",
    ],
    courses: ["CEH", "CompTIA Security+", "CISM", "CISSP"],
  },
  {
    slug: "devops",
    title: "DevOps Enablement",
    hero: {
      title: "Platform Engineering Bootcamps",
      description:
        "Ship resilient software faster with CI/CD, Kubernetes, and SRE game-days.",
    },
    coverage: [
      "GitOps workflows with ArgoCD and Flux",
      "Kubernetes multi-cluster management labs",
      "Observability and chaos engineering field exercises",
    ],
    courses: [
      "Certified Kubernetes Administrator",
      "HashiCorp Terraform Associate",
      "AZ-400 DevOps Engineer",
    ],
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    hero: {
      title: "Custom Corporate Academies",
      description:
        "We align skill matrices, certification targets, and adoption goals per business unit.",
    },
    coverage: [
      "Competency mapping and skill-gap diagnostics",
      "Blended delivery (onsite, virtual, self-paced) with live mentors",
      "Executive-ready reporting and ROI dashboards",
    ],
    courses: [
      "Custom bootcamps",
      "Leadership programs",
      "Certification fast-tracks",
    ],
  },
];

export const courseTemplates = [
  {
    slug: "ccna",
    title: "CCNA Edge Accelerator",
    description:
      "A 7-week blended program covering modern enterprise networking fundamentals, automation, and security baselines.",
    audience: [
      "Junior network engineers expanding their coverage.",
      "IT professionals pivoting into infrastructure roles.",
      "Learners pursuing the CCNA 200-301 credential.",
    ],
    syllabus: [
      "Network Access, IP Connectivity, and IPv6 design",
      "Security fundamentals, VPNs, and segmentation",
      "Automation & programmability with APIs and Python",
    ],
    duration: "7 Weeks (Live + Lab Immersions)",
    fee: "USD 1,480 (includes rack access & exam voucher)",
  },
  {
    slug: "ccnp",
    title: "CCNP Enterprise Mastery",
    description:
      "Deep dives into automation, SDA, SD-WAN, and assurance with dual CCIE coaches.",
    audience: [
      "Experienced engineers targeting advanced Cisco credentials.",
      "Consultants leading campus and WAN transformations.",
    ],
    syllabus: [
      "Layer 3 enterprise design & QoS policies",
      "SD-Access, SD-WAN, and wireless integration",
      "Network automation pipelines and telemetry",
    ],
    duration: "9 Weeks (Weekend Intensives)",
    fee: "USD 2,450",
  },
  {
    slug: "ccie",
    title: "CCIE Enterprise Lab Studio",
    description:
      "Mentor-led scenarios, graded labs, and readiness assessments for the CCIE v1.1 blueprint.",
    audience: [
      "Senior engineers preparing for CCIE lab exams.",
      "Architects leading complex multi-domain deployments.",
    ],
    syllabus: [
      "Advanced routing, policy, and security constructs",
      "SDN controllers, assurance, and programmability",
      "Lab strategy, time management, and mock grading",
    ],
    duration: "12 Weeks (Unlimited Rack Access)",
    fee: "USD 3,900",
  },
];

