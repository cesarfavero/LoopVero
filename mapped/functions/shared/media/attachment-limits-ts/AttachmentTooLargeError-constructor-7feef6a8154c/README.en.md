# `AttachmentTooLargeError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/attachment-limits.ts` · [Module README](../../../../../modules/shared/media/attachment-limits-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497076-497080](../../../../../../reference/runtime/host-main.cjs#L497076-L497080) | `method` | no | `limitBytes` |
| [evaluation:533438-533442](../../../../../../reference/runtime/sand-eval-runner.cjs#L533438-L533442) | `method` | no | `limitBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497076-497080](../../../../../../reference/runtime/host-main.cjs#L497076-L497080) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:533438-533442](../../../../../../reference/runtime/sand-eval-runner.cjs#L533438-L533442) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:497076

Calls written directly in this body: `super`.

Assignment or increment targets: `this.limitBytes`, `this.name`.

SHA-256 of the source span: `05cc4973cc2dd6da3c4016ccf8f1f902c69fd2d9d33f2f0036109c02062988a2`.

### evaluation:533438

Calls written directly in this body: `super`.

Assignment or increment targets: `this.limitBytes`, `this.name`.

SHA-256 of the source span: `05cc4973cc2dd6da3c4016ccf8f1f902c69fd2d9d33f2f0036109c02062988a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
