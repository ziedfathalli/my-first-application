pipeline {
    agent any
    triggers {
        githubPush()  // Ceci déclenche le pipeline à chaque push sur GitHub;
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
        stage('Deploy') {
            steps {
                // Exemple de commande de déploiement
                // sh 'scp target/myapp.jar user@server:/path/to/deploy/'
                // Ou une commande Docker
                // sh 'docker build -t myapp:latest .'
                // sh 'docker run -d -p 8080:8080 myapp:latest'
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
