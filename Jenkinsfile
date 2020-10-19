def builderDocker
def CommitHash

pipeline {

    agent any

    parameters {
        booleanParam(name: 'RUNTEST', defaultValue: true, description: 'Toggle this value from testing')
    }

    stages {

        stage('Build Project') {
            steps {
                nodejs("node12") {
                    sh 'yarn install'
                }
            }
        }

        stage('ansible for development') {
            when {
                expression {
                    BRANCH_NAME == "dev"
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
                                        execCommand: 'cd ansible; ansible-playbook -i hosts play.yml',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('ansible for production') {
            when {
                expression {
                    BRANCH_NAME == "prod"
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
                                        execCommand: 'cd ansible; ansible-playbook -i hosts db-center.yml',
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('Run Testing production') {
            when {
                expression {
                    BRANCH_NAME == "prod"  
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
                                        execCommand: 'ansible prod-server -a "curl localhost:8080"',
                                        execTimeout: 60000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        } 

        stage('Run Testing Development') {
            when {
                expression {
                    BRANCH_NAME == "prod" || BRANCH_NAME == "dev"
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
                                        execCommand: 'ansible dev-server -a "curl localhost:8080"',
                                        execTimeout: 60000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        // stage('Push Image') {
        //     when {
        //         expression {
        //             params.RUNTEST
        //         }
        //     }
        //     steps {
                
        //         script {
        //             builderDocker.push("${env.GIT_BRANCH}")
        //         }
        //     }
        // }

        // stage('Deploy on development') {
        //     when {
        //         expression {
        //             BRANCH_NAME == 'dev'
        //         }
        //     }
        //     steps {
        //         script {
        //             sshPublisher(
        //                 publishers: [
        //                     sshPublisherDesc(
        //                         configName: 'Developmen',
        //                         verbose: false,
        //                         transfers: [
        //                             sshTransfer(
        //                                 sourceFiles: 'docker-compose.yml',
        //                                 remoteDirectory: 'backend',
        //                                 execCommand: 'cd backend && docker-compose up -d',
        //                                 execTimeout: 120000,
        //                             )
        //                         ]
        //                     )
        //                 ]
        //             )
        //         }
        //     }
        // }
        // stage('Deploy on production') {
        //     when {
        //         expression {
        //             BRANCH_NAME == 'master'
        //         }
        //     }
        //     steps {
        //         script {
        //             sshPublisher(
        //                 publishers: [
        //                     sshPublisherDesc(
        //                         configName: 'production',
        //                         verbose: false,
        //                         transfers: [
        //                             sshTransfer(
        //                                 sourceFiles: 'docker-compose.yml',
        //                                 remoteDirectory: 'backend',
        //                                 execCommand: 'cd backend && docker-compose up -d',
        //                                 execTimeout: 120000,
        //                             )
        //                         ]
        //                     )
        //                 ]
        //             )
        //         }
        //     }
        // }
    }
}

