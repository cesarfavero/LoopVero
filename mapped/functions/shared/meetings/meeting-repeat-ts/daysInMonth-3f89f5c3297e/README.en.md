# `daysInMonth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763204-763206](../../../../../../reference/runtime/host-main.cjs#L763204-L763206) | `FunctionDeclaration` | no | `month` |
| [evaluation:556169-556171](../../../../../../reference/runtime/sand-eval-runner.cjs#L556169-L556171) | `FunctionDeclaration` | no | `month` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763204-763206](../../../../../../reference/runtime/host-main.cjs#L763204-L763206) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556169-556171](../../../../../../reference/runtime/sand-eval-runner.cjs#L556169-L556171) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763204

Calls written directly in this body: `.getUTCDate`, `Date.UTC`, `new Date`.

SHA-256 of the source span: `b6915d94c5e1101c3e2062e4021f02c574274a67a71393e92738033e0eac9a10`.

### evaluation:556169

Calls written directly in this body: `.getUTCDate`, `Date.UTC`, `new Date`.

SHA-256 of the source span: `b6915d94c5e1101c3e2062e4021f02c574274a67a71393e92738033e0eac9a10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
