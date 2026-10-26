# `CardReader.count`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707309-707319](../../../../../../reference/runtime/host-main.cjs#L707309-L707319) | `method` | no | `path33, value, min, max` |
| [evaluation:481431-481441](../../../../../../reference/runtime/sand-eval-runner.cjs#L481431-L481441) | `method` | no | `path33, value, min, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707309-707319](../../../../../../reference/runtime/host-main.cjs#L707309-L707319) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481431-481441](../../../../../../reference/runtime/sand-eval-runner.cjs#L481431-L481441) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:707309

Calls written directly in this body: `Array.isArray`, `this.error`, `value.slice`.

SHA-256 of the source span: `f3058ab3f77e6771eb959882697c49e0c833790e57e8f8c872482e05cb98ed07`.

### evaluation:481431

Calls written directly in this body: `Array.isArray`, `this.error`, `value.slice`.

SHA-256 of the source span: `f3058ab3f77e6771eb959882697c49e0c833790e57e8f8c872482e05cb98ed07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
