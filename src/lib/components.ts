import type { QuestionDTO } from "./types.ts";

export const questions: QuestionDTO[] = [
    {
        "id": 1,
        "text": "A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": "SSH",
                "correct": true
            },
            {
                "text": "TFTP",
                "correct": false
            },
            {
                "text": "DHCP",
                "correct": false,
            },
            {
                "text": "DNS",
                "correct": false
            }
        ],
    },
    { // todo(f): image
        "id": 2,
        "text": "Refer to the exhibit. What does the value of the window size specify?",
        "type": "mcq",
        "answers": [
            {
                "text": "the amount of data that can be sent at one time",
                "correct": false,
            },
            {
                "text": "the amount of data that can be sent before an acknowledgment is required",
                "correct": true
            },
            {
                "text": "the total number of bits received during this TCP session",
                "correct": false
            },
            {
                "text": "a random number that is used in establishing a connection with the 3-way handshake",
                "correct": false
            }
        ]
    },
    {
        "id": 3,
        "text": "To which TCP port group does the port 414 belong?",
        "type": "mcq",
        "answers": [
            {
                "text": "well-known",
                "correct": true
            },
            {
                "text": "private or dynamic",
                "correct": false
            },
            {
                "text": "public",
                "correct": false
            },
            {
                "text": "registered",
                "correct": false
            }
        ]
    },
    { // todo(f): image
        "id": 4,
        "text": "Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?",
        "type": "mcq",
        "answers": [
            {
                "text": "The entire command, configure terminal, must be used.",
                "correct": false
            },
            {
                "text": "The administrator is already in global configuration mode.",
                "correct": false
            },
            {
                "text": "The administrator must first enter privileged EXEC mode before issuing the command.",
                "correct": true
            },
            {
                "text": "The administrator must connect via the console port to access global configuration mode.",
                "correct": false
            }
        ]
    },
    {
        "id": 5,
        "text": "What is a user trying to determine when issuing a ping 10.1.1.1 command on a PC?",
        "type": "mcq",
        "answers": [
            {
                "text": "if the TCP/IP stack is functioning on the PC without putting traffic on the wire",
                "correct": false
            },
            {
                "text": "if there is connectivity with the destination device",
                "correct": true
            },
            {
                "text": "the path that traffic will take to reach the destination",
                "correct": false
            },
            {
                "text": "what type of device is at the destination",
                "correct": false
            }
        ]
    },
    {
        "id": 6,
        "text": "What is a characteristic of a switch virtual interface (SVI)?​",
        "type": "mcq",
        "answers": [
            {
                "text": "An SVI is created in software and requires a configured IP address and a subnet mask in order to provide remote access to the switch.",
                "correct": true
            },
            {
                "text": "Although it is a virtual interface, it needs to have physical hardware on the device associated with it.",
                "correct": false,
            },
            {
                "text": "SVIs do not require the no shutdown command to become enabled.",
                "correct": false
            },
            {
                "text": "SVIs come preconfigured on Cisco switches.",
                "correct": false
            }
        ]
    },
    {
        "id": 7,
        "text": "Match the descriptions to the terms. (Not all options are used.)",
        "type": "match",
        "staticOptions": [
            {
                text: "Telnet",
                correctMatch: null
            },
            {
                text: "CLI",
                correctMatch: "users interact with the operating system by typing commands",
            },
            {
                text: "GUI",
                correctMatch: "enables the user to interact with the operating system by pointing and clicking",
            },
            {
                text: "kernel",
                correctMatch: "the part of the OS that interacts directly with the device hardware"
            },
            {
                text: "shell",
                correctMatch: "the part of the operating system that interfaces with applications and the user"
            }
        ],
        "movableOptions": [
            "enables the user to interact with the operating system by pointing and clicking",
            "the part of the operating system that interfaces with applications and the user",
            "the part of the OS that interacts directly with the device hardware",
            "users interact with the operating system by typing commands"
        ]
    },
    {
        "id": 8,
        "text": "What happens when a switch receives a frame and the calculated CRC value is different than the value that is in the FCS field?",
        "type": "mcq",
        "answers": [
            {
                "text": "The switch notifies the source of the bad frame.",
                "correct": false
            },
            {
                "text": "The switch places the new CRC value in the FCS field and forwards the frame.",
                "correct": false
            },
            {
                "text": "The switch drops the frame.",
                "correct": true
            },
            {
                "text": "The switch floods the frame to all ports except the port through which the frame arrived to notify the hosts of the error.",
                "correct": false
            }
        ]
    },
    {
        "id": 9,
        "text": "Two network engineers are discussing the methods used to forward frames through a switch. What is an important concept related to the cut-through method of switching?",
        "type": "mcq",
        "answers": [
            {
                "text": "The fragment-free switching offers the lowest level of latency.",
                "correct": false
            },
            {
                "text": "Fast-forward switching can be viewed as a compromise between store-and-forward switching and fragment-free switching.",
                "correct": false
            },
            {
                "text": "Fragment-free switching is the typical cut-through method of switching.",
                "correct": false
            },
            {
                "text": "Packets can be relayed with errors when fast-forward switching is used.",
                "correct": true
            }
        ]
    },
    {
        "id": 10,
        "text": "Which two issues can cause both runts and giants in Ethernet networks? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "using the incorrect cable type",
                "correct": false
            },
            {
                "text": "half-duplex operations",
                "correct": true
            },
            {
                "text": "a malfunctioning NIC",
                "correct": true
            },
            {
                "text": "electrical interference on serial interfaces",
                "correct": false
            },
            {
                "text": "CRC errors",
                "correct": false
            }
        ]
    },
    {
        "id": 11,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "implements CSMA/CD over legacy shared half-duplex media",
                "correct": false
            },
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": true
            },
            {
                "text": "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
                "correct": false
            },
            {
                "text": "implements a process to delimit fields within an Ethernet 2 frame",
                "correct": false
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
                "correct": true
            }
        ]
    },
    {
        "id": 11.1,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "responsible for internal structure of Ethernet frame",
                "correct": false
            },
            {
                "text": "applies source and destination MAC addresses to Ethernet frame",
                "correct": false
            },
            {
                "text": "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
                "correct": false
            },
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": true
            },
            {
                "text": "handles communication between upper layer networking software and Ethernet NIC hardware",
                "correct": true
            }
        ]
    },
    {
        "id": 11.2,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": true
            },
            {
                "text": "responsible for internal structure of Ethernet frame",
                "correct": false
            },
            {
                "text": "implements trailer with frame check sequence for error detection",
                "correct": false
            },
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": true
            },
            {
                "text": "applies source and destination MAC addresses to Ethernet frame",
                "correct": false
            }
        ]
    },
    {
        "id": 11.3,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "implements CSMA/CD over legacy shared half-duplex media",
                "correct": false
            },
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": true
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
                "correct": true
            },
            {
                "text": "applies source and destination MAC addresses to Ethernet frame",
                "correct": false
            },
            {
                "text": "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
                "correct": false
            }
        ]
    },
    {
        "id": 12,
        "text": "Which two commands could be used to check if DNS name resolution is working properly on a Windows PC?",
        "type": "mcq",
        "answers": [
            {
                "text": "nslookup cisco.com",
                "correct": true
            },
            {
                "text": "ping cisco.com",
                "correct": true
            },
            {
                "text": "ipconfig /flushdns",
                "correct": false
            },
            {
                "text": "net cisco.com",
                "correct": false
            },
            {
                "text": "nbtstat cisco.com",
                "correct": false
            }
        ]
    },
    {
        "id": 13,
        "text": "A small advertising company has a web server that provides critical business service. The company connects to the Internet through a leased line service to an ISP. Which approach best provides cost effective redundancy for the Internet connection?",
        "type": "mcq",
        "answers": [
            {
                "text": "Add a second NIC to the web server",
                "correct": false
            },
            {
                "text": "Add a connection to the Internet via a DSL line to another ISP.",
                "correct": true
            },
            {
                "text": "Add another web server to prepare failover support.",
                "correct": false
            },
            {
                "text": "Add multiple connections between the switches and the edge router.",
                "correct": false
            }
        ]
    },
    {
        "id": 14,
        "text": "Only employees connected to IPv6 interfaces are having difficulty connecting to remote networks. The analyst wants to verify that IPv6 routing has been enabled. What is the best command to use to accomplish the task?",
        "type": "mcq",
        "answers": [
            {
                "text": "copy running-config startup-config",
                "correct": false
            },
            {
                "text": "show interfaces",
                "correct": false
            },
            {
                "text": "show ip nat translations",
                "correct": false
            },
            {
                "text": "show running-config",
                "correct": true
            }
        ]
    },
    { // todo(f): image (this ones actually text but fuck)
        "id": 15,
        "text": "Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
        "type": "mcq",
        "answers": [
            {
                "text": "192.168.235.234",
                "correct": true
            },
            {
                "text": "203.0.113.3",
                "correct": false
            },
            {
                "text": "192.168.235.1",
                "correct": false
            },
            {
                "text": "10.234.235.254",
                "correct": false
            },
            {
                "text": "192.168.234.114",
                "correct": false
            }
        ]
    },
    {
        "id": 16,
        "text": "Match the command with the device mode at which the command is entered. (Not all options are used.)",
        "type": "match",
        "staticOptions": [
            {
                text: "R1(config-line)#",
                correctMatch: "login"
            },
            {
                text: "R1(config-if)#",
                correctMatch: "ip address 192.168.4.4 255.255.255.0"
            },
            {
                text: "R1(config)#",
                correctMatch: "service password-encryption"
            },
            {
                text: "R1>",
                correctMatch: "enable"
            },
            {
                text: "R1#",
                correctMatch: "config running-config startup-config"
            }
        ],
        "movableOptions": [
            "login",
            "service password-encryption",
            "ip address 192.168.4.4 255.255.255.0",
            "config running-config startup-config",
            "enable",
        ]
    },
    {
        "id": 17,
        "text": "A router boots and enters setup mode. What is the reason for this?",
        "type": "mcq",
        "answers": [
            {
                "text": "The IOS image is corrupt.",
                "correct": false
            },
            {
                "text": "Cisco IOS is missing from flash memory.",
                "correct": false
            },
            {
                "text": "The configuration file is missing from NVRAM.",
                "correct": true
            },
            {
                "text": "The POST process has detected hardware failure.",
                "correct": false
            }
        ]
    },
    {
        "id": 18,
        "text": "What service is provided by POP3?",
        "type": "mcq",
        "answers": [
            {
                "text": "Retrieves email from the server by downloading the email to the local mail application of the client.",
                "correct": true
            },
            {
                "text": "An application that allows real-time chatting among remote users.",
                "correct": false
            },
            {
                "text": "Allows remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "Uses encryption to provide secure remote access to network devices and servers.",
                "correct": false
            }
        ]
    },
    {
        "id": 19,
        "text": "Two students are working on a network design project. One student is doing the drawing, while the other student is writing the proposal. The drawing is finished and the student wants to share the folder that contains the drawing so that the other student can access the file and copy it to a USB drive. Which networking model is being used?",
        "type": "mcq",
        "answers": [
            {
                "text": "peer-to-peer",
                "correct": true
            },
            {
                "text": "client-based",
                "correct": false
            },
            {
                "text": "master-slave",
                "correct": false
            },
            {
                "text": "point-to-point",
                "correct": false
            }
        ]
    },
    {
        "id": 20,
        "text": "Which command is used to manually query a DNS server to resolve a specific host name?",
        "type": "mcq",
        "answers": [
            {
                "text": "tracert",
                "correct": false
            },
            {
                "text": "ipconfig /displaydns",
                "correct": false
            },
            {
                "text": "nslookup",
                "correct": true
            },
            {
                "text": "net",
                "correct": false
            }
        ]
    },
    {
        "id": 21,
        "text": "Which PDU is processed when a host computer is de-encapsulating a message at the transport layer of the TCP/IP model?",
        "type": "mcq",
        "answers": [
            {
                "text": "bits",
                "correct": false
            },
            {
                "text": "frame",
                "correct": false
            },
            {
                "text": "packet",
                "correct": false
            },
            {
                "text": "segment",
                "correct": true
            }
        ]
    },
    {
        "id": 22,
        "text": "Which two OSI model layers have the same functionality as two layers of the TCP/IP model? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "data link",
                "correct": false
            },
            {
                "text": "network",
                "correct": true
            },
            {
                "text": "physical",
                "correct": false
            },
            {
                "text": "session",
                "correct": false
            },
            {
                "text": "transport",
                "correct": true
            }
        ]
    },
    {
        "id": 23,
        "text": "Which three layers of the OSI model are comparable in function to the application layer of the TCP/IP model? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "presentation",
                "correct": true
            },
            {
                "text": "physical",
                "correct": false
            },
            {
                "text": "network",
                "correct": false
            },
            {
                "text": "data link",
                "correct": false
            },
            {
                "text": "transport",
                "correct": false
            },
            {
                "text": "application",
                "correct": true
            },
            {
                "text": "session",
                "correct": true
            }
        ]
    },
    { // todo(f): image
        "id": 24,
        "text": "What task might a user be trying to accomplish by using the ping 2001:db8:FACE:39::10 command?",
        "type": "mcq",
        "answers": [
            {
                "text": "verifying that there is connectivity within the local network",
                "correct": false
            },
            {
                "text": "creating a network performance benchmark to a server on the company intranet",
                "correct": false
            },
            {
                "text": "determining the path to reach the remote server",
                "correct": false
            },
            {
                "text": "verifying that there is connectivity to the internet",
                "correct": true
            }
        ]
    },
    {
        "id": 25,
        "text": "Which two ICMP messages are used by both IPv4 and IPv6 protocols? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "neighbor solicitation",
                "correct": false
            },
            {
                "text": "router advertisement",
                "correct": false
            },
            {
                "text": "router solicitation",
                "correct": false
            },
            {
                "text": "protocol unreachable",
                "correct": true
            },
            {
                "text": "route redirection",
                "correct": true
            }
        ]
    },
    {
        "id": 26,
        "text": "A network technician types the command ping 127.0.0.1 at the command prompt on a computer. What is the technician trying to accomplish?",
        "type": "mcq",
        "answers": [
            {
                "text": "pinging a host computer that has the IP address 127.0.0.1 on the network",
                "correct": false
            },
            {
                "text": "tracing the path to a host computer on the network and the network has the IP address 127.0.0.1",
                "correct": false
            },
            {
                "text": "checking the IP address on the network card",
                "correct": false
            },
            {
                "text": "testing the integrity of the TCP/IP stack on the local machine",
                "correct": true
            }
        ]
    },
    {
        "id": 27,
        "text": "Although CSMA/CD is still a feature of Ethernet, why is it no longer necessary?",
        "type": "mcq",
        "answers": [
            {
                "text": "the virtually unlimited availability of IPv6 addresses",
                "correct": false
            },
            {
                "text": "the use of CSMA/CA",
                "correct": false
            },
            {
                "text": "the use of full-duplex capable Layer 2 switches",
                "correct": true
            },
            {
                "text": "the development of half-duplex switch operation",
                "correct": false
            },
            {
                "text": "the use of Gigabit Ethernet speeds",
                "correct": false
            }
        ]
    },
    {
        "id": 28,
        "text": "What does a router do when it receives a Layer 2 frame over the network medium?",
        "type": "mcq",
        "answers": [
            {
                "text": "re-encapsulates the packet into a new frame",
                "correct": false
            },
            {
                "text": "forwards the new frame appropriate to the medium of that segment of the physical network",
                "correct": false
            },
            {
                "text": "determines the best path",
                "correct": false
            },
            {
                "text": "de-encapsulates the frame",
                "correct": true
            }
        ]
    },
    {
        "id": 29,
        "text": "Which two acronyms represent the data link sublayers that Ethernet relies upon to operate? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "SFD",
                "correct": false
            },
            {
                "text": "LLC",
                "correct": true
            },
            {
                "text": "CSMA",
                "correct": false
            },
            {
                "text": "MAC",
                "correct": true
            },
            {
                "text": "FCS",
                "correct": false
            }
        ]
    },
    {
        "id": 30,
        "text": "A network team is comparing topologies for connecting on a shared media. Which physical topology is an example of a hybrid topology for a LAN?",
        "type": "mcq",
        "answers": [
            {
                "text": "bus",
                "correct": false
            },
            {
                "text": "extended star",
                "correct": true
            },
            {
                "text": "ring",
                "correct": false
            },
            {
                "text": "partial mesh",
                "correct": false
            }
        ]
    },
    {
        "id": 31,
        "text": "Given network 172.18.109.0, which subnet mask would be used if 6 host bits were available?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.192.0",
                "correct": false
            },
            {
                "text": "255.255.224.0",
                "correct": false
            },
            {
                "text": "255.255.255.192",
                "correct": true
            },
            {
                "text": "255.255.255.248",
                "correct": false
            },
            {
                "text": "255.255.255.252",
                "correct": false
            }
        ]
    },
    {
        "id": 32,
        "text": "Three devices are on three different subnets. Match the network address and the broadcast address with each subnet where these devices are located. (Not all options are used.)",
        "type": "match",
        "staticOptions": [
            {
                text: "192.168.10.64",
                correctMatch: "Subnet 1 network number"
            },
            {
                text: "192.168.10.95",
                correctMatch: null
            },
            {
                text: "192.168.10.19",
                correctMatch: "Subnet 2 broadcast address"
            },
            {
                text: "192.168.10.32",
                correctMatch: "Subnet 3 network number"
            },
            {
                text: "192.168.10.47",
                correctMatch: null
            },
            {
                text: "192.168.10.48",
                correctMatch: null
            },
            {
                text: "192.168.10.0",
                correctMatch: null
            },
            {
                text: "192.168.10.79",
                correctMatch: "Subnet 1 broadcast address"
            },
            {
                text: "192.168.10.255",
                correctMatch: null
            },
            {
                text: "192.168.10.16",
                correctMatch: "Subnet 2 network number"
            },
            {
                text: "192.168.10.39",
                correctMatch: "Subnet 3 broadcast address"
            }
        ],
        "movableOptions": [
            "Subnet 1 network number",
            "Subnet 2 broadcast address",
            "Subnet 3 network number",
            "Subnet 1 broadcast address",
            "Subnet 2 network number",
            "Subnet 3 broadcast address"
        ]
    },
    {
        "id": 33,
        "text": "What type of address is 198.133.219.162?",
        "type": "mcq",
        "answers": [
            {
                "text": "link-local",
                "correct": false
            },
            {
                "text": "public",
                "correct": true
            },
            {
                "text": "loopback",
                "correct": false
            },
            {
                "text": "multicast",
                "correct": false
            }
        ]
    },
    {
        "id": 34,
        "text": "What does the IP address 192.168.1.15/29 represent?",
        "type": "mcq",
        "answers": [
            {
                "text": "subnetwork address",
                "correct": false
            },
            {
                "text": "unicast address",
                "correct": false
            },
            {
                "text": "multicast address",
                "correct": false
            },
            {
                "text": "broadcast address",
                "correct": true
            }
        ]
    },
    {
        "id": 35,
        "text": "Why is NAT not needed in IPv6?",
        "type": "mcq",
        "answers": [
            {
                "text": "Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.",
                "correct": false
            },
            {
                "text": "The problems that are induced by NAT applications are solved because the IPv6 header improves packet handling by intermediate routers.",
                "correct": false
            },
            {
                "text": "The end-to-end connectivity problems that are caused by NAT are solved because the number of routes increases with the number of nodes that are connected to the Internet",
                "correct": false
            },
            {
                "text": "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.",
                "correct": true
            }
        ]
    },
    {
        "id": 36,
        "text": "What routing table entry has a next hop address associated with a destination network?",
        "type": "mcq",
        "answers": [
            {
                "text": "directly-connected routes",
                "correct": false
            },
            {
                "text": "local routes",
                "correct": false
            },
            {
                "text": "remote routes",
                "correct": true
            },
            {
                "text": "C and L source routes",
                "correct": false
            }
        ]
    },
    {
        "id": 37,
        "text": "Which term describes a field in the IPv4 packet header that contains a unicast, multicast, or broadcast address?",
        "type": "mcq",
        "answers": [
            {
                "text": "destination IPv4 address",
                "correct": true
            },
            {
                "text": "protocol",
                "correct": false
            },
            {
                "text": "TTL",
                "correct": false
            },
            {
                "text": "header checksum",
                "correct": false
            }
        ]
    },
    {
        "id": 38,
        "text": "If the default gateway is configured incorrectly on the host, what is the impact on communications?",
        "type": "mcq",
        "answers": [
            {
                "text": "There is no impact on communications.",
                "correct": false
            },
            {
                "text": "The host is unable to communicate on the local network.",
                "correct": false
            },
            {
                "text": "The host can communicate with other hosts on the local network, but is unable to communicate with hosts on remote networks.",
                "correct": true
            },
            {
                "text": "The host can communicate with other hosts on remote networks, but is unable to communicate with hosts on the local network.",
                "correct": false
            }
        ]
    },
    {
        "id": 39,
        "text": "Which is the compressed format of the IPv6 address fe80:0000:0000:0000:0220:0b3f:f0e0:0029?",
        "type": "mcq",
        "answers": [
            {
                "text": "fe80:9ea:0:2200::fe0:290",
                "correct": false
            },
            {
                "text": "fe80:9ea0::2020::bf:e0:9290",
                "correct": false
            },
            {
                "text": "fe80::220:b3f:f0e0:29",
                "correct": true
            },
            {
                "text": "fe80:9ea0::2020:0:bf:e0:9290",
                "correct": false
            }
        ]
    },
    { // todo(f): image
        "id": 40,
        "text": "Refer to the exhibit. A user issues the command netstat –r on a workstation. Which IPv6 address is one of the link-local addresses of the workstation?",
        "type": "mcq",
        "answers": [
            {
                "text": "::1/128",
                "correct": false
            },
            {
                "text": "fe80::30d0:115:3f57:fe4c/128",
                "correct": true
            },
            {
                "text": "fe80::/64",
                "correct": false
            },
            {
                "text": "2001:0:9d38:6ab8:30d0:115:3f57:fe4c/128",
                "correct": false
            }
        ]
    },
    {
        "id": 41,
        "text": "What type of IPv6 address is represented by ::1/128?",
        "type": "mcq",
        "answers": [
            {
                "text": "EUI-64 generated link-local",
                "correct": false
            },
            {
                "text": "global unicast",
                "correct": false
            },
            {
                "text": "unspecified",
                "correct": false
            },
            {
                "text": "loopback",
                "correct": true
            }
        ]
    },
    {
        "id": 42,
        "text": "Which statement describes network security?",
        "type": "mcq",
        "answers": [
            {
                "text": "It supports growth over time in accordance with approved network design procedures.",
                "correct": false
            },
            {
                "text": "It synchronizes traffic flows using timestamps.",
                "correct": false
            },
            {
                "text": "It ensures sensitive corporate data is available for authorized users.",
                "correct": true
            },
            {
                "text": "It prioritizes data flows in order to give priority to delay-sensitive traffic.",
                "correct": false
            }
        ]
    },
    {
        "id": 43,
        "text": "Which two devices would be described as intermediary devices? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "wireless LAN controller",
                "correct": true
            },
            {
                "text": "server",
                "correct": false
            },
            {
                "text": "assembly line robots",
                "correct": false
            },
            {
                "text": "IPS",
                "correct": true
            },
            {
                "text": "gaming console",
                "correct": false
            },
            {
                "text": "retail scanner",
                "correct": false
            }
        ]
    },
    {
        "id": 44,
        "text": "What characteristic describes spyware?",
        "type": "mcq",
        "answers": [
            {
                "text": "software that is installed on a user device and collects information about the user",
                "correct": true
            },
            {
                "text": "the use of stolen credentials to access private data",
                "correct": false
            },
            {
                "text": "an attack that slows or crashes a device or network service",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            }
        ]
    },
    { // todo(f): image
        "id": 45,
        "text": "Refer to the exhibit. The exhibit shows a small switched network and the contents of the MAC address table of the switch. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?",
        "type": "mcq",
        "answers": [
            {
                "text": "The switch will discard the frame.",
                "correct": false
            },
            {
                "text": "The switch will forward the frame to all ports.",
                "correct": false
            },
            {
                "text": "The switch will forward the frame only to port 2.",
                "correct": false
            },
            {
                "text": "The switch will forward the frame only to ports 1 and 3.",
                "correct": false
            },
            {
                "text": "The switch will forward the frame to all ports except port 4.",
                "correct": true
            }
        ]
    },
    {
        "id": 46,
        "text": "Which destination address is used in an ARP request frame?",
        "type": "mcq",
        "answers": [
            {
                "text": "0.0.0.0",
                "correct": false
            },
            {
                "text": "255.255.255.255",
                "correct": false
            },
            {
                "text": "the physical address of the destination host",
                "correct": false
            },
            {
                "text": "FFFF.FFFF.FFFF",
                "correct": true
            },
            {
                "text": "AAAA.AAAA.AAAA",
                "correct": false
            }
        ]
    },
    {
        "id": 47,
        "text": "Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC3. In this scenario, what will happen next?",
        "type": "mcq",
        "answers": [
            {
                "text": "SW1 will send an ARP reply with its Fa0/1 MAC address.",
                "correct": false
            },
            {
                "text": "RT1 will send an ARP reply with its own Fa0/0 MAC address.",
                "correct": true
            },
            {
                "text": "RT1 will forward the ARP request to PC3.",
                "correct": false
            },
            {
                "text": "RT1 will send an ARP reply with the PC3 MAC address.",
                "correct": false
            },
            {
                "text": "RT1 will send an ARP reply with its own Fa0/1 MAC address.",
                "correct": false
            }
        ]
    },
    {
        "id": 48,
        "text": "A network administrator is issuing the login block-for 180 attempts 2 within 30 command on a router. Which threat is the network administrator trying to prevent?",
        "type": "mcq",
        "answers": [
            {
                "text": "a user who is trying to guess a password to access the router",
                "correct": true
            },
            {
                "text": "a worm that is attempting to access another part of the network",
                "correct": false
            },
            {
                "text": "an unidentified individual who is trying to access the network equipment room",
                "correct": false
            },
            {
                "text": "a device that is trying to inspect the traffic on a link",
                "correct": false
            }
        ]
    },
    {
        "id": 49,
        "text": "Which statement describes the characteristics of packet-filtering and stateful firewalls as they relate to the OSI model?",
        "type": "mcq",
        "answers": [
            {
                "text": "A packet-filtering firewall uses session layer information to track the state of a connection, whereas a stateful firewall uses application layer information to track the state of a connection.",
                "correct": false
            },
            {
                "text": "Both stateful and packet-filtering firewalls can filter at the application layer.",
                "correct": false
            },
            {
                "text": "A packet-filtering firewall typically can filter up to the transport layer, whereas a stateful firewall can filter up to the session layer.",
                "correct": true
            },
            {
                "text": "A stateful firewall can filter application layer information, whereas a packet-filtering firewall cannot filter beyond the network layer.",
                "correct": false
            }
        ]
    },
    {
        "id": 50,
        "text": "What are two ways to protect a computer from malware? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Empty the browser cache.",
                "correct": false
            },
            {
                "text": "Use antivirus software.",
                "correct": true
            },
            {
                "text": "Delete unused software.",
                "correct": false
            },
            {
                "text": "Keep software up to date.",
                "correct": true
            },
            {
                "text": "Defragment the hard disk.",
                "correct": false
            }
        ]
    },
    {
        "id": 51,
        "text": "The employees and residents of Ciscoville cannot access the Internet or any remote web-based services. IT workers quickly determine that the city firewall is being flooded with so much traffic that a breakdown of connectivity to the Internet is occurring. Which type of attack is being launched at Ciscoville?",
        "type": "mcq",
        "answers": [
            {
                "text": "access",
                "correct": false
            },
            {
                "text": "Trojan horse",
                "correct": false
            },
            {
                "text": "reconnaissance",
                "correct": false
            },
            {
                "text": "DoS",
                "correct": true
            }
        ]
    },
    {
        "id": 52,
        "text": "Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Fiber-optic cabling does not conduct electricity.",
                "correct": true
            },
            {
                "text": "Multimode fiber-optic cabling carries signals from multiple sending devices.",
                "correct": false
            },
            {
                "text": "Fiber-optic cabling is primarily used as backbone cabling.",
                "correct": true
            },
            {
                "text": "Fiber-optic cabling uses LEDs for single-mode cab​les and laser technology for multimode cables.",
                "correct": false
            },
            {
                "text": "Fiber-optic cabling has high signal loss.",
                "correct": false
            }
        ]
    },
    {
        "id": 53,
        "text": "What OSI physical layer term describes the measure of the transfer of bits across a medium over a given period of time?",
        "type": "mcq",
        "answers": [
            {
                "text": "latency",
                "correct": false
            },
            {
                "text": "goodput",
                "correct": false
            },
            {
                "text": "throughput",
                "correct": true
            },
            {
                "text": "bandwidth",
                "correct": false
            }
        ]
    },
    {
        "id": 54,
        "text": "Refer to the exhibit. What is the maximum possible throughput between the PC and the server?",
        "type": "mcq",
        "answers": [
            {
                "text": "10 Mb/s",
                "correct": false
            },
            {
                "text": "1000 Mb/s",
                "correct": false
            },
            {
                "text": "128 kb/s",
                "correct": true
            },
            {
                "text": "100 Mb/s",
                "correct": false
            }
        ]
    },
    {
        "id": 55,
        "text": "Match the description with the media. (Not all options are used.)",
        "type": "match",
        "staticOptions": [
            {
                text: "This type of copper media is used in industrial or similar environments where there is a lot of interference.",
                correctMatch: "STP"
            },
            {
                text: "Traditionally used for television but can now be used in a network to connect the customer location to the wiring of the customer premises.",
                correctMatch: "coaxial"
            },
            {
                text: "This type of media is used in wired office environments.",
                correctMatch: null
            },
            {
                text: "This type of media is used for high transmission speed and can also transfer data over long distances.",
                correctMatch: "optical fiber"
            },
            {
                text: "This type of media provides the most mobility options.",
                correctMatch: "wireless"
            }
        ],
        "movableOptions": [
            "wireless",
            "coaxial",
            "optical fiber",
            "STP"
        ]
    },
    {
        "id": 56,
        "text": "A Wireshark capture is shown with the Transmission Control Protocol section expanded. The item highlighted states Window size: 9017.",
        "type": "mcq",
        "answers": [
            {
                "text": "tracing the path to a host computer on the network and the network has the IP address 127.0.0.1",
                "correct": false
            },
            {
                "text": "testing the integrity of the TCP/IP stack on the local machine",
                "correct": true
            },
            {
                "text": "pinging a host computer that has the IP address 127.0.0.1 on the network",
                "correct": false
            },
            {
                "text": "checking the IP address on the network card",
                "correct": false
            }
        ]
    }
]