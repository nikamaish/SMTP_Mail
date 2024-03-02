## SMTP
SMTP stands for Simple Mail Transfer Protocol. It is a standard protocol used in the field of computer networking and the Internet to transfer electronic mail (email) between computers. SMTP is a text-based protocol that works in a client-server model, where an email client (sender) communicates with an email server (receiver).

- DNS, or Domain Name System, is a fundamental component of the Internet that translates human-readable domain names into IP addresses. 

- MX stands for Mail Exchange, and it is a DNS (Domain Name System) resource record type used to specify the mail servers responsible for receiving emails on behalf of a domain. MX records play a crucial role in the email delivery process by providing information about the mail servers that should handle incoming email messages for a particular domain. It means MX can tell us mailserver behind of any kind of mail id

- A records typically point to the IP addresses of mailservers, but they do not specifically indicate mail servers. The primary purpose of A records is to map domain names to IPv4 addresses, allowing networked devices to locate and connect to the corresponding servers.

- SPF, or Sender Policy Framework, is an email authentication protocol designed to prevent email spoofing and phishing. It allows domain owners to specify which mail servers are authorized to send emails on behalf of their domain. SPF helps recipients verify the authenticity of incoming emails by checking whether they originate from authorized servers.

- DKIM, or DomainKeys Identified Mail, is an email authentication method that helps verify the authenticity and integrity of email messages. It adds a digital signature to the email headers, allowing the recipient's email server to confirm that the message was sent by an authorized sender and has not been altered during transit.


Here are key points about DKIM:

- Digital Signatures:

Let me clarify the process:

1. Key Pair Generation:
   - The email sender generates a pair of cryptographic keys: a private key and a corresponding public key. The private key is kept secret and securely stored on the sender's mail server.

2. Signing the Email:
   - When the sender's mail server is ready to send an email, it computes a digital signature using the private key. This digital signature is a unique cryptographic hash that is specific to the content of the email.

3. Inserting DKIM Signature:
   - The calculated digital signature is inserted into the email headers as a DKIM-Signature field. This field includes information such as the selector (a key identifier), the signing domain, the algorithm used, and the actual signature.

4. Public Key in DNS:
   - The sender publishes the corresponding public key in the DNS as a DKIM record. This public key is made available to anyone who wants to verify the signature.

5. Verification by Recipient:
   - When the recipient's mail server receives the email, it retrieves the DKIM-Signature field from the headers and uses the selector and signing domain information to look up the corresponding public key from the DNS.

6. Signature Verification:
   - The recipient's server uses the public key to verify the digital signature. If the signature is valid and matches the content of the email, it means that the email was indeed signed by the private key associated with the signing domain.

In summary, the private key is used exclusively by the sender's mail server to create the digital signature. The public key, which is needed for verification, is made publicly available in the DNS. The recipient's mail server uses this public key to confirm that the email's digital signature was created with the private key associated with the sending domain. This process helps ensure the authenticity and integrity of the email message.

- DMARC:
DMARC provides domain owners with the ability to set policies for handling emails that fail authentication checks, such as marking them as spam or rejecting them outright. Additionally, DMARC includes reporting mechanisms to provide feedback on email authentication activities.

3 Response to Suspicious 
None = Accept inbox
Quarantine = SPAM
Reject = Dont receive

SMTP Port = 25
SMTP Secure = 465

Express have SMTP-Server Package instead of using http module

SMTP is based on TCP