# `isSandDefaultAgentName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agents.ts` · [Module README](../../../../../modules/shared/agents/agents-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485343-485346](../../../../../../reference/runtime/host-main.cjs#L485343-L485346) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485343-485346](../../../../../../reference/runtime/host-main.cjs#L485343-L485346) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485343

Calls written directly in this body: `name18.trim`.

SHA-256 of the source span: `0f3e2555d93463d196a4cb89bdfa08456aa59b476eb2748cd1d670b0b389d35c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
