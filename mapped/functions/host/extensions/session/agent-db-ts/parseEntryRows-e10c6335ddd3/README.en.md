# `parseEntryRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718254-718262](../../../../../../../reference/runtime/host-main.cjs#L718254-L718262) | `FunctionDeclaration` | no | `rows` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718254-718262](../../../../../../../reference/runtime/host-main.cjs#L718254-L718262) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:718254

Calls written directly in this body: `entries.push`, `parseTranscriptEntry`.

SHA-256 of the source span: `14a5651a0ddd3fe75f3d568f8c8a988ebd3a0e8d477aff1ba1e42b6bfb577cc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
