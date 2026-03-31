module.exports = {
    apps: [
        {
            name: "config-server",
            args: "java -jar target ./config-server/config-server-1.0.0.jar",
            log_files: "./logs/config-server.log",
        },
        {
            name: "Service-registry",
            args: " java -jar ./Service-registry/target/service-registry-1.0.0.jar",
            log_files: "./logs/service-registry.log",
        },
        {
            name: "api-gateway",
            args: "java -jar ./api-gateway/target/api-gateway-1.0.0.jar",
            log_files: "./logs/api-gateway.log",
        }
    ]
};