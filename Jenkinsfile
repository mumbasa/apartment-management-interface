pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
       
         stage('Deliver') { 
            steps {
                sh 'jenkins/scripts/deliver.sh' 
                input message: 'Finished usng the web site? (Click "Proceed" to continue)' 
      
            }
        }
    }
}
