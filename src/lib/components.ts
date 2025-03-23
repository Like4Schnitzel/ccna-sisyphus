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
            "Telnet",
            "CLI",
            "GUI",
            "kernel",
            "shell"
        ],
        "movableOptions": [
            {
                "text": "enables the user to interact with the operating system by pointing and clicking",
                "correctMatch": "GUI"
            },
            {
                "text": "the part of the operating system that interfaces with applications and the user",
                "correctMatch": "shell"
            },
            {
                "text": "the part of the OS that interacts directly with the device hardware",
                "correctMatch": "kernel"
            },
            {
                "text": "users interact with the operating system by typing commands",
                "correctMatch": "CLI"
            }
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
    }
]