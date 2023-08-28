pipeline {
    agent any
    environment {
        DHUB = credentials('dockerhub')
    }
    stages {      
        stage('Docker builds') {
                agent any
            steps {
                sh 'docker build -t gerrome/mern-stack-app_server:1 .'
                sh 'cd client && docker build -t gerrome/mern-stack-app_client:1 .'  
            }                                        
        }  
            
        stage('Docker push') {
                agent any
            steps {
                sh 'docker login -u ${DHUB_USR} -p ${DHUB_PSW} && docker push gerrome/mern-stack-app_server:1' 
                sh 'docker login -u ${DHUB_USR} -p ${DHUB_PSW} && docker push gerrome/mern-stack-app_client:1'                            
            }
        }
        stage('Docker-compose deploy') {
                agent any
            steps {
                sh 'docker-compose pull && docker-compose up -d'
            }  
        }          

    }
    post { 
        always { 
            echo 'I will always say Hello again!'
        }
    }
}
