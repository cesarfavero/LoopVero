# `presignAgentStoreReadBatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474326-474342](../../../../../../../reference/runtime/host-main.cjs#L474326-L474342) | `FunctionDeclaration` | yes | `client, sourceId, relPaths` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474326-474342](../../../../../../../reference/runtime/host-main.cjs#L474326-L474342) | 0 | 2 | 1 | 1 | 0 | 0 |

### host:474326

Calls written directly in this body: `byRelPath.set`, `client.presignReads`, `new Map`, `relPaths.slice`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `6e7648f5e076f8330c6f1d1f11617d930376ed46c0252778430c58291166eda3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
