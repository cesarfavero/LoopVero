# `toolCallResultOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750808-750823](../../../../../../../reference/runtime/host-main.cjs#L750808-L750823) | `FunctionDeclaration` | no | `tool, result` |
| [evaluation:523659-523674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523659-L523674) | `FunctionDeclaration` | no | `tool, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750808-750823](../../../../../../../reference/runtime/host-main.cjs#L750808-L750823) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:523659-523674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523659-L523674) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:750808

Calls written directly in this body: `playwrightRunCodeToolError`, `playwrightSnapshotSkipped`, `playwrightToolErrorReason`, `runCodeErrorText`, `successOf`, `textOf`.

SHA-256 of the source span: `cd6e7004cd1e666a86d94a0118229c3e687709d8603d5d5a1ebea10005b69c3f`.

### evaluation:523659

Calls written directly in this body: `playwrightRunCodeToolError`, `playwrightSnapshotSkipped`, `playwrightToolErrorReason`, `runCodeErrorText`, `successOf`, `textOf2`.

SHA-256 of the source span: `cd6db56b77588b486e978f3a49495a378b5eb65c5aa6c108329265dafa3b337b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
