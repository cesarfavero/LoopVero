# `StreamIdleError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736403-736407](../../../../../../reference/runtime/host-main.cjs#L736403-L736407) | `method` | no | `deadlineMs` |
| [evaluation:590041-590045](../../../../../../reference/runtime/sand-eval-runner.cjs#L590041-L590045) | `method` | no | `deadlineMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736403-736407](../../../../../../reference/runtime/host-main.cjs#L736403-L736407) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:590041-590045](../../../../../../reference/runtime/sand-eval-runner.cjs#L590041-L590045) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:736403

Calls written directly in this body: `super`.

Assignment or increment targets: `this.idleDeadlineMs`, `this.name`.

SHA-256 of the source span: `de600a74e4ea42d13dd5f4551e1c2994a34577db47e93503126dc90ccf59f6cf`.

### evaluation:590041

Calls written directly in this body: `super`.

Assignment or increment targets: `this.idleDeadlineMs`, `this.name`.

SHA-256 of the source span: `de600a74e4ea42d13dd5f4551e1c2994a34577db47e93503126dc90ccf59f6cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
