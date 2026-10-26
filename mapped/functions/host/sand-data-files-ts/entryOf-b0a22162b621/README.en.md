# `entryOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627629-627631](../../../../../reference/runtime/sand-eval-runner.cjs#L627629-L627631) | `FunctionDeclaration` | no | `fd, logicalPath, name18` |
| [state-worker:630-632](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L630-L632) | `FunctionDeclaration` | no | `fd, logicalPath, name` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627629-627631](../../../../../reference/runtime/sand-eval-runner.cjs#L627629-L627631) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:630-632](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L630-L632) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:627629

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e2707b1386eabb19d53e1d23ad62e1a0fc87008d7eb906e69ee4536c4b6ec536`.

### state-worker:630

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `23f9dc63aa2ae39c3f6ad6fcdb50e287ecf2ca54c38fd19e83957b47e2961cbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
