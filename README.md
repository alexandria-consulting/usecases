# Agent Ontology Examples

This directory contains a collection of practical examples demonstrating the application of the Semantic Agent Communication Community Group's (SAC-CG) Agent Ontology. These examples are designed to illustrate how the core semantic concepts—such as Agent Identity, Capabilities, Intent, Delegation, Actions, Artifacts, and Accountability—can be used to model real-world multi-agent workflows and complex business scenarios.

Each subdirectory within `use-cases/` represents a distinct use case and typically includes:

*   **`README.md`**: A detailed explanation of the use case, including the user story, key concepts illustrated, workflow breakdown, and ontology mapping.
*   **`.ttl` files**: Turtle (Terse RDF Triple Language) files representing instances of the ontology, defining agents, intents, delegations, and other semantic entities.
*   **`.jsonld` files**: JSON-LD (JSON for Linking Data) representations of the ontology instances, often used for data exchange and integration with JSON-based systems.
*   **`.shacl.ttl` files**: SHACL (Shapes Constraint Language) files that define validation rules for the corresponding `.ttl` and `.jsonld` instances, ensuring data consistency and adherence to the ontology's constraints.

## Use Cases

We encourage you to explore each use case to understand how the Agent Ontology can be applied to various domains. The use cases are organized into the following categories:

### AI and Machine Learning
*   **AI Enterprise Organization**: Models an agent representing an entire AI-powered organization, managing other agents and delegating tasks. (`use-cases/ai-and-ml/ai-enterprise-organization/`)
*   **AI Liability Insurance x UL Certification**: Models a complete ecosystem of trust for safety-critical AI. (`use-cases/ai-and-ml/ai-liability-insurance-ul-certification/`)
*   **AI Workforce Employee**: Represents an agent as an employee within an AI workforce. (`use-cases/ai-and-ml/ai-workforce-employee/`)
*   **ISO SC42 Mapping**: Demonstrates how the agent ontology can be mapped to the ISO/IEC AWI 23053 standard for Artificial Intelligence. (`use-cases/ai-and-ml/iso-sc42-mapping/`)

### Identity and Security
*   **Cross-Border EUDI Wallet**: A focused example of an agent modeling a cross-border interaction with a European Digital Identity (EUDI) wallet. (`use-cases/identity-and-security/cross-border-eudi-wallet/`)
*   **Federated Digital Identity for Global Fintech Onboarding**: Demonstrates how a user can leverage multiple national digital identity wallets for secure onboarding. (`use-cases/identity-and-security/federated-digital-identity/`)
*   **Secure Execution Environment Attestation**: Details how an agent can provide a verifiable proof of its system's integrity. (`use-cases/identity-and-security/secure-execution-attestation/`)
*   **TEE Binding**: Illustrates how an agent's execution can be bound to a Trusted Execution Environment (TEE). (`use-cases/identity-and-security/tee-binding/`)
*   **Taiwan SME EUDI Compliance**: Models a compliance agent for a non-EU SME using the EUDI Wallet framework. (`use-cases/identity-and-security/taiwan-sme-eudi-compliance/`)

### Supply Chain and IoT
*   **Running Machine MVS (Minimal Viable Service)**: Models a simple agent representing a running machine. (`use-cases/supply-chain-and-iot/running-machine-mvs/`)
*   **Smart Thermostat OBM/ODM/OEM**: Illustrates the business model evolution of a Global company from OEM to ODM to OBM. (`use-cases/supply-chain-and-iot/smart-thermostat-obm-odm-oem/`)
*   **Supplier Verification**: Details an agent verifying supplier credentials and compliance. (`use-cases/supply-chain-and-iot/supplier-verification/`)
*   **Supplier Verification and Cross-Border Payment**: A comprehensive multi-agent workflow for verifying a new international supplier and executing a cross-border payment. (`use-cases/supply-chain-and-iot/supplier-verification-cross-border-payment/`)
*   **Zenith Treadmill IoT Control**: Demonstrates how a Zenith Treadmill can be modeled as an agent. (`use-cases/supply-chain-and-iot/zenith-treadmill-iot-control/`)

### Finance and Economy
*   **The Bachata Influencer: An Agent-Driven Social Economy**: A modern, creative-economy use case modeling a personal agent for a Bachata dancer. (`use-cases/finance-and-economy/bachata-influencer-social-economy/`)
*   **Stablecoin Settlement**: Shows an agent facilitating stablecoin transactions. (`use-cases/finance-and-economy/stablecoin-settlement/`)
*   **Tax Backoffice Automation**: Illustrates an agent automating tax-related backoffice tasks. (`use-cases/finance-and-economy/tax-backoffice/`)

### Agent and Delegation
*   **Multi-Agent Delegation Chain**: Demonstrates a sequential chain of delegation between multiple agents. (`use-cases/agent-and-delegation/multi-agent-delegation-chain/`)
*   **W3C CG Auto Operations Agent**: An agent for automating operations within the W3C Community Group. (`use-cases/agent-and-delegation/w3c-cg-auto-operations-agent/`)

---

**How to Contribute**: If you have ideas for new examples or improvements to existing ones, please refer to the main [CONTRIBUTING.md](../../CONTRIBUTING.md) file and open an issue or pull request.
