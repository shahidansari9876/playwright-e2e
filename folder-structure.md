# PLAYWRGHT-E2E-TESTS Folder Structure

```text
PLAYWRGHT-E2E-TESTS/
├── .github/                         # CI Config folder
├── .vscode/                         # Editor-specific settings
│   └── mcp.json                     # MCP server config for VS Code
├── config/                          # Environment-specific config files
├── data/                            # Static data and constants
│   └── constants.json               # Common constants used in tests
├── debug/                           # Optional: Debug-related outputs/logs
├── logs/                            # Application/test logs
├── node_modules/                    # Auto-generated dependencies
├── playwright-report/               # Playwright HTML test report output
├── resources/                       # Misc test resources (e.g. images, files)
├── tests/                           # All organized test files
│   ├── api/                         # API test specs
│   ├── demo/                        # Demo-related test specs
│   ├── devices/                     # Device-related scenarios
│   ├── e2e/                         # End-to-end test specs
│   ├── functional/                  # Functional test cases
│   ├── helpers/                     # Utility functions for tests
│   └── page-objects/                # Page Object Model files
├── tests-examples/                  # Auto-generated sample test scenarios
├── .env                              # Local environment variables
├── .env.example                     # Template for environment files
├── .gitignore                       # Git ignored files and folders
├── playwright.config.ts             # Playwright test configuration
├── package-lock.json                # Dependency lock file
├── package.json                     # Project metadata and scripts
└── README.md                        # Project documentation
```
