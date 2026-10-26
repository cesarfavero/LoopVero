# `CardReader.list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707320-707327](../../../../../../reference/runtime/host-main.cjs#L707320-L707327) | `method` | no | `path33, value, max, read2` |
| [evaluation:481442-481449](../../../../../../reference/runtime/sand-eval-runner.cjs#L481442-L481449) | `method` | no | `path33, value, max, read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707320-707327](../../../../../../reference/runtime/host-main.cjs#L707320-L707327) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481442-481449](../../../../../../reference/runtime/sand-eval-runner.cjs#L481442-L481449) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:707320

Calls written directly in this body: `.flatMap`, `this.count`.

SHA-256 of the source span: `4ff033340e59100205518287789a412f32321e002978b3f7e09d7de41cf372e3`.

### evaluation:481442

Calls written directly in this body: `.flatMap`, `this.count`.

SHA-256 of the source span: `4ff033340e59100205518287789a412f32321e002978b3f7e09d7de41cf372e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
