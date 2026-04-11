pipeline {
    // Defines where the pipeline will run. Using 'agent any' lets Jenkins allocate an available agent.
    agent any

    // Configures tools like NodeJS, ensuring they are available in the PATH.
    
    // The stages section defines the sequence of tasks.
    stages {
        stage('Build and Install Dependencies') {
            steps {
                 bat 'npm install'
                  bat'npx playwright install --with-deps'
            }
        }

        stage('Help') {
            steps {
                // Installs project dependencies defined in package.json.
                 bat 'npx playwright --help'
                
               }
        }

        stage('Run Playwright Tests') {
            steps {
                // Executes the Playwright tests in headless mode by default.
                // Configuration can be specified in playwright.config.ts or via command line flags.
              //  bat 'npx playwright test flipcartusingEnv.spec.ts --project=chromium --headed'
             bat 'npx playwright test -g "json dd test" --project=chromium --headed'
            }
        }
         stage('Reporting') {
            steps {
                // Publish JUnit test results to Jenkins for better visualization and tracking.
             //  bat 'npx playwright show-report'
             sh 'npx playwright show-report'
            }
           }
    }

    // The post section defines actions to run after the stages are complete.
    post {
        // Actions that run regardless of the build result (success, failure, unstable).
        success {
            // Archives the JUnit report so Jenkins can display structured test results.
            emailext (
              subject: "Jenkins Build success: ${env.JOB_NAME}",
                body: "Project: ${env.JOB_NAME}\nBuild Number: ${env.BUILD_NUMBER}\nView the log at: ${env.BUILD_URL}\n\nStatus details attached.",
                attachmentsPattern: 'build_status.txt', // Attach the file created by the bat command
                to: "deepfalke@gmail.com"                

            )
            
               }
        failure {
            emailext (
               subject: "Jenkins Build failed: ${env.JOB_NAME}",
                body: "Project: ${env.JOB_NAME}\nBuild Number: ${env.BUILD_NUMBER}\nView the log at: ${env.BUILD_URL}\n\nStatus details attached.",
                attachmentsPattern: 'build_status.txt', // Attach the file created by the bat command
                to: "deepfalke@gmail.com"
                               
            )
        }
    }
}

