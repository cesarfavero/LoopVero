# `SandBoxNoMonitorAvailableError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/box.ts` · [Module README](../../../../../modules/core/ports/box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489506-489509](../../../../../../reference/runtime/host-main.cjs#L489506-L489509) | `method` | no | `message = "No private desktop monitor is available on the shared box."` |
| [evaluation:475693-475696](../../../../../../reference/runtime/sand-eval-runner.cjs#L475693-L475696) | `method` | no | `message = "No private desktop monitor is available on the shared box."` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489506-489509](../../../../../../reference/runtime/host-main.cjs#L489506-L489509) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:475693-475696](../../../../../../reference/runtime/sand-eval-runner.cjs#L475693-L475696) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:489506

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `e7ea5502224d31b92150f027ac69e65abb51fbe4c1f5df90adadb79930f10871`.

### evaluation:475693

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `e7ea5502224d31b92150f027ac69e65abb51fbe4c1f5df90adadb79930f10871`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
