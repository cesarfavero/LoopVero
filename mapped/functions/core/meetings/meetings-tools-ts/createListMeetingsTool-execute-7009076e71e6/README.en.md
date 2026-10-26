# `createListMeetingsTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773587-773587](../../../../../../reference/runtime/host-main.cjs#L773587-L773587) | `ArrowFunctionExpression` | no | `_ctx, args, d` |
| [evaluation:572813-572813](../../../../../../reference/runtime/sand-eval-runner.cjs#L572813-L572813) | `ArrowFunctionExpression` | no | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773587-773587](../../../../../../reference/runtime/host-main.cjs#L773587-L773587) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773587 uses an implicit arrow-function return.
| [evaluation:572813-572813](../../../../../../reference/runtime/sand-eval-runner.cjs#L572813-L572813) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572813 uses an implicit arrow-function return.

### host:773587

Calls written directly in this body: `MeetingsTools.list`.

SHA-256 of the source span: `c10ca610da655c9af81365700bc57394af798a352f1e5dd42259b9fa667e206c`.

### evaluation:572813

Calls written directly in this body: `MeetingsTools.list`.

SHA-256 of the source span: `c10ca610da655c9af81365700bc57394af798a352f1e5dd42259b9fa667e206c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
