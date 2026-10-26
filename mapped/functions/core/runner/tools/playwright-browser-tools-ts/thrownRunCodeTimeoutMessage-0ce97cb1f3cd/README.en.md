# `thrownRunCodeTimeoutMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750856-750865](../../../../../../../reference/runtime/host-main.cjs#L750856-L750865) | `FunctionDeclaration` | no | `error64` |
| [evaluation:523707-523716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523707-L523716) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750856-750865](../../../../../../../reference/runtime/host-main.cjs#L750856-L750865) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:523707-523716](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523707-L523716) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:750856

Calls written directly in this body: `THROWN_RUN_CODE_DEADLINE.test`, `message.includes`, `playwrightToolCallErrorClass`, `playwrightToolErrorReason`, `visibleTimeoutMessage`.

SHA-256 of the source span: `26b9190aacbb105b5acdff5ff3f3f4f502eaa8528aa0ef073cac9c8262953e2d`.

### evaluation:523707

Calls written directly in this body: `THROWN_RUN_CODE_DEADLINE.test`, `message.includes`, `playwrightToolCallErrorClass`, `playwrightToolErrorReason`, `visibleTimeoutMessage`.

SHA-256 of the source span: `27d2f60a286674799b698142f452ce699b31eca2a4d90b2e841d113c4ced2ba2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
