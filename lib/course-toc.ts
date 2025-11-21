import type {
  CourseTableOfContents,
  TableOfContentsSection,
  ContentItem,
} from "./course-content";
import { serviceSlugs } from "./content";

// Generate placeholder content items for a topic
const createContentItems = (
  courseName: string,
  sectionId: string,
  topic: string
): ContentItem[] => [
  {
    id: `${courseName}-${sectionId}-${topic}-text`,
    title: `${topic} - Reading Material`,
    type: "text",
    placeholder: `Comprehensive text-based learning material covering ${topic}.`,
  },
  {
    id: `${courseName}-${sectionId}-${topic}-podcast`,
    title: `${topic} - Audio Podcast`,
    type: "podcast",
    duration: "15-20 min",
    placeholder: `Audio podcast episode discussing ${topic} in detail.`,
  },
  {
    id: `${courseName}-${sectionId}-${topic}-video`,
    title: `${topic} - Video Tutorial`,
    type: "video",
    duration: "20-30 min",
    placeholder: `Video tutorial with hands-on demonstrations of ${topic}.`,
  },
];

// Determine provider/OEM based on course name and service slug
const getProviderReferences = (
  courseName: string,
  serviceSlug?: string
): string[] => {
  const courseLower = courseName.toLowerCase();
  const examCodeMatch = courseName.match(/^\d{3}-\d{3}/);

  // Cisco courses
  if (
    serviceSlug === "cisco-training" ||
    courseLower.includes("ccna") ||
    courseLower.includes("ccnp") ||
    courseLower.includes("ccie") ||
    courseLower.includes("ccst") ||
    courseLower.includes("cct") ||
    courseLower.includes("devnet") ||
    courseLower.includes("cyberops") ||
    examCodeMatch
  ) {
    return [
      "Cisco Official Documentation",
      "Cisco Learning Network",
      examCodeMatch ? `Official ${examCodeMatch[0]} Exam Blueprint` : "Official Exam Blueprint",
      "Cisco Press Study Guides",
    ];
  }

  // AWS courses
  if (courseLower.includes("aws") || courseLower.includes("amazon")) {
    return [
      "AWS Official Documentation",
      "AWS Training and Certification",
      "AWS Well-Architected Framework",
      "AWS Whitepapers and Guides",
      "AWS Solutions Architect Official Study Guide",
    ];
  }

  // Azure courses
  if (courseLower.includes("azure") || courseLower.includes("az-")) {
    return [
      "Microsoft Learn Documentation",
      "Azure Architecture Center",
      "Azure Well-Architected Framework",
      "Microsoft Official Certification Study Guides",
      "Azure Documentation Portal",
    ];
  }

  // Google Cloud courses
  if (
    courseLower.includes("google cloud") ||
    courseLower.includes("gcp") ||
    courseLower.includes("gce")
  ) {
    return [
      "Google Cloud Documentation",
      "Google Cloud Training",
      "Google Cloud Architecture Center",
      "Google Cloud Professional Certification Guides",
      "Google Cloud Best Practices",
    ];
  }

  // Kubernetes courses
  if (
    courseLower.includes("kubernetes") ||
    courseLower.includes("k8s") ||
    courseLower.includes("cka")
  ) {
    return [
      "Kubernetes Official Documentation",
      "CNCF (Cloud Native Computing Foundation) Resources",
      "Kubernetes.io Learning Paths",
      "Certified Kubernetes Administrator (CKA) Study Guide",
      "Kubernetes Best Practices",
    ];
  }

  // HashiCorp Terraform
  if (courseLower.includes("terraform") || courseLower.includes("hashicorp")) {
    return [
      "HashiCorp Terraform Documentation",
      "HashiCorp Learn Platform",
      "Terraform Registry",
      "HashiCorp Official Certification Study Guide",
      "Terraform Best Practices",
    ];
  }

  // EC-Council (CEH)
  if (courseLower.includes("ceh") || courseLower.includes("ec-council")) {
    return [
      "EC-Council Official Courseware",
      "EC-Council Learning Platform",
      "CEH Official Study Guide",
      "EC-Council Knowledge Base",
      "CEH Exam Blueprint",
    ];
  }

  // CompTIA
  if (courseLower.includes("comptia") || courseLower.includes("security+")) {
    return [
      "CompTIA Official Study Materials",
      "CompTIA CertMaster Learning",
      "CompTIA Exam Objectives",
      "CompTIA Official Study Guides",
      "CompTIA Learning Resources",
    ];
  }

  // ISC2 (CISSP, CISM)
  if (
    courseLower.includes("cissp") ||
    courseLower.includes("cism") ||
    courseLower.includes("isc2")
  ) {
    return [
      "ISC2 Official Study Materials",
      "ISC2 Candidate Information Bulletin (CIB)",
      "ISC2 Official Study Guides",
      "ISC2 Learning Platform",
      "ISC2 Community and Resources",
    ];
  }

  // DevOps / General
  if (serviceSlug === "devops") {
    return [
      "Official Provider Documentation",
      "Industry Best Practices Guides",
      "Official Certification Study Materials",
      "Community Resources and Forums",
      "Hands-on Lab Platforms",
    ];
  }

  // Cybersecurity (general)
  if (serviceSlug === "cybersecurity") {
    return [
      "Official Certification Body Documentation",
      "Security Framework Documentation (NIST, ISO, etc.)",
      "Official Study Guides",
      "Security Community Resources",
      "Industry Best Practices",
    ];
  }

  // Corporate Training
  if (serviceSlug === "corporate-training") {
    return [
      "Custom Training Materials",
      "Industry Best Practices",
      "Relevant Certification Bodies",
      "Internal Documentation",
      "Stakeholder Resources",
    ];
  }

  // Default fallback
  return [
    "Official Provider Documentation",
    "Official Learning Platform",
    "Official Exam Blueprint",
    "Official Study Guides",
    "Community Resources",
  ];
};

// 300-720 SESA Detailed TOC (as per user's sample)
export const sesaTOC: CourseTableOfContents = {
  courseName: "300-720 SESA",
  examCode: "300-720",
  overview: {
    about:
      "Cisco 300-720 SESA is a concentration exam under CCNP Security. It validates your knowledge for securing email systems using Cisco Email Security Appliance (ESA).",
    skillsMeasured: [
      "Email security concepts and threats",
      "Configuring Cisco ESA for anti-spam, anti-virus, DLP",
      "Policies, content filters, message tracking, SMTP routing",
      "Email authentication (SPF, DKIM, DMARC)",
      "Encryption (Cisco IronPort)",
      "High availability and cluster configuration",
      "Troubleshooting ESA",
    ],
    targetAudience: [
      "Security Engineers",
      "Email Administrators",
      "Network Security Specialists",
    ],
  },
  sections: [
    {
      id: "exam-overview",
      title: "1. Exam Overview",
      subsections: [
        {
          id: "about-exam",
          title: "1.1 About the Exam",
          contentItems: createContentItems(
            "300-720 SESA",
            "about-exam",
            "Exam Overview and Purpose"
          ),
        },
        {
          id: "skills-measured",
          title: "1.2 Skills Measured",
          contentItems: createContentItems(
            "300-720 SESA",
            "skills-measured",
            "Skills and Competencies"
          ),
        },
        {
          id: "target-audience",
          title: "1.3 Target Audience",
          contentItems: createContentItems(
            "300-720 SESA",
            "target-audience",
            "Who Should Take This Exam"
          ),
        },
      ],
    },
    {
      id: "exam-objectives",
      title: "2. Exam Objectives (Full Breakdown)",
      subsections: [
        {
          id: "administration",
          title: "2.1 Administration and Management",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "administration",
              "ESA GUI and CLI Features"
            ),
            ...createContentItems(
              "300-720 SESA",
              "administration",
              "User Roles and Access Control"
            ),
            ...createContentItems(
              "300-720 SESA",
              "administration",
              "Command-line Basics"
            ),
          ],
        },
        {
          id: "spam-control",
          title: "2.2 Spam Control and Anti-Spam Techniques",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "spam-control",
              "SenderBase Reputation System (SBRS)"
            ),
            ...createContentItems(
              "300-720 SESA",
              "spam-control",
              "Anti-spam Filters"
            ),
            ...createContentItems(
              "300-720 SESA",
              "spam-control",
              "HAT (Host Access Table)"
            ),
            ...createContentItems(
              "300-720 SESA",
              "spam-control",
              "RAT (Recipient Access Table)"
            ),
            ...createContentItems(
              "300-720 SESA",
              "spam-control",
              "Mail Flow Policies"
            ),
          ],
        },
        {
          id: "message-filters",
          title: "2.3 Message Filters & Content Filters",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "message-filters",
              "Message Filtering Syntax"
            ),
            ...createContentItems(
              "300-720 SESA",
              "message-filters",
              "Content Filter Actions"
            ),
            ...createContentItems(
              "300-720 SESA",
              "message-filters",
              "DLP Configurations"
            ),
          ],
        },
        {
          id: "anti-virus",
          title: "2.4 Anti-Virus & Advanced Malware Protection (AMP)",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "anti-virus",
              "Sophos & McAfee Engines"
            ),
            ...createContentItems(
              "300-720 SESA",
              "anti-virus",
              "File Reputation and Analysis"
            ),
            ...createContentItems(
              "300-720 SESA",
              "anti-virus",
              "Graymail Safe Unsubscribe"
            ),
          ],
        },
        {
          id: "email-auth",
          title: "2.5 Email Authentication (SPF, DKIM, DMARC)",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "email-auth",
              "SPF Record Creation"
            ),
            ...createContentItems(
              "300-720 SESA",
              "email-auth",
              "DKIM Signing & Verification"
            ),
            ...createContentItems(
              "300-720 SESA",
              "email-auth",
              "DMARC Alignment Concepts"
            ),
            ...createContentItems(
              "300-720 SESA",
              "email-auth",
              "Bounce Verification"
            ),
          ],
        },
        {
          id: "encryption",
          title: "2.6 Encryption & Secure Email",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "encryption",
              "Cisco Registered Envelope Service (CRES)"
            ),
            ...createContentItems(
              "300-720 SESA",
              "encryption",
              "TLS Settings"
            ),
            ...createContentItems(
              "300-720 SESA",
              "encryption",
              "S/MIME"
            ),
          ],
        },
        {
          id: "smtp-routing",
          title: "2.7 SMTP Routing & Mail Policies",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "smtp-routing",
              "Mail Flow Pipeline"
            ),
            ...createContentItems(
              "300-720 SESA",
              "smtp-routing",
              "Routing Tables"
            ),
            ...createContentItems(
              "300-720 SESA",
              "smtp-routing",
              "Anti-spoofing Measures"
            ),
          ],
        },
        {
          id: "system-admin",
          title: "2.8 System Administration & Clustering",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "system-admin",
              "Backup & Restore"
            ),
            ...createContentItems(
              "300-720 SESA",
              "system-admin",
              "Cluster Modes and Settings"
            ),
            ...createContentItems(
              "300-720 SESA",
              "system-admin",
              "Log Subscriptions"
            ),
          ],
        },
        {
          id: "monitoring",
          title: "2.9 Monitoring and Troubleshooting",
          contentItems: [
            ...createContentItems(
              "300-720 SESA",
              "monitoring",
              "Message Tracking"
            ),
            ...createContentItems(
              "300-720 SESA",
              "monitoring",
              "Log Types"
            ),
            ...createContentItems(
              "300-720 SESA",
              "monitoring",
              "Troubleshooting Email Delivery"
            ),
          ],
        },
      ],
    },
    {
      id: "architecture",
      title: "3. Cisco ESA Architecture",
      contentItems: createContentItems(
        "300-720 SESA",
        "architecture",
        "ESA Architecture and Components"
      ),
    },
    {
      id: "deep-dive",
      title: "4. Deep-Dive Concepts",
      subsections: [
        {
          id: "hat",
          title: "4.1 Host Access Table (HAT)",
          contentItems: createContentItems(
            "300-720 SESA",
            "hat",
            "HAT Configuration and Management"
          ),
        },
        {
          id: "mail-flow",
          title: "4.2 Mail Flow Policies",
          contentItems: createContentItems(
            "300-720 SESA",
            "mail-flow",
            "Mail Flow Policy Configuration"
          ),
        },
        {
          id: "rat",
          title: "4.3 RAT (Recipient Access Table)",
          contentItems: createContentItems(
            "300-720 SESA",
            "rat",
            "RAT Configuration"
          ),
        },
        {
          id: "anti-spam-mech",
          title: "4.4 Anti-Spam Mechanisms",
          contentItems: createContentItems(
            "300-720 SESA",
            "anti-spam-mech",
            "Anti-Spam Technologies"
          ),
        },
        {
          id: "pipeline",
          title: "4.5 ESA Pipeline Flow",
          contentItems: createContentItems(
            "300-720 SESA",
            "pipeline",
            "Email Processing Pipeline"
          ),
        },
        {
          id: "outbreak",
          title: "4.6 Outbreak Filters",
          contentItems: createContentItems(
            "300-720 SESA",
            "outbreak",
            "Zero-hour Threat Protection"
          ),
        },
        {
          id: "dlp",
          title: "4.7 DLP (Data Loss Prevention)",
          contentItems: createContentItems(
            "300-720 SESA",
            "dlp",
            "DLP Policies and Configuration"
          ),
        },
        {
          id: "message-filters-detailed",
          title: "4.8 Message Filters",
          contentItems: createContentItems(
            "300-720 SESA",
            "message-filters-detailed",
            "Advanced Message Filtering"
          ),
        },
        {
          id: "encryption-policies",
          title: "4.9 Encryption Policies",
          contentItems: createContentItems(
            "300-720 SESA",
            "encryption-policies",
            "Email Encryption Configuration"
          ),
        },
      ],
    },
    {
      id: "configuration",
      title: "5. Configuration Guides",
      subsections: [
        {
          id: "hat-setup",
          title: "5.1 Setting Up HAT",
          contentItems: createContentItems(
            "300-720 SESA",
            "hat-setup",
            "HAT Configuration Steps"
          ),
        },
        {
          id: "rat-config",
          title: "5.2 RAT Configuration",
          contentItems: createContentItems(
            "300-720 SESA",
            "rat-config",
            "RAT Setup and Management"
          ),
        },
        {
          id: "spf-dkim-dmarc",
          title: "5.3 SPF / DKIM / DMARC Setup",
          contentItems: createContentItems(
            "300-720 SESA",
            "spf-dkim-dmarc",
            "Email Authentication Setup"
          ),
        },
        {
          id: "content-filters",
          title: "5.4 Content Filters",
          contentItems: createContentItems(
            "300-720 SESA",
            "content-filters",
            "Content Filter Configuration"
          ),
        },
        {
          id: "logging",
          title: "5.5 Logging & Monitoring",
          contentItems: createContentItems(
            "300-720 SESA",
            "logging",
            "Log Configuration and Monitoring"
          ),
        },
        {
          id: "ha",
          title: "5.6 High Availability",
          contentItems: createContentItems(
            "300-720 SESA",
            "ha",
            "HA and Clustering Setup"
          ),
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "6. Troubleshooting ESA",
      subsections: [
        {
          id: "tools",
          title: "6.1 Common Tools",
          contentItems: createContentItems(
            "300-720 SESA",
            "tools",
            "CLI Troubleshooting Commands"
          ),
        },
        {
          id: "message-tracking",
          title: "6.2 Message Tracking Analysis",
          contentItems: createContentItems(
            "300-720 SESA",
            "message-tracking",
            "Tracking and Analysis"
          ),
        },
        {
          id: "connectivity",
          title: "6.3 Connectivity Issues",
          contentItems: createContentItems(
            "300-720 SESA",
            "connectivity",
            "Network Troubleshooting"
          ),
        },
        {
          id: "auth-issues",
          title: "6.4 Authentication Issues (SPF/DKIM/DMARC)",
          contentItems: createContentItems(
            "300-720 SESA",
            "auth-issues",
            "Authentication Troubleshooting"
          ),
        },
      ],
    },
    {
      id: "practice",
      title: "7. Practice Questions",
      contentItems: createContentItems(
        "300-720 SESA",
        "practice",
        "Exam Practice Questions"
      ),
    },
    {
      id: "study-plan",
      title: "8. 30-Day Study Plan",
      contentItems: createContentItems(
        "300-720 SESA",
        "study-plan",
        "Structured Learning Path"
      ),
    },
    {
      id: "references",
      title: "9. References",
      contentItems: createContentItems(
        "300-720 SESA",
        "references",
        "Official Documentation and Resources"
      ),
    },
    {
      id: "recommendations",
      title: "10. Final Recommendations",
      contentItems: createContentItems(
        "300-720 SESA",
        "recommendations",
        "Exam Preparation Tips"
      ),
    },
  ],
  studyPlan: {
    weeks: 4,
    plan: [
      "Week 1 — Foundations: ESA basic architecture, HAT, RAT, Mail Flow, Anti-spam pipeline",
      "Week 2 — Security Controls: Anti-virus, AMP, Outbreak Filters, Content & Message Filters, DLP",
      "Week 3 — Authentication & Encryption: SPF, DKIM, DMARC, TLS & CRES",
      "Week 4 — Ops & Troubleshooting: Logs and message tracking, Clustering, Exam revision + practice tests",
    ],
  },
  references: [
    "Cisco Official Documentation",
    "Cisco IronPort ESA User Guides",
    "Cisco Learning Network",
    "CCNP Security Exam Blueprint",
  ],
};

// Generic TOC generator for other courses
export const generateGenericTOC = (
  courseName: string,
  examCode?: string,
  modules?: { title: string; topics: string[] }[],
  serviceSlug?: string
): CourseTableOfContents => {
  const sections: TableOfContentsSection[] = [
    {
      id: "exam-overview",
      title: "1. Exam Overview",
      subsections: [
        {
          id: "about-exam",
          title: "1.1 About the Exam",
          contentItems: createContentItems(
            courseName,
            "about-exam",
            "Exam Overview and Purpose"
          ),
        },
        {
          id: "skills-measured",
          title: "1.2 Skills Measured",
          contentItems: createContentItems(
            courseName,
            "skills-measured",
            "Skills and Competencies"
          ),
        },
        {
          id: "target-audience",
          title: "1.3 Target Audience",
          contentItems: createContentItems(
            courseName,
            "target-audience",
            "Who Should Take This Exam"
          ),
        },
      ],
    },
  ];

  // Add module-based sections with detailed breakdown
  if (modules && modules.length > 0) {
    let sectionNumber = 2;
    modules.forEach((module, moduleIndex) => {
      const moduleSection: TableOfContentsSection = {
        id: `module-${moduleIndex + 1}`,
        title: `${sectionNumber}. ${module.title}`,
        subsections: [
          // Overview subsection
          {
            id: `module-${moduleIndex + 1}-overview`,
            title: `${sectionNumber}.1 Overview`,
            contentItems: createContentItems(
              courseName,
              `module-${moduleIndex + 1}-overview`,
              `${module.title} Overview`
            ),
          },
          // Topic subsections
          ...module.topics.map((topic, topicIndex) => ({
            id: `module-${moduleIndex + 1}-topic-${topicIndex + 1}`,
            title: `${sectionNumber}.${topicIndex + 2} ${topic}`,
            contentItems: createContentItems(
              courseName,
              `module-${moduleIndex + 1}-topic-${topicIndex + 1}`,
              topic
            ),
          })),
          // Deep dive subsection
          {
            id: `module-${moduleIndex + 1}-deep-dive`,
            title: `${sectionNumber}.${module.topics.length + 2} Deep-Dive Concepts`,
            contentItems: createContentItems(
              courseName,
              `module-${moduleIndex + 1}-deep-dive`,
              `${module.title} Deep-Dive`
            ),
          },
          // Configuration subsection
          {
            id: `module-${moduleIndex + 1}-configuration`,
            title: `${sectionNumber}.${module.topics.length + 3} Configuration Guide`,
            contentItems: createContentItems(
              courseName,
              `module-${moduleIndex + 1}-configuration`,
              `${module.title} Configuration`
            ),
          },
          // Troubleshooting subsection
          {
            id: `module-${moduleIndex + 1}-troubleshooting`,
            title: `${sectionNumber}.${module.topics.length + 4} Troubleshooting`,
            contentItems: createContentItems(
              courseName,
              `module-${moduleIndex + 1}-troubleshooting`,
              `${module.title} Troubleshooting`
            ),
          },
        ],
      };
      sections.push(moduleSection);
      sectionNumber++;
    });
  } else {
    // Add generic sections if no modules provided
    sections.push(
      {
        id: "fundamentals",
        title: "2. Fundamentals",
        subsections: [
          {
            id: "fundamentals-overview",
            title: "2.1 Overview",
            contentItems: createContentItems(
              courseName,
              "fundamentals-overview",
              "Fundamentals Overview"
            ),
          },
          {
            id: "fundamentals-concepts",
            title: "2.2 Core Concepts",
            contentItems: createContentItems(
              courseName,
              "fundamentals-concepts",
              "Core Concepts"
            ),
          },
          {
            id: "fundamentals-practice",
            title: "2.3 Hands-on Practice",
            contentItems: createContentItems(
              courseName,
              "fundamentals-practice",
              "Hands-on Practice"
            ),
          },
        ],
      },
      {
        id: "advanced",
        title: "3. Advanced Topics",
        subsections: [
          {
            id: "advanced-overview",
            title: "3.1 Overview",
            contentItems: createContentItems(
              courseName,
              "advanced-overview",
              "Advanced Topics Overview"
            ),
          },
          {
            id: "advanced-concepts",
            title: "3.2 Advanced Concepts",
            contentItems: createContentItems(
              courseName,
              "advanced-concepts",
              "Advanced Concepts"
            ),
          },
          {
            id: "advanced-configuration",
            title: "3.3 Configuration",
            contentItems: createContentItems(
              courseName,
              "advanced-configuration",
              "Advanced Configuration"
            ),
          },
        ],
      },
      {
        id: "configuration",
        title: "4. Configuration Guides",
        contentItems: createContentItems(
          courseName,
          "configuration",
          "Configuration Guides"
        ),
      },
      {
        id: "troubleshooting",
        title: "5. Troubleshooting",
        contentItems: createContentItems(
          courseName,
          "troubleshooting",
          "Troubleshooting Techniques"
        ),
      }
    );
  }

  // Add architecture section if it's a technical course
  if (examCode || courseName.includes("CCNA") || courseName.includes("CCNP") || courseName.includes("CCIE")) {
    sections.push({
      id: "architecture",
      title: `${sections.length + 1}. Architecture & Design`,
      subsections: [
        {
          id: "architecture-overview",
          title: `${sections.length + 1}.1 Architecture Overview`,
          contentItems: createContentItems(
            courseName,
            "architecture-overview",
            "Architecture Overview"
          ),
        },
        {
          id: "architecture-components",
          title: `${sections.length + 1}.2 Components`,
          contentItems: createContentItems(
            courseName,
            "architecture-components",
            "Architecture Components"
          ),
        },
        {
          id: "architecture-design",
          title: `${sections.length + 1}.3 Design Principles`,
          contentItems: createContentItems(
            courseName,
            "architecture-design",
            "Design Principles"
          ),
        },
      ],
    });
  }

  // Add standard sections
  sections.push(
    {
      id: "practice",
      title: `${sections.length + 1}. Practice Questions`,
      subsections: [
        {
          id: "practice-basic",
          title: `${sections.length + 1}.1 Basic Questions`,
          contentItems: createContentItems(
            courseName,
            "practice-basic",
            "Basic Practice Questions"
          ),
        },
        {
          id: "practice-advanced",
          title: `${sections.length + 1}.2 Advanced Questions`,
          contentItems: createContentItems(
            courseName,
            "practice-advanced",
            "Advanced Practice Questions"
          ),
        },
        {
          id: "practice-exam",
          title: `${sections.length + 1}.3 Full-Length Practice Exam`,
          contentItems: createContentItems(
            courseName,
            "practice-exam",
            "Full-Length Practice Exam"
          ),
        },
      ],
    },
    {
      id: "study-plan",
      title: `${sections.length + 2}. Study Plan`,
      contentItems: createContentItems(
        courseName,
        "study-plan",
        "Structured Learning Path"
      ),
    },
    {
      id: "references",
      title: `${sections.length + 3}. References`,
      contentItems: createContentItems(
        courseName,
        "references",
        "Official Documentation and Resources"
      ),
    }
  );

  return {
    courseName,
    examCode,
    overview: {
      about: `Comprehensive training program for ${courseName}${examCode ? ` (${examCode})` : ""}. This document provides a full structured guide to learn, revise, and prepare for the exam. It includes exam overview, modules, concepts, diagrams (text-based), best practices, and an ideal study plan.`,
      skillsMeasured: modules
        ? modules.flatMap((m) => m.topics)
        : [
            "Core concepts and fundamentals",
            "Advanced configuration and troubleshooting",
            "Best practices and design principles",
          ],
      targetAudience: [
        "Network Engineers",
        "Security Professionals",
        "System Administrators",
        "IT Professionals seeking certification",
      ],
    },
    sections,
    studyPlan: {
      weeks: modules ? Math.max(4, Math.ceil(modules.length / 2)) : 4,
      plan: modules
        ? modules.map((module, index) => {
            const week = Math.floor(index / 2) + 1;
            return `Week ${week} — ${module.title}: ${module.topics.slice(0, 2).join(", ")}`;
          })
        : [
            "Week 1 — Foundations and Core Concepts",
            "Week 2 — Advanced Topics and Configuration",
            "Week 3 — Hands-on Practice and Labs",
            "Week 4 — Exam Revision and Practice Tests",
          ],
    },
    references: getProviderReferences(courseName, serviceSlug),
  };
};

// TOC mapping for all courses
export const courseTOCMap: Record<string, CourseTableOfContents> = {
  "300-720 SESA": sesaTOC,
};

// Get TOC for a course
export const getCourseTOC = (
  courseName: string,
  examCode?: string,
  modules?: { title: string; topics: string[] }[],
  serviceSlug?: string
): CourseTableOfContents => {
  // Check if we have a specific TOC
  if (courseTOCMap[courseName]) {
    return courseTOCMap[courseName];
  }

  // Generate generic TOC
  return generateGenericTOC(courseName, examCode, modules, serviceSlug);
};

