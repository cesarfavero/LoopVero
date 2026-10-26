# `inputOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-write-reminders.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-write-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759010-759019](../../../../../../reference/runtime/host-main.cjs#L759010-L759019) | `ArrowFunctionExpression` | no | `{ id, currentTitle, delete: remove, title, notes, due, completed, list }` |
| [evaluation:549170-549179](../../../../../../reference/runtime/sand-eval-runner.cjs#L549170-L549179) | `ArrowFunctionExpression` | no | `{ id, currentTitle, delete: remove, title, notes, due, completed, list }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759010-759019](../../../../../../reference/runtime/host-main.cjs#L759010-L759019) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:759010 uses an implicit arrow-function return.
| [evaluation:549170-549179](../../../../../../reference/runtime/sand-eval-runner.cjs#L549170-L549179) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:549170 uses an implicit arrow-function return.

### host:759010

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `42678b94051c370c3de7814b5482dbc8917d48be3a14290b5f01f800ab07ead0`.

### evaluation:549170

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `42678b94051c370c3de7814b5482dbc8917d48be3a14290b5f01f800ab07ead0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
