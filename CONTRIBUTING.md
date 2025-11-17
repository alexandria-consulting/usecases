# Contributing Guidelines

Thank you for your interest in the W3C Agent Ontology Use Cases project! We welcome contributions of new Use Cases from the community to enrich the application examples of the ontology.

This guide will explain how to contribute a new Use Case, including the process, formatting requirements, and submission method.

## Contribution Process

1.  **Fork the Repository**: First, please fork this repository to your GitHub account.
2.  **Clone Your Fork**: Clone your forked repository to your local development environment.
    ```bash
    git clone https://github.com/your-username/agent-ontology-use-cases.git
    cd agent-ontology-use-cases
    ```
3.  **Create a New Branch**: Create a new branch for your contribution. We recommend using a meaningful name, such as `feat/new-use-case-name`.
    ```bash
    git checkout -b feat/your-new-use-case-name
    ```
4.  **Create a New Use Case Directory**: Under the `use-cases/` directory, select or create a new subdirectory based on the theme of your Use Case. For example, if your Use Case belongs to the "AI and Machine Learning" category, you can create a new directory under `use-cases/ai-and-ml/` with a concise and descriptive name (e.g., `my-new-ai-use-case`).
    ```bash
    mkdir -p use-cases/your-category/your-new-use-case-name
    ```
5.  **Develop Your Use Case**:
    *   In the new Use Case directory, create all necessary files (see "File Requirements" below).
    *   Ensure your Use Case adheres to the ontology specifications and provides clear examples.
6.  **Run Local Checks**: Before committing, please run the following commands to ensure code quality and consistent formatting.
    ```bash
    pnpm install
    pnpm lint
    pnpm format
    pnpm typecheck # If your contribution includes TypeScript code
    ```
7.  **Commit Changes**: Commit your changes to your branch. Please use a clear and descriptive commit message.
    ```bash
    git add .
    git commit -m "feat: Add [Your New Use Case Name] use case"
    ```
8.  **Push to Your Fork**: Push your branch to your forked remote repository.
    ```bash
    git push origin feat/your-new-use-case-name
    ```
9.  **Create a Pull Request (PR)**: On GitHub, create a Pull Request from your branch to the `main` branch of this repository. Provide a detailed description explaining what problem your Use Case solves and how it demonstrates the concepts of the Agent Ontology.

## File Requirements

Each new Use Case directory should contain the following files:

*   **`README.md`**:
    *   **Title**: The name of the Use Case.
    *   **Introduction**: A brief explanation of the Use Case's purpose and background.
    *   **User Story**: Described in the format "As a [role], I want to [goal], so that [value]".
    *   **Key Concepts Illustrated**: List the core Agent Ontology concepts demonstrated by this Use Case.
    *   **Workflow Breakdown**: Detailed steps and interactions between agents in the Use Case.
    *   **Ontology Mapping**: Explain how entities in the Use Case map to Agent Ontology concepts.
*   **`.jsonld` file**: At least one JSON-LD formatted file representing an instance of the Agent Ontology.
*   **`.ttl` file**: At least one Turtle (Terse RDF Triple Language) formatted file representing an instance of the Agent Ontology.
*   **`.shacl.jsonld` file** (Optional but highly recommended): A SHACL file in JSON-LD format, defining validation rules for this Use Case.
*   **`.shacl.ttl` file** (Optional but highly recommended): A SHACL file in Turtle format, defining validation rules for this Use Case.

## Formatting Requirements

*   **File Naming**: Use Case directory names and file names should use lowercase letters and hyphens (`-`).
*   **Code Style**: Please adhere to the project's ESLint and Prettier configurations. Run `pnpm lint` and `pnpm format` before committing.
*   **Documentation Clarity**: The `README.md` should be clear, concise, easy to understand, and provide sufficient detail to explain the Use Case.
*   **Ontology Consistency**: Ensure your `.jsonld` and `.ttl` files strictly follow the definitions of the Agent Ontology. If SHACL files are provided, ensure they correctly validate your instances.

## Review Process

After submitting a PR, project maintainers will review your contribution. They may suggest modifications or request clarifications. Please cooperate patiently until your contribution is accepted and merged into the `main` branch.

Thank you for your contribution!