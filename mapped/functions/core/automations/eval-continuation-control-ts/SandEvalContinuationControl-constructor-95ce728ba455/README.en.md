# `SandEvalContinuationControl.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/eval-continuation-control.ts` · [Module README](../../../../../modules/core/automations/eval-continuation-control-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628602-628606](../../../../../../reference/runtime/sand-eval-runner.cjs#L628602-L628606) | `method` | no | `config2, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628602-628606](../../../../../../reference/runtime/sand-eval-runner.cjs#L628602-L628606) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:628602

Calls written directly in this body: `new URL`.

Assignment or increment targets: `this.config`, `this.origin`, `this.request`.

SHA-256 of the source span: `852b61a1afbb537647e3fd6ad1aadf0fb939979ac53cdda72b67f7ae4d893ca1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
