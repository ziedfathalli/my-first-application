pipeline {
    agent any
     environment {
            DOCKER_REGISTRY = 'zied1983/myapps'
        }
    triggers {
        githubPush()  // Ceci déclenche le pipeline à chaque push sur GitHub ;
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ziedfathalli/my-first-application.git'
            }
        }
        stage('Build') {
            steps {
                bat 'java -version' // Utilisez bat 'java -version' sur Windows
                bat 'mvn -version'  // Utilisez bat 'mvn -version' sur Windows
                bat 'mvn clean package'
               // echo 'mvn....'
            }
        }
        stage('Test') {
            steps {
                // sh 'mvn test'
                echo 'Test....'
            }
        }
        stage('Build Frontend') {
                    steps {
                        dir('frontend') {
                            bat 'docker build -t zied1983/myapps/frontend:latest .'
                        }
                    }
                }
        stage('Build Backend') {
                    steps {
                        dir('backend') {
                            bat 'docker build -t zied1983/myapps/backend:latest .'
                        }
                    }
        }

        stage('Login to Docker Hub') {
                                    steps {
                                        withCredentials([usernamePassword(credentialsId: 'dockerhub-token', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                                            bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                                        }
                                    }
                                }

        stage('Push Images') {
                    steps {
                        bat 'docker tag local-image:latest zied1983/frontend:latest'
                        bat 'docker push zied1983/frontend:latest'
                        bat 'docker tag local-image:latest zied1983/backend:latest'
                        bat 'docker push zied1983/backend:latest'
                  }
        }
        stage('Deploy') {
            steps {
                // Exemple de commande de déploiement
                // sh 'scp target/com.example.myapp.jar user@server:/path/to/deploy/'
                // Ou une commande Docker
                // sh 'docker build -t com.example.myapp:latest .'
                // sh 'docker run -d -p 8080:8080 com.example.myapp:latest'
                echo 'Deploying....'
            }
        }
    }
    post {
        success {
            echo 'Build and Deployment Successful!'
        }
        failure {
            echo 'Build or Deployment Failed.'
        }
    }
}
