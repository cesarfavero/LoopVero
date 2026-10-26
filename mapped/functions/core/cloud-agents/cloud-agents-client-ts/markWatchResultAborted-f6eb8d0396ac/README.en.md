# `markWatchResultAborted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512677-512687](../../../../../../reference/runtime/host-main.cjs#L512677-L512687) | `FunctionDeclaration` | no | `bcId, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512677-512687](../../../../../../reference/runtime/host-main.cjs#L512677-L512687) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:512677

Calls written directly in this body: `.join`, `result.text.split`.

SHA-256 of the source span: `9274282112f19dfb3c6f41d1be9d5d88c6a25719249c8484407fb272606a520c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
