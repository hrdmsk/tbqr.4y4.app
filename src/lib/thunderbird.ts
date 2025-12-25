export interface BaseConfig {
    email: string;
    displayName: string;
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

    const identity = [base.email, base.displayName || base.email];

    return [
        1, [1, 1], incomingArray, [[outgoingSettings, identity]]
    ];
}

/**
 * Builds Thunderbird data for multiple accounts
 * Format: [1, [1, 1], in1, [[out1, [email1, email1]]], in2, [[out2, [email2, email2]]], ...]
 */
export function buildMultiThunderbirdData(configs: ThunderbirdConfig[]) {
    const result: any[] = [1, [1, 1]];

    configs.forEach(config => {
        const { base, smtp } = config;
        const incomingArray = [base.protocol, base.host, base.port, base.security, base.auth, base.user, base.email, base.pass];
        const outgoingSettings = [0, smtp.host, smtp.port, smtp.security, base.auth, smtp.user, smtp.pass];

        const identity = [base.email, base.displayName || base.email];

        result.push(incomingArray);
        result.push([[outgoingSettings, identity]]);
    });

    return result;
}
