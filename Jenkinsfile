pipeline {
    // Defines where the pipeline will run. Using 'agent any' lets Jenkins allocate an available agent.
    agent any

    // Configures tools like NodeJS, ensuring they are available in the PATH.
    tools {
      //  nodejs 'Node18' // Name must match the configuration in "Global Tool Configuration".
    }

    // The stages section defines the sequence of tasks.
    stages {
        stage('Build and Install Dependencies') {
            steps {
                 sh 'npm install'
                 sh 'npx playwright install'
            }
        }

        stage('Help') {
            steps {
                // Installs project dependencies defined in package.json.
                
               }
        }

        stage('Run Playwright Tests') {
            steps {
                // Executes the Playwright tests in headless mode by default.
                // Configuration can be specified in playwright.config.ts or via command line flags.
                sh 'npx playwright test -g "Sanity check" --project=chromium --headed'
            }
        }
    }

    // The post section defines actions to run after the stages are complete.
    post {
        // Actions that run regardless of the build result (success, failure, unstable).
        always {
            // Archives the JUnit report so Jenkins can display structured test results.
            junit 'test-results/junit-report.xml'
            // Publishes the detailed HTML report for easy viewing in Jenkins UI.
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}