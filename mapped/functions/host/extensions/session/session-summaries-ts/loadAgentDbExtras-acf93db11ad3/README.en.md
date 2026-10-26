# `loadAgentDbExtras`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722550-722554](../../../../../../../reference/runtime/host-main.cjs#L722550-L722554) | `FunctionDeclaration` | no | `db, dbPath, dirName, dbStats` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722550-722554](../../../../../../../reference/runtime/host-main.cjs#L722550-L722554) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:722550

Calls written directly in this body: `ensureProfileFile`, `readDbExtras`.

SHA-256 of the source span: `06d637a8b3d52630ada5400c07c31c42d0221701eb1fb0af58f07759a4c0c056`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
