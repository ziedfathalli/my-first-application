FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY target/backend-0.0.1-SNAPSHOT.jar backend.jar
CMD ["java", "-jar", "backend.jar"]
EXPOSE 8081
