# `workerFailureClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700167-700177](../../../../../../reference/runtime/host-main.cjs#L700167-L700177) | `FunctionDeclaration` | no | `message` |
| [evaluation:513945-513955](../../../../../../reference/runtime/sand-eval-runner.cjs#L513945-L513955) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700167-700177](../../../../../../reference/runtime/host-main.cjs#L700167-L700177) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:513945-513955](../../../../../../reference/runtime/sand-eval-runner.cjs#L513945-L513955) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:700167

Calls written directly in this body: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `RUN_CODE_WORKER_ABORTED.test`, `message.slice`, `message.startsWith`, `playwrightErrorHead`.

SHA-256 of the source span: `1531ab4700ca4a2ea91de9a95f4fe3f73ebf90a9036a18398818c1dde13d2515`.

### evaluation:513945

Calls written directly in this body: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `RUN_CODE_WORKER_ABORTED.test`, `message.slice`, `message.startsWith`, `playwrightErrorHead`.

SHA-256 of the source span: `1531ab4700ca4a2ea91de9a95f4fe3f73ebf90a9036a18398818c1dde13d2515`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
