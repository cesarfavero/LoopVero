# `describeAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-messaging.ts` · [Module README](../../../../../modules/core/agents/agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479511-479515](../../../../../../reference/runtime/sand-eval-runner.cjs#L479511-L479515) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479511-479515](../../../../../../reference/runtime/sand-eval-runner.cjs#L479511-L479515) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479511

Calls written directly in this body: `address.description.trim`, `clampLine`.

SHA-256 of the source span: `e0cc13e70348de009bc9ebcf95c6555bccdf30105c4a6349c8283654362b330e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
