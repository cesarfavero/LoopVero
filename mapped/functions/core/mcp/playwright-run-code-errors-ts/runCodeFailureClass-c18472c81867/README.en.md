# `runCodeFailureClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700178-700203](../../../../../../reference/runtime/host-main.cjs#L700178-L700203) | `FunctionDeclaration` | no | `failure3` |
| [evaluation:513956-513981](../../../../../../reference/runtime/sand-eval-runner.cjs#L513956-L513981) | `FunctionDeclaration` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700178-700203](../../../../../../reference/runtime/host-main.cjs#L700178-L700203) | 17 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:513956-513981](../../../../../../reference/runtime/sand-eval-runner.cjs#L513956-L513981) | 17 | 0 | 0 | 8 | 0 | 0 |

### host:700178

Calls written directly in this body: `RUN_CODE_LIMITS.find`, `RUN_CODE_LONG_SLEEP.test`, `failure3.message.startsWith`, `jobFailureClass`, `workerFailureClass`.

SHA-256 of the source span: `40c5f0fea61d7ce53fe68cd754897146666f827df99f26474dcc9842464065ad`.

### evaluation:513956

Calls written directly in this body: `RUN_CODE_LIMITS.find`, `RUN_CODE_LONG_SLEEP.test`, `failure3.message.startsWith`, `jobFailureClass`, `workerFailureClass`.

SHA-256 of the source span: `40c5f0fea61d7ce53fe68cd754897146666f827df99f26474dcc9842464065ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
