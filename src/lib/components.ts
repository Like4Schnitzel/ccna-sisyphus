import type { QuestionDTO } from "./types.ts";

export const questions: QuestionDTO[] = [
    {
        "id": 0,
        "text": "Which connector is used with twisted-pair cabling in an Ethernet LAN?",
        "type": "mcq",
        "answers": [
            {
                "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-exam/en-US/assets/i192179v1n1_lc-connector.png",
                "correct": false
            },
            {
                "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-exam/en-US/assets/i192179v1n1_rj-11-2.png",
                "correct": false
            },
            {
                "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-exam/en-US/assets/i192179v1n1_bnc.png",
                "correct": false
            },
            {
                "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-exam/en-US/assets/i192179v1n1_rj-45.png",
                "correct": true
            },
            {
                "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-exam/en-US/assets/i192179v1n1_sc-connector.png",
                "correct": false
            }
        ]
    },
    {
        "id": 1,
        "text": "Refer to the exhibit. Host B on subnet Teachers transmits a packet to host D on subnet Students. Which Layer 2 and Layer 3 addresses are contained in the PDUs that are transmitted from host B to the router?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i204796v11n1_204796-topology-arp.png",
        "imgAlt": "The graphic contains two subnets. The subnet Teachers contains two hosts connected through a switch: host A with MAC address 00-00-0c-94-36-aa and IP address 172.16.10.100/24, and host B with MAC address 00-00-0c-94-36-bb and IP address 172.16.10.200/24. The switch is connected to the router through the Fast Ethernet 0 interface. This interface has a MAC address 00-00-0c-94-36-ab and an IP address 172.16.10.99/24. The other interface of the router, Fast Ethernet 1 has a MAC address 00-00-0c-94-36-cd and IP address 172.16.20.99/24. This interface is part of subnet Students and it is connected to another switch. Two other hosts are connected to this switch: host C with MAC address 00-00-0c-94-36-cc and IP address 172.16.20.100/24, and host D with MAC address 00-00-0c-94-36-dd and IP address 172.16.20.200/24.",
        "answers": [
            {
                "text": "Layer 2 destination address = 00-00-0c-94-36-ab\nLayer 2 source address = 00-00-0c-94-36-bb\nLayer 3 destination address = 172.16.20.200\nLayer 3 source address = 172.16.10.200",
                "correct": true
            },
            {
                "text": "Layer 2 destination address = 00-00-0c-94-36-dd\nLayer 2 source address = 00-00-0c-94-36-bb\nLayer 3 destination address = 172.16.20.200\nLayer 3 source address = 172.16.10.200",
                "correct": false
            },
            {
                "text": "Layer 2 destination address = 00-00-0c-94-36-cd\nLayer 2 source address = 00-00-0c-94-36-bb\nLayer 3 destination address = 172.16.20.99\nLayer 3 source address = 172.16.10.200",
                "correct": false
            },
            {
                "text": "Layer 2 destination address = 00-00-0c-94-36-ab\nLayer 2 source address = 00-00-0c-94-36-bb\nLayer 3 destination address = 172.16.20.200\nLayer 3 source address = 172.16.100.200",
                "correct": false
            }
        ]
    },
    {
        "id": 2,
        "text": "Three bank employees are using the corporate network. The first employee uses a web browser to view a company web page in order to read some announcements. The second employee accesses the corporate database to perform some financial transactions. The third employee participates in an important live audio conference with other corporate managers in branch offices. If QoS is implemented on this network, what will be the priorities from highest to lowest of the different data types?",
        "type": "mcq",
        "answers": [
            {
                "text": "audio conference, financial transactions, web page",
                "correct": true
            },
            {
                "text": "financial transactions, web page, audio conference",
                "correct": false
            },
            {
                "text": "audio conference, web page, financial transactions",
                "correct": false
            },
            {
                "text": "financial transactions, audio conference, web page",
                "correct": false
            }
        ]
    },
    {
        "id": 3,
        "text": "What are proprietary protocols?",
        "type": "mcq",
        "answers": [
            {
                "text": "protocols developed by private organizations to operate on any vendor hardware",
                "correct": false
            },
            {
                "text": "protocols that can be freely used by any organization or vendor",
                "correct": false
            },
            {
                "text": "protocols developed by organizations who have control over their definition and operation",
                "correct": true
            },
            {
                "text": "a collection of protocols known as the TCP/IP protocol suite",
                "correct": false
            }
        ]
    },
    {
        "id": 4,
        "text": "What will happen if the default gateway address is incorrectly configured on a host?",
        "type": "mcq",
        "answers": [
            {
                "text": "The host cannot communicate with other hosts in the local network.",
                "correct": false
            },
            {
                "text": "The switch will not forward packets initiated by the host.",
                "correct": false
            },
            {
                "text": "The host will have to use ARP to determine the correct address of the default gateway.",
                "correct": false
            },
            {
                "text": "The host cannot communicate with hosts in other networks.",
                "correct": true
            },
            {
                "text": "A ping from the host to 127.0.0.1 would not be successful.",
                "correct": false
            }
        ]
    },
    {
        "id": 5,
        "text": "Which scenario describes a function provided by the transport layer?",
        "type": "mcq",
        "answers": [
            {
                "text": "A student is using a classroom VoIP phone to call home. The unique identifier burned into the phone is a transport layer address used to contact another network device on the same network.",
                "correct": false
            },
            {
                "text": "A student is playing a short web-based movie with sound. The movie and sound are encoded within the transport layer header.",
                "correct": false
            },
            {
                "text": "A student has two web browser windows open in order to access two web sites. The transport layer ensures the correct web page is delivered to the correct browser window.",
                "correct": true
            },
            {
                "text": "A corporate worker is accessing a web server located on a corporate network. The transport layer formats the screen so the web page appears properly no matter what device is being used to view the web site.",
                "correct": false
            }
        ]
    },
    {
        "id": 6,
        "text": "Which value, that is contained in an IPv4 header field, is decremented by each router that receives a packet?",
        "type": "mcq",
        "answers": [
            {
                "text": "Differentiated Services",
                "correct": false
            },
            {
                "text": "Fragment Offset",
                "correct": false
            },
            {
                "text": "Header Length",
                "correct": false
            },
            {
                "text": "Time-to-Live",
                "correct": true
            }
        ]
    },
    {
        "id": 7,
        "text": "Which two statements describe features of an IPv4 routing table on a router? (Choose two.)​",
        "type": "mcq",
        "answers": [
            {
                "text": "The netstat -r command can be used to display the routing table of a router.​",
                "correct": false
            },
            {
                "text": "Directly connected interfaces will have two route source codes in the routing table: C and S.",
                "correct": false
            },
            {
                "text": "It stores information about routes derived from the active router interfaces.",
                "correct": true
            },
            {
                "text": "If there are two or more possible routes to the same destination, the route associated with the higher metric value is included in the routing table.",
                "correct": false
            },
            {
                "text": "If a default static route is configured in the router, an entry will be included in the routing table with source code S.",
                "correct": true
            },
            {
                "text": "The routing table lists the MAC addresses of each active interface.",
                "correct": false
            }
        ]
    },
    {
        "id": 8,
        "text": "What attribute of a NIC would place it at the data link layer of the OSI model?",
        "type": "mcq",
        "answers": [
            {
                "text": "Attached Ethernet cable",
                "correct": false
            },
            {
                "text": "IP address",
                "correct": false
            },
            {
                "text": "MAC address",
                "correct": true
            },
            {
                "text": "RJ-45 port",
                "correct": false
            },
            {
                "text": "TCP/IP protocol stack",
                "correct": false
            }
        ]
    },
    {
        "id": 9,
        "text": "A network administrator needs to keep the user ID, password, and session contents private when establishing remote CLI connectivity with a switch to manage it. Which access method should be chosen?",
        "type": "mcq",
        "answers": [
            {
                "text": "Telnet",
                "correct": false
            },
            {
                "text": "Console",
                "correct": false
            },
            {
                "text": "AUX",
                "correct": false
            },
            {
                "text": "SSH",
                "correct": true
            }
        ]
    },
    {
        "id": 10,
        "text": "Which two statements accurately describe an advantage or a disadvantage when deploying NAT for IPv4 in a network? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "NAT improves packet handling.",
                "correct": false
            },
            {
                "text": "NAT adds authentication capability to IPv4.",
                "correct": false
            },
            {
                "text": "NAT will impact negatively on switch performance.",
                "correct": false
            },
            {
                "text": "NAT causes routing tables to include more information.",
                "correct": false
            },
            {
                "text": "NAT provides a solution to slow down the IPv4 address depletion.",
                "correct": true
            },
            {
                "text": "NAT introduces problems for some applications that require end-to-end connectivity.",
                "correct": true
            }
        ]
    },
    {
        "id": 11,
        "text": "What technique is used with UTP cable to help protect against signal interference from crosstalk?",
        "type": "mcq",
        "answers": [
            {
                "text": "twisting the wires together into pairs",
                "correct": true
            },
            {
                "text": "wrapping a foil shield around the wire pairs",
                "correct": false
            },
            {
                "text": "encasing the cables within a flexible plastic sheath",
                "correct": false
            },
            {
                "text": "terminating the cable with special grounded connectors",
                "correct": false
            }
        ]
    },
    {
        "id": 12,
        "text": "What are two problems that can be caused by a large number of ARP request and reply messages? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "A large number of ARP request and reply messages may slow down the switching process, leading the switch to make many changes in its MAC table.",
                "correct": false
            },
            {
                "text": "All ARP request messages must be processed by all nodes on the local network.",
                "correct": true
            },
            {
                "text": "The ARP request is sent as a broadcast, and will flood the entire subnet.",
                "correct": true
            },
            {
                "text": "The network may become overloaded because ARP reply messages have a very large payload due to the 48-bit MAC address and 32-bit IP address that they contain.",
                "correct": false
            },
            {
                "text": "Switches become overloaded because they concentrate all the traffic from the attached subnets.",
                "correct": false
            }
        ]
    },
    {
        "id": 13,
        "type": "match",
        "text": "Match the characteristic to the category.",
        "movableOptions": [
            "IP address",
            "MAC address"
        ],
        "staticOptions": [
            {
                "text": "Contained in the Layer 3 header",
                "correctMatch": "IP address"
            },
            {
                "text": "Separated into a network portion and a unique identifier",
                "correctMatch": "IP address"
            },
            {
                "text": "32 or 128 bits",
                "correctMatch": "IP address"
            },
            {
                "text": "Contained in the Layer 2 header",
                "correctMatch": "MAC address"
            },
            {
                "text": "Separated into OUI and a unique identifier",
                "correctMatch": "MAC address"
            },
            {
                "text": "48 bits",
                "correctMatch": "MAC address"
            }
        ]
    },
    {
        "id": 14,
        "type": "match",
        "text": "Match the header field with the appropriate layer of the OSI model.",
        "movableOptions": [
            "Layer 2",
            "Layer 3",
            "Layer 4"
        ],
        "staticOptions": [
            {
                "text": "FCS (frame check sequence)",
                "correctMatch": "Layer 2"
            },
            {
                "text": "802.2 header",
                "correctMatch": "Layer 2"
            },
            {
                "text": "destination MAC address",
                "correctMatch": "Layer 2"
            },
            {
                "text": "source IP address",
                "correctMatch": "Layer 3"
            },
            {
                "text": "TTL",
                "correctMatch": "Layer 3"
            },
            {
                "text": "destination port number",
                "correctMatch": "Layer 4"
            },
            {
                "text": "Acknowledgement number",
                "correctMatch": "Layer 4"
            }
        ]
    },
    {
        "id": 15,
        "text": "A host is trying to send a packet to a device on a remote LAN segment, but there are currently no mappings in its ARP cache. How will the device obtain a destination MAC address?",
        "type": "mcq",
        "answers": [
            {
                "text": "It will send an ARP request for the MAC address of the destination device.",
                "correct": false
            },
            {
                "text": "It will send an ARP request for the MAC address of the default gateway.",
                "correct": true
            },
            {
                "text": "It will send the frame and use its own MAC address as the destination.",
                "correct": false
            },
            {
                "text": "It will send the frame with a broadcast MAC address.",
                "correct": false
            },
            {
                "text": "It will send a request to the DNS server for the destination MAC address.",
                "correct": false
            }
        ]
    },
    {
        "id": 16,
        "text": "What are two ICMPv6 messages that are not present in ICMP for IPv4? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Destination Unreachable",
                "correct": false
            },
            {
                "text": "Host Confirmation",
                "correct": false
            },
            {
                "text": "Neighbor Solicitation",
                "correct": true
            },
            {
                "text": "Route Redirection",
                "correct": false
            },
            {
                "text": "Router Advertisement",
                "correct": true
            },
            {
                "text": "Time Exceeded",
                "correct": false
            }
        ]
    },
    {
        "id": 17,
        "text": "What are the three parts of an IPv6 global unicast address? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "broadcast address",
                "correct": false
            },
            {
                "text": "global routing prefix",
                "correct": true
            },
            {
                "text": "subnet mask",
                "correct": false
            },
            {
                "text": "subnet ID",
                "correct": true
            },
            {
                "text": "interface ID",
                "correct": true
            }
        ]
    },
    {
        "id": 18,
        "text": "Which subnet would include the address 192.168.1.96 as a usable host address?",
        "type": "mcq",
        "answers": [
            {
                "text": "192.168.1.64/26",
                "correct": true
            },
            {
                "text": "192.168.1.32/27",
                "correct": false
            },
            {
                "text": "192.168.1.32/28",
                "correct": false
            },
            {
                "text": "192.168.1.64/29",
                "correct": false
            }
        ]
    },
    {
        "id": 19,
        "text": "Refer to the exhibit. A company uses the address block of 128.107.0.0/16 for its network. What subnet mask would provide the maximum number of equal size subnets while providing enough host addresses for each subnet in the exhibit?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i207609v1n1_207609.png",
        "imgAlt": "A central router is directly connected to four other routers.  Each of those routers is connected to a cloud of computers.  The clouds are labeled \"75 Hosts\", \"100 Hosts\", \"25 Hosts\", and \"50 Hosts\".",
        "answers": [
            {
                "text": "255.255.255.0",
                "correct": false
            },
            {
                "text": "255.255.255.128",
                "correct": true
            },
            {
                "text": "255.255.255.192",
                "correct": false
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.240",
                "correct": false
            }
        ]
    },
    {
        "id": 20,
        "type": "match",
        "text": "Refer to the exhibit. Match the network with the correct IP address and prefix that will satisfy the usable host addressing requirements for each network.",
        "staticOptions": [
            {
                "text": "Network C",
                "correctMatch": "192.168.0.192 /27"
            },
            {
                "text": "Network A",
                "correctMatch": "192.168.0.0 /25"
            },
            {
                "text": "Network D",
                "correctMatch": "192.168.0.224 /30"
            },
            {
                "text": "Network B",
                "correctMatch": "192.168.0.128 /26"
            }
        ],
        "movableOptions": [
            "192.168.0.192 /27",
            "192.168.0.0 /25",
            "192.168.0.224 /30",
            "192.168.0.128 /26"
        ]
    },
    {
        "id": 21,
        "text": "How does the service password-encryption command enhance password security on Cisco routers and switches?",
        "type": "mcq",
        "answers": [
            {
                "text": "It encrypts passwords as they are sent across the network.",
                "correct": false
            },
            {
                "text": "It encrypts passwords that are stored in router or switch configuration files.",
                "correct": true
            },
            {
                "text": "It requires that a user type encrypted passwords to gain console access to a router or switch.",
                "correct": false
            },
            {
                "text": "It requires encrypted passwords to be used when connecting remotely to a router or switch with Telnet.",
                "correct": false
            }
        ]
    },
    {
        "id": 22,
        "type": "match",
        "text": "Match the firewall function to the type of threat protection it provides to the network.",
        "staticOptions": [
            {
                "text": "prevents access based on IP or MAC address",
                "correctMatch": "packet filtering"
            },
            {
                "text": "prevents access to websites",
                "correctMatch": "URL filtering"
            },
            {
                "text": "prevents unsolicited incoming sessions",
                "correctMatch": "stateful packet inspection"
            },
            {
                "text": "prevents access by port number",
                "correctMatch": "application filtering"
            }
        ],
        "movableOptions": [
            "packet filtering",
            "URL filtering",
            "stateful packet inspection",
            "application filtering"
        ]
    },
    {
        "id": 23,
        "type": "match",
        "text": "Match each description to its corresponding term.",
        "staticOptions": [
            {
                "text": "message encoding",
                "correctMatch": "the process of converting information from one format into another acceptable for transmission"
            },
            {
                "text": "message encapsulation",
                "correctMatch": "the process of placing one message format inside another message format"
            },
            {
                "text": "message sizing",
                "correctMatch": "the process of breaking up a long message into individual pieces before being sent over the network"
            }
        ],
        "movableOptions": [
            "the process of converting information from one format into another acceptable for transmission",
            "the process of placing one message format inside another message format",
            "the process of breaking up a long message into individual pieces before being sent over the network"
        ]
    },
    {
        "id": 24,
        "text": "A disgruntled employee is using some free wireless networking tools to determine information about the enterprise wireless networks. This person is planning on using this information to hack the wireless network. What type of attack is this?",
        "type": "mcq",
        "answers": [
            {
                "text": "Reconnaissance",
                "correct": true
            },
            {
                "text": "Access",
                "correct": false
            },
            {
                "text": "DoS",
                "correct": false
            },
            {
                "text": "Trojan horse",
                "correct": false
            }
        ]
    },
    {
        "id": 25,
        "text": "A company has a file server that shares a folder named Public. The network security policy specifies that the Public folder is assigned Read-Only rights to anyone who can log into the server while the Edit rights are assigned only to the network admin group. Which component is addressed in the AAA network service framework?",
        "type": "mcq",
        "answers": [
            {
                "text": "accounting",
                "correct": false
            },
            {
                "text": "automation",
                "correct": false
            },
            {
                "text": "authorization",
                "correct": true
            },
            {
                "text": "authentication",
                "correct": false
            }
        ]
    },
    {
        "id": 26,
        "text": "Why would a Layer 2 switch need an IP address?",
        "type": "mcq",
        "answers": [
            {
                "text": "to enable the switch to send broadcast frames to attached PCs",
                "correct": false
            },
            {
                "text": "to enable the switch to function as a default gateway",
                "correct": false
            },
            {
                "text": "to enable the switch to be managed remotely",
                "correct": true
            },
            {
                "text": "to enable the switch to receive frames from attached PCs",
                "correct": false
            }
        ]
    },
    {
        "id": 27,
        "text": "Refer to the exhibit. An administrator is trying to configure the switch but receives the error message that is displayed in the exhibit. What is the problem?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i208399v1n1_question_1.png",
        "imgAlt": "A CLI output that says the following:  Switch1> config t             ^ % Invalid input detected at '^' marker.  The ^ is under the \"f\" in the word \"config\"",
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
        "id": 28,
        "text": "What command can be used on a Windows PC to see the IP configuration of that computer?",
        "type": "mcq",
        "answers": [
            {
                "text": "ping",
                "correct": false
            },
            {
                "text": "ipconfig",
                "correct": true
            },
            {
                "text": "show interfaces",
                "correct": false
            },
            {
                "text": "show ip interface brief",
                "correct": false
            }
        ]
    },
    {
        "id": 29,
        "text": "What is an advantage to using a protocol that is defined by an open standard?",
        "type": "mcq",
        "answers": [
            {
                "text": "A company can monopolize the market.",
                "correct": false
            },
            {
                "text": "The protocol can only be run on equipment from a specific vendor.",
                "correct": false
            },
            {
                "text": "An open standard protocol is not controlled or regulated by standards organizations.",
                "correct": false
            },
            {
                "text": "It encourages competition and promotes choices.",
                "correct": true
            }
        ]
    },
    {
        "id": 30,
        "text": "What are two functions that are provided by the network layer? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "carrying data between processes that are running on source and destination hosts",
                "correct": false
            },
            {
                "text": "providing end devices with a unique network identifier",
                "correct": true
            },
            {
                "text": "placing data on the network medium",
                "correct": false
            },
            {
                "text": "directing data packets to destination hosts on other networks",
                "correct": true
            },
            {
                "text": "providing dedicated end-to-end connections",
                "correct": false
            }
        ]
    },
    {
        "id": 31,
        "text": "Which two commands can be used on a Windows host to display the routing table? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "netstat -s",
                "correct": false
            },
            {
                "text": "route print",
                "correct": true
            },
            {
                "text": "show ip route",
                "correct": false
            },
            {
                "text": "netstat -r",
                "correct": true
            },
            {
                "text": "tracert",
                "correct": false
            }
        ]
    },
    {
        "id": 32,
        "text": "During the process of forwarding traffic, what will the router do immediately after matching the destination IP address to a network on a directly connected routing table entry?",
        "type": "mcq",
        "answers": [
            {
                "text": "discard the traffic after consulting the route table",
                "correct": false
            },
            {
                "text": "look up the next-hop address for the packet",
                "correct": false
            },
            {
                "text": "switch the packet to the directly connected interface",
                "correct": true
            },
            {
                "text": "analyze the destination IP address",
                "correct": false
            }
        ]
    },
    {
        "id": 33,
        "text": "Which two statements are correct in a comparison of IPv4 and IPv6 packet headers? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "The Header Checksum field name from IPv4 is kept in IPv6.",
                "correct": false
            },
            {
                "text": "The Destination Address field is new in IPv6.",
                "correct": false
            },
            {
                "text": "The Source Address field name from IPv4 is kept in IPv6.",
                "correct": true
            },
            {
                "text": "The Version field from IPv4 is not kept in IPv6.",
                "correct": false
            },
            {
                "text": "The Time-to-Live field from IPv4 has been replaced by the Hop Limit field in IPv6.",
                "correct": true
            }
        ]
    },
    {
        "id": 34,
        "type": "match",
        "text": "Match the description to the IPv6 addressing component.",
        "staticOptions": [
            {
                "text": "This network portion of the address is assigned by the provider.",
                "correctMatch": "global routing prefix"
            },
            {
                "text": "This part of the address is used by an organization to identify subnets.",
                "correctMatch": "subnet ID"
            },
            {
                "text": "This part of the address is the equivalent to the host portion of an IPv4 address.",
                "correctMatch": "interface ID"
            }
        ],
        "movableOptions": [
            "global routing prefix",
            "subnet ID",
            "interface ID"
        ]
    },
    {
        "id": 35,
        "text": "Two pings were issued from a host on a local network. The first ping was issued to the IP address of the default gateway of the host and it failed. The second ping was issued to the IP address of a host outside the local network and it was successful. What is a possible cause for the failed ping?",
        "type": "mcq",
        "answers": [
            {
                "text": "The default gateway device is configured with the wrong IP address.",
                "correct": false
            },
            {
                "text": "Security rules are applied to the default gateway device, preventing it from processing ping requests.",
                "correct": true
            },
            {
                "text": "The default gateway is not operational.",
                "correct": false
            },
            {
                "text": "The TCP/IP stack on the default gateway is not working properly.",
                "correct": false
            }
        ]
    },
    {
        "id": 36,
        "type": "match",
        "text": "Match each description with the corresponding TCP mechanism.",
        "staticOptions": [
            {
                "text": "received by a sender before transmitting more segments in a session",
                "correctMatch": "acknowledgment"
            },
            {
                "text": "method of managing segments of data loss",
                "correctMatch": "retransmission"
            },
            {
                "text": "used to identify missing segments of data",
                "correctMatch": "sequence numbers"
            },
            {
                "text": "number of bytes a destination device can accept and process at one time",
                "correctMatch": "window size"
            }
        ],
        "movableOptions": [
            "acknowledgment",
            "retransmission",
            "sequence numbers",
            "window size"
        ]
    },
    {
        "id": 37,
        "type": "match",
        "text": "Match a statement to the related network model.",
        "movableOptions": [
            "peer-to-peer network",
            "peer-to-peer application"
        ],
        "staticOptions": [
            {
                "text": "no dedicated server is required",
                "correctMatch": "peer-to-peer network"
            },
            {
                "text": "client and server roles are set on a per request basis",
                "correctMatch": "peer-to-peer network"
            },
            {
                "text": "requires a specific user interface",
                "correctMatch": "peer-to-peer application"
            },
            {
                "text": "a background service is required",
                "correctMatch": "peer-to-peer application"
            }
        ]
    },
    {
        "id": 38,
        "text": "What two pieces of information are displayed in the output of the show ip interface brief command? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "IP addresses",
                "correct": true
            },
            {
                "text": "MAC addresses",
                "correct": false
            },
            {
                "text": "Layer 1 statuses",
                "correct": true
            },
            {
                "text": "Next-hop addresses",
                "correct": false
            },
            {
                "text": "Interface descriptions",
                "correct": false
            },
            {
                "text": "Speed and duplex settings",
                "correct": false
            }
        ]
    },
    {
        "id": 39,
        "text": "Refer to the exhibit. PC1 issues an ARP request because it needs to send a packet to PC2. In this scenario, what will happen next?​",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i209824v1n1_209824.png",
        "imgAlt": "The exhibit shows a network topology. PC1 and PC2 are connected to the Fa0/1 and Fa0/2 ports of the SW1 switch, respectively. SW1 is connected through its Fa0/3 port to the Fa0/0 interface of the RT1 router. RT1 is connected through its Fa0/1 to the Fa0/2 port of SW2 switch. SW2 is connected through its Fa0/1 port to the PC3.",
        "answers": [
            {
                "text": "PC2 will send an ARP reply with its MAC address.",
                "correct": true
            },
            {
                "text": "RT1 will send an ARP reply with its Fa0/0 MAC address.​",
                "correct": false
            },
            {
                "text": "RT1 will send an ARP reply with the PC2 MAC address.​",
                "correct": false
            },
            {
                "text": "SW1 will send an ARP reply with the PC2 MAC address.​",
                "correct": false
            },
            {
                "text": "SW1 will send an ARP reply with its Fa0/1 MAC address.​",
                "correct": false
            }
        ]
    },
    {
        "id": 40,
        "type": "match",
        "text": "Match the characteristic to the forwarding method.",
        "movableOptions": [
            "cut-through",
            "store-and-forward"
        ],
        "staticOptions": [
            {
                "text": "low latency",
                "correctMatch": "cut-through"
            },
            {
                "text": "may forward runt frames",
                "correctMatch": "cut-through"
            },
            {
                "text": "begins forwarding when the destination address is received",
                "correctMatch": "cut-through"
            },
            {
                "text": "always stores the entire frame",
                "correctMatch": "store-and-forward"
            },
            {
                "text": "checks the CRC before forwarding",
                "correctMatch": "store-and-forward"
            },
            {
                "text": "checks the frame length before forwarding",
                "correctMatch": "store-and-forward"
            }
        ]
    },
    {
        "id": 41,
        "text": "A network administrator notices that some newly installed Ethernet cabling is carrying corrupt and distorted data signals. The new cabling was installed in the ceiling close to fluorescent lights and electrical equipment. Which two factors may interfere with the copper cabling and result in signal distortion and data corruption? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "EMI",
                "correct": true
            },
            {
                "text": "Crosstalk",
                "correct": false
            },
            {
                "text": "RFI​",
                "correct": true
            },
            {
                "text": "Signal attenuation",
                "correct": false
            },
            {
                "text": "Extended length of cabling",
                "correct": false
            }
        ]
    },
    {
        "id": 42,
        "text": "A network administrator is designing the layout of a new wireless network. Which three areas of concern should be accounted for when building a wireless network? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "mobility options",
                "correct": false
            },
            {
                "text": "security",
                "correct": true
            },
            {
                "text": "interference",
                "correct": true
            },
            {
                "text": "coverage area",
                "correct": true
            },
            {
                "text": "extensive cabling",
                "correct": false
            },
            {
                "text": "packet collision",
                "correct": false
            }
        ]
    },
    {
        "id": 43,
        "text": "What method is used to manage contention-based access on a wireless network?",
        "type": "mcq",
        "answers": [
            {
                "text": "CSMA/CD",
                "correct": false
            },
            {
                "text": "priority ordering",
                "correct": false
            },
            {
                "text": "CSMA/CA",
                "correct": true
            },
            {
                "text": "token passing",
                "correct": false
            }
        ]
    },
    {
        "id": 44,
        "text": "Which two statements are correct about MAC and IP addresses during data transmission if NAT is not involved? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "A packet that has crossed four routers has changed the destination IP address four times.",
                "correct": false
            },
            {
                "text": "Destination MAC addresses will never change in a frame that goes across seven routers.",
                "correct": false
            },
            {
                "text": "Destination and source MAC addresses have local significance and change every time a frame goes from one LAN to another.",
                "correct": true
            },
            {
                "text": "Destination IP addresses in a packet header remain constant along the entire path to a target host.",
                "correct": true
            },
            {
                "text": "Every time a frame is encapsulated with a new destination MAC address, a new destination IP address is needed.",
                "correct": false
            }
        ]
    },
    {
        "id": 45,
        "type": "match",
        "text": "Match the type of threat with the cause.",
        "staticOptions": [
            {
                "text": "maintenance threats",
                "correctMatch": "poor handling of key electrical components (electrostatic discharge), lack of critical spare parts, poor cabling, and poor labeling"
            },
            {
                "text": "environmental threats",
                "correctMatch": "temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry)"
            },
            {
                "text": "hardware threats",
                "correctMatch": "physical damage to servers, routers, switches, cabling plant, and workstations"
            },
            {
                "text": "electrical threats",
                "correctMatch": "voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss"
            }
        ],
        "movableOptions": [
            "poor handling of key electrical components (electrostatic discharge), lack of critical spare parts, poor cabling, and poor labeling",
            "temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry)",
            "physical damage to servers, routers, switches, cabling plant, and workstations",
            "voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss"
        ]
    },
    {
        "id": 46,
        "text": "What are two features of ARP? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "If a host is ready to send a packet to a local destination device and it has the IP address but not the MAC address of the destination, it generates an ARP broadcast.",
                "correct": true
            },
            {
                "text": "An ARP request is sent to all devices on the Ethernet LAN and contains the IP address of the destination host and its multicast MAC address.",
                "correct": false
            },
            {
                "text": "When a host is encapsulating a packet into a frame, it refers to the MAC address table to determine the mapping of IP addresses to MAC addresses.",
                "correct": false
            },
            {
                "text": "If no device responds to the ARP request, then the originating node will broadcast the data packet to all devices on the network segment.",
                "correct": false
            },
            {
                "text": "If a device receiving an ARP request has the destination IPv4 address, it responds with an ARP reply.",
                "correct": true
            }
        ]
    },
    {
        "id": 47,
        "text": "A client is using SLAAC to obtain an IPv6 address for its interface. After an address has been generated and applied to the interface, what must the client do before it can begin to use this IPv6 address?",
        "type": "mcq",
        "answers": [
            {
                "text": "It must send a DHCPv6 INFORMATION-REQUEST message to request the address of the DNS server.",
                "correct": false
            },
            {
                "text": "It must send an ICMPv6 Router Solicitation message to determine what default gateway it should use.",
                "correct": false
            },
            {
                "text": "It must send a DHCPv6 REQUEST message to the DHCPv6 server to request permission to use this address.",
                "correct": false
            },
            {
                "text": "It must send an ICMPv6 Neighbor Solicitation message to ensure that the address is not already in use on the network.",
                "correct": true
            }
        ]
    },
    {
        "id": 48,
        "text": "Which switching method drops frames that fail the FCS check?",
        "type": "mcq",
        "answers": [
            {
                "text": "borderless switching",
                "correct": false
            },
            {
                "text": "cut-through switching",
                "correct": false
            },
            {
                "text": "ingress port buffering",
                "correct": false
            },
            {
                "text": "store-and-forward switching",
                "correct": true
            }
        ]
    },
    {
        "id": 49,
        "text": "An organization is assigned an IPv6 address block of 2001:db8:0:ca00::/56. How many subnets can be created without using bits in the interface ID space?",
        "type": "mcq",
        "answers": [
            {
                "text": "256",
                "correct": true
            },
            {
                "text": "512",
                "correct": false
            },
            {
                "text": "1024",
                "correct": false
            },
            {
                "text": "4096",
                "correct": false
            }
        ]
    },
    {
        "id": 50,
        "text": "A group of Windows PCs in a new subnet has been added to an Ethernet network. When testing the connectivity, a technician finds that these PCs can access local network resources but not the Internet resources. To troubleshoot the problem, the technician wants to initially confirm the IP address and DNS configurations on the PCs, and also verify connectivity to the local router. Which three Windows CLI commands and utilities will provide the necessary information? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "arp -a",
                "correct": false
            },
            {
                "text": "ipconfig",
                "correct": true
            },
            {
                "text": "nslookup",
                "correct": true
            },
            {
                "text": "ping",
                "correct": true
            },
            {
                "text": "telnet",
                "correct": false
            },
            {
                "text": "tracert",
                "correct": false
            },
            {
                "text": "netsh interface ipv6 show neighbor",
                "correct": false
            }
        ]
    },
    {
        "id": 51,
        "text": "Users are reporting longer delays in authentication and in accessing network resources during certain time periods of the week. What kind of information should network engineers check to find out if this situation is part of a normal network behavior?",
        "type": "mcq",
        "answers": [
            {
                "text": "syslog records and messages",
                "correct": false
            },
            {
                "text": "the network performance baseline",
                "correct": true
            },
            {
                "text": "debug output and packet captures",
                "correct": false
            },
            {
                "text": "network configuration files",
                "correct": false
            }
        ]
    },
    {
        "id": 52,
        "text": "Which type of security threat would be responsible if a spreadsheet add-on disables the local software firewall?",
        "type": "mcq",
        "answers": [
            {
                "text": "DoS",
                "correct": false
            },
            {
                "text": "Buffer overflow",
                "correct": false
            },
            {
                "text": "Trojan horse",
                "correct": true
            },
            {
                "text": "Brute-force attack",
                "correct": false
            }
        ]
    },
    {
        "id": 53,
        "text": "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
        "type": "mcq",
        "answers": [
            {
                "text": "Reboot the device.",
                "correct": false
            },
            {
                "text": "Enter CTRL-Z at the privileged mode prompt.",
                "correct": false
            },
            {
                "text": "Exit global configuration mode.",
                "correct": false
            },
            {
                "text": "Power cycle the device.",
                "correct": false
            },
            {
                "text": "Exit privileged EXEC mode and press Enter.",
                "correct": true
            }
        ]
    },
    {
        "id": 54,
        "type": "match",
        "text": "Match the application protocols to the correct transport protocols.",
        "movableOptions": [
            "TCP",
            "UDP"
        ],
        "staticOptions": [
            {
                "text": "FTP",
                "correctMatch": "TCP"
            },
            {
                "text": "HTTP",
                "correctMatch": "TCP"
            },
            {
                "text": "SMTP",
                "correctMatch": "TCP"
            },
            {
                "text": "DHCP",
                "correctMatch": "UDP"
            },
            {
                "text": "TFTP",
                "correctMatch": "UDP"
            }
        ]
    },
    {
        "id": 55,
        "text": "An administrator defined a local user account with a secret password on router R1 for use with SSH. Which three additional steps are required to configure R1 to accept only encrypted SSH connections? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Configure the IP domain name on the router.",
                "correct": true
            },
            {
                "text": "Enable inbound vty Telnet sessions.",
                "correct": false
            },
            {
                "text": "Generate the SSH keys.",
                "correct": true
            },
            {
                "text": "Configure DNS on the router.",
                "correct": false
            },
            {
                "text": "Enable inbound vty SSH sessions.",
                "correct": true
            },
            {
                "text": "Generate two-way pre-shared keys.",
                "correct": false
            }
        ]
    },
    {
        "id": 56,
        "text": "Which information does the show startup-config command display?",
        "type": "mcq",
        "answers": [
            {
                "text": "the IOS image copied into RAM",
                "correct": false
            },
            {
                "text": "the bootstrap program in the ROM",
                "correct": false
            },
            {
                "text": "the contents of the current running configuration file in the RAM",
                "correct": false
            },
            {
                "text": "the contents of the saved configuration file in the NVRAM",
                "correct": true
            }
        ]
    },
    {
        "id": 57,
        "text": "A user sends an HTTP request to a web server on a remote network. During encapsulation for this request, what information is added to the address field of a frame to indicate the destination?",
        "type": "mcq",
        "answers": [
            {
                "text": "the MAC address of the destination host",
                "correct": false
            },
            {
                "text": "the network domain of the destination host",
                "correct": false
            },
            {
                "text": "the MAC address of the default gateway",
                "correct": true
            },
            {
                "text": "the IP address of the default gateway",
                "correct": false
            }
        ]
    },
    {
        "id": 58,
        "type": "match",
        "text": "Match each description with an appropriate IP address.",
        "staticOptions": [
            {
                "text": "a loopback address",
                "correctMatch": "127.0.0.1"
            },
            {
                "text": "an experimental address",
                "correctMatch": "240.2.6.255"
            },
            {
                "text": "a public address",
                "correctMatch": "198.133.219.2"
            },
            {
                "text": "a link-local address",
                "correctMatch": "169.254.1.5"
            }
        ],
        "movableOptions": [
            "127.0.0.1",
            "240.2.6.255",
            "198.133.219.2",
            "169.254.1.5"
        ]
    },
    {
        "id": 59,
        "text": "What two ICMPv6 message types must be permitted through IPv6 access control lists to allow resolution of Layer 3 addresses to Layer 2 MAC addresses? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "echo replies",
                "correct": false
            },
            {
                "text": "echo requests",
                "correct": false
            },
            {
                "text": "router solicitations",
                "correct": false
            },
            {
                "text": "router advertisements",
                "correct": false
            },
            {
                "text": "neighbor advertisements",
                "correct": true
            },
            {
                "text": "neighbor solicitations",
                "correct": true
            }
        ]
    },
    {
        "id": 60,
        "text": "What is the consequence of configuring a router with the ipv6 unicast-routing global configuration command?",
        "type": "mcq",
        "answers": [
            {
                "text": "All router interfaces will be automatically activated.",
                "correct": false
            },
            {
                "text": "It statically creates a global unicast address on this router.​",
                "correct": false
            },
            {
                "text": "The IPv6 enabled router interfaces begin sending ICMPv6 Router Advertisement messages.",
                "correct": true
            },
            {
                "text": "Each router interface will generate an IPv6 link-local address.​",
                "correct": false
            }
        ]
    },
    {
        "id": 61,
        "text": "What mechanism is used by a router to prevent a received IPv4 packet from traveling endlessly on a network?",
        "type": "mcq",
        "answers": [
            {
                "text": "It checks the value of the TTL field and if it is 0, it discards the packet and sends a Destination Unreachable message to the source host.",
                "correct": false
            },
            {
                "text": "It checks the value of the TTL field and if it is 100, it discards the packet and sends a Destination Unreachable message to the source host.",
                "correct": false
            },
            {
                "text": "It decrements the value of the TTL field by 1 and if the result is 0, it discards the packet and sends a Time Exceeded message to the source host.",
                "correct": true
            },
            {
                "text": "It increments the value of the TTL field by 1 and if the result is 100, it discards the packet and sends a Parameter Problem message to the source host.",
                "correct": false
            }
        ]
    },
    {
        "id": 62,
        "text": "What is one main characteristic of the data link layer?",
        "type": "mcq",
        "answers": [
            {
                "text": "It generates the electrical or optical signals that represent the 1 and 0 on the media.",
                "correct": false
            },
            {
                "text": "It converts a stream of data bits into a predefined code.",
                "correct": false
            },
            {
                "text": "It shields the upper layer protocol from being aware of the physical medium to be used in the communication.",
                "correct": true
            },
            {
                "text": "It accepts Layer 3 packets and decides the path by which to forward the packet to a remote network.",
                "correct": false
            }
        ]
    },
    {
        "id": 63,
        "type": "match",
        "text": "Match each item to the type of topology diagram on which it is typically identified.",
        "movableOptions": [
            "physical topology diagram",
            "logical topology diagram"
        ],
        "staticOptions": [
            {
                "text": "location of a desktop PC in a classroom",
                "correctMatch": "physical topology diagram"
            },
            {
                "text": "path of cables that connect rooms to wiring closets",
                "correctMatch": "physical topology diagram"
            },
            {
                "text": "IP address of a server",
                "correctMatch": "logical topology diagram"
            }
        ]
    },
    {
        "id": 64,
        "text": "Which range of link-local addresses can be assigned to an IPv6-enabled interface?​",
        "type": "mcq",
        "answers": [
            {
                "text": "FEC0::/10​",
                "correct": false
            },
            {
                "text": "FDEE::/7​",
                "correct": false
            },
            {
                "text": "FE80::/10",
                "correct": true
            },
            {
                "text": "FF00::/8​",
                "correct": false
            }
        ]
    },
    {
        "id": 65,
        "text": "Refer to the exhibit. If PC1 is sending a packet to PC2 and routing has been configured between the two routers, what will R1 do with the Ethernet frame header attached by PC1?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i271152v1n1_271152.png",
        "imgAlt": "The exhibit shows PC1 assigned an address of 192.168.10.8/24 attached to a switch that is attached to the G0/0 port of R1. R1 has a serial connection to R2 through port S0/0/0 on both routers. Port G0/0 on router R2 connects to a switch that connects to a PC labeled PC2 with the IP address of 192.168.11.5/24.",
        "answers": [
            {
                "text": "nothing, because the router has a route to the destination network",
                "correct": false
            },
            {
                "text": "remove the Ethernet header and configure a new Layer 2 header before sending it out S0/0/0",
                "correct": true
            },
            {
                "text": "open the header and replace the destination MAC address with a new one",
                "correct": false
            },
            {
                "text": "open the header and use it to determine whether the data is to be sent out S0/0/0",
                "correct": false
            }
        ]
    },
    {
        "id": 66,
        "text": "Refer to the exhibit. Which protocol was responsible for building the table that is shown?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i271168v4n1_Item-271168.png",
        "imgAlt": "The graphic contains the following information: <output omitted>   Interface: 192.168.1.67 --- 0xa  Internet Address        Physical Address      Type 192.168.1.254           64-0f-29-0d-36-91     dynamic 192.168.1.255           ff-ff-ff-ff-ff-ff            static 224.0.0.22                 01-00-5e-00-00-16    static   224.0.0.251               01-00-5e-00-00-fb     static 224.0.0.252               01-00-5e-00-00-fc     static 255.255.255.255        ff-ff-ff-ff-ff-ff     static Interface: 10.82.253.91 --- 0x10  Internet Address        Physical Address      Type 10.82.253.92             64-0f-29-0d-36-91     dynamic 224.0.0.22                 01-00-5e-00-00-16     static   224.0.0.251               01-00-5e-00-00-fb     static 224.0.0.252               01-00-5e-00-00-fc     static 255.255.255.255       ff-ff-ff-ff-ff-ff            static​",
        "answers": [
            {
                "text": "DHCP",
                "correct": false
            },
            {
                "text": "DNS",
                "correct": false
            },
            {
                "text": "ARP",
                "correct": true
            },
            {
                "text": "ICMP",
                "correct": false
            }
        ]
    },
    {
        "id": 67,
        "text": "An IPv6 enabled device sends a data packet with the destination address of FF02::2. What is the target of this packet?​",
        "type": "mcq",
        "answers": [
            {
                "text": "all IPv6 enabled devices across the network​",
                "correct": false
            },
            {
                "text": "all IPv6 enabled devices on the local link​",
                "correct": false
            },
            {
                "text": "all IPv6 DHCP servers​",
                "correct": false
            },
            {
                "text": "all IPv6 configured routers on the local link​",
                "correct": true
            }
        ]
    },
    {
        "id": 68,
        "text": "A network technician is researching the use of fiber optic cabling in a new technology center. Which two issues should be considered before implementing fiber optic media? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Fiber optic provides higher data capacity but is more expensive than copper cabling.",
                "correct": true
            },
            {
                "text": "Fiber optic cabling is susceptible to loss of signal due to RFI.",
                "correct": false
            },
            {
                "text": "Fiber optic cable is able to withstand rough handling.",
                "correct": false
            },
            {
                "text": "Fiber optic cabling requires different termination and splicing expertise from what copper cabling requires.",
                "correct": true
            },
            {
                "text": "Fiber optic cabling requires specific grounding to be immune to EMI.",
                "correct": false
            }
        ]
    },
    {
        "id": 69,
        "text": "What are two characteristics shared by TCP and UDP? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "default window size",
                "correct": false
            },
            {
                "text": "connectionless communication",
                "correct": false
            },
            {
                "text": "port numbering",
                "correct": true
            },
            {
                "text": "3-way handshake",
                "correct": false
            },
            {
                "text": "ability to to carry digitized voice",
                "correct": false
            },
            {
                "text": "use of checksum",
                "correct": true
            }
        ]
    },
    {
        "id": 70,
        "text": "What are two characteristics of IP? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "does not require a dedicated end-to-end connection",
                "correct": true
            },
            {
                "text": "operates independently of the network media",
                "correct": true
            },
            {
                "text": "retransmits packets if errors occur",
                "correct": false
            },
            {
                "text": "re-assembles out of order packets into the correct order at the receiver end",
                "correct": false
            },
            {
                "text": "guarantees delivery of packets",
                "correct": false
            }
        ]
    },
    {
        "id": 71,
        "text": "What two security solutions are most likely to be used only in a corporate environment? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "virtual private networks",
                "correct": true
            },
            {
                "text": "antivirus software",
                "correct": false
            },
            {
                "text": "strong passwords",
                "correct": false
            },
            {
                "text": "intrusion prevention systems",
                "correct": true
            },
            {
                "text": "antispyware",
                "correct": false
            }
        ]
    },
    {
        "id": 72,
        "text": "Refer to the exhibit. What three facts can be determined from the viewable output of the show ip interface brief command? (Choose three.)",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i274067v1n1_274067.png",
        "imgAlt": "The exhibit show the output from the show ip interface brief command executed on a switch. The output is as follows: Switch#  show ip interface brief Interface          IP-Address       OK?   Method   Status    Protocol FastEthernet0/1     unassigned      YES     manual      up          up FastEthernet0/2     unassigned      YES     manual     down   down FastEthernet0/3     unassigned      YES     manual     down   down FastEthernet0/5     unassigned      YES     manual     down   down FastEthernet0/6     unassigned      YES     manual     down   down (output omitted) FastEthernet0/23  unassigned       YES     manual     down   down FastEthernet0/24  unassigned       YES     manual     down   down Vlan1                      192.168.11.3     YES    manual     up         up",
        "answers": [
            {
                "text": "Two physical interfaces have been configured.",
                "correct": false
            },
            {
                "text": "The switch can be remotely managed.",
                "correct": true
            },
            {
                "text": "One device is attached to a physical interface.",
                "correct": true
            },
            {
                "text": "Passwords have been configured on the switch.",
                "correct": false
            },
            {
                "text": "Two devices are attached to the switch.",
                "correct": false
            },
            {
                "text": "The default SVI has been configured.",
                "correct": true
            }
        ]
    },
    {
        "id": 73,
        "text": "What is a benefit of using cloud computing in networking?",
        "type": "mcq",
        "answers": [
            {
                "text": "End users have the freedom to use personal tools to access information and communicate across a business network.",
                "correct": false
            },
            {
                "text": "Network capabilities are extended without requiring investment in new infrastructure, personnel, or software.",
                "correct": true
            },
            {
                "text": "Technology is integrated into every-day appliances allowing them to interconnect with other devices, making them more 'smart' or automated.",
                "correct": false
            },
            {
                "text": "Home networking uses existing electrical wiring to connect devices to the network wherever there is an electrical outlet, saving the cost of installing data cables.",
                "correct": false
            }
        ]
    },
    {
        "id": 74,
        "text": "An employee of a large corporation remotely logs into the company using the appropriate username and password. The employee is attending an important video conference with a customer concerning a large sale. It is important for the video quality to be excellent during the meeting. The employee is unaware that after a successful login, the connection to the company ISP failed. The secondary connection, however, activated within seconds. The disruption was not noticed by the employee or other employees.What three network characteristics are described in this scenario? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "integrity",
                "correct": false
            },
            {
                "text": "fault tolerance",
                "correct": true
            },
            {
                "text": "scalability",
                "correct": false
            },
            {
                "text": "quality of service",
                "correct": true
            },
            {
                "text": "security",
                "correct": true
            },
            {
                "text": "powerline networking",
                "correct": false
            }
        ]
    },
    {
        "id": 75,
        "text": "Which two traffic types use the Real-Time Transport Protocol (RTP)? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "voice",
                "correct": true
            },
            {
                "text": "video",
                "correct": true
            },
            {
                "text": "web",
                "correct": false
            },
            {
                "text": "peer to peer",
                "correct": false
            },
            {
                "text": "file transfer",
                "correct": false
            }
        ]
    },
    {
        "id": 76,
        "text": "Which two statements describe how to assess traffic flow patterns and network traffic types using a protocol analyzer? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Capture traffic on the weekends when most employees are off work.",
                "correct": false
            },
            {
                "text": "Only capture traffic in the areas of the network that receive most of the traffic such as the data center.",
                "correct": false
            },
            {
                "text": "Capture traffic during peak utilization times to get a good representation of the different traffic types.",
                "correct": true
            },
            {
                "text": "Perform the capture on different network segments.",
                "correct": true
            },
            {
                "text": "Only capture WAN traffic because traffic to the web is responsible for the largest amount of traffic on a network.",
                "correct": false
            }
        ]
    },
    {
        "id": 77,
        "text": "Refer to the exhibit. What is wrong with the displayed termination?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i274300v1n1_209630.png",
        "imgAlt": "The graphic displays a terminated RJ45 connector. The untwisted wires at the end of the PVC sheath are crimped by the connector.",
        "answers": [
            {
                "text": "The woven copper braid should not have been removed.",
                "correct": false
            },
            {
                "text": "The wrong type of connector is being used.",
                "correct": false
            },
            {
                "text": "The untwisted length of each wire is too long.",
                "correct": true
            },
            {
                "text": "The wires are too thick for the connector that is used.",
                "correct": false
            }
        ]
    },
    {
        "id": 78,
        "text": "A wired laser printer is attached to a home computer. That printer has been shared so that other computers on the home network can also use the printer. What networking model is in use?",
        "type": "mcq",
        "answers": [
            {
                "text": "peer-to-peer (P2P)",
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
        "id": 79,
        "text": "When a switch configuration includes a user-defined error threshold on a per-port basis, to which switching method will the switch revert when the error threshold is reached?",
        "type": "mcq",
        "answers": [
            {
                "text": "fragment-free",
                "correct": false
            },
            {
                "text": "fast-forward",
                "correct": false
            },
            {
                "text": "cut-through",
                "correct": false
            },
            {
                "text": "store-and-forward",
                "correct": true
            }
        ]
    },
    {
        "id": 80,
        "text": "A user is attempting to access http://www.cisco.com/ without success. Which two configuration values must be set on the host to allow this access? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "DNS server",
                "correct": true
            },
            {
                "text": "Source port number",
                "correct": false
            },
            {
                "text": "HTTP server",
                "correct": false
            },
            {
                "text": "Default gateway",
                "correct": true
            },
            {
                "text": "Source MAC address",
                "correct": false
            }
        ]
    },
    {
        "id": 81,
        "text": "What subnet mask is needed if an IPv4 network has 40 devices that need IP addresses and address space is not to be wasted?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.0",
                "correct": false
            },
            {
                "text": "255.255.255.128",
                "correct": false
            },
            {
                "text": "255.255.255.192",
                "correct": true
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.240",
                "correct": false
            }
        ]
    },
    {
        "id": 82,
        "text": "A network administrator wants to have the same subnet mask for three subnetworks at a small site. The site has the following networks and numbers of devices:Subnetwork A: IP phones – 10 addressesSubnetwork B: PCs – 8 addresses Subnetwork C: Printers – 2 addresses What single subnet mask would be appropriate to use for the three subnetworks?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.0",
                "correct": false
            },
            {
                "text": "255.255.255.240",
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
        "id": 83,
        "text": "A network administrator wants to have the same network mask for all networks at a particular small site. The site has the following networks and number of devices:IP phones – 22 addressesPCs – 20 addresses neededPrinters – 2 addresses neededScanners – 2 addresses neededThe network administrator has deemed that 192.168.10.0/24 is to be the network used at this site. Which single subnet mask would make the most efficient use of the available addresses to use for the four subnetworks?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.0",
                "correct": false
            },
            {
                "text": "255.255.255.192",
                "correct": false
            },
            {
                "text": "255.255.255.224",
                "correct": true
            },
            {
                "text": "255.255.255.240",
                "correct": false
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
        "id": 84,
        "text": "Refer to the exhibit. Which two network addresses can be assigned to the network containing 10 hosts? Your answers should waste the fewest addresses, not reuse addresses that are already assigned, and stay within the 10.18.10.0/24 range of addresses. (Choose two.)",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i274518v1n1_247518.png",
        "imgAlt": "The exhibit shows the R1 router with three separate connections to three switches. Each switch has a PC. Under each PC from left to right are the following numbers and words: 10.18.10.0/26, 10.18.10.192/29, and 10 hosts.",
        "answers": [
            {
                "text": "10.18.10.200/28",
                "correct": false
            },
            {
                "text": "10.18.10.208/28",
                "correct": true
            },
            {
                "text": "10.18.10.224/28",
                "correct": true
            },
            {
                "text": "10.18.10.200/27",
                "correct": false
            },
            {
                "text": "10.18.10.224/27",
                "correct": false
            },
            {
                "text": "10.18.10.240/27",
                "correct": false
            }
        ]
    },
    {
        "id": 85,
        "text": "Refer to the exhibit. The network administrator has assigned the LAN of LBMISS an address range of 192.168.10.0. This address range has been subnetted using a /29 prefix. In order to accommodate a new building, the technician has decided to use the fifth subnet for configuring the new network (subnet zero is the first subnet). By company policies, the router interface is always assigned the first usable host address and the workgroup server is given the last usable host address. Which configuration should be entered into the properties of the workgroup server to allow connectivity to the Internet?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i274544v1n1_209840.png",
        "imgAlt": "Four PCs and a server are connected to a switch. The switch is connected the the LBMISS router. The LBMISS router is connected via a serial link to the \"cloud\" labeled ISP.",
        "answers": [
            {
                "text": "IP address: 192.168.10.65 subnet mask: 255.255.255.240, default gateway: 192.168.10.76",
                "correct": false
            },
            {
                "text": "IP address: 192.168.10.38 subnet mask: 255.255.255.240, default gateway: 192.168.10.33",
                "correct": false
            },
            {
                "text": "IP address: 192.168.10.38 subnet mask: 255.255.255.248, default gateway: 192.168.10.33",
                "correct": true
            },
            {
                "text": "IP address: 192.168.10.41 subnet mask: 255.255.255.248, default gateway: 192.168.10.46",
                "correct": false
            },
            {
                "text": "IP address: 192.168.10.254 subnet mask: 255.255.255.0, default gateway: 192.168.10.1",
                "correct": false
            }
        ]
    },
    {
        "id": 86,
        "text": "What three requirements are defined by the protocols used in network communcations to allow message transmission across a network? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "connector specifications",
                "correct": false
            },
            {
                "text": "message encoding",
                "correct": true
            },
            {
                "text": "media selection",
                "correct": false
            },
            {
                "text": "message size",
                "correct": true
            },
            {
                "text": "delivery options",
                "correct": true
            },
            {
                "text": "end-device installation",
                "correct": false
            }
        ]
    },
    {
        "id": 87,
        "text": "Refer to the exhibit. If host A sends an IP packet to host B, what will the destination address be in the frame when it leaves host A?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i274590v1n1_274590.png",
        "imgAlt": "Host A has IP address 172.168.10.99 /26 and a MAC address of AA:AA:AA:AA:AA:AA. A switch connects between host A and an Ethernet port on router R2. That port has an IP address of 172.168.10.65 /26 and a MAC address of BB:BB:BB:BB:BB:BB. R2 connects to router R1 via a serial port assigned 172.168.10.129 /30. The R1 serial interface has the IP address of 172.168.10.130 /30. The R1 Ethernet port connected to another switch has an IP address of 172.168.11.65 /26 and a MAC address of CC:CC:CC:CC:CC:CC. Host B connects to the same switch as R1. Host B has an IP address of 172.168.11.88 /26 and a MAC address of DD:DD:DD:DD:DD:DD.",
        "answers": [
            {
                "text": "DD:DD:DD:DD:DD:DD",
                "correct": false
            },
            {
                "text": "172.168.10.99",
                "correct": false
            },
            {
                "text": "CC:CC:CC:CC:CC:CC",
                "correct": false
            },
            {
                "text": "172.168.10.65",
                "correct": false
            },
            {
                "text": "BB:BB:BB:BB:BB:BB",
                "correct": true
            },
            {
                "text": "AA:AA:AA:AA:AA:AA",
                "correct": false
            }
        ]
    },
    {
        "id": 88,
        "text": "What is the purpose of the TCP sliding window?",
        "type": "mcq",
        "answers": [
            {
                "text": "to inform a source to retransmit data from a specific point forward",
                "correct": false
            },
            {
                "text": "to request that a source decrease the rate at which it transmits data",
                "correct": true
            },
            {
                "text": "to end communication when data transmission is complete",
                "correct": false
            },
            {
                "text": "to ensure that segments arrive in order at the destination",
                "correct": false
            }
        ]
    },
    {
        "id": 89,
        "text": "Data is being sent from a source PC to a destination server. Which three statements correctly describe the function of TCP or UDP in this situation? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "The UDP destination port number identifies the application or service on the server which will handle the data.",
                "correct": true
            },
            {
                "text": "TCP is the preferred protocol when a function requires lower network overhead.",
                "correct": false
            },
            {
                "text": "UDP segments are encapsulated within IP packets for transport across the network.",
                "correct": true
            },
            {
                "text": "The source port field identifies the running application or service that will handle data returning to the PC.",
                "correct": true
            },
            {
                "text": "The TCP source port number identifies the sending host on the network.",
                "correct": false
            },
            {
                "text": "The TCP process running on the PC randomly selects the destination port when establishing a session with the server.",
                "correct": false
            }
        ]
    },
    {
        "id": 90,
        "text": "A technician can ping the IP address of the web server of a remote company but cannot successfully ping the URL address of the same web server. Which software utility can the technician use to diagnose the problem?",
        "type": "mcq",
        "answers": [
            {
                "text": "tracert",
                "correct": false
            },
            {
                "text": "ipconfig",
                "correct": false
            },
            {
                "text": "netstat",
                "correct": false
            },
            {
                "text": "nslookup",
                "correct": true
            }
        ]
    },
    {
        "id": 91,
        "text": "Refer to the exhibit. The switches are in their default configuration. Host A needs to communicate with host D, but host A does not have the MAC address for its default gateway. Which network hosts will receive the ARP request sent by host A?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i275353v1n1_275353.png",
        "imgAlt": "Three hosts (labeled A, B, and C) connect to a switch that connects to router R1. Router R1 connects through a serial connection to router R2. R2 connects to a switch that connects to host D.",
        "answers": [
            {
                "text": "only host D",
                "correct": false
            },
            {
                "text": "only router R1",
                "correct": false
            },
            {
                "text": "only hosts A, B, and C",
                "correct": false
            },
            {
                "text": "only hosts A, B, C, and D",
                "correct": false
            },
            {
                "text": "only hosts B and C",
                "correct": false
            },
            {
                "text": "only hosts B, C, and router R1",
                "correct": true
            }
        ]
    },
    {
        "id": 92,
        "text": "Refer to the exhibit. If Host1 were to transfer a file to the server, what layers of the TCP/IP model would be used?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i275370v1n1_275370.png",
        "imgAlt": "Host1 connects to Switch1 and then to Router1. Router1 connects to Router2 via a serial link. Router2 connects to Switch2 and Switch2 connects to a server. Router2 also connects to an ISP via a serial link.",
        "answers": [
            {
                "text": "only application and Internet layers",
                "correct": false
            },
            {
                "text": "only Internet and network access layers",
                "correct": false
            },
            {
                "text": "only application, Internet, and network access layers",
                "correct": false
            },
            {
                "text": "application, transport, Internet, and network access layers",
                "correct": true
            },
            {
                "text": "only application, transport, network, data link, and physical layers",
                "correct": false
            },
            {
                "text": "application, session, transport, network, data link, and physical layers",
                "correct": false
            }
        ]
    },
    {
        "id": 93,
        "text": "A user is executing a tracert to a remote device. At what point would a router, which is in the path to the destination device, stop forwarding the packet?",
        "type": "mcq",
        "answers": [
            {
                "text": "when the router receives an ICMP Time Exceeded message",
                "correct": false
            },
            {
                "text": "when the RTT value reaches zero",
                "correct": false
            },
            {
                "text": "when the host responds with an ICMP Echo Reply message",
                "correct": false
            },
            {
                "text": "when the value in the TTL field reaches zero",
                "correct": true
            },
            {
                "text": "when the values of both the Echo Request and Echo Reply messages reach zero",
                "correct": false
            }
        ]
    },
    {
        "id": 94,
        "type": "match",
        "text": "Match each type of frame field to its function.",
        "staticOptions": [
            {
                "text": "Error detection",
                "correctMatch": "This field checks if the frame has been damaged during the transfer."
            },
            {
                "text": "Addressing",
                "correctMatch": "This field helps to direct the frame toward its destination."
            },
            {
                "text": "Frame start",
                "correctMatch": "This field identifies the beginning of a frame."
            },
            {
                "text": "Type",
                "correctMatch": "This field is used by the LLC to identify the Layer 3 protocol."
            }
        ],
        "movableOptions": [
            "This field checks if the frame has been damaged during the transfer.",
            "This field helps to direct the frame toward its destination.",
            "This field identifies the beginning of a frame.",
            "This field is used by the LLC to identify the Layer 3 protocol."
        ]
    },
    {
        "id": 95,
        "text": "What is an advantage for small organizations of adopting IMAP instead of POP?",
        "type": "mcq",
        "answers": [
            {
                "text": "Messages are kept in the mail servers until they are manually deleted from the email client.",
                "correct": true
            },
            {
                "text": "When the user connects to a POP server, copies of the messages are kept in the mail server for a short time, but IMAP keeps them for a long time.",
                "correct": false
            },
            {
                "text": "IMAP sends and retrieves email, but POP only retrieves email.",
                "correct": false
            },
            {
                "text": "POP only allows the client to store messages in a centralized way, while IMAP allows distributed storage.",
                "correct": false
            }
        ]
    },
    {
        "id": 96,
        "text": "Refer to the exhibit. On the basis of the output, which two statements about network connectivity are correct? (Choose two.)",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i275429v1n1_chapter-9-wan-images2.jpg",
        "imgAlt": "The graphic displays the following: C:\\Windows\\system32> tracert 192.168.100.1 Tracing route to 192.168.100.1 over a maximum of 30 hops 1   1 ms   <1 ms   <1 ms    10.10.10.10 2   2 ms    2 ms    1 ms    192.168.1.22 3   2 ms    2 ms    1 ms    192.168.1.62 4   2 ms    2 ms    1 ms    172.16.1.1 Trace complete.",
        "answers": [
            {
                "text": "There is connectivity between this device and the device at 192.168.100.1.",
                "correct": true
            },
            {
                "text": "The connectivity between these two hosts allows for videoconferencing calls.",
                "correct": false
            },
            {
                "text": "There are 4 hops between this device and the device at 192.168.100.1.",
                "correct": true
            },
            {
                "text": "The average transmission time between the two hosts is 2 milliseconds.",
                "correct": false
            },
            {
                "text": "This host does not have a default gateway configured.",
                "correct": false
            }
        ]
    },
    {
        "id": 97,
        "text": "What are three characteristics of the CSMA/CD process? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Devices can be configured with a higher transmission priority.",
                "correct": false
            },
            {
                "text": "A jam signal indicates that the collision has cleared and the media is not busy.",
                "correct": false
            },
            {
                "text": "A device listens and waits until the media is not busy before transmitting.",
                "correct": true
            },
            {
                "text": "The device with the electronic token is the only one that can transmit after a collision.",
                "correct": false
            },
            {
                "text": "All of the devices on a segment see data that passes on the network medium.",
                "correct": true
            },
            {
                "text": "After detecting a collision, hosts can attempt to resume transmission after a random time delay has expired.",
                "correct": true
            }
        ]
    },
    {
        "id": 98,
        "text": "Which three layers of the OSI model map to the application layer of the TCP/IP model? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "application",
                "correct": true
            },
            {
                "text": "presentation",
                "correct": true
            },
            {
                "text": "session",
                "correct": true
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
                "text": "network",
                "correct": false
            }
        ]
    },
    {
        "id": 99,
        "text": "Users report that the network access is slow. After questioning the employees, the network administrator learned that one employee downloaded a third-party scanning program for the printer. What type of malware might be introduced that causes slow performance of the network?",
        "type": "mcq",
        "answers": [
            {
                "text": "worm",
                "correct": true
            },
            {
                "text": "virus",
                "correct": false
            },
            {
                "text": "spam",
                "correct": false
            },
            {
                "text": "phishing",
                "correct": false
            }
        ]
    },
    {
        "id": 100,
        "text": "What are the two most effective ways to defend against malware? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "Implement network firewalls.",
                "correct": false
            },
            {
                "text": "Update the operating system and other application software.",
                "correct": true
            },
            {
                "text": "Implement a VPN.",
                "correct": false
            },
            {
                "text": "Implement RAID.",
                "correct": false
            },
            {
                "text": "Install and update antivirus software.",
                "correct": true
            },
            {
                "text": "Implement strong passwords.",
                "correct": false
            }
        ]
    },
    {
        "id": 101,
        "text": "Refer to the exhibit. The IP address of which device interface should be used as the default gateway setting of host H1?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i284612v1n1_dg-item.jpg",
        "imgAlt": "The graphic shows a network topology that consists of three routers, R1, R2, and R3, that are connected to one another by serial links. The R1 G0/0 and G0/1 interfaces are attached to one LAN switch each. Each LAN switch has three hosts attached to it. One of the hosts that is attached to the G0/0 interface of R1 is labeled as H1. The R1 S0/0/0 interface is attached to R2. The R2 S0/0/1 interface is attached to a cloud that is labelled ISP. The R2 S0/1/0 interface is attached to the S0/0/0 interface of R3. The G0/0 interface of R3 is attached to a LAN switch. The LAN switch has three hosts attached to it.",
        "answers": [
            {
                "text": "R1: G0/0",
                "correct": true
            },
            {
                "text": "R1: S0/0/0",
                "correct": false
            },
            {
                "text": "R2: S0/0/0",
                "correct": false
            },
            {
                "text": "R2: S0/0/1",
                "correct": false
            }
        ]
    },
    {
        "id": 102,
        "text": "Which wireless technology has low-power and data rate requirements making it popular in home automation applications?",
        "type": "mcq",
        "answers": [
            {
                "text": "LoRaWAN",
                "correct": false
            },
            {
                "text": "5G",
                "correct": false
            },
            {
                "text": "Wi-Fi",
                "correct": false
            },
            {
                "text": "ZigBee",
                "correct": true
            }
        ]
    },
    {
        "id": 103,
        "text": "Which layer of the TCP/IP model provides a route to forward messages through an internetwork?",
        "type": "mcq",
        "answers": [
            {
                "text": "application",
                "correct": false
            },
            {
                "text": "network access",
                "correct": false
            },
            {
                "text": "internet",
                "correct": true
            },
            {
                "text": "transport",
                "correct": false
            }
        ]
    },
    {
        "id": 104,
        "text": "Which type of server relies on record types such as A, NS, AAAA, and MX in order to provide services?",
        "type": "mcq",
        "answers": [
            {
                "text": "DNS",
                "correct": true
            },
            {
                "text": "Email",
                "correct": false
            },
            {
                "text": "File",
                "correct": false
            },
            {
                "text": "Web",
                "correct": false
            }
        ]
    },
    {
        "id": 105,
        "text": "Refer to the exhibit. A network engineer has been given the network address of 192.168.99.0 and a subnet mask of 255.255.255.192 to subnet across the four networks shown. How many total host addresses are unused across all four subnets?",
        "type": "mcq",
        "imgSrc": "https://www.netacad.com/content/itn/1.0/courses/content/final-examen-US/assets/i304957v1n1_209418.png",
        "imgAlt": "There are 3 routers. A line from the first router points to a text box that states 30 hosts. The first router is connected to the second router with a serial link. The second router is connected to the third router with a serial link. A line from the third router points to a text box that states 14 hosts.",
        "answers": [
            {
                "text": "224",
                "correct": false
            },
            {
                "text": "88",
                "correct": false
            },
            {
                "text": "158",
                "correct": false
            },
            {
                "text": "200",
                "correct": true
            },
            {
                "text": "72",
                "correct": false
            }
        ]
    },
    {
        "id": 106,
        "text": "What is the subnet ID associated with the IPv6 address 2001:DA48:FC5:A4:3D1B::1/64?",
        "type": "mcq",
        "answers": [
            {
                "text": "2001::/64",
                "correct": false
            },
            {
                "text": "2001:DA48::/64​",
                "correct": false
            },
            {
                "text": "2001:DA48:FC5:A4::/64​",
                "correct": true
            },
            {
                "text": "2001:DA48:FC5::A4:/64​",
                "correct": false
            }
        ]
    },
    {
        "id": 107,
        "text": "A technician with a PC is using multiple applications while connected to the Internet. How is the PC able to keep track of the data flow between multiple application sessions and have each application receive the correct packet flows?",
        "type": "mcq",
        "answers": [
            {
                "text": "The data flow is being tracked based on the destination MAC address of the technician PC.",
                "correct": false
            },
            {
                "text": "The data flow is being tracked based on the source port number that is used by each application.",
                "correct": true
            },
            {
                "text": "The data flow is being tracked based on the source IP address that is used by the PC of the technician.",
                "correct": false
            },
            {
                "text": "The data flow is being tracked based on the destination IP address that is used by the PC of the technician.",
                "correct": false
            }
        ]
    },
    {
        "id": 108,
        "text": "What would be the interface ID of an IPv6 enabled interface with a MAC address of 1C-6F-65-C2-BD-F8 when the interface ID is generated by using the EUI-64 process?",
        "type": "mcq",
        "answers": [
            {
                "text": "1E6F:65FF:FEC2:BDF8",
                "correct": true
            },
            {
                "text": "106F:65FF:FEC2:BDF8",
                "correct": false
            },
            {
                "text": "C16F:65FF:FEC2:BDF8",
                "correct": false
            },
            {
                "text": "0C6F:65FF:FEC2:BDF8",
                "correct": false
            }
        ]
    },
    {
        "id": 109,
        "text": "What is a function of the data link layer?",
        "type": "mcq",
        "answers": [
            {
                "text": "provides the formatting of data",
                "correct": false
            },
            {
                "text": "provides end-to-end delivery of data between hosts",
                "correct": false
            },
            {
                "text": "provides delivery of data between two applications",
                "correct": false
            },
            {
                "text": "provides for the exchange of frames over a common local media",
                "correct": true
            }
        ]
    },
    {
        "id": 110,
        "text": "Which two protocols operate at the top layer of the TCP/IP protocol suite? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "DNS",
                "correct": true
            },
            {
                "text": "Ethernet",
                "correct": false
            },
            {
                "text": "IP",
                "correct": false
            },
            {
                "text": "POP",
                "correct": true
            },
            {
                "text": "TCP",
                "correct": false
            },
            {
                "text": "UDP",
                "correct": false
            }
        ]
    },
    {
        "id": 111,
        "text": "A user is complaining that an external web page is taking longer than normal to load.The web page does eventually load on the user machine. Which tool should the technician use with administrator privileges in order to locate where the issue is in the network?",
        "type": "mcq",
        "answers": [
            {
                "text": "ping",
                "correct": false
            },
            {
                "text": "tracert",
                "correct": true
            },
            {
                "text": "ipconfig /displaydns",
                "correct": false
            },
            {
                "text": "nslookup",
                "correct": false
            }
        ]
    },
    {
        "id": 112,
        "text": "The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?",
        "type": "mcq",
        "answers": [
            {
                "text": "The switch will have a management interface with the address 172.16.100.1.",
                "correct": false
            },
            {
                "text": "The switch can be remotely managed from a host on another network.",
                "correct": true
            },
            {
                "text": "The switch can communicate with other hosts on the 172.16.100.0 network.",
                "correct": false
            },
            {
                "text": "The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1.",
                "correct": false
            }
        ]
    },
    {
        "id": 113,
        "text": "What happens when the transport input ssh command is entered on the switch vty lines?",
        "type": "mcq",
        "answers": [
            {
                "text": "The SSH client on the switch is enabled.",
                "correct": false
            },
            {
                "text": "Communication between the switch and remote users is encrypted.",
                "correct": true
            },
            {
                "text": "The switch requires a username/password combination for remote access.",
                "correct": false
            },
            {
                "text": "The switch requires remote connections via a proprietary client software.",
                "correct": false
            }
        ]
    },
    {
        "id": 114,
        "text": "What are two common causes of signal degradation when using UTP cabling? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "improper termination",
                "correct": true
            },
            {
                "text": "low-quality shielding in cable",
                "correct": false
            },
            {
                "text": "installing cables in conduit",
                "correct": false
            },
            {
                "text": "low-quality cable or connectors",
                "correct": true
            },
            {
                "text": "loss of light over long distances",
                "correct": false
            }
        ]
    },
    {
        "id": 115,
        "text": "What are three commonly followed standards for constructing and installing cabling? (Choose three.)",
        "type": "mcq",
        "answers": [
            {
                "text": "pinouts",
                "correct": true
            },
            {
                "text": "cable lengths",
                "correct": true
            },
            {
                "text": "connector color",
                "correct": false
            },
            {
                "text": "connector types",
                "correct": true
            },
            {
                "text": "cost per meter (foot)",
                "correct": false
            },
            {
                "text": "tensile strength of plastic insulator",
                "correct": false
            }
        ]
    },
    {
        "id": 116,
        "text": "Which frame field is created by a source node and used by a destination node to ensure that a transmitted data signal has not been altered by interference, distortion, or signal loss?",
        "type": "mcq",
        "answers": [
            {
                "text": "Transport layer error check field",
                "correct": false
            },
            {
                "text": "Frame check sequence field",
                "correct": true
            },
            {
                "text": "User Datagram Protocol field",
                "correct": false
            },
            {
                "text": "Error correction process field",
                "correct": false
            },
            {
                "text": "Flow control field",
                "correct": false
            }
        ]
    },
    {
        "id": 117,
        "text": "What are two primary responsibilities of the Ethernet MAC sublayer? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "frame delimiting",
                "correct": false
            },
            {
                "text": "data encapsulation",
                "correct": true
            },
            {
                "text": "logical addressing",
                "correct": false
            },
            {
                "text": "error detection",
                "correct": false
            },
            {
                "text": "accessing the media",
                "correct": true
            }
        ]
    },
    {
        "id": 118,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": true
            },
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": true
            },
            {
                "text": "implements trailer with frame check sequence for error detection",
                "correct": false
            },
            {
                "text": "applies source and destination MAC addresses to Ethernet frame",
                "correct": false
            },
            {
                "text": "responsible for internal structure of Ethernet frame",
                "correct": false
            }
        ]
    },
    {
        "id": 119,
        "text": "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "applies delimiting of Ethernet frame fields to synchronize communication between nodes",
                "correct": true
            },
            {
                "text": "applies source and destination MAC addresses to Ethernet frame",
                "correct": true
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
                "correct": false
            },
            {
                "text": "handles communication between upper layer networking software and Ethernet NIC hardware",
                "correct": false
            },
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": false
            }
        ]
    },
    {
        "id": 120,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": true
            },
            {
                "text": "handles communication between upper layer networking software and Ethernet NIC hardware",
                "correct": true
            },
            {
                "text": "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
                "correct": false
            },
            {
                "text": "applies source and destination MAC addresses to Ethernet frame",
                "correct": false
            },
            {
                "text": "responsible for internal structure of Ethernet frame",
                "correct": false
            }
        ]
    },
    {
        "id": 121,
        "text": "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "responsible for internal structure of Ethernet frame",
                "correct": true
            },
            {
                "text": "implements trailer with frame check sequence for error detection",
                "correct": true
            },
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": false
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
                "correct": false
            },
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": false
            }
        ]
    },
    {
        "id": 122,
        "text": "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "implements CSMA/CD over legacy shared half-duplex media",
                "correct": true
            },
            {
                "text": "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
                "correct": true
            },
            {
                "text": "handles communication between upper layer networking software and Ethernet NIC hardware",
                "correct": false
            },
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": false
            },
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": false
            }
        ]
    },
    {
        "id": 123,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
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
                "text": "implements CSMA/CD over legacy shared half-duplex media",
                "correct": false
            },
            {
                "text": "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
                "correct": false
            }
        ]
    },
    {
        "id": 124,
        "text": "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "implements a process to delimit fields within an Ethernet 2 frame",
                "correct": true
            },
            {
                "text": "implements trailer with frame check sequence for error detection",
                "correct": true
            },
            {
                "text": "handles communication between upper layer networking software and Ethernet NIC hardware",
                "correct": false
            },
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": false
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
                "correct": false
            }
        ]
    },
    {
        "id": 125,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": true
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
                "correct": true
            },
            {
                "text": "implements trailer with frame check sequence for error detection",
                "correct": false
            },
            {
                "text": "integrates Layer 2 flows between 10 Gigabit Ethernet over fiber and 1 Gigabit Ethernet over copper",
                "correct": false
            },
            {
                "text": "applies source and destination MAC addresses to Ethernet frame",
                "correct": false
            }
        ]
    },
    {
        "id": 126,
        "text": "Which two functions are performed at the MAC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "applies delimiting of Ethernet frame fields to synchronize communication between nodes",
                "correct": true
            },
            {
                "text": "implements trailer with frame check sequence for error detection",
                "correct": true
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
                "correct": false
            },
            {
                "text": "adds Ethernet control information to network protocol data",
                "correct": false
            },
            {
                "text": "handles communication between upper layer networking software and Ethernet NIC hardware",
                "correct": false
            }
        ]
    },
    {
        "id": 127,
        "text": "Which two functions are performed at the LLC sublayer of the OSI Data Link Layer to facilitate Ethernet communication? (Choose two.)",
        "type": "mcq",
        "answers": [
            {
                "text": "enables IPv4 and IPv6 to utilize the same physical medium",
                "correct": true
            },
            {
                "text": "places information in the Ethernet frame that identifies which network layer protocol is being encapsulated by the frame",
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
                "text": "implements CSMA/CD over legacy shared half-duplex media",
                "correct": false
            }
        ]
    },
    {
        "id": 128,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.248",
                "correct": true
            },
            {
                "text": "255.255.255.192",
                "correct": false
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.128",
                "correct": false
            }
        ]
    },
    {
        "id": 129,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.192",
                "correct": true
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.240",
                "correct": false
            },
            {
                "text": "255.255.255.128",
                "correct": false
            }
        ]
    },
    {
        "id": 130,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 200 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.0",
                "correct": true
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.240",
                "correct": false
            },
            {
                "text": "255.255.255.192",
                "correct": false
            }
        ]
    },
    {
        "id": 131,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 25 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.224",
                "correct": true
            },
            {
                "text": "255.255.255.192",
                "correct": false
            },
            {
                "text": "255.255.255.240",
                "correct": false
            },
            {
                "text": "255.255.255.128",
                "correct": false
            }
        ]
    },
    {
        "id": 132,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 200 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.0",
                "correct": true
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.248",
                "correct": false
            },
            {
                "text": "255.255.255.240",
                "correct": false
            }
        ]
    },
    {
        "id": 133,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 10 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.240",
                "correct": true
            },
            {
                "text": "255.255.255.248",
                "correct": false
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.192",
                "correct": false
            }
        ]
    },
    {
        "id": 134,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 90 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.128",
                "correct": true
            },
            {
                "text": "255.255.255.248",
                "correct": false
            },
            {
                "text": "255.255.255.240",
                "correct": false
            },
            {
                "text": "255.255.255.224",
                "correct": false
            }
        ]
    },
    {
        "id": 135,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.248",
                "correct": true
            },
            {
                "text": "255.255.255.240",
                "correct": false
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.192",
                "correct": false
            }
        ]
    },
    {
        "id": 136,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 61 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.192",
                "correct": true
            },
            {
                "text": "255.255.255.128",
                "correct": false
            },
            {
                "text": "255.255.255.224",
                "correct": false
            },
            {
                "text": "255.255.255.0",
                "correct": false
            }
        ]
    },
    {
        "id": 137,
        "text": "A network administrator is adding a new LAN to a branch office. The new LAN must support 4 connected devices. What is the smallest network mask that the network administrator can use for the new network?",
        "type": "mcq",
        "answers": [
            {
                "text": "255.255.255.248",
                "correct": true
            },
            {
                "text": "255.255.255.128",
                "correct": false
            },
            {
                "text": "255.255.255.192",
                "correct": false
            },
            {
                "text": "255.255.255.0",
                "correct": false
            }
        ]
    },
    {
        "id": 138,
        "text": "A client packet is received by a server. The packet has a destination port number of 53. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " DNS",
                "correct": true
            },
            {
                "text": " FTP",
                "correct": false
            },
            {
                "text": " SSH",
                "correct": false
            },
            {
                "text": " Telnet",
                "correct": false
            }
        ]
    },
    {
        "id": 139,
        "text": "A client packet is received by a server. The packet has a destination port number of 143. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " IMAP",
                "correct": true
            },
            {
                "text": " FTP",
                "correct": false
            },
            {
                "text": " SSH",
                "correct": false
            },
            {
                "text": " Telnet",
                "correct": false
            }
        ]
    },
    {
        "id": 140,
        "text": "A client packet is received by a server. The packet has a destination port number of 67. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " DHCP",
                "correct": true
            },
            {
                "text": " FTP",
                "correct": false
            },
            {
                "text": " SSH",
                "correct": false
            },
            {
                "text": " Telnet",
                "correct": false
            }
        ]
    },
    {
        "id": 141,
        "text": "A client packet is received by a server. The packet has a destination port number of 69. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " TFTP",
                "correct": true
            },
            {
                "text": " FTP",
                "correct": false
            },
            {
                "text": " SSH",
                "correct": false
            },
            {
                "text": " Telnet",
                "correct": false
            }
        ]
    },
    {
        "id": 142,
        "text": "A client packet is received by a server. The packet has a destination port number of 21. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " FTP",
                "correct": true
            },
            {
                "text": " SSH",
                "correct": false
            },
            {
                "text": " DHCP",
                "correct": false
            },
            {
                "text": " TFTP",
                "correct": false
            }
        ]
    },
    {
        "id": 143,
        "text": "A client packet is received by a server. The packet has a destination port number of 69. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " TFTP",
                "correct": true
            },
            {
                "text": " DNS",
                "correct": false
            },
            {
                "text": " SMTP",
                "correct": false
            },
            {
                "text": " DHCP",
                "correct": false
            }
        ]
    },
    {
        "id": 144,
        "text": "A client packet is received by a server. The packet has a destination port number of 21. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " FTP",
                "correct": true
            },
            {
                "text": " DHCP",
                "correct": false
            },
            {
                "text": " DNS",
                "correct": false
            },
            {
                "text": " TFTP",
                "correct": false
            }
        ]
    },
    {
        "id": 145,
        "text": "A client packet is received by a server. The packet has a destination port number of 80. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " HTTP",
                "correct": true
            },
            {
                "text": " DNS",
                "correct": false
            },
            {
                "text": " SMTP",
                "correct": false
            },
            {
                "text": " DHCP",
                "correct": false
            }
        ]
    },
    {
        "id": 146,
        "text": "A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " SSH",
                "correct": true
            },
            {
                "text": " DHCP",
                "correct": false
            },
            {
                "text": " DNS",
                "correct": false
            },
            {
                "text": " TFTP",
                "correct": false
            }
        ]
    },
    {
        "id": 147,
        "text": "A client packet is received by a server. The packet has a destination port number of 110. What service is the client requesting?",
        "type": "mcq",
        "answers": [
            {
                "text": " POP3",
                "correct": true
            },
            {
                "text": " DNS",
                "correct": false
            },
            {
                "text": " SMTP",
                "correct": false
            },
            {
                "text": " DHCP",
                "correct": false
            }
        ]
    },
    {
        "id": 148,
        "text": "What service is provided by POP3?",
        "type": "mcq",
        "answers": [
            {
                "text": "Retrieves email from the server by downloading the email to the local mail application of the client.",
                "correct": true
            },
            {
                "text": "Allows remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "Uses encryption to provide secure remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "An application that allows real-time chatting among remote users.",
                "correct": false
            }
        ]
    },
    {
        "id": 149,
        "text": "What service is provided by Internet Messenger?",
        "type": "mcq",
        "answers": [
            {
                "text": "An application that allows real-time chatting among remote users.",
                "correct": true
            },
            {
                "text": "Uses encryption to provide secure remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "Resolves domain names, such as cisco.com, into IP addresses.",
                "correct": false
            },
            {
                "text": "Allows remote access to network devices and servers.",
                "correct": false
            }
        ]
    },
    {
        "id": 150,
        "text": "What service is provided by SMTP?",
        "type": "mcq",
        "answers": [
            {
                "text": "Allows clients to send email to a mail server and the servers to send email to other servers.",
                "correct": true
            },
            {
                "text": "Allows remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "Uses encryption to provide secure remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "An application that allows real-time chatting among remote users.",
                "correct": false
            }
        ]
    },
    {
        "id": 151,
        "text": "What service is provided by HTTPS?",
        "type": "mcq",
        "answers": [
            {
                "text": "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",
                "correct": true
            },
            {
                "text": "Uses encryption to provide secure remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "Resolves domain names, such as cisco.com, into IP addresses.",
                "correct": false
            },
            {
                "text": "Allows remote access to network devices and servers.",
                "correct": false
            }
        ]
    },
    {
        "id": 152,
        "text": "What service is provided by DHCP?",
        "type": "mcq",
        "answers": [
            {
                "text": "Dynamically assigns IP addresses to end and intermediary devices.",
                "correct": true
            },
            {
                "text": "Allows remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "Uses encryption to provide secure remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "An application that allows real-time chatting among remote users.",
                "correct": false
            }
        ]
    },
    {
        "id": 153,
        "text": "What service is provided by HTTP?",
        "type": "mcq",
        "answers": [
            {
                "text": "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.",
                "correct": true
            },
            {
                "text": "Uses encryption to provide secure remote access to network devices and servers.",
                "correct": false
            },
            {
                "text": "Resolves domain names, such as cisco.com, into IP addresses.",
                "correct": false
            },
            {
                "text": "Allows remote access to network devices and servers.",
                "correct": false
            }
        ]
    },
    {
        "id": 154,
        "text": "What service is provided by BOOTP?",
        "type": "mcq",
        "answers": [
            {
                "text": "Legacy application that enables a diskless workstation to discover its own IP address and find a BOOTP server on the network.",
                "correct": true
            },
            {
                "text": "Allows for data transfers between a client and a file server.",
                "correct": false
            },
            {
                "text": "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.",
                "correct": false
            },
            {
                "text": "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",
                "correct": false
            }
        ]
    },
    {
        "id": 155,
        "text": "What service is provided by HTTP?",
        "type": "mcq",
        "answers": [
            {
                "text": "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.",
                "correct": true
            },
            {
                "text": "Allows for data transfers between a client and a file server.",
                "correct": false
            },
            {
                "text": "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",
                "correct": false
            },
            {
                "text": "An application that allows real-time chatting among remote users.",
                "correct": false
            }
        ]
    },
    {
        "id": 156,
        "text": "What service is provided by FTP?",
        "type": "mcq",
        "answers": [
            {
                "text": "Allows for data transfers between a client and a file server.",
                "correct": true
            },
            {
                "text": "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.",
                "correct": false
            },
            {
                "text": "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",
                "correct": false
            },
            {
                "text": "An application that allows real-time chatting among remote users.",
                "correct": false
            }
        ]
    },
    {
        "id": 157,
        "text": "What service is provided by DNS?",
        "type": "mcq",
        "answers": [
            {
                "text": "Resolves domain names, such as cisco.com, into IP addresses.",
                "correct": true
            },
            {
                "text": "Allows for data transfers between a client and a file server.",
                "correct": false
            },
            {
                "text": "A basic set of rules for exchanging text, graphic images, sound, video, and other multimedia files on the web.",
                "correct": false
            },
            {
                "text": "Uses encryption to secure the exchange of text, graphic images, sound, and video on the web.",
                "correct": false
            }
        ]
    },
    {
        "id": 158,
        "text": "What characteristic describes a virus?",
        "type": "mcq",
        "answers": [
            {
                "text": "malicious software or code running on an end device",
                "correct": true
            },
            {
                "text": "the use of stolen credentials to access private data",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "an attack that slows or crashes a device or network service",
                "correct": false
            }
        ]
    },
    {
        "id": 159,
        "text": "What characteristic describes a Trojan horse?",
        "type": "mcq",
        "answers": [
            {
                "text": "malicious software or code running on an end device",
                "correct": true
            },
            {
                "text": "the use of stolen credentials to access private data",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "an attack that slows or crashes a device or network service",
                "correct": false
            }
        ]
    },
    {
        "id": 160,
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
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "an attack that slows or crashes a device or network service",
                "correct": false
            }
        ]
    },
    {
        "id": 161,
        "text": "What characteristic describes adware?",
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
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "an attack that slows or crashes a device or network service",
                "correct": false
            }
        ]
    },
    {
        "id": 162,
        "text": "What characteristic describes a DoS attack?",
        "type": "mcq",
        "answers": [
            {
                "text": "an attack that slows or crashes a device or network service",
                "correct": true
            },
            {
                "text": "the use of stolen credentials to access private data",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "software that is installed on a user device and collects information about the user",
                "correct": false
            }
        ]
    },
    {
        "id": 163,
        "text": "What characteristic describes identity theft?",
        "type": "mcq",
        "answers": [
            {
                "text": "the use of stolen credentials to access private data",
                "correct": true
            },
            {
                "text": "a tunneling protocol that provides remote users with secure access into the network of an organization",
                "correct": false
            },
            {
                "text": "software on a router that filters traffic based on IP addresses or applications",
                "correct": false
            },
            {
                "text": "software that identifies fast-spreading threats",
                "correct": false
            }
        ]
    },
    {
        "id": 164,
        "text": "What characteristic describes a VPN?",
        "type": "mcq",
        "answers": [
            {
                "text": "a tunneling protocol that provides remote users with secure access into the network of an organization",
                "correct": true
            },
            {
                "text": "software on a router that filters traffic based on IP addresses or applications",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "software that identifies fast-spreading threats",
                "correct": false
            }
        ]
    },
    {
        "id": 165,
        "text": "What characteristic describes an IPS?",
        "type": "mcq",
        "answers": [
            {
                "text": "software that identifies fast-spreading threats",
                "correct": true
            },
            {
                "text": "software on a router that filters traffic based on IP addresses or applications",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "a tunneling protocol that provides remote users with secure access into the network of an organization",
                "correct": false
            }
        ]
    },
    {
        "id": 166,
        "text": "What characteristic describes antivirus software?",
        "type": "mcq",
        "answers": [
            {
                "text": "applications that protect end devices from becoming infected with malicious software",
                "correct": true
            },
            {
                "text": "software on a router that filters traffic based on IP addresses or applications",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "a tunneling protocol that provides remote users with secure access into the network of an organization",
                "correct": false
            }
        ]
    },
    {
        "id": 167,
        "text": "What characteristic describes antispyware?",
        "type": "mcq",
        "answers": [
            {
                "text": "applications that protect end devices from becoming infected with malicious software",
                "correct": true
            },
            {
                "text": "software on a router that filters traffic based on IP addresses or applications",
                "correct": false
            },
            {
                "text": "a network device that filters access and traffic coming into a network",
                "correct": false
            },
            {
                "text": "a tunneling protocol that provides remote users with secure access into the network of an organization",
                "correct": false
            }
        ]
    },
    {
        "id": 168,
        "text": "What does the term \"attenuation\" mean in data communication?",
        "type": "mcq",
        "answers": [
            {
                "text": "loss of signal strength as distance increases",
                "correct": true
            },
            {
                "text": "time for a signal to reach its destination",
                "correct": false
            },
            {
                "text": "leakage of signals from one cable pair to another",
                "correct": false
            },
            {
                "text": "strengthening of a signal by a networking device",
                "correct": false
            }
        ]
    },
    {
        "id": 169,
        "text": "Please rate your motivation to do well in this course:",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Motivated",
                "correct": true
            },
            {
                "text": "Slightly Motivated",
                "correct": true
            },
            {
                "text": "Motivated",
                "correct": true
            },
            {
                "text": "Very Motivated",
                "correct": true
            },
            {
                "text": "Completely Motivated",
                "correct": true
            }
        ]
    },
    {
        "id": 170,
        "text": "Please indicate how enthusiastic you are about the content of this course and the things you’re learning (or have learned):",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Enthusiastic",
                "correct": true
            },
            {
                "text": "Slightly Enthusiastic",
                "correct": true
            },
            {
                "text": "Enthusiastic",
                "correct": true
            },
            {
                "text": "Very Enthusiastic",
                "correct": true
            },
            {
                "text": "Completely Enthusiastic",
                "correct": true
            }
        ]
    },
    {
        "id": 171,
        "text": "Please indicate your interest in this course:",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Interested",
                "correct": true
            },
            {
                "text": "Slightly Interested",
                "correct": true
            },
            {
                "text": "Interested",
                "correct": true
            },
            {
                "text": "Very Interested",
                "correct": true
            },
            {
                "text": "Completely Interested",
                "correct": true
            }
        ]
    },
    {
        "id": 172,
        "text": "The hands-on lab activities helped me to achieve the stated course objectives.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 173,
        "text": "Overall, the online course materials were of high quality.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 174,
        "text": "Having access to equipment in the classroom helped me learn.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 175,
        "text": "Access:Please rate how easy it is for you to access the course materials online from home:",
        "type": "mcq",
        "answers": [
            {
                "text": "I can't access the online course materials from home",
                "correct": true
            },
            {
                "text": "Difficult",
                "correct": true
            },
            {
                "text": "Somewhat Difficult",
                "correct": true
            },
            {
                "text": "Fairly Easy",
                "correct": true
            },
            {
                "text": "Easy",
                "correct": true
            }
        ]
    },
    {
        "id": 176,
        "text": "Prepare for Certification exam(s)",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All",
                "correct": true
            },
            {
                "text": "A little",
                "correct": true
            },
            {
                "text": "Somewhat",
                "correct": true
            },
            {
                "text": "Quite a bit",
                "correct": true
            },
            {
                "text": "Very Much",
                "correct": true
            },
            {
                "text": "Don't Know / NA",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 177,
        "text": "Learn skills that can be used in your current or a future job",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All",
                "correct": true
            },
            {
                "text": "A little",
                "correct": true
            },
            {
                "text": "Somewhat",
                "correct": true
            },
            {
                "text": "Quite a bit",
                "correct": true
            },
            {
                "text": "Very Much",
                "correct": true
            },
            {
                "text": "Don't Know / NA",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 178,
        "text": "Increase your value in the job market",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All",
                "correct": true
            },
            {
                "text": "A little",
                "correct": true
            },
            {
                "text": "Somewhat",
                "correct": true
            },
            {
                "text": "Quite a bit",
                "correct": true
            },
            {
                "text": "Very Much",
                "correct": true
            },
            {
                "text": "Don't Know / NA",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 179,
        "text": "Obtain a new job or advance in your current job",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All",
                "correct": true
            },
            {
                "text": "A little",
                "correct": true
            },
            {
                "text": "Somewhat",
                "correct": true
            },
            {
                "text": "Quite a bit",
                "correct": true
            },
            {
                "text": "Very Much",
                "correct": true
            },
            {
                "text": "Don't Know / NA",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 180,
        "text": "Continue my education:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Likely",
                "correct": true
            },
            {
                "text": "Very Likely",
                "correct": true
            },
            {
                "text": "Don't Know",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 181,
        "text": "On the job training:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Likely",
                "correct": true
            },
            {
                "text": "Very Likely",
                "correct": true
            },
            {
                "text": "Don't Know",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 182,
        "text": "Take Certification Exam(s):",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Likely",
                "correct": true
            },
            {
                "text": "Very Likely",
                "correct": true
            },
            {
                "text": "Don't Know",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 183,
        "text": "The Cisco Networking Academy Program furthered my goals.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            }
        ]
    },
    {
        "id": 184,
        "text": "Rate the reading level of this course:",
        "type": "mcq",
        "answers": [
            {
                "text": "Much Too Hard",
                "correct": true
            },
            {
                "text": "Slightly Too Hard",
                "correct": true
            },
            {
                "text": "About Right",
                "correct": true
            },
            {
                "text": "Slightly Too Easy",
                "correct": true
            },
            {
                "text": "Much Too Easy",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 185,
        "text": "Further your education",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All",
                "correct": true
            },
            {
                "text": "A little",
                "correct": true
            },
            {
                "text": "Somewhat",
                "correct": true
            },
            {
                "text": "Quite a bit",
                "correct": true
            },
            {
                "text": "Very Much",
                "correct": true
            },
            {
                "text": "Don't Know / NA",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 186,
        "text": "Packet Tracer activities helped me learn.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 187,
        "text": "Is your career goal to work in IT and/or networking?",
        "type": "mcq",
        "answers": [
            {
                "text": "Yes",
                "correct": true
            },
            {
                "text": "No",
                "correct": true
            },
            {
                "text": "Unsure at this time",
                "correct": true
            }
        ]
    },
    {
        "id": 188,
        "text": "Interactive activities helped me learn.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 189,
        "text": "Please rate your confidence with the overall skills you learned in this course:",
        "type": "mcq",
        "answers": [
            {
                "text": "Not at all confident",
                "correct": true
            },
            {
                "text": "A little confident",
                "correct": true
            },
            {
                "text": "Confident",
                "correct": true
            },
            {
                "text": "Very confident",
                "correct": true
            },
            {
                "text": "Completely confident",
                "correct": true
            },
            {
                "text": "Prefer not to answer",
                "correct": true
            }
        ]
    },
    {
        "id": 190,
        "text": "Why did you enroll in this course? (Check all that apply.)",
        "type": "mcq",
        "answers": [
            {
                "text": "The course was required by the instructor.",
                "correct": true
            },
            {
                "text": "To get credit for participation or completion.",
                "correct": true
            },
            {
                "text": "For self-study or independent study.",
                "correct": true
            },
            {
                "text": "Because of the Cisco Networking Academy reputation.",
                "correct": true
            },
            {
                "text": "Because of Cisco's reputation.",
                "correct": true
            },
            {
                "text": "Some other reason.",
                "correct": true
            }
        ]
    },
    {
        "id": 191,
        "text": "Are you currently employed in a Technology field?",
        "type": "mcq",
        "answers": [
            {
                "text": "Yes, employed in the Networking field",
                "correct": true
            },
            {
                "text": "Yes, employed in a Technology field, not networking focused",
                "correct": true
            },
            {
                "text": "No, but employed in a different field",
                "correct": true
            },
            {
                "text": "No, not employed",
                "correct": true
            }
        ]
    },
    {
        "id": 192,
        "text": "Develop professional skills (such as written or oral communication, computer literacy, problem-solving, or teamwork).",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All",
                "correct": true
            },
            {
                "text": "A little",
                "correct": true
            },
            {
                "text": "Somewhat",
                "correct": true
            },
            {
                "text": "Quite a bit",
                "correct": true
            },
            {
                "text": "Very Much",
                "correct": true
            },
            {
                "text": "Don't Know / NA",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 193,
        "text": "Please choose the option below that best describes your current goal or motivation for taking Cisco Networking Academy courses:",
        "type": "mcq",
        "answers": [
            {
                "text": "To explore a technology career",
                "correct": true
            },
            {
                "text": "To enter or advance in a career in networking",
                "correct": true
            },
            {
                "text": "To enter or advance in a technology career (not exclusively networking focused)",
                "correct": true
            },
            {
                "text": "To gain technology knowledge that can be applied in my current or future non-technology career",
                "correct": true
            },
            {
                "text": "To further my education",
                "correct": true
            },
            {
                "text": "For personal use (as a hobby or for home use)",
                "correct": true
            },
            {
                "text": "Other",
                "correct": true
            }
        ]
    },
    {
        "id": 194,
        "text": "How would you like to see the course improved? (Check all that apply)",
        "type": "mcq",
        "answers": [
            {
                "text": "More opportunities for hands-on practice to reinforce my understanding of the content",
                "correct": true
            },
            {
                "text": "More opportunities for feedback with assessments and quizzes",
                "correct": true
            },
            {
                "text": "More support and guidance to learn the content",
                "correct": true
            },
            {
                "text": "More technical content",
                "correct": true
            },
            {
                "text": "More video content",
                "correct": true
            }
        ]
    },
    {
        "id": 195,
        "text": "The online quizzes helped to prepare me for the chapter exams.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 196,
        "text": "The exam scores accurately reflected my understanding of the curriculum.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 197,
        "text": "The videos helped to reinforce key concepts.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 198,
        "text": "The course curriculum was technically accurate.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 199,
        "text": "Configure switches and end devices to provide access to local and remote network resources.",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Confident",
                "correct": true
            },
            {
                "text": "A Little Confident",
                "correct": true
            },
            {
                "text": "Confident",
                "correct": true
            },
            {
                "text": "Very Confident",
                "correct": true
            },
            {
                "text": "Completely Confident",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 200,
        "text": "Explain how physical and data link layer protocols support the operation of Ethernet in a switched network.",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Confident",
                "correct": true
            },
            {
                "text": "A Little Confident",
                "correct": true
            },
            {
                "text": "Confident",
                "correct": true
            },
            {
                "text": "Very Confident",
                "correct": true
            },
            {
                "text": "Completely Confident",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 201,
        "text": "Configure routers to enable end-to-end connectivity between remote devices.",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Confident",
                "correct": true
            },
            {
                "text": "A Little Confident",
                "correct": true
            },
            {
                "text": "Confident",
                "correct": true
            },
            {
                "text": "Very Confident",
                "correct": true
            },
            {
                "text": "Completely Confident",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 202,
        "text": "Create IPv4 and IPv6 addressing schemes and verify network connectivity between devices.",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Confident",
                "correct": true
            },
            {
                "text": "A Little Confident",
                "correct": true
            },
            {
                "text": "Confident",
                "correct": true
            },
            {
                "text": "Very Confident",
                "correct": true
            },
            {
                "text": "Completely Confident",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 203,
        "text": "Explain how the upper layers of the OSI model support network applications.",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Confident",
                "correct": true
            },
            {
                "text": "A Little Confident",
                "correct": true
            },
            {
                "text": "Confident",
                "correct": true
            },
            {
                "text": "Very Confident",
                "correct": true
            },
            {
                "text": "Completely Confident",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 204,
        "text": "Configure a small network with security best practices.",
        "type": "mcq",
        "answers": [
            {
                "text": "Not At All Confident",
                "correct": true
            },
            {
                "text": "A Little Confident",
                "correct": true
            },
            {
                "text": "Confident",
                "correct": true
            },
            {
                "text": "Very Confident",
                "correct": true
            },
            {
                "text": "Completely Confident",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 205,
        "text": "Take another Cisco Networking Academy course:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Unlikely",
                "correct": true
            },
            {
                "text": "Somewhat Likely",
                "correct": true
            },
            {
                "text": "Very Likely",
                "correct": true
            },
            {
                "text": "Don't Know",
                "correct": true
            },
            {
                "text": "Prefer Not To Answer",
                "correct": true
            }
        ]
    },
    {
        "id": 206,
        "text": "This course as a whole",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 207,
        "text": "Curriculum Materials:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 208,
        "text": "Classroom Instruction:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 209,
        "text": "Access to Equipment / Software:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 210,
        "text": "Labs:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 211,
        "text": "Packet Tracer:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 212,
        "text": "Assessment (including quizzes and exams):",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 213,
        "text": "Preparedness to teach the course",
        "type": "mcq",
        "answers": [
            {
                "text": "Among The Worst",
                "correct": true
            },
            {
                "text": "A Little Worse",
                "correct": true
            },
            {
                "text": "About the Same",
                "correct": true
            },
            {
                "text": "A Little Better",
                "correct": true
            },
            {
                "text": "Among the Best",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 214,
        "text": "Clear and easy to understand lessons",
        "type": "mcq",
        "answers": [
            {
                "text": "Among The Worst",
                "correct": true
            },
            {
                "text": "A Little Worse",
                "correct": true
            },
            {
                "text": "About the Same",
                "correct": true
            },
            {
                "text": "A Little Better",
                "correct": true
            },
            {
                "text": "Among the Best",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 215,
        "text": "Approachability with questions and ideas",
        "type": "mcq",
        "answers": [
            {
                "text": "Among The Worst",
                "correct": true
            },
            {
                "text": "A Little Worse",
                "correct": true
            },
            {
                "text": "About the Same",
                "correct": true
            },
            {
                "text": "A Little Better",
                "correct": true
            },
            {
                "text": "Among the Best",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 216,
        "text": "Presenting information in multiple ways",
        "type": "mcq",
        "answers": [
            {
                "text": "Among The Worst",
                "correct": true
            },
            {
                "text": "A Little Worse",
                "correct": true
            },
            {
                "text": "About the Same",
                "correct": true
            },
            {
                "text": "A Little Better",
                "correct": true
            },
            {
                "text": "Among the Best",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 217,
        "text": "Making the topic interesting",
        "type": "mcq",
        "answers": [
            {
                "text": "Among The Worst",
                "correct": true
            },
            {
                "text": "A Little Worse",
                "correct": true
            },
            {
                "text": "About the Same",
                "correct": true
            },
            {
                "text": "A Little Better",
                "correct": true
            },
            {
                "text": "Among the Best",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 218,
        "text": "I would take another course from this instructor.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 219,
        "text": "I learned a lot from this instructor.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 220,
        "text": "This instructor emphasized learning through practice (such as hands-on labs).",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 221,
        "text": "Please rate how easy it is to use a computer in your classroom:",
        "type": "mcq",
        "answers": [
            {
                "text": "I do not have access to a computer in my classroom",
                "correct": true
            },
            {
                "text": "I have to share my computer with more than one other person",
                "correct": true
            },
            {
                "text": "I share my computer with one other person",
                "correct": true
            },
            {
                "text": "I have my own computer to work on during class",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 222,
        "text": "Videos:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 223,
        "text": "Interactive activities:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 224,
        "text": "Packet Tracer Physical Mode activities:",
        "type": "mcq",
        "answers": [
            {
                "text": "Very Dissatisfied",
                "correct": true
            },
            {
                "text": "Dissatisfied",
                "correct": true
            },
            {
                "text": "Neutral",
                "correct": true
            },
            {
                "text": "Satisfied",
                "correct": true
            },
            {
                "text": "Very Satisfied",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 225,
        "text": "Packet Tracer Physical Mode activities helped me achieve the stated course objectives.",
        "type": "mcq",
        "answers": [
            {
                "text": "Strongly Disagree",
                "correct": true
            },
            {
                "text": "Disagree",
                "correct": true
            },
            {
                "text": "Neither Agree Nor Disagree",
                "correct": true
            },
            {
                "text": "Agree",
                "correct": true
            },
            {
                "text": "Strongly Agree",
                "correct": true
            },
            {
                "text": "Don't Know / Not Applicable",
                "correct": true
            }
        ]
    },
    {
        "id": 226,
        "text": "Please rate how easy it is to use equipment in your classroom:",
        "type": "mcq",
        "answers": [
            {
                "text": "I don't have access to equipment in my classroom",
                "correct": true
            },
            {
                "text": "I have to share the equipment with more than one other person",
                "correct": true
            },
            {
                "text": "I share the equipment with one other person",
                "correct": true
            },
            {
                "text": "I have my own equipment to work on during class",
                "correct": true
            },
            {
                "text": "Not Applicable",
                "correct": true
            }
        ]
    }
]