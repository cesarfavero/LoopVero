# `getSandAgentDbWriteGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/store-db.ts` · [Module README](../../../../../modules/host/storage/store-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478870-478872](../../../../../../reference/runtime/host-main.cjs#L478870-L478872) | `FunctionDeclaration` | no | `dbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478870-478872](../../../../../../reference/runtime/host-main.cjs#L478870-L478872) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:478870

Calls written directly in this body: `dbWriteGenerations.get`.

SHA-256 of the source span: `bee6c2690318ced733d766f50a677e93b60cfe27b2a49fac4ba7ec1e5b903acd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
