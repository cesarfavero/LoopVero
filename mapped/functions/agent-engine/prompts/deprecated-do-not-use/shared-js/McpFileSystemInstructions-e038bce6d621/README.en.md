# `McpFileSystemInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/deprecated-do-not-use/shared.js` · [Module README](../../../../../../modules/agent-engine/prompts/deprecated-do-not-use/shared-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636261-636305](../../../../../../../reference/runtime/host-main.cjs#L636261-L636305) | `FunctionDeclaration` | no | `{ workspaceProjectDir, mcpDescriptors }, toolNames = {}` |
| [evaluation:424317-424361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424317-L424361) | `FunctionDeclaration` | no | `{ workspaceProjectDir, mcpDescriptors }, toolNames = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636261-636305](../../../../../../../reference/runtime/host-main.cjs#L636261-L636305) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424317-424361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424317-L424361) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:636261

Calls written directly in this body: `.join`, `.trim`, `mcpDescriptors.map`.

SHA-256 of the source span: `7b519278c33e4997614e561f5c34955f30eb94e2a2ca46d332307a3bca699450`.

### evaluation:424317

Calls written directly in this body: `.join`, `.trim`, `mcpDescriptors.map`.

SHA-256 of the source span: `7b519278c33e4997614e561f5c34955f30eb94e2a2ca46d332307a3bca699450`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
