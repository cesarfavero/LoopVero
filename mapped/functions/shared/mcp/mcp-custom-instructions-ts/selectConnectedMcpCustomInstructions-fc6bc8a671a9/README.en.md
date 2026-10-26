# `selectConnectedMcpCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-custom-instructions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529150-529159](../../../../../../reference/runtime/sand-eval-runner.cjs#L529150-L529159) | `FunctionDeclaration` | no | `connectedServerNames, instructionsByServer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529150-529159](../../../../../../reference/runtime/sand-eval-runner.cjs#L529150-L529159) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:529150

Calls written directly in this body: `entries.push`, `entries.sort`, `instructionsByServer.get`, `new Set`, `resolveMcpCustomInstruction`.

SHA-256 of the source span: `9c78c3e580362085792fc382d3b198cf026b08d242e8bda379e19a256c69a637`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
