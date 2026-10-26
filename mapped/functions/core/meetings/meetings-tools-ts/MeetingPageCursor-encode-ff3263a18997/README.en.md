# `MeetingPageCursor.encode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773019-773023](../../../../../../reference/runtime/host-main.cjs#L773019-L773023) | `method` | no | `key` |
| [evaluation:572245-572249](../../../../../../reference/runtime/sand-eval-runner.cjs#L572245-L572249) | `method` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773019-773023](../../../../../../reference/runtime/host-main.cjs#L773019-L773023) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572245-572249](../../../../../../reference/runtime/sand-eval-runner.cjs#L572245-L572249) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773019

Calls written directly in this body: `.toString`, `Buffer.from`, `JSON.stringify`.

SHA-256 of the source span: `9a3d1a814d80c11daa5e5cb05925d237953141f702a595452848023919819907`.

### evaluation:572245

Calls written directly in this body: `.toString`, `Buffer.from`, `JSON.stringify`.

SHA-256 of the source span: `9a3d1a814d80c11daa5e5cb05925d237953141f702a595452848023919819907`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
