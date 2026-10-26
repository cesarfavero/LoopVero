# `fetchCloudAgentReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512610-512620](../../../../../../reference/runtime/host-main.cjs#L512610-L512620) | `FunctionDeclaration` | yes | `backend, bcId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512610-512620](../../../../../../reference/runtime/host-main.cjs#L512610-L512620) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:512610

Calls written directly in this body: `process.stderr.write`, `readCloudAgentReport`.

SHA-256 of the source span: `0db0b08a0418aa45094d3d2fe525af868e5c074c2c73033d612187b20de182b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
