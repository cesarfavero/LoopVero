# `deleteSandAgentDbWriteGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/store-db.ts` · [Module README](../../../../../modules/host/storage/store-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478876-478878](../../../../../../reference/runtime/host-main.cjs#L478876-L478878) | `FunctionDeclaration` | no | `dbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478876-478878](../../../../../../reference/runtime/host-main.cjs#L478876-L478878) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:478876

Calls written directly in this body: `dbWriteGenerations.delete`.

SHA-256 of the source span: `cbc4141d8c293432be20bec47805c4cf3f0275f60c8d0e76e48a6a0c425b72ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
