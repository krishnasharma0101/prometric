export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "My Courses", href: "/my-courses" },
  { label: "Blog", href: "/blog" },
  { label: "Curriculum Designer", href: "/curriculum-designer" },
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

type CourseModule = {
  title: string;
  topics: string[];
};

export type CourseOutline = Record<string, CourseModule[]>;

export type CourseTreeNode = {
  label: string;
  description?: string;
  courses?: { name: string; note?: string }[];
  children?: CourseTreeNode[];
};

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
      "Mitralearn blended CCIE workshops with remote labs so our engineers could deploy SD-WAN flawlessly the next quarter.",
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
    name: "",
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
    courses: [
      "CCNA",
      "CCNP Enterprise",
      "CCNP Security",
      "CCIE Enterprise Infrastructure",
    ],
    courseTree: [
      {
        label: "Entry Level",
        description:
          "Technician credentials that validate foundational troubleshooting and restoration.",
        courses: [
          { name: "CCT" },
          { name: "CCST Networking" },
          { name: "CCST Cybersecurity" },
        ],
      },
      {
        label: "Associate Level",
        description:
          "Core associate certifications across networking, automation, and security operations.",
        courses: [
          { name: "CCNA" },
          { name: "DevNet Associate" },
          { name: "CyberOps Associate" },
        ],
      },
      {
        label: "Professional Level",
        description:
          "Each CCNP track requires its core exam plus one concentration of your choice.",
        children: [
          {
            label: "CCNP Enterprise",
            description:
              "Build on ENCOR then specialize in routing, wireless, SD-WAN, design, or automation.",
            courses: [
              { name: "350-401 ENCOR", note: "Core" },
              { name: "300-410 ENARSI" },
              { name: "300-415 ENSDWI" },
              { name: "300-420 ENSLD" },
              { name: "300-425 ENWLSD" },
              { name: "300-430 ENWLSI" },
              { name: "300-435 ENAUTO" },
            ],
          },
          {
            label: "CCNP Security",
            description:
              "SCOR core plus specialist concentrations in firewalls, ISE, email/web, VPN, or automation.",
            courses: [
              { name: "350-701 SCOR", note: "Core" },
              { name: "300-710 SNCF" },
              { name: "300-715 SISE" },
              { name: "300-720 SESA" },
              { name: "300-725 SWSA" },
              { name: "300-730 SVPN" },
              { name: "300-735 SAUTO" },
            ],
          },
          {
            label: "CCNP Data Center",
            courses: [
              { name: "350-601 DCCOR", note: "Core" },
              { name: "300-610 DCID" },
              { name: "300-615 DCIT" },
              { name: "300-620 DCACI" },
              { name: "300-635 DCAUTO" },
              { name: "300-640 DCAI" },
            ],
          },
          {
            label: "CCNP Collaboration",
            courses: [
              { name: "350-801 CLCOR", note: "Core" },
              { name: "300-810 CLICA" },
              { name: "300-815 CLACCM" },
              { name: "300-820 CLCEI" },
              { name: "300-830 CLCCE" },
              { name: "300-835 CLAUTO" },
            ],
          },
          {
            label: "CCNP Service Provider",
            courses: [
              { name: "350-501 SPCOR", note: "Core" },
              { name: "300-510 SPRI" },
              { name: "300-515 SPVI" },
              { name: "300-535 SPAUTO" },
              { name: "300-540 SPCNI" },
            ],
          },
          {
            label: "DevNet Professional",
            description:
              "DEVCOR core plus the DevOps concentration for automation specialists.",
            courses: [
              { name: "350-901 DEVCOR", note: "Core" },
              { name: "300-910 DEVOPS" },
            ],
          },
        ],
      },
      {
        label: "Expert Level",
        description:
          "Pass the track core exam, then the 8-hour lab to earn your CCIE/DevNet Expert.",
        courses: [
          { name: "CCIE Enterprise Infrastructure" },
          { name: "CCIE Enterprise Wireless" },
          { name: "CCIE Security" },
          { name: "CCIE Data Center" },
          { name: "CCIE Service Provider" },
          { name: "DevNet Expert" },
        ],
      },
      {
        label: "Design Expert",
        description: "CCDE validates architecture mastery via written + practical exams.",
        courses: [{ name: "CCDE" }],
      },
    ],
    courseDetails: {
      CCT: [
        {
          title: "Hardware Diagnostics",
          topics: [
            "Identify Cisco rack components and replaceable units",
            "Perform loopback tests, LED interpretation, and smart licensing checks",
            "Document findings and prepare RMA-ready evidence",
          ],
        },
        {
          title: "IOS & Service Restoration",
          topics: [
            "Console connectivity, ROMMON recovery, and password resets",
            "Upgrading and downgrading images from TFTP/USB",
            "Remote support etiquette and safety procedures",
          ],
        },
      ],
      "CCST Networking": [
        {
          title: "Networking Foundations",
          topics: [
            "OSI vs. TCP/IP models, IPv4/IPv6, and subnetting",
            "Switching, VLANs, trunking, and wireless fundamentals",
            "Common LAN/WAN topologies and cabling standards",
          ],
        },
        {
          title: "Network Ops & Security",
          topics: [
            "CLI basics, device hardening, and troubleshooting workflow",
            "QoS, monitoring, and logging essentials",
            "Risk management, encryption, and zero-trust mindset",
          ],
        },
      ],
      "CCST Cybersecurity": [
        {
          title: "Security Fundamentals",
          topics: [
            "Threat actors, attack surfaces, and MITRE ATT&CK concepts",
            "CIA triad, risk response, and policy frameworks",
            "Identity, authentication, and access control techniques",
          ],
        },
        {
          title: "Operations & Response",
          topics: [
            "Network security tooling (firewalls, IPS, secure web/email)",
            "Endpoint monitoring, logging, and alert triage",
            "Incident response lifecycle and communication playbooks",
          ],
        },
      ],
      CCNA: [
        {
          title: "Network Fundamentals",
          topics: [
            "TCP/IP, IPv4/IPv6 addressing, subnetting",
            "Switching concepts, VLANs, trunking",
            "Wireless fundamentals and controller basics",
          ],
        },
        {
          title: "Network Access & Connectivity",
          topics: [
            "Spanning Tree, EtherChannel, and ACL policies",
            "Routing protocols, static routes, and first-hop redundancy",
            "NTP, DHCP, NAT, and DNS services",
          ],
        },
        {
          title: "Security & Automation",
          topics: [
            "AAA, VPN fundamentals, and segmentation",
            "Cisco DNA Center basics and telemetry",
            "REST APIs, Python, and automation workflows",
          ],
        },
      ],
      "DevNet Associate": [
        {
          title: "Software Fundamentals",
          topics: [
            "Python, REST, JSON, and Git collaboration",
            "CI/CD concepts, unit testing, and container basics",
            "HTTP, authentication, and secure coding practices",
          ],
        },
        {
          title: "Cisco Platform Automation",
          topics: [
            "Automating Meraki, DNA Center, Webex, and IOS XE",
            "Model-driven programmability (YANG, NETCONF/RESTCONF)",
            "Telemetry, webhooks, and event-driven automation",
          ],
        },
      ],
      "CyberOps Associate": [
        {
          title: "Security Monitoring",
          topics: [
            "Network intrusion analysis and packet inspection",
            "SIEM workflows, log correlation, and baselining",
            "Hunting with MITRE ATT&CK and kill-chain mapping",
          ],
        },
        {
          title: "Incident Response & Automation",
          topics: [
            "Playbook creation, evidence handling, and reporting",
            "Threat intelligence enrichment and triage",
            "Automation scripts, APIs, and orchestration pipelines",
          ],
        },
      ],
      "350-401 ENCOR": [
        {
          title: "Architecture & Virtualization",
          topics: [
            "Enterprise campus design, SDA, and SD-WAN underlay",
            "Layer 2/3 virtualization, VXLAN, and LISP",
            "Wireless architecture, QoS, and multicast services",
          ],
        },
        {
          title: "Infrastructure & Assurance",
          topics: [
            "Advanced routing (EIGRP, OSPF, BGP) and policy control",
            "Network assurance, telemetry, and programmability",
            "Security services, automation, and infrastructure ops",
          ],
        },
      ],
      "300-410 ENARSI": [
        {
          title: "Advanced Routing",
          topics: [
            "EIGRP, OSPF, and BGP troubleshooting at scale",
            "Route redistribution, filtering, and path manipulation",
            "MPLS L3VPN and VPNv4 routing",
          ],
        },
        {
          title: "Infrastructure Services",
          topics: [
            "DMVPN, FlexVPN, and IPsec design/troubleshooting",
            "EEM, NetFlow, and SLA monitoring",
            "Route maps, policy-based routing, and QoS",
          ],
        },
      ],
      "300-415 ENSDWI": [
        {
          title: "SD-WAN Architecture",
          topics: [
            "vManage, vBond, vSmart roles and control-plane security",
            "Fabric bring-up, templates, and policies",
            "Transport independence, segmentation, and automation",
          ],
        },
        {
          title: "Operations & Optimization",
          topics: [
            "Application-aware routing and QoS",
            "Monitoring, troubleshooting, and upgrades",
            "Cloud onRamp, security, and integration patterns",
          ],
        },
      ],
      "300-420 ENSLD": [
        {
          title: "Design Methodologies",
          topics: [
            "Requirement gathering, gap analysis, and constraints",
            "Hierarchical campus, WAN, and data center design",
            "High availability, QoS, and security considerations",
          ],
        },
        {
          title: "Fabric & SD-WAN Design",
          topics: [
            "SDA roles, wireless integration, and policy design",
            "SD-WAN topology selection and segmentation",
            "Automation, assurance, and lifecycle tooling",
          ],
        },
      ],
      "300-425 ENWLSD": [
        {
          title: "Wireless Design",
          topics: [
            "RF planning, survey methodology, predictive modeling",
            "Controller and AP placement, redundancy, roaming",
            "Capacity planning for high-density deployments",
          ],
        },
        {
          title: "Advanced Services",
          topics: [
            "Location services, IoT, and mesh",
            "Security design (ISE, TrustSec, segmentation)",
            "Monitoring, optimization, and troubleshooting workflows",
          ],
        },
      ],
      "300-430 ENWLSI": [
        {
          title: "Wireless Implementations",
          topics: [
            "Multicast, QoS, and high-availability deployments",
            "FlexConnect, OfficeExtend, and remote branch design",
            "Advanced roaming, client profiling, and troubleshooting",
          ],
        },
        {
          title: "Security & Assurance",
          topics: [
            "ISE integration, TrustSec, and segmentation",
            "CleanAir, AVC, and spectrum optimization",
            "Monitoring, logging, and DNA Center assurance",
          ],
        },
      ],
      "300-435 ENAUTO": [
        {
          title: "Programmability Foundations",
          topics: [
            "Python, RESTCONF/NETCONF/YANG, and Git integration",
            "Automation frameworks (Ansible, Terraform, NSO)",
            "Telemetry (gRPC, model-driven streaming)",
          ],
        },
        {
          title: "Automating Enterprise Use Cases",
          topics: [
            "Automating SDA, SD-WAN, wireless, and campus devices",
            "CI/CD pipelines for network changes",
            "Compliance, validation, and rollback strategies",
          ],
        },
      ],
      "350-701 SCOR": [
        {
          title: "Security Architecture",
          topics: [
            "Zero-trust, segmentation, and secure network design",
            "Cloud, virtual, and endpoint security considerations",
            "Automation, telemetry, and analytics strategy",
          ],
        },
        {
          title: "Core Security Technologies",
          topics: [
            "Content security, network security, and secure access",
            "Visibility and enforcement (ISE, Stealthwatch, Umbrella)",
            "Security automation and programmability",
          ],
        },
      ],
      "300-710 SNCF": [
        {
          title: "Next-Gen Firewall",
          topics: [
            "Firepower Management Center policies and deployments",
            "Intrusion, malware, URL, and SSL/TLS inspection",
            "Performance tuning, clustering, and HA",
          ],
        },
        {
          title: "Operations & Automation",
          topics: [
            "Event correlation, dashboards, and troubleshooting",
            "FMC REST APIs, scripting, and automation hooks",
            "Integration with SIEM/SOAR ecosystems",
          ],
        },
      ],
      "300-715 SISE": [
        {
          title: "ISE Deployment",
          topics: [
            "ISE personas, scalability, and redundancy",
            "Policy sets, profiling, posture, and guest workflows",
            "Device administration (TACACS+) and pxGrid sharing",
          ],
        },
        {
          title: "Access Control & TrustSec",
          topics: [
            "802.1X, MAB, and onboarding design",
            "SGT propagation, TrustSec matrices, and SDA integration",
            "Monitoring, troubleshooting, and reporting",
          ],
        },
      ],
      "300-720 SESA": [
        {
          title: "Email Threat Defense",
          topics: [
            "ESA deployment, routing, and authentication",
            "Spam, phishing, malware, and outbreak filters",
            "Content filters, DLP, and encryption services",
          ],
        },
        {
          title: "Operations & Reporting",
          topics: [
            "Message tracking, logs, and troubleshooting",
            "AMP, Threat Grid, and Talos intelligence integration",
            "Centralized management with SMA",
          ],
        },
      ],
      "300-725 SWSA": [
        {
          title: "Secure Web Architecture",
          topics: [
            "WSA deployment modes and policy design",
            "HTTPS decryption, filtering, and malware defense",
            "Integration with Umbrella, AMP, and content controls",
          ],
        },
        {
          title: "Operations & Analytics",
          topics: [
            "Monitoring dashboards, troubleshooting, and logs",
            "Reporting, data retention, and compliance",
            "Automation via APIs and centralized management",
          ],
        },
      ],
      "300-730 SVPN": [
        {
          title: "Secure Remote Access",
          topics: [
            "Site-to-site and remote-access IPsec design",
            "FlexVPN, DMVPN, GETVPN, and SSL VPN solutions",
            "High availability, load balancing, and QoS",
          ],
        },
        {
          title: "Operations & Troubleshooting",
          topics: [
            "Verification, logging, and common failure domains",
            "Cert-based authentication and IKEv2 tuning",
            "Integration with ISE, Duo, and SD-WAN",
          ],
        },
      ],
      "300-735 SAUTO": [
        {
          title: "Security Programmability",
          topics: [
            "REST, gRPC, and NETCONF interfaces across security platforms",
            "Python/Ansible automation for FMC, ISE, Umbrella, SecureX",
            "Event-driven architecture and workflows",
          ],
        },
        {
          title: "DevSecOps Operations",
          topics: [
            "CI/CD integration, testing, and policy as code",
            "SOAR playbooks, pxGrid, and SecureX APIs",
            "Telemetry correlation and remediation pipelines",
          ],
        },
      ],
      "350-601 DCCOR": [
        {
          title: "Compute & Networking",
          topics: [
            "UCS architecture, HyperFlex, and compute policies",
            "NX-OS, OTV, VXLAN EVPN, and fabric interconnects",
            "Storage networking (FC, FCoE, iSCSI) fundamentals",
          ],
        },
        {
          title: "Automation & Security",
          topics: [
            "DC telemetry, programmability, and ACI/NX-OS APIs",
            "Security controls, segmentation, and monitoring",
            "Operations, maintenance, and disaster recovery",
          ],
        },
      ],
      "300-610 DCID": [
        {
          title: "Design Methodology",
          topics: [
            "Requirements, constraints, and risk assessment",
            "High availability, scaling, and performance considerations",
            "Multi-site, fabric, and hybrid cloud design patterns",
          ],
        },
        {
          title: "Compute & Storage Design",
          topics: [
            "UCS domain design, policies, and resource pools",
            "Storage connectivity, QoS, and data protection",
            "Security, automation, and lifecycle planning",
          ],
        },
      ],
      "300-615 DCIT": [
        {
          title: "Troubleshooting Methodologies",
          topics: [
            "Structured approach, logging, and telemetry usage",
            "Layer 2/3 troubleshooting on NX-OS",
            "UCS fabric, storage, and virtualization issues",
          ],
        },
        {
          title: "Automation & Tools",
          topics: [
            "Python/REST APIs for diagnostics",
            "DCNM/ACI troubleshooting utilities",
            "Escalation, documentation, and post-mortems",
          ],
        },
      ],
      "300-620 DCACI": [
        {
          title: "ACI Fabric Implementation",
          topics: [
            "APIC policies, tenants, VRFs, and contracts",
            "Spine/leaf provisioning, multi-site, and MST",
            "Integrating bare metal, virtual, and L4-7 services",
          ],
        },
        {
          title: "Operations & Automation",
          topics: [
            "Health scores, telemetry, and troubleshooting",
            "APIC REST API, Python, and Ansible playbooks",
            "Migration strategies and best practices",
          ],
        },
      ],
      "300-635 DCAUTO": [
        {
          title: "Programmability",
          topics: [
            "UCS Director, DCNM, and ACI APIs",
            "Automation tools (Ansible, Terraform, Python) for the data center",
            "Telemetry streaming and model-driven operations",
          ],
        },
        {
          title: "Use Case Automation",
          topics: [
            "Day-0/1 provisioning and compliance",
            "Service orchestration and approvals",
            "Change control, validation, and rollbacks",
          ],
        },
      ],
      "300-640 DCAI": [
        {
          title: "AI Infrastructure",
          topics: [
            "GPU-optimized architectures and NVIDIA integrations",
            "High-speed fabrics (RoCE, NVMe, Ethernet) for AI workloads",
            "Storage throughput, caching, and pipeline tuning",
          ],
        },
        {
          title: "Operations & MLOps",
          topics: [
            "Monitoring model training pipelines",
            "Security, data governance, and tenancy considerations",
            "Automation and resource scheduling for AI clusters",
          ],
        },
      ],
      "350-801 CLCOR": [
        {
          title: "Collaboration Infrastructure",
          topics: [
            "Cisco Unified CM, Expressway, Unity, and IM&P architecture",
            "QoS, media resources, and conferencing design",
            "Security, compliance, and hybrid solutions",
          ],
        },
        {
          title: "Automation & Troubleshooting",
          topics: [
            "APIs, xAPI, and scripting for collaboration platforms",
            "Monitoring, logging, and troubleshooting methodology",
            "Cloud/hybrid services (Webex, Webex Calling) integration",
          ],
        },
      ],
      "300-810 CLICA": [
        {
          title: "Applications & Messaging",
          topics: [
            "Unity features, voicemail, and auto-attendant design",
            "Jabber/Webex messaging, presence, and compliance",
            "Third-party app integration and APIs",
          ],
        },
        {
          title: "Automation & Monitoring",
          topics: [
            "Application troubleshooting, logs, and diagnostics",
            "Automation for provisioning and notifications",
            "High availability and disaster recovery planning",
          ],
        },
      ],
      "300-815 CLACCM": [
        {
          title: "Call Control & Mobility",
          topics: [
            "Device onboarding, dial plan design, and numbering",
            "Mobility features, roaming, and remote worker solutions",
            "SRST, SAF, and PSTN connectivity",
          ],
        },
        {
          title: "Policy & Security",
          topics: [
            "CAC, QoS, and media resource control",
            "Encrypted calling, certificates, and signaling security",
            "Troubleshooting using RTMT, traces, and logs",
          ],
        },
      ],
      "300-820 CLCEI": [
        {
          title: "Cloud & Edge Solutions",
          topics: [
            "Expressway series, MRA, and hybrid services",
            "Webex Edge Audio/Video, PSTN integration",
            "Edge security and policy enforcement",
          ],
        },
        {
          title: "Operations & Automation",
          topics: [
            "Monitoring, analytics, and proactive alerting",
            "API-driven provisioning and workflows",
            "Failover scenarios and change management",
          ],
        },
      ],
      "300-830 CLCCE": [
        {
          title: "Customer Experience Solutions",
          topics: [
            "Contact Center Enterprise architecture, routing, and scripting",
            "Outbound, mobile agent, and digital channel integration",
            "Reporting, analytics, and workforce optimization",
          ],
        },
      ],
    },
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
    courseTree: [
      {
        label: "AWS Certifications",
        description: "Amazon Web Services certification paths from foundational to expert level.",
        children: [
          {
            label: "Foundational",
            courses: [
              { name: "AWS Certified Cloud Practitioner", note: "Core" },
            ],
          },
          {
            label: "Associate Level",
            courses: [
              { name: "AWS Certified Solutions Architect - Associate", note: "Core" },
              { name: "AWS Certified Developer - Associate" },
              { name: "AWS Certified SysOps Administrator - Associate" },
            ],
          },
          {
            label: "Professional Level",
            courses: [
              { name: "AWS Certified Solutions Architect - Professional", note: "Core" },
              { name: "AWS Certified DevOps Engineer - Professional" },
            ],
          },
          {
            label: "Specialty Certifications",
            courses: [
              { name: "AWS Certified Security - Specialty" },
              { name: "AWS Certified Machine Learning - Specialty" },
              { name: "AWS Certified Advanced Networking - Specialty" },
              { name: "AWS Certified Data Analytics - Specialty" },
              { name: "AWS Certified Database - Specialty" },
              { name: "AWS Certified SAP on AWS - Specialty" },
            ],
          },
        ],
      },
      {
        label: "Microsoft Azure Certifications",
        description: "Microsoft Azure role-based certifications for cloud professionals.",
        children: [
          {
            label: "Fundamentals",
            courses: [
              { name: "Azure Fundamentals (AZ-900)", note: "Core" },
            ],
          },
          {
            label: "Administrator",
            courses: [
              { name: "Azure Administrator (AZ-104)", note: "Core" },
            ],
          },
          {
            label: "Developer",
            courses: [
              { name: "Azure Developer Associate (AZ-204)" },
            ],
          },
          {
            label: "Solutions Architect",
            courses: [
              { name: "Azure Solutions Architect Expert (AZ-305)", note: "Core" },
            ],
          },
          {
            label: "DevOps Engineer",
            courses: [
              { name: "Azure DevOps Engineer Expert (AZ-400)" },
            ],
          },
          {
            label: "Security Engineer",
            courses: [
              { name: "Azure Security Engineer Associate (AZ-500)" },
            ],
          },
          {
            label: "Specialty",
            courses: [
              { name: "Azure AI Engineer Associate (AI-102)" },
              { name: "Azure Data Engineer Associate (DP-203)" },
              { name: "Azure Network Engineer Associate (AZ-700)" },
              { name: "Azure Database Administrator Associate (DP-300)" },
            ],
          },
        ],
      },
      {
        label: "Google Cloud Certifications",
        description: "Google Cloud Platform certifications for cloud architects and engineers.",
        children: [
          {
            label: "Foundational",
            courses: [
              { name: "Google Cloud Digital Leader", note: "Core" },
            ],
          },
          {
            label: "Associate",
            courses: [
              { name: "Google Cloud Associate Cloud Engineer" },
            ],
          },
          {
            label: "Professional",
            courses: [
              { name: "Google Cloud Professional Cloud Architect", note: "Core" },
              { name: "Google Cloud Professional Cloud Developer" },
              { name: "Google Cloud Professional Cloud DevOps Engineer" },
              { name: "Google Cloud Professional Cloud Security Engineer" },
              { name: "Google Cloud Professional Cloud Network Engineer" },
              { name: "Google Cloud Professional Data Engineer" },
              { name: "Google Cloud Professional Machine Learning Engineer" },
              { name: "Google Cloud Professional Cloud Database Engineer" },
            ],
          },
        ],
      },
    ],
    courseDetails: {
      "AWS Solutions Architect": [
        {
          title: "Design for High Availability",
          topics: [
            "VPC architectures, subnets, and routing",
            "Elastic Load Balancing and Auto Scaling",
            "Hybrid connectivity (DX, VPN) and security controls",
          ],
        },
        {
          title: "Data & Application Services",
          topics: [
            "RDS, DynamoDB, Aurora design considerations",
            "S3 storage classes, Glacier, and lifecycle policies",
            "Serverless patterns with Lambda and API Gateway",
          ],
        },
        {
          title: "Operations & Automation",
          topics: [
            "CloudWatch metrics, logging, and tracing",
            "IaC with CloudFormation and CDK",
            "Cost optimization and Well-Architected reviews",
          ],
        },
      ],
      "Azure Administrator": [
        {
          title: "Manage Azure Identities & Governance",
          topics: [
            "Entra ID, conditional access, and RBAC",
            "Policy, Blueprints, and governance design",
            "Hybrid identity and synchronization",
          ],
        },
        {
          title: "Implement & Manage Storage",
          topics: [
            "Storage accounts, redundancy, and security",
            "Azure Files, Blob lifecycle, and backups",
            "Disaster recovery and site recovery plans",
          ],
        },
        {
          title: "Deploy & Manage Compute",
          topics: [
            "VM networking, availability sets, and scale sets",
            "AKS cluster deployment and monitoring",
            "Automation accounts, Desired State Configuration",
          ],
        },
      ],
      "Google Professional Cloud Architect": [
        {
          title: "Designing Reliable Infrastructure",
          topics: [
            "VPC, Shared VPC, and hybrid connectivity",
            "Load balancing, Cloud CDN, and Cloud Armor",
            "Identity, IAM, and resource hierarchy",
          ],
        },
        {
          title: "Data Processing & Storage",
          topics: [
            "Cloud SQL, Spanner, and Bigtable decisions",
            "BigQuery optimization and data governance",
            "Pub/Sub, Dataflow, and event-driven design",
          ],
        },
        {
          title: "Operations & Security",
          topics: [
            "Cloud Operations Suite monitoring and logging",
            "KMS, Secret Manager, and compliance controls",
            "Infrastructure automation with Terraform and Deployment Manager",
          ],
        },
      ],
    },
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
    courseTree: [
      {
        label: "EC-Council Certifications",
        description: "Ethical hacking and cybersecurity certifications from EC-Council.",
        children: [
          {
            label: "Entry Level",
            courses: [
              { name: "Certified Ethical Hacker (CEH)", note: "Core" },
              { name: "Certified Network Defender (CND)" },
            ],
          },
          {
            label: "Advanced",
            courses: [
              { name: "CEH Practical" },
              { name: "EC-Council Certified Security Analyst (ECSA)" },
              { name: "EC-Council Certified Incident Handler (ECIH)" },
            ],
          },
          {
            label: "Expert Level",
            courses: [
              { name: "EC-Council Certified Security Specialist (ECSS)" },
              { name: "EC-Council Certified Penetration Testing Professional (CPENT)" },
              { name: "Licensed Penetration Tester (LPT) Master" },
            ],
          },
        ],
      },
      {
        label: "CompTIA Security Certifications",
        description: "CompTIA security certification stack from foundational to advanced.",
        children: [
          {
            label: "Foundational",
            courses: [
              { name: "CompTIA Security+", note: "Core" },
              { name: "CompTIA Network+" },
              { name: "CompTIA CySA+" },
            ],
          },
          {
            label: "Advanced",
            courses: [
              { name: "CompTIA PenTest+" },
              { name: "CompTIA CASP+" },
            ],
          },
        ],
      },
      {
        label: "ISC2 Certifications",
        description: "International Information System Security Certification Consortium credentials.",
        children: [
          {
            label: "Associate",
            courses: [
              { name: "ISC2 Associate" },
            ],
          },
          {
            label: "Professional",
            courses: [
              { name: "Certified Information Systems Security Professional (CISSP)", note: "Core" },
              { name: "Certified Cloud Security Professional (CCSP)" },
              { name: "Certified Information Security Manager (CISM)" },
              { name: "Certified Authorization Professional (CAP)" },
            ],
          },
          {
            label: "Specialty",
            courses: [
              { name: "Certified Secure Software Lifecycle Professional (CSSLP)" },
              { name: "HealthCare Information Security and Privacy Practitioner (HCISPP)" },
              { name: "Systems Security Certified Practitioner (SSCP)" },
            ],
          },
        ],
      },
      {
        label: "SANS / GIAC Certifications",
        description: "Global Information Assurance Certification from SANS Institute.",
        children: [
          {
            label: "Foundational",
            courses: [
              { name: "GIAC Security Essentials (GSEC)" },
            ],
          },
          {
            label: "Specialized",
            courses: [
              { name: "GIAC Certified Incident Handler (GCIH)" },
              { name: "GIAC Penetration Tester (GPEN)" },
              { name: "GIAC Web Application Penetration Tester (GWAPT)" },
              { name: "GIAC Certified Forensic Analyst (GCFA)" },
            ],
          },
        ],
      },
    ],
    courseDetails: {
      CEH: [
        {
          title: "Reconnaissance & Weaponization",
          topics: [
            "Open-source intelligence and footprinting",
            "Vulnerability discovery and exploit frameworks",
            "Malware, payloads, and evasion techniques",
          ],
        },
        {
          title: "Exploitation & Post-Exploitation",
          topics: [
            "Network, web, and wireless attack vectors",
            "Privilege escalation and pivoting",
            "Covering tracks and reporting findings",
          ],
        },
      ],
      "CompTIA Security+": [
        {
          title: "Architecture & Design",
          topics: [
            "Enterprise security architecture patterns",
            "Cloud and virtualization security",
            "Authentication, authorization, and access control",
          ],
        },
        {
          title: "Operations & Incident Response",
          topics: [
            "Monitoring tools and SIEM integration",
            "Digital forensics process, evidence handling",
            "Playbooks for common attack scenarios",
          ],
        },
      ],
      CISM: [
        {
          title: "Governance & Risk",
          topics: [
            "Aligning security strategy to business objectives",
            "Enterprise risk assessments and treatment plans",
            "Policy frameworks and compliance requirements",
          ],
        },
        {
          title: "Program Development & Response",
          topics: [
            "Security program metrics and reporting",
            "Incident management lifecycle",
            "Third-party and supply-chain risk oversight",
          ],
        },
      ],
      CISSP: [
        {
          title: "Security & Risk Management",
          topics: [
            "Confidentiality, integrity, availability principles",
            "Security governance, compliance, and ethics",
            "Business continuity and disaster recovery",
          ],
        },
        {
          title: "Communication & Network Security",
          topics: [
            "Secure network architecture and segmentation",
            "Cryptography, PKI, and key management",
            "Zero-trust and emerging security models",
          ],
        },
      ],
    },
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
    courseTree: [
      {
        label: "Kubernetes Certifications",
        description: "Cloud Native Computing Foundation (CNCF) Kubernetes certifications.",
        children: [
          {
            label: "Kubernetes Administrator",
            courses: [
              { name: "Certified Kubernetes Administrator (CKA)", note: "Core" },
              { name: "Certified Kubernetes Application Developer (CKAD)" },
              { name: "Certified Kubernetes Security Specialist (CKS)" },
            ],
          },
        ],
      },
      {
        label: "HashiCorp Certifications",
        description: "Infrastructure automation and cloud certifications from HashiCorp.",
        children: [
          {
            label: "Associate Level",
            courses: [
              { name: "HashiCorp Certified: Terraform Associate", note: "Core" },
              { name: "HashiCorp Certified: Vault Associate" },
              { name: "HashiCorp Certified: Consul Associate" },
            ],
          },
        ],
      },
      {
        label: "Docker Certifications",
        description: "Container platform certifications from Docker.",
        children: [
          {
            label: "Docker Certifications",
            courses: [
              { name: "Docker Certified Associate (DCA)" },
            ],
          },
        ],
      },
      {
        label: "Red Hat Certifications",
        description: "OpenShift and Linux certifications from Red Hat.",
        children: [
          {
            label: "OpenShift",
            courses: [
              { name: "Red Hat Certified Specialist in OpenShift Administration" },
              { name: "Red Hat Certified Specialist in OpenShift Application Development" },
            ],
          },
          {
            label: "Linux & Automation",
            courses: [
              { name: "Red Hat Certified Engineer (RHCE)" },
              { name: "Red Hat Certified Specialist in Ansible Automation" },
            ],
          },
        ],
      },
      {
        label: "Microsoft DevOps",
        description: "Microsoft Azure DevOps and GitHub certifications.",
        children: [
          {
            label: "DevOps Engineer",
            courses: [
              { name: "Azure DevOps Engineer Expert (AZ-400)", note: "Core" },
            ],
          },
        ],
      },
      {
        label: "GitLab Certifications",
        description: "GitLab CI/CD and DevOps platform certifications.",
        children: [
          {
            label: "GitLab Certifications",
            courses: [
              { name: "GitLab Certified Associate" },
            ],
          },
        ],
      },
    ],
    courseDetails: {
      "Certified Kubernetes Administrator": [
        {
          title: "Cluster Architecture & Scheduling",
          topics: [
            "Control plane components and HA design",
            "Scheduling policies, taints, and tolerations",
            "Etcd maintenance and upgrades",
          ],
        },
        {
          title: "Networking, Services & Ingress",
          topics: [
            "CNI plugins, network policies, and service meshes",
            "Ingress controllers, TLS termination",
            "Load balancing strategies and troubleshooting",
          ],
        },
        {
          title: "Workloads & Security",
          topics: [
            "StatefulSets, DaemonSets, Jobs, and CronJobs",
            "RBAC, PodSecurityStandards, and secrets",
            "Backup/restore, disaster recovery plans",
          ],
        },
      ],
      "HashiCorp Terraform Associate": [
        {
          title: "IaC Fundamentals",
          topics: [
            "Providers, resources, and state management",
            "Workspaces, modules, and code organization",
            "CLI workflows and automation",
          ],
        },
        {
          title: "Security & Collaboration",
          topics: [
            "Secret handling, remote state backends",
            "Sentinel policies and governance",
            "Version control, pipelines, and testing",
          ],
        },
      ],
      "AZ-400 DevOps Engineer": [
        {
          title: "Plan & Implement DevOps Strategies",
          topics: [
            "Agile planning with Boards and Backlogs",
            "Quality gates and branch policies",
            "Observability and feedback loops",
          ],
        },
        {
          title: "Develop & Deliver Secure Apps",
          topics: [
            "Azure Repos/GitHub workflows",
            "CI/CD pipelines with YAML templates",
            "Security scanning, compliance, and release gates",
          ],
        },
        {
          title: "Operate with Monitoring & Automation",
          topics: [
            "Infrastructure as Code with Bicep/Terraform",
            "Azure Monitor, Log Analytics, and alerts",
            "ChatOps, runbooks, and incident response",
          ],
        },
      ],
    },
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
    courseDetails: {
      "Custom bootcamps": [
        {
          title: "Discovery & Design",
          topics: [
            "Skills inventory and stakeholder interviews",
            "Competency mapping to business OKRs",
            "Program charter, cadence, and delivery model",
          ],
        },
        {
          title: "Delivery & Enablement",
          topics: [
            "Instructor-led sessions + lab immersions",
            "Mentor office hours and assessments",
            "Adoption playbooks and field readiness",
          ],
        },
      ],
      "Leadership programs": [
        {
          title: "Strategic Leadership",
          topics: [
            "Executive communication and storytelling",
            "Change management and stakeholder alignment",
            "Data-driven decision frameworks",
          ],
        },
        {
          title: "Technology & Innovation",
          topics: [
            "Platform thinking and product mindset",
            "AI/cloud strategy and risk oversight",
            "Culture building for high-performing teams",
          ],
        },
      ],
      "Certification fast-tracks": [
        {
          title: "Assessment & Coaching",
          topics: [
            "Readiness diagnostics and study plans",
            "Mentor pairing and office hours",
            "Exam logistics, vouchers, and tracking",
          ],
        },
        {
          title: "Simulation & Review",
          topics: [
            "Scenario-based labs and graded assignments",
            "Mock exams with analytics",
            "Final readiness review and success playbook",
          ],
        },
      ],
    },
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

