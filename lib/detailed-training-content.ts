/**
 * Detailed Training Content Library
 * 
 * Comprehensive, trainer-ready content for all certification courses.
 * Based on official provider documentation + 15+ years training expertise.
 * Structured for video scripts and podcast conversion.
 */

export type TrainingContent = {
  courseName: string;
  examCode?: string;
  module: string;
  topic: string;
  learningObjectives: string[];
  content: {
    introduction: string;
    detailedExplanation: string;
    keyConcepts: Array<{
      title: string;
      explanation: string;
      example: string;
      realWorldScenario: string;
    }>;
    bestPractices: string[];
    commonMistakes: Array<{
      mistake: string;
      impact: string;
      solution: string;
    }>;
    troubleshooting?: string[];
  };
  handsOnLab?: {
    title: string;
    objectives: string[];
    steps: string[];
    validation: string;
  };
  assessment: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
  videoScript: {
    hook: string;
    mainPoints: string[];
    conclusion: string;
  };
  podcastScript: {
    introduction: string;
    discussionPoints: string[];
    takeaways: string[];
  };
  references: string[];
};

// Detailed content examples - These will be expanded for all courses
export const detailedContentExamples: Record<string, TrainingContent> = {
  // CCNA - Network Fundamentals - TCP/IP and IPv4 Addressing
  "CCNA-NetworkFundamentals-TCPIP-IPv4": {
    courseName: "CCNA",
    examCode: "200-301",
    module: "Network Fundamentals",
    topic: "TCP/IP, IPv4/IPv6 addressing, subnetting",
    learningObjectives: [
      "Understand the TCP/IP protocol suite and its layers",
      "Master IPv4 addressing, subnet masks, and CIDR notation",
      "Calculate subnets efficiently for network design",
      "Differentiate between public and private IP addresses",
      "Understand IPv6 addressing and transition mechanisms",
    ],
    content: {
      introduction: `Welcome to Network Fundamentals. As someone who has trained thousands of network engineers over 15 years, I can tell you that mastering TCP/IP and IP addressing is the foundation of everything in networking. Whether you're troubleshooting connectivity issues or designing enterprise networks, these concepts are non-negotiable.

The TCP/IP model, developed in the 1970s, has become the de facto standard for network communication. Unlike the theoretical OSI model with its 7 layers, TCP/IP is practical and what we actually use in real-world networks. Today, we'll dive deep into IPv4 addressing, which despite IPv6's growth, still powers the majority of enterprise networks worldwide.`,

      detailedExplanation: `**TCP/IP Protocol Suite**

The TCP/IP model consists of four layers, each with specific responsibilities:

1. **Application Layer (Layer 4)**: This is where applications like HTTP, FTP, SMTP, and DNS operate. When you open a web browser, you're using HTTP at this layer. The application layer doesn't care about routing or physical transmission - it just needs to send data.

2. **Transport Layer (Layer 3)**: TCP and UDP operate here. TCP provides reliable, connection-oriented communication with error checking and flow control. Think of it as a registered mail service - you get confirmation of delivery. UDP, on the other hand, is like regular mail - faster but no delivery confirmation. Use TCP for web browsing, email, file transfers. Use UDP for video streaming, DNS queries, VoIP where speed matters more than perfect delivery.

3. **Internet Layer (Layer 2)**: IP (Internet Protocol) lives here. This is where routing decisions are made. IP is connectionless and unreliable by design - it just tries its best to deliver packets. If a packet gets lost, IP doesn't care - that's TCP's job to handle. This layer also includes ICMP (ping, traceroute), ARP (Address Resolution Protocol), and routing protocols.

4. **Network Access Layer (Layer 1)**: This combines the physical and data link layers. Ethernet, Wi-Fi, frame relay - all operate here. This is where bits become frames, and frames become electrical signals or light pulses.

**IPv4 Addressing Deep Dive**

An IPv4 address is a 32-bit number, typically represented in dotted decimal notation (e.g., 192.168.1.1). Each octet (the numbers between dots) represents 8 bits, so the range is 0-255 per octet.

The address has two parts:
- **Network portion**: Identifies which network the device belongs to
- **Host portion**: Identifies the specific device on that network

The subnet mask tells us where the network portion ends and the host portion begins. A /24 subnet mask (255.255.255.0) means the first 24 bits are the network, and the last 8 bits are for hosts. This gives us 256 addresses (0-255), but we can't use .0 (network address) or .255 (broadcast address), so we have 254 usable host addresses.

**Subnetting Mastery**

Subnetting is often the most challenging topic for new network engineers, but with the right approach, it becomes second nature. Here's my proven method:

1. **Identify the requirements**: How many subnets do you need? How many hosts per subnet?

2. **Calculate subnet bits**: If you need 8 subnets, you need 3 bits (2³ = 8). If you need 50 hosts, you need 6 host bits (2⁶ - 2 = 62 usable hosts).

3. **Determine the new subnet mask**: Original /24 (255.255.255.0) + 3 subnet bits = /27 (255.255.255.224)

4. **Calculate subnet ranges**: With /27, each subnet has 32 addresses. So if we start with 192.168.1.0/27:
   - Subnet 1: 192.168.1.0 - 192.168.1.31
   - Subnet 2: 192.168.1.32 - 192.168.1.63
   - And so on...

**Private vs Public IP Addresses**

RFC 1918 defines private IP ranges that are not routable on the internet:
- 10.0.0.0/8 (10.0.0.0 to 10.255.255.255) - 16.7 million addresses
- 172.16.0.0/12 (172.16.0.0 to 172.31.255.255) - 1 million addresses
- 192.168.0.0/16 (192.168.0.0 to 192.168.255.255) - 65,536 addresses

These are free to use internally. When devices with private IPs need internet access, NAT (Network Address Translation) converts them to public IPs. This is why your home router might show 192.168.1.100, but when you visit whatismyip.com, you see a different public IP.`,

      keyConcepts: [
        {
          title: "CIDR Notation",
          explanation: "Classless Inter-Domain Routing (CIDR) notation combines an IP address with its subnet mask in a compact format. Instead of writing 192.168.1.0 with subnet mask 255.255.255.0, we write 192.168.1.0/24. The /24 indicates that the first 24 bits are the network portion.",
          example: "192.168.1.0/24 means: Network = 192.168.1.0, Subnet mask = 255.255.255.0, Usable hosts = 192.168.1.1 to 192.168.1.254",
          realWorldScenario: "In a corporate network, you might allocate 192.168.1.0/24 for the main office, 192.168.2.0/24 for a branch office, and 192.168.3.0/24 for guest Wi-Fi. This provides clear segmentation and makes routing tables cleaner.",
        },
        {
          title: "Variable Length Subnet Masking (VLSM)",
          explanation: "VLSM allows you to use different subnet masks for different subnets within the same network. This maximizes address space efficiency. Instead of wasting addresses by using the same mask everywhere, you can allocate exactly what each subnet needs.",
          example: "Main office needs 200 hosts → /24 (192.168.1.0/24). Branch office needs 50 hosts → /26 (192.168.2.0/26). Point-to-point links need 2 hosts → /30 (192.168.2.64/30).",
          realWorldScenario: "A company with headquarters (200 users), 5 branch offices (50 users each), and 10 point-to-point WAN links can efficiently use a single 192.168.0.0/16 block using VLSM, rather than wasting addresses with fixed-size subnets.",
        },
        {
          title: "IPv6 Fundamentals",
          explanation: "IPv6 uses 128-bit addresses (vs IPv4's 32 bits), providing 340 undecillion addresses. Written in hexadecimal, grouped in 8 sets of 4 hex digits, separated by colons. Leading zeros can be omitted, and consecutive groups of zeros can be represented as :: (but only once per address).",
          example: "2001:0db8:0000:0000:0000:ff00:0042:8329 can be written as 2001:db8::ff00:42:8329",
          realWorldScenario: "As IPv4 addresses become scarce, enterprises are adopting IPv6. Many networks run dual-stack (both IPv4 and IPv6) during transition. Understanding IPv6 is essential for modern network engineers, especially in cloud and service provider environments.",
        },
      ],

      bestPractices: [
        "Always document your IP addressing scheme. Create a spreadsheet or use IPAM (IP Address Management) tools. Future you (and your team) will thank you.",
        "Plan for growth. Don't allocate all your address space immediately. Leave room for expansion - I recommend using only 70% of available space initially.",
        "Use consistent subnet sizes where possible. While VLSM is powerful, having too many different mask sizes makes troubleshooting harder.",
        "Reserve IP addresses for infrastructure: routers, switches, firewalls, servers. Use a consistent range (like .1-.10) across all subnets.",
        "Implement IP address management tools early. As networks grow, manual tracking becomes impossible. Tools like NetBox, phpIPAM, or Infoblox save countless hours.",
        "Use private IP ranges (RFC 1918) for internal networks. Never use public IP ranges internally - it causes routing issues and security problems.",
        "When subnetting, always account for network and broadcast addresses. A /24 gives you 256 addresses, but only 254 are usable for hosts.",
      ],

      commonMistakes: [
        {
          mistake: "Forgetting that the first and last addresses in a subnet are reserved",
          impact: "Trying to assign .0 or .255 addresses to hosts causes connectivity failures. This is a fundamental misunderstanding that leads to 'mysterious' network issues.",
          solution: "Always remember: Network address (.0) identifies the subnet, Broadcast address (.255 in /24) is for all hosts. Usable range is always .1 to .254 in a /24.",
        },
        {
          mistake: "Using public IP ranges for internal networks",
          impact: "Devices can't reach legitimate internet resources if those IPs are used internally. Also creates routing confusion and potential security issues.",
          solution: "Strictly use RFC 1918 private ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) for internal networks. Use NAT for internet access.",
        },
        {
          mistake: "Not planning for future growth",
          impact: "Running out of IP addresses requires re-addressing, which means downtime, reconfiguration of all devices, and potential service interruptions.",
          solution: "Always allocate with 30% headroom. If you need 100 addresses, allocate a /25 (126 usable) not a /25 that's exactly 100.",
        },
        {
          mistake: "Incorrect subnet mask calculations",
          impact: "Devices can't communicate properly, routing fails, and troubleshooting becomes extremely difficult.",
          solution: "Practice subnetting regularly. Use the 'powers of 2' method: /24 = 256 addresses, /25 = 128, /26 = 64, /27 = 32, /28 = 16, /29 = 8, /30 = 4.",
        },
      ],

      troubleshooting: [
        "If devices can't ping each other, first check if they're on the same subnet. Compare IP addresses and subnet masks.",
        "Use 'ipconfig' (Windows) or 'ifconfig' (Linux/Mac) to verify IP configuration. Look for incorrect subnet masks.",
        "Test connectivity with ping, then traceroute to see where packets are being dropped.",
        "Verify default gateway is in the same subnet as the device. A common mistake is gateway in wrong subnet.",
        "Check for IP address conflicts using 'arp -a' or network scanning tools.",
        "Verify routing tables on routers - incorrect routes cause packets to go to wrong destinations.",
      ],
    },

    handsOnLab: {
      title: "Subnetting Practice Lab: Designing a Corporate Network",
      objectives: [
        "Calculate subnets for different departments",
        "Configure devices with appropriate IP addresses",
        "Verify connectivity between subnets",
        "Document the IP addressing scheme",
      ],
      steps: [
        "You're given 192.168.0.0/16. Design subnets for: IT Department (100 hosts), Sales (50 hosts), HR (25 hosts), Guest Wi-Fi (200 hosts), Server Farm (30 hosts), Point-to-point links (2 hosts each, 5 links).",
        "Calculate the subnet masks and address ranges for each requirement using VLSM.",
        "Configure a router with sub-interfaces for each subnet (or use Packet Tracer/GNS3).",
        "Assign IP addresses to test devices in each subnet.",
        "Verify connectivity: ping within subnet, ping default gateway, ping between subnets.",
        "Document your addressing scheme in a table showing: Subnet name, Network address, Subnet mask, Usable range, Default gateway, Broadcast address.",
      ],
      validation: "All devices should be able to ping their default gateway. Devices in different subnets should be able to communicate through the router. Verify no IP conflicts exist.",
    },

    assessment: [
      {
        question: "What is the usable host range for the subnet 192.168.10.0/27?",
        options: [
          "192.168.10.0 - 192.168.10.31",
          "192.168.10.1 - 192.168.10.30",
          "192.168.10.1 - 192.168.10.31",
          "192.168.10.0 - 192.168.10.30",
        ],
        correct: 1,
        explanation: "A /27 subnet provides 32 addresses (2⁵). The network address is 192.168.10.0, broadcast is 192.168.10.31. Usable hosts are 192.168.10.1 through 192.168.10.30 (30 hosts).",
      },
      {
        question: "Which of the following is a valid private IP address range according to RFC 1918?",
        options: [
          "172.15.0.0/16",
          "192.169.0.0/16",
          "10.0.0.0/8",
          "172.32.0.0/16",
        ],
        correct: 2,
        explanation: "RFC 1918 defines three private IP ranges: 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0 to 172.31.255.255), and 192.168.0.0/16. 172.15.0.0 and 172.32.0.0 are public ranges, and 192.169.0.0 is also public.",
      },
      {
        question: "How many subnets can you create from 192.168.1.0/24 if you use a /28 mask?",
        options: ["8", "16", "24", "32"],
        correct: 1,
        explanation: "Original /24 has 8 host bits. /28 uses 4 host bits, leaving 4 bits for subnetting. 2⁴ = 16 subnets. Each subnet will have 16 addresses (2⁴), with 14 usable hosts.",
      },
    ],

    videoScript: {
      hook: "Have you ever wondered why your computer has an IP address like 192.168.1.100, but when you check your public IP online, it's completely different? Today, we're diving deep into TCP/IP and IP addressing - the foundation of all networking.",
      mainPoints: [
        "TCP/IP model has 4 practical layers vs OSI's 7 theoretical layers",
        "IPv4 addresses are 32-bit numbers, but we write them in dotted decimal for readability",
        "Subnet masks tell us which part is network and which is host",
        "Subnetting allows us to break large networks into smaller, manageable pieces",
        "Private IP ranges (RFC 1918) are free to use internally, but need NAT for internet access",
      ],
      conclusion: "Mastering IP addressing and subnetting is like learning the alphabet before reading. Practice regularly, use real scenarios, and remember: the network portion identifies WHERE, the host portion identifies WHO. Next, we'll explore routing protocols that use these addresses to move data across networks.",
    },

    podcastScript: {
      introduction: "Today we're talking about something that every network engineer needs to master: TCP/IP and IP addressing. I've been teaching this for over 15 years, and I can tell you - once you truly understand these concepts, everything else in networking clicks into place.",
      discussionPoints: [
        "Why TCP/IP won over OSI - practical vs theoretical",
        "The evolution of IP addressing from classful to classless (CIDR)",
        "Real-world subnetting scenarios: when to use /24, /26, /30",
        "Common mistakes I see in enterprise networks and how to avoid them",
        "IPv6 transition strategies - are we there yet?",
        "NAT and why it's both a blessing and a curse",
      ],
      takeaways: [
        "Always document your IP scheme - future you will thank present you",
        "Plan for 30% growth - networks always expand",
        "Use IPAM tools - manual tracking doesn't scale",
        "Practice subnetting daily until it's second nature",
        "Understand WHY, not just HOW - it makes troubleshooting easier",
      ],
    },

    references: [
      "Cisco CCNA 200-301 Official Cert Guide, Volume 1 - Chapter 13-15",
      "RFC 791 - Internet Protocol (IPv4 specification)",
      "RFC 1918 - Address Allocation for Private Internets",
      "RFC 4632 - Classless Inter-Domain Routing (CIDR)",
      "Cisco Learning Network - IP Addressing and Subnetting",
      "Packet Tracer Labs - Subnetting Scenarios",
    ],
  },
};

// Function to get content for a course topic
export const getDetailedContent = (
  courseName: string,
  module: string,
  topic: string
): TrainingContent | null => {
  const key = `${courseName}-${module}-${topic}`.replace(/\s+/g, "");
  return detailedContentExamples[key] || null;
};

// This file will be expanded with content for all courses and topics
// The structure above serves as the template for all training materials

