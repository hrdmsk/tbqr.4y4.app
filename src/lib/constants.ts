export const AppConfig = {
    PROTOCOL: { IMAP: 0, POP3: 1 },
    SECURITY: { NONE: 0, STARTTLS: 1, SSL: 2 },
    PORTS: {
        IMAP: { PLAIN: 143, SSL: 993 },
        POP3: { PLAIN: 110, SSL: 995 },
        SMTP: { PLAIN: 587, SSL: 465 }
    }
};
