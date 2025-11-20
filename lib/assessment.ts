export type AssessmentQuestion = {
  id: string;
  question: string;
  options: { label: string; value: string }[];
  answer: string;
  domain: string;
};

// CCNA Question Bank
const ccnaQuestions: AssessmentQuestion[] = [
  {
    id: "ccna-1",
    question: "What is the default administrative distance of OSPF?",
    options: [
      { label: "90", value: "90" },
      { label: "110", value: "110" },
      { label: "120", value: "120" },
      { label: "130", value: "130" },
    ],
    answer: "110",
    domain: "Routing Protocols",
  },
  {
    id: "ccna-2",
    question: "Which protocol operates at the transport layer and provides reliable data delivery?",
    options: [
      { label: "IP", value: "ip" },
      { label: "TCP", value: "tcp" },
      { label: "UDP", value: "udp" },
      { label: "ICMP", value: "icmp" },
    ],
    answer: "TCP",
    domain: "Network Fundamentals",
  },
  {
    id: "ccna-3",
    question: "What is the purpose of ARP in a network?",
    options: [
      { label: "To resolve MAC addresses to IP addresses", value: "mac-to-ip" },
      { label: "To resolve IP addresses to MAC addresses", value: "ip-to-mac" },
      { label: "To resolve domain names to IP addresses", value: "dns" },
      { label: "To resolve IP addresses to domain names", value: "reverse-dns" },
    ],
    answer: "ip-to-mac",
    domain: "Network Fundamentals",
  },
  {
    id: "ccna-4",
    question: "Which VLAN is the default native VLAN on a Cisco switch?",
    options: [
      { label: "VLAN 0", value: "0" },
      { label: "VLAN 1", value: "1" },
      { label: "VLAN 100", value: "100" },
      { label: "VLAN 4094", value: "4094" },
    ],
    answer: "1",
    domain: "Switching",
  },
  {
    id: "ccna-5",
    question: "What is the subnet mask for a /24 network?",
    options: [
      { label: "255.255.255.0", value: "255.255.255.0" },
      { label: "255.255.0.0", value: "255.255.0.0" },
      { label: "255.0.0.0", value: "255.0.0.0" },
      { label: "255.255.255.128", value: "255.255.255.128" },
    ],
    answer: "255.255.255.0",
    domain: "IP Addressing",
  },
  {
    id: "ccna-6",
    question: "Which command is used to view the routing table on a Cisco router?",
    options: [
      { label: "show ip route", value: "show-ip-route" },
      { label: "show route", value: "show-route" },
      { label: "display ip route", value: "display-ip-route" },
      { label: "route print", value: "route-print" },
    ],
    answer: "show-ip-route",
    domain: "Router Configuration",
  },
  {
    id: "ccna-7",
    question: "What is the purpose of STP (Spanning Tree Protocol)?",
    options: [
      { label: "To prevent routing loops", value: "routing-loops" },
      { label: "To prevent switching loops", value: "switching-loops" },
      { label: "To encrypt network traffic", value: "encryption" },
      { label: "To authenticate users", value: "authentication" },
    ],
    answer: "switching-loops",
    domain: "Switching",
  },
  {
    id: "ccna-8",
    question: "Which port state does a switch port enter after STP convergence?",
    options: [
      { label: "Blocking", value: "blocking" },
      { label: "Listening", value: "listening" },
      { label: "Learning", value: "learning" },
      { label: "Forwarding", value: "forwarding" },
    ],
    answer: "forwarding",
    domain: "Switching",
  },
  {
    id: "ccna-9",
    question: "What is the maximum number of hosts in a /26 subnet?",
    options: [
      { label: "30", value: "30" },
      { label: "62", value: "62" },
      { label: "126", value: "126" },
      { label: "254", value: "254" },
    ],
    answer: "62",
    domain: "IP Addressing",
  },
  {
    id: "ccna-10",
    question: "Which protocol is used for automatic IP address assignment?",
    options: [
      { label: "DNS", value: "dns" },
      { label: "DHCP", value: "dhcp" },
      { label: "SNMP", value: "snmp" },
      { label: "FTP", value: "ftp" },
    ],
    answer: "dhcp",
    domain: "Network Services",
  },
];

// DevNet Associate Question Bank
const devnetAssociateQuestions: AssessmentQuestion[] = [
  {
    id: "devnet-1",
    question: "Which HTTP method is typically used to retrieve data from a REST API?",
    options: [
      { label: "POST", value: "post" },
      { label: "GET", value: "get" },
      { label: "PUT", value: "put" },
      { label: "DELETE", value: "delete" },
    ],
    answer: "get",
    domain: "REST APIs",
  },
  {
    id: "devnet-2",
    question: "What is the primary purpose of YANG in network automation?",
    options: [
      { label: "Data serialization format", value: "serialization" },
      { label: "Data modeling language", value: "modeling" },
      { label: "Protocol for device communication", value: "protocol" },
      { label: "Encryption algorithm", value: "encryption" },
    ],
    answer: "modeling",
    domain: "Network Programmability",
  },
  {
    id: "devnet-3",
    question: "Which protocol is used for model-driven programmability on network devices?",
    options: [
      { label: "SNMP", value: "snmp" },
      { label: "NETCONF", value: "netconf" },
      { label: "Telnet", value: "telnet" },
      { label: "FTP", value: "ftp" },
    ],
    answer: "netconf",
    domain: "Network Programmability",
  },
  {
    id: "devnet-4",
    question: "What is the purpose of JSON in API communication?",
    options: [
      { label: "Data encryption", value: "encryption" },
      { label: "Data serialization", value: "serialization" },
      { label: "Authentication", value: "authentication" },
      { label: "Routing", value: "routing" },
    ],
    answer: "serialization",
    domain: "Data Formats",
  },
  {
    id: "devnet-5",
    question: "Which Python library is commonly used for making HTTP requests?",
    options: [
      { label: "os", value: "os" },
      { label: "requests", value: "requests" },
      { label: "sys", value: "sys" },
      { label: "json", value: "json" },
    ],
    answer: "requests",
    domain: "Python Programming",
  },
  {
    id: "devnet-6",
    question: "What does REST stand for?",
    options: [
      { label: "Remote Execution System Technology", value: "remote-exec" },
      { label: "Representational State Transfer", value: "rest" },
      { label: "Resource Exchange Service Transport", value: "resource-exchange" },
      { label: "Reliable Ethernet Service Transport", value: "reliable-ethernet" },
    ],
    answer: "rest",
    domain: "API Concepts",
  },
  {
    id: "devnet-7",
    question: "Which tool is used for testing REST APIs?",
    options: [
      { label: "Postman", value: "postman" },
      { label: "Wireshark", value: "wireshark" },
      { label: "GNS3", value: "gns3" },
      { label: "PuTTY", value: "putty" },
    ],
    answer: "postman",
    domain: "API Testing",
  },
  {
    id: "devnet-8",
    question: "What is the purpose of Git in network automation workflows?",
    options: [
      { label: "Version control", value: "version-control" },
      { label: "Network monitoring", value: "monitoring" },
      { label: "Device configuration", value: "config" },
      { label: "Traffic analysis", value: "analysis" },
    ],
    answer: "version-control",
    domain: "DevOps Practices",
  },
  {
    id: "devnet-9",
    question: "Which data format is commonly used with REST APIs?",
    options: [
      { label: "XML", value: "xml" },
      { label: "JSON", value: "json" },
      { label: "YAML", value: "yaml" },
      { label: "CSV", value: "csv" },
    ],
    answer: "json",
    domain: "Data Formats",
  },
  {
    id: "devnet-10",
    question: "What is the primary benefit of using Ansible for network automation?",
    options: [
      { label: "Agent-based architecture", value: "agent-based" },
      { label: "Agentless automation", value: "agentless" },
      { label: "Real-time monitoring", value: "monitoring" },
      { label: "Traffic encryption", value: "encryption" },
    ],
    answer: "agentless",
    domain: "Automation Tools",
  },
];

// CyberOps Associate Question Bank
const cyberopsQuestions: AssessmentQuestion[] = [
  {
    id: "cyberops-1",
    question: "What is the primary function of a SIEM system?",
    options: [
      { label: "Network routing", value: "routing" },
      { label: "Security event correlation and analysis", value: "siem" },
      { label: "Email filtering", value: "email" },
      { label: "Web content filtering", value: "web" },
    ],
    answer: "siem",
    domain: "Security Operations",
  },
  {
    id: "cyberops-2",
    question: "Which protocol is commonly used for log collection in security operations?",
    options: [
      { label: "HTTP", value: "http" },
      { label: "Syslog", value: "syslog" },
      { label: "FTP", value: "ftp" },
      { label: "SMTP", value: "smtp" },
    ],
    answer: "syslog",
    domain: "Log Management",
  },
  {
    id: "cyberops-3",
    question: "What does IDS stand for?",
    options: [
      { label: "Intrusion Detection System", value: "ids" },
      { label: "Internet Data Service", value: "internet-data" },
      { label: "Internal Defense System", value: "internal-defense" },
      { label: "Integrated Data Storage", value: "data-storage" },
    ],
    answer: "ids",
    domain: "Security Concepts",
  },
  {
    id: "cyberops-4",
    question: "Which type of attack involves overwhelming a target with traffic?",
    options: [
      { label: "Phishing", value: "phishing" },
      { label: "DDoS", value: "ddos" },
      { label: "SQL Injection", value: "sql-injection" },
      { label: "Man-in-the-Middle", value: "mitm" },
    ],
    answer: "ddos",
    domain: "Threat Analysis",
  },
  {
    id: "cyberops-5",
    question: "What is the purpose of a firewall in network security?",
    options: [
      { label: "To encrypt traffic", value: "encrypt" },
      { label: "To filter and control network traffic", value: "filter" },
      { label: "To authenticate users", value: "authenticate" },
      { label: "To store logs", value: "store-logs" },
    ],
    answer: "filter",
    domain: "Network Security",
  },
  {
    id: "cyberops-6",
    question: "Which tool is commonly used for packet analysis in security investigations?",
    options: [
      { label: "Wireshark", value: "wireshark" },
      { label: "Nmap", value: "nmap" },
      { label: "Metasploit", value: "metasploit" },
      { label: "Burp Suite", value: "burp" },
    ],
    answer: "wireshark",
    domain: "Security Tools",
  },
  {
    id: "cyberops-7",
    question: "What is the difference between a false positive and a false negative in security monitoring?",
    options: [
      { label: "False positive: legitimate activity flagged as threat; False negative: threat missed", value: "correct" },
      { label: "False positive: threat missed; False negative: legitimate activity flagged", value: "incorrect-1" },
      { label: "Both mean the same thing", value: "incorrect-2" },
      { label: "False positive: encryption failure; False negative: decryption failure", value: "incorrect-3" },
    ],
    answer: "correct",
    domain: "Security Analysis",
  },
  {
    id: "cyberops-8",
    question: "Which security framework focuses on incident response lifecycle?",
    options: [
      { label: "NIST Cybersecurity Framework", value: "nist" },
      { label: "ISO 27001", value: "iso" },
      { label: "PCI DSS", value: "pci" },
      { label: "HIPAA", value: "hipaa" },
    ],
    answer: "nist",
    domain: "Security Frameworks",
  },
  {
    id: "cyberops-9",
    question: "What is the purpose of network segmentation in security?",
    options: [
      { label: "To increase network speed", value: "speed" },
      { label: "To limit the spread of threats", value: "limit-threats" },
      { label: "To reduce bandwidth usage", value: "bandwidth" },
      { label: "To simplify network management", value: "simplify" },
    ],
    answer: "limit-threats",
    domain: "Network Security",
  },
  {
    id: "cyberops-10",
    question: "Which protocol is used for secure remote access?",
    options: [
      { label: "Telnet", value: "telnet" },
      { label: "SSH", value: "ssh" },
      { label: "HTTP", value: "http" },
      { label: "FTP", value: "ftp" },
    ],
    answer: "ssh",
    domain: "Secure Access",
  },
];

// CCNP Enterprise ENCOR (350-401) Question Bank
const encorQuestions: AssessmentQuestion[] = [
  {
    id: "encor-1",
    question: "Which protocol is used for SD-Access control plane communication?",
    options: [
      { label: "LISP", value: "lisp" },
      { label: "BGP", value: "bgp" },
      { label: "OSPF", value: "ospf" },
      { label: "EIGRP", value: "eigrp" },
    ],
    answer: "lisp",
    domain: "SD-Access",
  },
  {
    id: "encor-2",
    question: "What is the primary function of DNA Center in SD-Access?",
    options: [
      { label: "Data forwarding", value: "forwarding" },
      { label: "Policy and automation controller", value: "controller" },
      { label: "Routing protocol", value: "routing" },
      { label: "Security enforcement", value: "security" },
    ],
    answer: "controller",
    domain: "SD-Access",
  },
  {
    id: "encor-3",
    question: "Which technology enables end-to-end segmentation in SD-Access?",
    options: [
      { label: "VLANs", value: "vlans" },
      { label: "TrustSec (SGT)", value: "sgt" },
      { label: "ACLs", value: "acls" },
      { label: "VRF", value: "vrf" },
    ],
    answer: "sgt",
    domain: "Security Segmentation",
  },
  {
    id: "encor-4",
    question: "What is the control plane component in Cisco SD-WAN?",
    options: [
      { label: "vEdge", value: "vedge" },
      { label: "vSmart", value: "vsmart" },
      { label: "vBond", value: "vbond" },
      { label: "vManage", value: "vmanage" },
    ],
    answer: "vsmart",
    domain: "SD-WAN",
  },
  {
    id: "encor-5",
    question: "Which protocol is used for overlay network establishment in SD-WAN?",
    options: [
      { label: "IPsec", value: "ipsec" },
      { label: "GRE", value: "gre" },
      { label: "DTLS", value: "dtls" },
      { label: "MPLS", value: "mpls" },
    ],
    answer: "dtls",
    domain: "SD-WAN",
  },
  {
    id: "encor-6",
    question: "What is the purpose of OMP (Overlay Management Protocol) in SD-WAN?",
    options: [
      { label: "Route distribution", value: "route-dist" },
      { label: "Device authentication", value: "auth" },
      { label: "Traffic encryption", value: "encryption" },
      { label: "QoS enforcement", value: "qos" },
    ],
    answer: "route-dist",
    domain: "SD-WAN",
  },
  {
    id: "encor-7",
    question: "Which wireless technology is used for high-density deployments?",
    options: [
      { label: "802.11a", value: "11a" },
      { label: "802.11ac Wave 2", value: "11ac-wave2" },
      { label: "802.11b", value: "11b" },
      { label: "802.11g", value: "11g" },
    ],
    answer: "11ac-wave2",
    domain: "Wireless",
  },
  {
    id: "encor-8",
    question: "What is the primary benefit of using RESTCONF over NETCONF?",
    options: [
      { label: "Better security", value: "security" },
      { label: "HTTP/JSON-based, easier integration", value: "http-json" },
      { label: "Faster performance", value: "performance" },
      { label: "Lower bandwidth usage", value: "bandwidth" },
    ],
    answer: "http-json",
    domain: "Network Programmability",
  },
  {
    id: "encor-9",
    question: "Which protocol provides streaming telemetry from network devices?",
    options: [
      { label: "SNMP", value: "snmp" },
      { label: "gRPC", value: "grpc" },
      { label: "Syslog", value: "syslog" },
      { label: "NetFlow", value: "netflow" },
    ],
    answer: "grpc",
    domain: "Network Monitoring",
  },
  {
    id: "encor-10",
    question: "What is the purpose of EIGRP stub routing?",
    options: [
      { label: "To reduce query traffic", value: "reduce-queries" },
      { label: "To increase convergence time", value: "increase-convergence" },
      { label: "To enable load balancing", value: "load-balancing" },
      { label: "To improve security", value: "security" },
    ],
    answer: "reduce-queries",
    domain: "Routing",
  },
];

// CCNP Security SCOR (350-701) Question Bank
const scorQuestions: AssessmentQuestion[] = [
  {
    id: "scor-1",
    question: "What is the primary function of Cisco ISE (Identity Services Engine)?",
    options: [
      { label: "Firewall management", value: "firewall" },
      { label: "Network access control and policy enforcement", value: "nac" },
      { label: "Intrusion detection", value: "ids" },
      { label: "Email security", value: "email" },
    ],
    answer: "nac",
    domain: "Network Access Control",
  },
  {
    id: "scor-2",
    question: "Which technology is used for secure remote access VPN?",
    options: [
      { label: "IPsec", value: "ipsec" },
      { label: "SSL/TLS", value: "ssl-tls" },
      { label: "Both IPsec and SSL/TLS", value: "both" },
      { label: "GRE", value: "gre" },
    ],
    answer: "both",
    domain: "VPN Technologies",
  },
  {
    id: "scor-3",
    question: "What is the purpose of SGT (Security Group Tag) in TrustSec?",
    options: [
      { label: "To tag VLANs", value: "vlans" },
      { label: "To enforce security policies based on identity", value: "policy" },
      { label: "To encrypt traffic", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "policy",
    domain: "TrustSec",
  },
  {
    id: "scor-4",
    question: "Which Cisco product provides advanced malware protection?",
    options: [
      { label: "ASA", value: "asa" },
      { label: "Firepower", value: "firepower" },
      { label: "ISE", value: "ise" },
      { label: "WSA", value: "wsa" },
    ],
    answer: "firepower",
    domain: "Threat Defense",
  },
  {
    id: "scor-5",
    question: "What is the difference between IDS and IPS?",
    options: [
      { label: "IDS detects, IPS prevents", value: "detect-prevent" },
      { label: "IDS prevents, IPS detects", value: "prevent-detect" },
      { label: "They are the same", value: "same" },
      { label: "IDS is hardware, IPS is software", value: "hw-sw" },
    ],
    answer: "detect-prevent",
    domain: "Security Concepts",
  },
  {
    id: "scor-6",
    question: "Which protocol is used for secure device management?",
    options: [
      { label: "Telnet", value: "telnet" },
      { label: "SSH", value: "ssh" },
      { label: "HTTP", value: "http" },
      { label: "SNMP v1", value: "snmpv1" },
    ],
    answer: "ssh",
    domain: "Device Security",
  },
  {
    id: "scor-7",
    question: "What is the purpose of 802.1X authentication?",
    options: [
      { label: "Wireless encryption", value: "wireless-encrypt" },
      { label: "Port-based network access control", value: "port-nac" },
      { label: "Routing authentication", value: "routing" },
      { label: "Email security", value: "email" },
    ],
    answer: "port-nac",
    domain: "Network Access Control",
  },
  {
    id: "scor-8",
    question: "Which technology provides secure web gateway services?",
    options: [
      { label: "ASA", value: "asa" },
      { label: "WSA", value: "wsa" },
      { label: "ISE", value: "ise" },
      { label: "Firepower", value: "firepower" },
    ],
    answer: "wsa",
    domain: "Web Security",
  },
  {
    id: "scor-9",
    question: "What is the primary function of Cisco Umbrella?",
    options: [
      { label: "Firewall management", value: "firewall" },
      { label: "Cloud-based security and DNS filtering", value: "cloud-dns" },
      { label: "Intrusion detection", value: "ids" },
      { label: "Email security", value: "email" },
    ],
    answer: "cloud-dns",
    domain: "Cloud Security",
  },
  {
    id: "scor-10",
    question: "Which security framework is commonly used for zero-trust architecture?",
    options: [
      { label: "NIST Zero Trust", value: "nist" },
      { label: "ISO 27001", value: "iso" },
      { label: "PCI DSS", value: "pci" },
      { label: "HIPAA", value: "hipaa" },
    ],
    answer: "nist",
    domain: "Security Architecture",
  },
];

// CCIE Enterprise Infrastructure Question Bank
const ccieQuestions: AssessmentQuestion[] = [
  {
    id: "ccie-1",
    question: "What is the primary consideration when designing BGP route reflectors?",
    options: [
      { label: "Minimize route reflector clients", value: "minimize" },
      { label: "Avoid route reflector loops", value: "avoid-loops" },
      { label: "Maximize AS path length", value: "maximize-aspath" },
      { label: "Use only iBGP", value: "ibgp-only" },
    ],
    answer: "avoid-loops",
    domain: "BGP Design",
  },
  {
    id: "ccie-2",
    question: "Which MPLS L3VPN component is responsible for route distribution between PE routers?",
    options: [
      { label: "MP-BGP", value: "mp-bgp" },
      { label: "LDP", value: "ldp" },
      { label: "RSVP-TE", value: "rsvp-te" },
      { label: "OSPF", value: "ospf" },
    ],
    answer: "mp-bgp",
    domain: "MPLS VPN",
  },
  {
    id: "ccie-3",
    question: "What is the purpose of PIM Sparse Mode in multicast routing?",
    options: [
      { label: "To flood multicast traffic", value: "flood" },
      { label: "To build multicast distribution trees on-demand", value: "on-demand" },
      { label: "To reduce unicast routing", value: "reduce-unicast" },
      { label: "To encrypt multicast traffic", value: "encrypt" },
    ],
    answer: "on-demand",
    domain: "Multicast",
  },
  {
    id: "ccie-4",
    question: "Which QoS mechanism provides bandwidth guarantee?",
    options: [
      { label: "Policing", value: "policing" },
      { label: "Shaping", value: "shaping" },
      { label: "CBWFQ", value: "cbwfq" },
      { label: "WRED", value: "wred" },
    ],
    answer: "cbwfq",
    domain: "QoS",
  },
  {
    id: "ccie-5",
    question: "What is the primary function of EVPN in data center networks?",
    options: [
      { label: "Layer 2 VPN extension", value: "l2vpn" },
      { label: "Layer 3 routing", value: "l3-routing" },
      { label: "Traffic encryption", value: "encryption" },
      { label: "Device authentication", value: "auth" },
    ],
    answer: "l2vpn",
    domain: "Data Center",
  },
  {
    id: "ccie-6",
    question: "Which protocol is used for segment routing in modern networks?",
    options: [
      { label: "OSPF", value: "ospf" },
      { label: "IS-IS", value: "isis" },
      { label: "Both OSPF and IS-IS", value: "both" },
      { label: "EIGRP", value: "eigrp" },
    ],
    answer: "both",
    domain: "Segment Routing",
  },
  {
    id: "ccie-7",
    question: "What is the purpose of VXLAN in data center networks?",
    options: [
      { label: "To extend Layer 2 domains over Layer 3", value: "l2-over-l3" },
      { label: "To encrypt traffic", value: "encrypt" },
      { label: "To route between VLANs", value: "route-vlans" },
      { label: "To authenticate devices", value: "auth" },
    ],
    answer: "l2-over-l3",
    domain: "Data Center",
  },
  {
    id: "ccie-8",
    question: "Which technology enables network slicing in 5G networks?",
    options: [
      { label: "VRF", value: "vrf" },
      { label: "Network slicing with SRv6", value: "sr-v6" },
      { label: "VLANs", value: "vlans" },
      { label: "MPLS", value: "mpls" },
    ],
    answer: "sr-v6",
    domain: "Advanced Routing",
  },
  {
    id: "ccie-9",
    question: "What is the primary benefit of using gRPC for network telemetry?",
    options: [
      { label: "Lower latency and efficient binary protocol", value: "efficient" },
      { label: "Better security", value: "security" },
      { label: "Easier configuration", value: "config" },
      { label: "Lower bandwidth usage", value: "bandwidth" },
    ],
    answer: "efficient",
    domain: "Network Monitoring",
  },
  {
    id: "ccie-10",
    question: "Which design pattern is recommended for high availability in enterprise networks?",
    options: [
      { label: "Single point of failure", value: "spof" },
      { label: "Redundant paths and devices", value: "redundant" },
      { label: "Centralized control", value: "centralized" },
      { label: "Minimal redundancy", value: "minimal" },
    ],
    answer: "redundant",
    domain: "Network Design",
  },
];

// Generic/Default Question Bank (for courses without specific banks)
const defaultQuestions: AssessmentQuestion[] = [
  {
    id: "default-1",
    question: "Which control plane technology underpins Cisco SD-WAN policy distribution?",
    options: [
      { label: "vBond", value: "vBond" },
      { label: "vSmart", value: "vSmart" },
      { label: "vManage", value: "vManage" },
      { label: "DNA Center", value: "dna" },
    ],
    answer: "vSmart",
    domain: "SD-WAN Architecture",
  },
  {
    id: "default-2",
    question: "Which protocol combination is typically used to automate campus fabric devices via model-driven programmability?",
    options: [
      { label: "SNMP + Syslog", value: "snmp" },
      { label: "NETCONF + YANG", value: "netconf" },
      { label: "SSH + TFTP", value: "ssh" },
      { label: "REST + NetFlow", value: "rest" },
    ],
    answer: "NETCONF + YANG",
    domain: "Automation",
  },
  {
    id: "default-3",
    question: "Which design artifact documents constraints, assumptions, and business outcomes?",
    options: [
      { label: "Low-level design", value: "lld" },
      { label: "Executive summary", value: "exec" },
      { label: "Design brief", value: "brief" },
      { label: "RFC", value: "rfc" },
    ],
    answer: "Design brief",
    domain: "Architecture",
  },
  {
    id: "default-4",
    question: "In a wireless deployment, which metric best indicates co-channel interference risk?",
    options: [
      { label: "RSSI", value: "rssi" },
      { label: "SNR", value: "snr" },
      { label: "Channel utilization", value: "channel" },
      { label: "Noise floor", value: "noise" },
    ],
    answer: "Channel utilization",
    domain: "Wireless",
  },
  {
    id: "default-5",
    question: "Which identity enforcement method enables end-to-end segmentation inside Cisco SD-Access?",
    options: [
      { label: "ACLs", value: "acl" },
      { label: "TrustSec (SGT)", value: "sgt" },
      { label: "Port security", value: "port" },
      { label: "VRRP", value: "vrrp" },
    ],
    answer: "TrustSec (SGT)",
    domain: "Security",
  },
  {
    id: "default-6",
    question: "What is the first troubleshooting step for a BGP neighbor stuck in Idle?",
    options: [
      { label: "Check route-map configuration", value: "rmap" },
      { label: "Verify reachability to neighbor address", value: "reach" },
      { label: "Reset the neighbor", value: "reset" },
      { label: "Clear the ARP cache", value: "arp" },
    ],
    answer: "Verify reachability to neighbor address",
    domain: "Routing",
  },
  {
    id: "default-7",
    question: "Which monitoring data source delivers the most granular view for NetDevOps pipelines?",
    options: [
      { label: "CLI screen scraping", value: "cli" },
      { label: "SNMP GETs", value: "snmp" },
      { label: "Streaming telemetry", value: "telemetry" },
      { label: "Syslog", value: "syslog" },
    ],
    answer: "Streaming telemetry",
    domain: "Observability",
  },
  {
    id: "default-8",
    question: "Which wireless design consideration is MOST critical for real-time collaboration apps?",
    options: [
      { label: "DFS channels", value: "dfs" },
      { label: "Roaming aggressiveness", value: "roam" },
      { label: "Power over Ethernet budget", value: "poe" },
      { label: "DHCP lease timers", value: "dhcp" },
    ],
    answer: "Roaming aggressiveness",
    domain: "Wireless",
  },
  {
    id: "default-9",
    question: "Which DevOps practice ensures infrastructure changes are reversible and peer-reviewed?",
    options: [
      { label: "GitOps pull requests", value: "gitops" },
      { label: "Ad-hoc CLI sessions", value: "adhoc" },
      { label: "SNMP traps", value: "snmp" },
      { label: "Static documentation", value: "docs" },
    ],
    answer: "GitOps pull requests",
    domain: "Automation",
  },
  {
    id: "default-10",
    question: "Which SD-WAN feature enforces application-aware routing on a per-SLA basis?",
    options: [
      { label: "TLOC extension", value: "tloc" },
      { label: "Local breakout", value: "local" },
      { label: "Traffic steering policies", value: "steer" },
      { label: "OMP route advertisement", value: "omp" },
    ],
    answer: "Traffic steering policies",
    domain: "SD-WAN",
  },
];

// CEH (Certified Ethical Hacker) Question Bank
const cehQuestions: AssessmentQuestion[] = [
  {
    id: "ceh-1",
    question: "What is the primary purpose of footprinting in ethical hacking?",
    options: [
      { label: "To exploit vulnerabilities", value: "exploit" },
      { label: "To gather information about target systems", value: "gather-info" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "authenticate" },
    ],
    answer: "gather-info",
    domain: "Reconnaissance",
  },
  {
    id: "ceh-2",
    question: "Which tool is commonly used for network scanning and port enumeration?",
    options: [
      { label: "Wireshark", value: "wireshark" },
      { label: "Nmap", value: "nmap" },
      { label: "Metasploit", value: "metasploit" },
      { label: "Burp Suite", value: "burp" },
    ],
    answer: "nmap",
    domain: "Scanning",
  },
  {
    id: "ceh-3",
    question: "What is SQL injection?",
    options: [
      { label: "A method to encrypt SQL databases", value: "encrypt" },
      { label: "A vulnerability that allows malicious SQL code execution", value: "injection" },
      { label: "A backup technique for databases", value: "backup" },
      { label: "A performance optimization method", value: "optimization" },
    ],
    answer: "injection",
    domain: "Web Application Security",
  },
  {
    id: "ceh-4",
    question: "Which attack involves intercepting communication between two parties?",
    options: [
      { label: "DDoS", value: "ddos" },
      { label: "Man-in-the-Middle (MITM)", value: "mitm" },
      { label: "Phishing", value: "phishing" },
      { label: "Brute Force", value: "brute-force" },
    ],
    answer: "mitm",
    domain: "Network Attacks",
  },
  {
    id: "ceh-5",
    question: "What is the purpose of a buffer overflow attack?",
    options: [
      { label: "To encrypt data", value: "encrypt" },
      { label: "To execute arbitrary code by overflowing buffer boundaries", value: "overflow" },
      { label: "To authenticate users", value: "authenticate" },
      { label: "To compress data", value: "compress" },
    ],
    answer: "overflow",
    domain: "System Exploitation",
  },
  {
    id: "ceh-6",
    question: "Which tool is used for password cracking?",
    options: [
      { label: "John the Ripper", value: "john" },
      { label: "Wireshark", value: "wireshark" },
      { label: "Nmap", value: "nmap" },
      { label: "Burp Suite", value: "burp" },
    ],
    answer: "john",
    domain: "Password Attacks",
  },
  {
    id: "ceh-7",
    question: "What is social engineering?",
    options: [
      { label: "A network protocol", value: "protocol" },
      { label: "Manipulating people to divulge confidential information", value: "social-eng" },
      { label: "A database technique", value: "database" },
      { label: "A programming language", value: "programming" },
    ],
    answer: "social-eng",
    domain: "Social Engineering",
  },
  {
    id: "ceh-8",
    question: "Which type of malware replicates itself across networks?",
    options: [
      { label: "Trojan", value: "trojan" },
      { label: "Worm", value: "worm" },
      { label: "Virus", value: "virus" },
      { label: "Spyware", value: "spyware" },
    ],
    answer: "worm",
    domain: "Malware",
  },
  {
    id: "ceh-9",
    question: "What is the purpose of penetration testing?",
    options: [
      { label: "To break into systems illegally", value: "illegal" },
      { label: "To identify and fix security vulnerabilities", value: "pentest" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To monitor network traffic", value: "monitor" },
    ],
    answer: "pentest",
    domain: "Penetration Testing",
  },
  {
    id: "ceh-10",
    question: "Which attack involves overwhelming a target with traffic?",
    options: [
      { label: "SQL Injection", value: "sql" },
      { label: "DDoS (Distributed Denial of Service)", value: "ddos" },
      { label: "Phishing", value: "phishing" },
      { label: "Man-in-the-Middle", value: "mitm" },
    ],
    answer: "ddos",
    domain: "DoS Attacks",
  },
];

// CompTIA Security+ Question Bank
const securityPlusQuestions: AssessmentQuestion[] = [
  {
    id: "secplus-1",
    question: "What are the three core principles of information security?",
    options: [
      { label: "Authentication, Authorization, Accounting", value: "aaa" },
      { label: "Confidentiality, Integrity, Availability", value: "cia" },
      { label: "Prevention, Detection, Response", value: "pdr" },
      { label: "Risk, Threat, Vulnerability", value: "rtv" },
    ],
    answer: "cia",
    domain: "Security Fundamentals",
  },
  {
    id: "secplus-2",
    question: "Which encryption algorithm is commonly used for secure web communication?",
    options: [
      { label: "DES", value: "des" },
      { label: "AES", value: "aes" },
      { label: "RSA", value: "rsa" },
      { label: "MD5", value: "md5" },
    ],
    answer: "aes",
    domain: "Cryptography",
  },
  {
    id: "secplus-3",
    question: "What is the purpose of a firewall?",
    options: [
      { label: "To encrypt traffic", value: "encrypt" },
      { label: "To filter and control network traffic", value: "filter" },
      { label: "To authenticate users", value: "authenticate" },
      { label: "To store logs", value: "store-logs" },
    ],
    answer: "filter",
    domain: "Network Security",
  },
  {
    id: "secplus-4",
    question: "Which authentication method uses something you have?",
    options: [
      { label: "Password", value: "password" },
      { label: "Biometric", value: "biometric" },
      { label: "Smart card", value: "smart-card" },
      { label: "PIN", value: "pin" },
    ],
    answer: "smart-card",
    domain: "Authentication",
  },
  {
    id: "secplus-5",
    question: "What is the difference between a vulnerability and a threat?",
    options: [
      { label: "Vulnerability is a weakness; Threat is a potential danger", value: "correct" },
      { label: "They are the same thing", value: "same" },
      { label: "Vulnerability is a danger; Threat is a weakness", value: "reversed" },
      { label: "Vulnerability is encryption; Threat is decryption", value: "encryption" },
    ],
    answer: "correct",
    domain: "Risk Management",
  },
  {
    id: "secplus-6",
    question: "Which protocol provides secure remote access?",
    options: [
      { label: "Telnet", value: "telnet" },
      { label: "SSH", value: "ssh" },
      { label: "HTTP", value: "http" },
      { label: "FTP", value: "ftp" },
    ],
    answer: "ssh",
    domain: "Secure Access",
  },
  {
    id: "secplus-7",
    question: "What is the purpose of a honeypot?",
    options: [
      { label: "To store honey", value: "store" },
      { label: "To attract and detect attackers", value: "honeypot" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "authenticate" },
    ],
    answer: "honeypot",
    domain: "Security Controls",
  },
  {
    id: "secplus-8",
    question: "Which type of backup includes only changed files since the last backup?",
    options: [
      { label: "Full backup", value: "full" },
      { label: "Incremental backup", value: "incremental" },
      { label: "Differential backup", value: "differential" },
      { label: "Mirror backup", value: "mirror" },
    ],
    answer: "incremental",
    domain: "Backup & Recovery",
  },
  {
    id: "secplus-9",
    question: "What is the purpose of network segmentation?",
    options: [
      { label: "To increase network speed", value: "speed" },
      { label: "To limit the spread of threats", value: "limit-threats" },
      { label: "To reduce bandwidth usage", value: "bandwidth" },
      { label: "To simplify network management", value: "simplify" },
    ],
    answer: "limit-threats",
    domain: "Network Security",
  },
  {
    id: "secplus-10",
    question: "Which security control is an example of physical security?",
    options: [
      { label: "Firewall", value: "firewall" },
      { label: "Access badge", value: "badge" },
      { label: "Encryption", value: "encryption" },
      { label: "Antivirus", value: "antivirus" },
    ],
    answer: "badge",
    domain: "Physical Security",
  },
];

// CISM Question Bank
const cismQuestions: AssessmentQuestion[] = [
  {
    id: "cism-1",
    question: "What is the primary focus of information security governance?",
    options: [
      { label: "Technical implementation", value: "technical" },
      { label: "Aligning security with business objectives", value: "governance" },
      { label: "Network configuration", value: "network" },
      { label: "Software development", value: "development" },
    ],
    answer: "governance",
    domain: "Information Security Governance",
  },
  {
    id: "cism-2",
    question: "Which framework is commonly used for information security management?",
    options: [
      { label: "ISO 27001", value: "iso27001" },
      { label: "NIST", value: "nist" },
      { label: "COBIT", value: "cobit" },
      { label: "All of the above", value: "all" },
    ],
    answer: "all",
    domain: "Frameworks",
  },
  {
    id: "cism-3",
    question: "What is risk treatment?",
    options: [
      { label: "Identifying risks", value: "identify" },
      { label: "Deciding how to address identified risks", value: "treatment" },
      { label: "Monitoring risks", value: "monitor" },
      { label: "Reporting risks", value: "report" },
    ],
    answer: "treatment",
    domain: "Risk Management",
  },
  {
    id: "cism-4",
    question: "What is the purpose of a security program?",
    options: [
      { label: "To implement technical controls only", value: "technical" },
      { label: "To establish and maintain security capabilities", value: "program" },
      { label: "To monitor network traffic", value: "monitor" },
      { label: "To develop software", value: "develop" },
    ],
    answer: "program",
    domain: "Program Development",
  },
  {
    id: "cism-5",
    question: "Which phase of incident response involves containing the threat?",
    options: [
      { label: "Preparation", value: "preparation" },
      { label: "Containment", value: "containment" },
      { label: "Recovery", value: "recovery" },
      { label: "Lessons Learned", value: "lessons" },
    ],
    answer: "containment",
    domain: "Incident Management",
  },
  {
    id: "cism-6",
    question: "What is business continuity planning?",
    options: [
      { label: "Planning for normal operations", value: "normal" },
      { label: "Ensuring critical business functions continue during disruptions", value: "bcp" },
      { label: "Planning for software updates", value: "updates" },
      { label: "Planning for network expansion", value: "expansion" },
    ],
    answer: "bcp",
    domain: "Business Continuity",
  },
  {
    id: "cism-7",
    question: "Which metric is used to measure security program effectiveness?",
    options: [
      { label: "KPIs (Key Performance Indicators)", value: "kpis" },
      { label: "Network speed", value: "speed" },
      { label: "Storage capacity", value: "storage" },
      { label: "CPU usage", value: "cpu" },
    ],
    answer: "kpis",
    domain: "Metrics & Reporting",
  },
  {
    id: "cism-8",
    question: "What is third-party risk management?",
    options: [
      { label: "Managing internal risks", value: "internal" },
      { label: "Assessing and managing risks from vendors and partners", value: "third-party" },
      { label: "Managing network risks", value: "network" },
      { label: "Managing software risks", value: "software" },
    ],
    answer: "third-party",
    domain: "Vendor Management",
  },
  {
    id: "cism-9",
    question: "Which compliance framework focuses on financial data protection?",
    options: [
      { label: "HIPAA", value: "hipaa" },
      { label: "PCI DSS", value: "pci" },
      { label: "GDPR", value: "gdpr" },
      { label: "SOX", value: "sox" },
    ],
    answer: "pci",
    domain: "Compliance",
  },
  {
    id: "cism-10",
    question: "What is the role of a CISO (Chief Information Security Officer)?",
    options: [
      { label: "To configure firewalls", value: "firewall" },
      { label: "To lead and manage the information security program", value: "ciso" },
      { label: "To develop software", value: "develop" },
      { label: "To monitor network traffic", value: "monitor" },
    ],
    answer: "ciso",
    domain: "Leadership",
  },
];

// CISSP Question Bank
const cisspQuestions: AssessmentQuestion[] = [
  {
    id: "cissp-1",
    question: "What are the eight domains of the CISSP Common Body of Knowledge?",
    options: [
      { label: "Security, Network, Cloud, Mobile, IoT, AI, Blockchain, Quantum", value: "wrong1" },
      { label: "Security and Risk Management, Asset Security, Security Architecture, Communication and Network Security, Identity and Access Management, Security Assessment, Security Operations, Software Development Security", value: "correct" },
      { label: "Firewall, IDS, IPS, SIEM, DLP, IAM, Encryption, Backup", value: "wrong2" },
      { label: "Planning, Implementation, Monitoring, Response, Recovery, Testing, Training, Compliance", value: "wrong3" },
    ],
    answer: "correct",
    domain: "CISSP Domains",
  },
  {
    id: "cissp-2",
    question: "What is the principle of least privilege?",
    options: [
      { label: "Grant maximum access to all users", value: "max" },
      { label: "Grant only the minimum access necessary for users to perform their duties", value: "least" },
      { label: "Grant access based on seniority", value: "seniority" },
      { label: "Grant access to everyone", value: "everyone" },
    ],
    answer: "least",
    domain: "Access Control",
  },
  {
    id: "cissp-3",
    question: "What is defense in depth?",
    options: [
      { label: "Using a single security control", value: "single" },
      { label: "Using multiple layers of security controls", value: "layers" },
      { label: "Using only technical controls", value: "technical" },
      { label: "Using only physical controls", value: "physical" },
    ],
    answer: "layers",
    domain: "Security Architecture",
  },
  {
    id: "cissp-4",
    question: "What is the purpose of PKI (Public Key Infrastructure)?",
    options: [
      { label: "To manage network routing", value: "routing" },
      { label: "To manage digital certificates and encryption keys", value: "pki" },
      { label: "To manage user accounts", value: "accounts" },
      { label: "To manage storage", value: "storage" },
    ],
    answer: "pki",
    domain: "Cryptography",
  },
  {
    id: "cissp-5",
    question: "What is the difference between identification and authentication?",
    options: [
      { label: "They are the same", value: "same" },
      { label: "Identification is claiming identity; Authentication is proving identity", value: "correct" },
      { label: "Identification is proving identity; Authentication is claiming identity", value: "reversed" },
      { label: "Identification is authorization; Authentication is access control", value: "wrong" },
    ],
    answer: "correct",
    domain: "Identity & Access Management",
  },
  {
    id: "cissp-6",
    question: "What is the purpose of a security assessment?",
    options: [
      { label: "To exploit vulnerabilities", value: "exploit" },
      { label: "To evaluate security controls and identify weaknesses", value: "assess" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To monitor traffic", value: "monitor" },
    ],
    answer: "assess",
    domain: "Security Assessment",
  },
  {
    id: "cissp-7",
    question: "What is the chain of custody in digital forensics?",
    options: [
      { label: "A security protocol", value: "protocol" },
      { label: "Documentation of evidence handling from collection to presentation", value: "custody" },
      { label: "A network topology", value: "topology" },
      { label: "A backup procedure", value: "backup" },
    ],
    answer: "custody",
    domain: "Digital Forensics",
  },
  {
    id: "cissp-8",
    question: "What is the purpose of business continuity planning?",
    options: [
      { label: "To plan for normal operations", value: "normal" },
      { label: "To ensure critical business functions continue during and after disruptions", value: "bcp" },
      { label: "To plan software updates", value: "updates" },
      { label: "To plan network expansion", value: "expansion" },
    ],
    answer: "bcp",
    domain: "Business Continuity",
  },
  {
    id: "cissp-9",
    question: "What is the difference between a threat and a vulnerability?",
    options: [
      { label: "They are the same", value: "same" },
      { label: "Threat is a potential danger; Vulnerability is a weakness", value: "correct" },
      { label: "Threat is a weakness; Vulnerability is a danger", value: "reversed" },
      { label: "Threat is encryption; Vulnerability is decryption", value: "wrong" },
    ],
    answer: "correct",
    domain: "Risk Management",
  },
  {
    id: "cissp-10",
    question: "What is secure software development lifecycle (SDLC)?",
    options: [
      { label: "A network protocol", value: "protocol" },
      { label: "Integrating security practices throughout the software development process", value: "sdlc" },
      { label: "A backup method", value: "backup" },
      { label: "A monitoring tool", value: "monitor" },
    ],
    answer: "sdlc",
    domain: "Software Development Security",
  },
];

// AWS Solutions Architect Question Bank
const awsQuestions: AssessmentQuestion[] = [
  {
    id: "aws-1",
    question: "What is the primary benefit of using Auto Scaling in AWS?",
    options: [
      { label: "Cost reduction", value: "cost" },
      { label: "Automatic scaling based on demand", value: "scaling" },
      { label: "Data encryption", value: "encryption" },
      { label: "User authentication", value: "auth" },
    ],
    answer: "scaling",
    domain: "Compute",
  },
  {
    id: "aws-2",
    question: "Which AWS service provides object storage?",
    options: [
      { label: "EBS", value: "ebs" },
      { label: "S3", value: "s3" },
      { label: "EFS", value: "efs" },
      { label: "Glacier", value: "glacier" },
    ],
    answer: "s3",
    domain: "Storage",
  },
  {
    id: "aws-3",
    question: "What is the purpose of VPC (Virtual Private Cloud)?",
    options: [
      { label: "To encrypt data", value: "encrypt" },
      { label: "To create isolated network environments", value: "vpc" },
      { label: "To authenticate users", value: "auth" },
      { label: "To monitor traffic", value: "monitor" },
    ],
    answer: "vpc",
    domain: "Networking",
  },
  {
    id: "aws-4",
    question: "Which AWS service is used for serverless computing?",
    options: [
      { label: "EC2", value: "ec2" },
      { label: "Lambda", value: "lambda" },
      { label: "ECS", value: "ecs" },
      { label: "Elastic Beanstalk", value: "beanstalk" },
    ],
    answer: "lambda",
    domain: "Serverless",
  },
  {
    id: "aws-5",
    question: "What is the purpose of CloudFront?",
    options: [
      { label: "To store data", value: "store" },
      { label: "To provide content delivery network (CDN) services", value: "cloudfront" },
      { label: "To manage databases", value: "database" },
      { label: "To monitor resources", value: "monitor" },
    ],
    answer: "cloudfront",
    domain: "Content Delivery",
  },
  {
    id: "aws-6",
    question: "Which database service is AWS's managed relational database?",
    options: [
      { label: "DynamoDB", value: "dynamodb" },
      { label: "RDS", value: "rds" },
      { label: "Redshift", value: "redshift" },
      { label: "ElastiCache", value: "elasticache" },
    ],
    answer: "rds",
    domain: "Databases",
  },
  {
    id: "aws-7",
    question: "What is the purpose of IAM in AWS?",
    options: [
      { label: "To manage network routing", value: "routing" },
      { label: "To manage user access and permissions", value: "iam" },
      { label: "To manage storage", value: "storage" },
      { label: "To manage compute resources", value: "compute" },
    ],
    answer: "iam",
    domain: "Security",
  },
  {
    id: "aws-8",
    question: "Which service provides load balancing in AWS?",
    options: [
      { label: "Route 53", value: "route53" },
      { label: "ELB (Elastic Load Balancer)", value: "elb" },
      { label: "CloudFront", value: "cloudfront" },
      { label: "API Gateway", value: "api-gateway" },
    ],
    answer: "elb",
    domain: "Networking",
  },
  {
    id: "aws-9",
    question: "What is the purpose of CloudFormation?",
    options: [
      { label: "To monitor resources", value: "monitor" },
      { label: "To automate infrastructure deployment using templates", value: "cloudformation" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "cloudformation",
    domain: "Infrastructure as Code",
  },
  {
    id: "aws-10",
    question: "Which AWS service provides monitoring and logging?",
    options: [
      { label: "CloudWatch", value: "cloudwatch" },
      { label: "CloudTrail", value: "cloudtrail" },
      { label: "Both CloudWatch and CloudTrail", value: "both" },
      { label: "S3", value: "s3" },
    ],
    answer: "both",
    domain: "Monitoring",
  },
];

// Azure Administrator Question Bank
const azureQuestions: AssessmentQuestion[] = [
  {
    id: "azure-1",
    question: "What is Azure Active Directory (Entra ID) used for?",
    options: [
      { label: "To manage network routing", value: "routing" },
      { label: "To manage identities and access", value: "identity" },
      { label: "To manage storage", value: "storage" },
      { label: "To manage compute", value: "compute" },
    ],
    answer: "identity",
    domain: "Identity",
  },
  {
    id: "azure-2",
    question: "Which Azure service provides virtual machines?",
    options: [
      { label: "Azure Functions", value: "functions" },
      { label: "Azure Virtual Machines", value: "vm" },
      { label: "Azure App Service", value: "app-service" },
      { label: "Azure Container Instances", value: "aci" },
    ],
    answer: "vm",
    domain: "Compute",
  },
  {
    id: "azure-3",
    question: "What is the purpose of Azure Resource Manager (ARM)?",
    options: [
      { label: "To monitor resources", value: "monitor" },
      { label: "To manage and organize Azure resources", value: "arm" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "arm",
    domain: "Resource Management",
  },
  {
    id: "azure-4",
    question: "Which Azure service provides object storage?",
    options: [
      { label: "Azure Files", value: "files" },
      { label: "Azure Blob Storage", value: "blob" },
      { label: "Azure Disks", value: "disks" },
      { label: "Azure Data Lake", value: "data-lake" },
    ],
    answer: "blob",
    domain: "Storage",
  },
  {
    id: "azure-5",
    question: "What is Azure Policy used for?",
    options: [
      { label: "To manage network routing", value: "routing" },
      { label: "To enforce organizational standards and compliance", value: "policy" },
      { label: "To manage compute resources", value: "compute" },
      { label: "To manage storage", value: "storage" },
    ],
    answer: "policy",
    domain: "Governance",
  },
  {
    id: "azure-6",
    question: "Which service provides container orchestration in Azure?",
    options: [
      { label: "Azure Container Instances", value: "aci" },
      { label: "Azure Kubernetes Service (AKS)", value: "aks" },
      { label: "Azure Functions", value: "functions" },
      { label: "Azure App Service", value: "app-service" },
    ],
    answer: "aks",
    domain: "Containers",
  },
  {
    id: "azure-7",
    question: "What is the purpose of Azure Monitor?",
    options: [
      { label: "To manage resources", value: "manage" },
      { label: "To collect and analyze telemetry data", value: "monitor" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "monitor",
    domain: "Monitoring",
  },
  {
    id: "azure-8",
    question: "Which Azure service provides serverless computing?",
    options: [
      { label: "Azure VMs", value: "vm" },
      { label: "Azure Functions", value: "functions" },
      { label: "Azure App Service", value: "app-service" },
      { label: "Azure Container Instances", value: "aci" },
    ],
    answer: "functions",
    domain: "Serverless",
  },
  {
    id: "azure-9",
    question: "What is Azure Virtual Network (VNet) used for?",
    options: [
      { label: "To store data", value: "store" },
      { label: "To create isolated network environments", value: "vnet" },
      { label: "To manage databases", value: "database" },
      { label: "To monitor resources", value: "monitor" },
    ],
    answer: "vnet",
    domain: "Networking",
  },
  {
    id: "azure-10",
    question: "Which Azure service provides managed SQL databases?",
    options: [
      { label: "Azure Cosmos DB", value: "cosmos" },
      { label: "Azure SQL Database", value: "sql" },
      { label: "Azure Table Storage", value: "table" },
      { label: "Azure Blob Storage", value: "blob" },
    ],
    answer: "sql",
    domain: "Databases",
  },
];

// Google Cloud Architect Question Bank
const gcpQuestions: AssessmentQuestion[] = [
  {
    id: "gcp-1",
    question: "What is the primary purpose of Google Cloud VPC?",
    options: [
      { label: "To encrypt data", value: "encrypt" },
      { label: "To create isolated network environments", value: "vpc" },
      { label: "To authenticate users", value: "auth" },
      { label: "To monitor traffic", value: "monitor" },
    ],
    answer: "vpc",
    domain: "Networking",
  },
  {
    id: "gcp-2",
    question: "Which GCP service provides managed Kubernetes?",
    options: [
      { label: "Google Kubernetes Engine (GKE)", value: "gke" },
      { label: "Cloud Run", value: "cloud-run" },
      { label: "App Engine", value: "app-engine" },
      { label: "Compute Engine", value: "compute" },
    ],
    answer: "gke",
    domain: "Containers",
  },
  {
    id: "gcp-3",
    question: "What is Cloud Storage used for in GCP?",
    options: [
      { label: "To manage compute resources", value: "compute" },
      { label: "To provide object storage", value: "storage" },
      { label: "To manage databases", value: "database" },
      { label: "To monitor resources", value: "monitor" },
    ],
    answer: "storage",
    domain: "Storage",
  },
  {
    id: "gcp-4",
    question: "Which GCP service provides serverless computing?",
    options: [
      { label: "Compute Engine", value: "compute" },
      { label: "Cloud Functions", value: "functions" },
      { label: "GKE", value: "gke" },
      { label: "Cloud SQL", value: "sql" },
    ],
    answer: "functions",
    domain: "Serverless",
  },
  {
    id: "gcp-5",
    question: "What is the purpose of Cloud IAM in GCP?",
    options: [
      { label: "To manage network routing", value: "routing" },
      { label: "To manage access and permissions", value: "iam" },
      { label: "To manage storage", value: "storage" },
      { label: "To manage compute", value: "compute" },
    ],
    answer: "iam",
    domain: "Security",
  },
  {
    id: "gcp-6",
    question: "Which GCP service provides managed relational databases?",
    options: [
      { label: "Cloud Spanner", value: "spanner" },
      { label: "Cloud SQL", value: "sql" },
      { label: "Bigtable", value: "bigtable" },
      { label: "Firestore", value: "firestore" },
    ],
    answer: "sql",
    domain: "Databases",
  },
  {
    id: "gcp-7",
    question: "What is BigQuery used for?",
    options: [
      { label: "To store files", value: "files" },
      { label: "To run analytics and data warehouse queries", value: "bigquery" },
      { label: "To manage compute", value: "compute" },
      { label: "To monitor resources", value: "monitor" },
    ],
    answer: "bigquery",
    domain: "Analytics",
  },
  {
    id: "gcp-8",
    question: "Which GCP service provides load balancing?",
    options: [
      { label: "Cloud CDN", value: "cdn" },
      { label: "Cloud Load Balancing", value: "load-balancing" },
      { label: "Cloud Armor", value: "armor" },
      { label: "Cloud Interconnect", value: "interconnect" },
    ],
    answer: "load-balancing",
    domain: "Networking",
  },
  {
    id: "gcp-9",
    question: "What is the purpose of Cloud Monitoring in GCP?",
    options: [
      { label: "To manage resources", value: "manage" },
      { label: "To collect and analyze metrics and logs", value: "monitoring" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "monitoring",
    domain: "Monitoring",
  },
  {
    id: "gcp-10",
    question: "Which GCP service provides Infrastructure as Code capabilities?",
    options: [
      { label: "Cloud Build", value: "build" },
      { label: "Deployment Manager", value: "deployment-manager" },
      { label: "Cloud Functions", value: "functions" },
      { label: "Cloud Run", value: "cloud-run" },
    ],
    answer: "deployment-manager",
    domain: "Infrastructure as Code",
  },
];

// Kubernetes Administrator Question Bank
const kubernetesQuestions: AssessmentQuestion[] = [
  {
    id: "k8s-1",
    question: "What is a Pod in Kubernetes?",
    options: [
      { label: "A network component", value: "network" },
      { label: "The smallest deployable unit containing one or more containers", value: "pod" },
      { label: "A storage volume", value: "storage" },
      { label: "A service", value: "service" },
    ],
    answer: "pod",
    domain: "Core Concepts",
  },
  {
    id: "k8s-2",
    question: "Which component is responsible for scheduling pods in Kubernetes?",
    options: [
      { label: "kubelet", value: "kubelet" },
      { label: "kube-scheduler", value: "scheduler" },
      { label: "kube-proxy", value: "proxy" },
      { label: "etcd", value: "etcd" },
    ],
    answer: "scheduler",
    domain: "Control Plane",
  },
  {
    id: "k8s-3",
    question: "What is the purpose of a Service in Kubernetes?",
    options: [
      { label: "To store data", value: "store" },
      { label: "To expose pods with a stable network endpoint", value: "service" },
      { label: "To manage compute", value: "compute" },
      { label: "To monitor resources", value: "monitor" },
    ],
    answer: "service",
    domain: "Networking",
  },
  {
    id: "k8s-4",
    question: "Which command is used to create a deployment in Kubernetes?",
    options: [
      { label: "kubectl run", value: "run" },
      { label: "kubectl create deployment", value: "create" },
      { label: "kubectl apply", value: "apply" },
      { label: "All of the above", value: "all" },
    ],
    answer: "all",
    domain: "Deployments",
  },
  {
    id: "k8s-5",
    question: "What is the purpose of ConfigMap in Kubernetes?",
    options: [
      { label: "To store secrets", value: "secrets" },
      { label: "To store configuration data", value: "configmap" },
      { label: "To store persistent data", value: "persistent" },
      { label: "To manage networking", value: "networking" },
    ],
    answer: "configmap",
    domain: "Configuration",
  },
  {
    id: "k8s-6",
    question: "Which component stores cluster state in Kubernetes?",
    options: [
      { label: "kube-apiserver", value: "api" },
      { label: "etcd", value: "etcd" },
      { label: "kube-controller-manager", value: "controller" },
      { label: "kube-scheduler", value: "scheduler" },
    ],
    answer: "etcd",
    domain: "Control Plane",
  },
  {
    id: "k8s-7",
    question: "What is the purpose of a Namespace in Kubernetes?",
    options: [
      { label: "To isolate network traffic", value: "network" },
      { label: "To provide logical isolation and resource organization", value: "namespace" },
      { label: "To store data", value: "store" },
      { label: "To manage compute", value: "compute" },
    ],
    answer: "namespace",
    domain: "Resource Management",
  },
  {
    id: "k8s-8",
    question: "Which resource is used for stateful applications in Kubernetes?",
    options: [
      { label: "Deployment", value: "deployment" },
      { label: "StatefulSet", value: "statefulset" },
      { label: "ReplicaSet", value: "replicaset" },
      { label: "DaemonSet", value: "daemonset" },
    ],
    answer: "statefulset",
    domain: "Workloads",
  },
  {
    id: "k8s-9",
    question: "What is RBAC in Kubernetes?",
    options: [
      { label: "A network protocol", value: "protocol" },
      { label: "Role-Based Access Control for authorization", value: "rbac" },
      { label: "A storage class", value: "storage" },
      { label: "A service type", value: "service" },
    ],
    answer: "rbac",
    domain: "Security",
  },
  {
    id: "k8s-10",
    question: "Which command is used to view pod logs in Kubernetes?",
    options: [
      { label: "kubectl logs", value: "logs" },
      { label: "kubectl describe", value: "describe" },
      { label: "kubectl get", value: "get" },
      { label: "kubectl exec", value: "exec" },
    ],
    answer: "logs",
    domain: "Troubleshooting",
  },
];

// Terraform Associate Question Bank
const terraformQuestions: AssessmentQuestion[] = [
  {
    id: "terraform-1",
    question: "What is Terraform?",
    options: [
      { label: "A programming language", value: "language" },
      { label: "An Infrastructure as Code tool", value: "terraform" },
      { label: "A cloud provider", value: "cloud" },
      { label: "A monitoring tool", value: "monitor" },
    ],
    answer: "terraform",
    domain: "Fundamentals",
  },
  {
    id: "terraform-2",
    question: "What is the purpose of Terraform state?",
    options: [
      { label: "To store configuration files", value: "config" },
      { label: "To track managed infrastructure and map resources", value: "state" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "state",
    domain: "State Management",
  },
  {
    id: "terraform-3",
    question: "Which command is used to initialize Terraform?",
    options: [
      { label: "terraform init", value: "init" },
      { label: "terraform plan", value: "plan" },
      { label: "terraform apply", value: "apply" },
      { label: "terraform validate", value: "validate" },
    ],
    answer: "init",
    domain: "CLI",
  },
  {
    id: "terraform-4",
    question: "What is a Terraform provider?",
    options: [
      { label: "A cloud service", value: "service" },
      { label: "A plugin that interacts with APIs to manage resources", value: "provider" },
      { label: "A configuration file", value: "config" },
      { label: "A state file", value: "state" },
    ],
    answer: "provider",
    domain: "Providers",
  },
  {
    id: "terraform-5",
    question: "What is the purpose of Terraform modules?",
    options: [
      { label: "To store state", value: "state" },
      { label: "To organize and reuse configuration code", value: "modules" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "modules",
    domain: "Modules",
  },
  {
    id: "terraform-6",
    question: "Which command shows what Terraform will do without making changes?",
    options: [
      { label: "terraform init", value: "init" },
      { label: "terraform plan", value: "plan" },
      { label: "terraform apply", value: "apply" },
      { label: "terraform destroy", value: "destroy" },
    ],
    answer: "plan",
    domain: "CLI",
  },
  {
    id: "terraform-7",
    question: "What is the purpose of remote state in Terraform?",
    options: [
      { label: "To store state locally", value: "local" },
      { label: "To share state across team members and enable collaboration", value: "remote" },
      { label: "To encrypt state", value: "encrypt" },
      { label: "To backup state", value: "backup" },
    ],
    answer: "remote",
    domain: "State Management",
  },
  {
    id: "terraform-8",
    question: "What is a Terraform workspace?",
    options: [
      { label: "A cloud environment", value: "cloud" },
      { label: "A named state container for managing multiple environments", value: "workspace" },
      { label: "A configuration file", value: "config" },
      { label: "A provider", value: "provider" },
    ],
    answer: "workspace",
    domain: "Workspaces",
  },
  {
    id: "terraform-9",
    question: "Which file extension is used for Terraform configuration files?",
    options: [
      { label: ".yaml", value: "yaml" },
      { label: ".json", value: "json" },
      { label: ".tf", value: "tf" },
      { label: "All of the above", value: "all" },
    ],
    answer: "all",
    domain: "Configuration",
  },
  {
    id: "terraform-10",
    question: "What is the purpose of Terraform variables?",
    options: [
      { label: "To store state", value: "state" },
      { label: "To parameterize configuration and make it reusable", value: "variables" },
      { label: "To encrypt data", value: "encrypt" },
      { label: "To authenticate users", value: "auth" },
    ],
    answer: "variables",
    domain: "Variables",
  },
];

// AZ-400 DevOps Engineer Question Bank
const az400Questions: AssessmentQuestion[] = [
  {
    id: "az400-1",
    question: "What is the primary purpose of Azure DevOps?",
    options: [
      { label: "To manage Azure resources", value: "resources" },
      { label: "To provide DevOps tools for planning, development, and deployment", value: "devops" },
      { label: "To monitor Azure services", value: "monitor" },
      { label: "To store data", value: "store" },
    ],
    answer: "devops",
    domain: "Azure DevOps",
  },
  {
    id: "az400-2",
    question: "Which Azure DevOps service is used for source control?",
    options: [
      { label: "Azure Repos", value: "repos" },
      { label: "Azure Pipelines", value: "pipelines" },
      { label: "Azure Boards", value: "boards" },
      { label: "Azure Artifacts", value: "artifacts" },
    ],
    answer: "repos",
    domain: "Source Control",
  },
  {
    id: "az400-3",
    question: "What is the purpose of Azure Pipelines?",
    options: [
      { label: "To manage code repositories", value: "repos" },
      { label: "To automate CI/CD workflows", value: "pipelines" },
      { label: "To track work items", value: "work-items" },
      { label: "To store artifacts", value: "artifacts" },
    ],
    answer: "pipelines",
    domain: "CI/CD",
  },
  {
    id: "az400-4",
    question: "Which Azure service is used for Infrastructure as Code?",
    options: [
      { label: "Azure Resource Manager (ARM)", value: "arm" },
      { label: "Azure Bicep", value: "bicep" },
      { label: "Terraform", value: "terraform" },
      { label: "All of the above", value: "all" },
    ],
    answer: "all",
    domain: "Infrastructure as Code",
  },
  {
    id: "az400-5",
    question: "What is the purpose of Azure Boards?",
    options: [
      { label: "To store code", value: "code" },
      { label: "To plan, track, and discuss work", value: "boards" },
      { label: "To deploy applications", value: "deploy" },
      { label: "To monitor resources", value: "monitor" },
    ],
    answer: "boards",
    domain: "Agile Planning",
  },
  {
    id: "az400-6",
    question: "Which Azure service provides application monitoring?",
    options: [
      { label: "Azure Monitor", value: "monitor" },
      { label: "Application Insights", value: "insights" },
      { label: "Log Analytics", value: "log-analytics" },
      { label: "All of the above", value: "all" },
    ],
    answer: "all",
    domain: "Monitoring",
  },
  {
    id: "az400-7",
    question: "What is the purpose of Azure Artifacts?",
    options: [
      { label: "To store code", value: "code" },
      { label: "To store and share packages", value: "artifacts" },
      { label: "To deploy applications", value: "deploy" },
      { label: "To monitor resources", value: "monitor" },
    ],
    answer: "artifacts",
    domain: "Package Management",
  },
  {
    id: "az400-8",
    question: "Which Azure service provides container orchestration?",
    options: [
      { label: "Azure Container Instances", value: "aci" },
      { label: "Azure Kubernetes Service (AKS)", value: "aks" },
      { label: "Azure Container Registry", value: "acr" },
      { label: "All of the above", value: "all" },
    ],
    answer: "all",
    domain: "Containers",
  },
  {
    id: "az400-9",
    question: "What is the purpose of branch policies in Azure Repos?",
    options: [
      { label: "To encrypt code", value: "encrypt" },
      { label: "To enforce code quality and review requirements", value: "policies" },
      { label: "To authenticate users", value: "auth" },
      { label: "To monitor code", value: "monitor" },
    ],
    answer: "policies",
    domain: "Source Control",
  },
  {
    id: "az400-10",
    question: "Which Azure service provides serverless computing?",
    options: [
      { label: "Azure Functions", value: "functions" },
      { label: "Azure Logic Apps", value: "logic-apps" },
      { label: "Azure App Service", value: "app-service" },
      { label: "All of the above", value: "all" },
    ],
    answer: "all",
    domain: "Serverless",
  },
];

// Course-to-Question-Bank Mapping
const questionBanks: Record<string, AssessmentQuestion[]> = {
  // Associate Level
  "CCNA": ccnaQuestions,
  "DevNet Associate": devnetAssociateQuestions,
  "CyberOps Associate": cyberopsQuestions,
  
  // Professional Level - Enterprise
  "350-401 ENCOR": encorQuestions,
  "300-410 ENARSI": encorQuestions, // Using ENCOR as base, can be customized later
  "300-415 ENSDWI": encorQuestions,
  "300-420 ENSLD": encorQuestions,
  "300-425 ENWLSD": encorQuestions,
  "300-430 ENWLSI": encorQuestions,
  "300-435 ENAUTO": devnetAssociateQuestions, // Automation-focused
  
  // Professional Level - Security
  "350-701 SCOR": scorQuestions,
  "300-710 SNCF": scorQuestions,
  "300-715 SISE": scorQuestions,
  "300-720 SESA": scorQuestions,
  "300-725 SWSA": scorQuestions,
  "300-730 SVPN": scorQuestions,
  "300-735 SAUTO": devnetAssociateQuestions, // Automation-focused
  
  // Professional Level - Data Center
  "350-601 DCCOR": defaultQuestions,
  "300-610 DCID": defaultQuestions,
  "300-615 DCIT": defaultQuestions,
  "300-620 DCACI": defaultQuestions,
  "300-635 DCAUTO": devnetAssociateQuestions,
  "300-640 DCAI": defaultQuestions,
  
  // Professional Level - Collaboration
  "350-801 CLCOR": defaultQuestions,
  "300-810 CLICA": defaultQuestions,
  "300-815 CLACCM": defaultQuestions,
  "300-820 CLCEI": defaultQuestions,
  "300-830 CLCCE": defaultQuestions,
  "300-835 CLAUTO": devnetAssociateQuestions,
  
  // Professional Level - Service Provider
  "350-501 SPCOR": defaultQuestions,
  "300-510 SPRI": defaultQuestions,
  "300-515 SPVI": defaultQuestions,
  "300-535 SPAUTO": devnetAssociateQuestions,
  "300-540 SPCNI": defaultQuestions,
  
  // Professional Level - DevNet
  "350-901 DEVCOR": devnetAssociateQuestions,
  "300-910 DEVOPS": devnetAssociateQuestions,
  
  // Expert Level
  "CCIE Enterprise Infrastructure": ccieQuestions,
  "CCIE Enterprise Wireless": ccieQuestions,
  "CCIE Security": scorQuestions, // Security-focused
  "CCIE Data Center": defaultQuestions,
  "CCIE Service Provider": defaultQuestions,
  "DevNet Expert": devnetAssociateQuestions,
  
  // Design Expert
  "CCDE": ccieQuestions,
  
  // Entry Level
  "CCT": ccnaQuestions, // Using CCNA as base
  "CCST Networking": ccnaQuestions,
  "CCST Cybersecurity": cyberopsQuestions,
  
  // Cybersecurity Courses
  "CEH": cehQuestions,
  "CompTIA Security+": securityPlusQuestions,
  "CISM": cismQuestions,
  "CISSP": cisspQuestions,
  
  // Cloud Training Courses
  "AWS Solutions Architect": awsQuestions,
  "Azure Administrator": azureQuestions,
  "Google Professional Cloud Architect": gcpQuestions,
  
  // DevOps Courses
  "Certified Kubernetes Administrator": kubernetesQuestions,
  "HashiCorp Terraform Associate": terraformQuestions,
  "AZ-400 DevOps Engineer": az400Questions,
};

export const getAssessment = (course?: string): AssessmentQuestion[] => {
  if (!course) {
    return defaultQuestions;
  }
  
  // Normalize course name: trim, handle special characters
  const normalizedCourse = course.trim();
  
  // Try exact match first
  if (questionBanks[normalizedCourse]) {
    return questionBanks[normalizedCourse];
  }
  
  // Try case-insensitive match
  const courseLower = normalizedCourse.toLowerCase().replace(/[+\s]/g, "");
  for (const [key, questions] of Object.entries(questionBanks)) {
    const keyLower = key.toLowerCase().replace(/[+\s]/g, "");
    if (keyLower === courseLower) {
      return questions;
    }
  }
  
  // Try partial match with normalized strings
  for (const [key, questions] of Object.entries(questionBanks)) {
    const keyLower = key.toLowerCase().replace(/[+\s]/g, "");
    if (courseLower.includes(keyLower) || keyLower.includes(courseLower)) {
      return questions;
    }
  }
  
  // Try keyword matching for common patterns
  const courseLowerWithSpaces = normalizedCourse.toLowerCase();
  if (courseLowerWithSpaces.includes("ceh") || courseLowerWithSpaces.includes("ethical hacker")) {
    return cehQuestions;
  }
  if (courseLowerWithSpaces.includes("security+") || courseLowerWithSpaces.includes("comptia security")) {
    return securityPlusQuestions;
  }
  if (courseLowerWithSpaces.includes("cism")) {
    return cismQuestions;
  }
  if (courseLowerWithSpaces.includes("cissp")) {
    return cisspQuestions;
  }
  if (courseLowerWithSpaces.includes("aws") || courseLowerWithSpaces.includes("amazon")) {
    return awsQuestions;
  }
  if (courseLowerWithSpaces.includes("azure")) {
    return azureQuestions;
  }
  if (courseLowerWithSpaces.includes("google cloud") || courseLowerWithSpaces.includes("gcp")) {
    return gcpQuestions;
  }
  if (courseLowerWithSpaces.includes("kubernetes") || courseLowerWithSpaces.includes("k8s") || courseLowerWithSpaces.includes("cka")) {
    return kubernetesQuestions;
  }
  if (courseLowerWithSpaces.includes("terraform")) {
    return terraformQuestions;
  }
  if (courseLowerWithSpaces.includes("az-400") || courseLowerWithSpaces.includes("devops engineer")) {
    return az400Questions;
  }
  
  // Fallback to default
  return defaultQuestions;
};
