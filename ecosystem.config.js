module.exports = {
    apps: [
        {
            name: "config-server",
            script: "java",
            args: "-jar ./config-server/target/config-server-1.0.0.jar",
            out_file: "./logs/config-server.log",
            error_file: "./logs/config-server.log",
            merge_logs: true
        },
        {
            name: "Service-registry",
            script: "java",
            args: "-jar ./Service-registry/target/service-registry-1.0.0.jar",
            out_file: "./logs/service-registry.log",
            error_file: "./logs/service-registry.log",
            merge_logs: true
        },
        {
            name: "api-gateway",
            script: "java",
            args: "-jar ./api-gateway/target/api-gateway-1.0.0.jar",
            out_file: "./logs/api-gateway.log",
            error_file: "./logs/api-gateway.log",
            merge_logs: true
        }
    ]
};