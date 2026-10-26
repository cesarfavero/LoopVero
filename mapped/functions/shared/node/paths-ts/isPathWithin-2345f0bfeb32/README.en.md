# `isPathWithin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/paths.ts` · [Module README](../../../../../modules/shared/node/paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430782-430786](../../../../../../reference/runtime/host-main.cjs#L430782-L430786) | `FunctionDeclaration` | no | `parent, child, opts = {}` |
| [state-worker:359-363](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L359-L363) | `FunctionDeclaration` | no | `parent, child, opts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430782-430786](../../../../../../reference/runtime/host-main.cjs#L430782-L430786) | 1 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:359-363](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L359-L363) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:430782

Calls written directly in this body: `rel.startsWith`.

SHA-256 of the source span: `bc1c84b155a187f6f0ac266f7d03d5c218406a382d22e6de68e064ba47a5ee8c`.

### state-worker:359

Calls written directly in this body: `rel.startsWith`.

SHA-256 of the source span: `28527867b0646816ca08240dcb0a8c4b3c2953972eac685cfb94cb0d4cd3798b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
