def builderDocker
def CommitHash

pipeline {
    agent any 

    parameters {
        booleanParam(name: 'RunTest', defaultValue: true, description: 'Toggle this value for testing')
        choice(name: 'CICD', choices: ['CI', 'CICD'], description: 'pick CI / CI and CD')
        
    }
    stages {

        stage('build Project') {
            steps{
                nodejs("node12") {
                    sh 'yarn install'
                }
            }
        }

        stage('Build image') {
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'cd ansible2/ansible/backend; ansible-playbook -i hosts builder.yml',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('deployment') {
            when {
                expression {
                    CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'cd ansible2/ansible/backend; ansible-playbook -i hosts deploy.yml',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }


        stage('Run Testing ') {
            when {
                expression {
                   CICD == 'CICD'
                }
            }
            steps{
               script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'ansible',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        execCommand: 'ansible db-center -a "curl localhost:9191"',
                                        execTimeout: 60000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        } 
    }
}