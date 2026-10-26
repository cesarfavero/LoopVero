# `playwrightRunCodeErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:513982-513984](../../../../../../reference/runtime/sand-eval-runner.cjs#L513982-L513984) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:513982-513984](../../../../../../reference/runtime/sand-eval-runner.cjs#L513982-L513984) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:513982

Calls written directly in this body: `runCodeFailure`, `runCodeFailureClass`.

SHA-256 of the source span: `458ce34e17194800870c75bf1d21e06e03ff49754ab3ea1da045e2a21d8a8ac7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
