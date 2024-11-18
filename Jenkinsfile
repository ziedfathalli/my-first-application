pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ziedfathalli/my-first-application.git'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                // Exemple de commande de déploiement
                sh 'scp target/myapp.jar user@server:/path/to/deploy/'
                // Ou une commande Docker
                // sh 'docker build -t myapp:latest .'
                // sh 'docker run -d -p 8080:8080 myapp:latest'
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
