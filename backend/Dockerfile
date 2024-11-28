FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY target/backend-3.0.0-SNAPSHOT.jar backend.jar
CMD ["java", "-jar", "backend.jar"]
EXPOSE 8081
