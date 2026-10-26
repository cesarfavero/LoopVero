# `pinnedRowIterator`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717502-717506](../../../../../../reference/runtime/host-main.cjs#L717502-L717506) | `FunctionDeclaration` | no | `statement` |
| [state-worker:910-914](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L910-L914) | `FunctionDeclaration` | no | `statement` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717502-717506](../../../../../../reference/runtime/host-main.cjs#L717502-L717506) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:910-914](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L910-L914) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717502

Calls written directly in this body: `statement.iterate`, `statementByRowIterator.set`.

SHA-256 of the source span: `b62bf1ba42502e33864fb03b80d726711b8e638c1e1d2cdf41b1b2196f2002cd`.

### state-worker:910

Calls written directly in this body: `statement.iterate`, `statementByRowIterator.set`.

SHA-256 of the source span: `b62bf1ba42502e33864fb03b80d726711b8e638c1e1d2cdf41b1b2196f2002cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
