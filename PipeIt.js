pipeline {
    agent any

    stages {
        stage('Init') {
            steps {
                echo 'Init'
            }
        }
        stage('Plan') {
            steps {
                echo 'Plan'
            }
        }
        stage('Construct') {
            steps {
                echo 'Construct'
            }
        }
        stage('Destroy') {
            steps {
                echo 'Destroy'
            }
        }
        stage('Control') {
            steps {
                echo 'Control'
            }
        }
    }
}
