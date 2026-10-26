# `_MeetingsTools.askConsent/needsConsent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773376-773376](../../../../../../reference/runtime/host-main.cjs#L773376-L773376) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:572602-572602](../../../../../../reference/runtime/sand-eval-runner.cjs#L572602-L572602) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773376-773376](../../../../../../reference/runtime/host-main.cjs#L773376-L773376) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773376 uses an implicit arrow-function return.
| [evaluation:572602-572602](../../../../../../reference/runtime/sand-eval-runner.cjs#L572602-L572602) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572602 uses an implicit arrow-function return.

### host:773376

Calls written directly in this body: `deps.meetings.needsJoinConsent`.

SHA-256 of the source span: `cf5d404c32c7334d9cd18d9ce149c50f8117d7f429973e36d99fb0b2eb9d8ecf`.

### evaluation:572602

Calls written directly in this body: `deps.meetings.needsJoinConsent`.

SHA-256 of the source span: `cf5d404c32c7334d9cd18d9ce149c50f8117d7f429973e36d99fb0b2eb9d8ecf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
