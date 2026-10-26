# `_MeetingsTools.scheduleOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773401-773412](../../../../../../reference/runtime/host-main.cjs#L773401-L773412) | `method` | no | `schedule` |
| [evaluation:572627-572638](../../../../../../reference/runtime/sand-eval-runner.cjs#L572627-L572638) | `method` | no | `schedule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773401-773412](../../../../../../reference/runtime/host-main.cjs#L773401-L773412) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572627-572638](../../../../../../reference/runtime/sand-eval-runner.cjs#L572627-L572638) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:773401

Calls written directly in this body: `Date.parse`, `repeatOf`.

SHA-256 of the source span: `b2f4b93c6fff671b1e7bdc603a4bd523e3c483ba46b3b1912fb88009a622f5ed`.

### evaluation:572627

Calls written directly in this body: `Date.parse`, `repeatOf`.

SHA-256 of the source span: `b2f4b93c6fff671b1e7bdc603a4bd523e3c483ba46b3b1912fb88009a622f5ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
