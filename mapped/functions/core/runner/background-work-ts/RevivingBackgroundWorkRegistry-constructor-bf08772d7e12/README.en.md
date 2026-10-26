# `RevivingBackgroundWorkRegistry.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490401-490405](../../../../../../reference/runtime/sand-eval-runner.cjs#L490401-L490405) | `method` | no | `onShellCompletion, onShellWorkRegistered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490401-490405](../../../../../../reference/runtime/sand-eval-runner.cjs#L490401-L490405) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:490401

Calls written directly in this body: `super`.

Assignment or increment targets: `this.onShellCompletion`, `this.onShellWorkRegistered`.

SHA-256 of the source span: `9b0f7a09b00c4ba64cf045537afe6424a5a1103fa481ace2338d1f07f1731ee1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
