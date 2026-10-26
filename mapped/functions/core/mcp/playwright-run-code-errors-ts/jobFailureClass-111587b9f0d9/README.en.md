# `jobFailureClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700151-700166](../../../../../../reference/runtime/host-main.cjs#L700151-L700166) | `FunctionDeclaration` | no | `message` |
| [evaluation:513929-513944](../../../../../../reference/runtime/sand-eval-runner.cjs#L513929-L513944) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700151-700166](../../../../../../reference/runtime/host-main.cjs#L700151-L700166) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:513929-513944](../../../../../../reference/runtime/sand-eval-runner.cjs#L513929-L513944) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:700151

Calls written directly in this body: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `PLAYWRIGHT_TIMEOUT_DETAIL.test`, `RUN_CODE_DEADLINE.test`, `SCRIPT_ERROR_DETAIL.exec`, `SCRIPT_ERROR_NAMES.has`, `isLocatorFailure`, `playwrightErrorHead`.

SHA-256 of the source span: `99ee5c20a49b5aa2e3672e93c6d036d4d1e2081dfe8c69043fe9035a51a4de45`.

### evaluation:513929

Calls written directly in this body: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `PLAYWRIGHT_TIMEOUT_DETAIL.test`, `RUN_CODE_DEADLINE.test`, `SCRIPT_ERROR_DETAIL.exec`, `SCRIPT_ERROR_NAMES.has`, `isLocatorFailure`, `playwrightErrorHead`.

SHA-256 of the source span: `99ee5c20a49b5aa2e3672e93c6d036d4d1e2081dfe8c69043fe9035a51a4de45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
