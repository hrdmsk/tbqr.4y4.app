export interface BaseConfig {
    email: string;
    user: string;
    pass: string;
    host: string;
    port: number;
    protocol: number;
    security: number;
    auth: number;
}

export interface SmtpConfig {
    host: string;
    security: number;
    port: number;
    user: string;
    pass: string;
}

export interface ThunderbirdConfig {
    base: BaseConfig;
    smtp: SmtpConfig;
}

export function buildThunderbirdData(config: ThunderbirdConfig) {
    const { base, smtp } = config;
    const incomingArray = [base.protocol, base.host, base.port, base.security, base.auth, base.user, base.email, base.pass];
    const outgoingSettings = [0, smtp.host, smtp.port, smtp.security, base.auth, smtp.user, smtp.pass];

    return [
        1, [1, 1], incomingArray, [[outgoingSettings, [base.email, base.email]]]
    ];
}
