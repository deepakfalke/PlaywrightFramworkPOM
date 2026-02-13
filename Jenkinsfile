pipeline {
    // Defines where the pipeline will run. Using 'agent any' lets Jenkins allocate an available agent.
    agent any

    // Configures tools like NodeJS, ensuring they are available in the PATH.
    
    // The stages section defines the sequence of tasks.
    stages {
        stage('Build and Install Dependencies') {
            steps {
                 
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
                bat 'npx playwright test tests/flipcartusingEnv.spec.ts --project=chromium --headed'
            }
        }
    }

    // The post section defines actions to run after the stages are complete.
    post {
        // Actions that run regardless of the build result (success, failure, unstable).
        always {
            // Archives the JUnit report so Jenkins can display structured test results.
            emailext body: '''Hi,

            Please find Jenkins report summary

            Thanks''', subject: 'Jenkins report summary', to: 'deepfalke@gmail.com'
            
        }
    }
}