# `playwrightRunCodeToolError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700280-700284](../../../../../../reference/runtime/host-main.cjs#L700280-L700284) | `FunctionDeclaration` | no | `text3` |
| [evaluation:514061-514065](../../../../../../reference/runtime/sand-eval-runner.cjs#L514061-L514065) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700280-700284](../../../../../../reference/runtime/host-main.cjs#L700280-L700284) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514061-514065](../../../../../../reference/runtime/sand-eval-runner.cjs#L514061-L514065) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700280

Calls written directly in this body: `runCodeFailure`, `runCodeFailureClass`, `runCodeWorkerFailure`.

SHA-256 of the source span: `4346767f08274b04f6a2757766497ec7b765faaff4f556a2add3862e0b64c6ef`.

### evaluation:514061

Calls written directly in this body: `runCodeFailure`, `runCodeFailureClass`, `runCodeWorkerFailure`.

SHA-256 of the source span: `4346767f08274b04f6a2757766497ec7b765faaff4f556a2add3862e0b64c6ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
