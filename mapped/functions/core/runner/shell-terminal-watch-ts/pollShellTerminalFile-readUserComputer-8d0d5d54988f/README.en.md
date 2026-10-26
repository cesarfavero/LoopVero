# `pollShellTerminalFile/readUserComputer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/shell-terminal-watch.ts` · [Module README](../../../../../modules/core/runner/shell-terminal-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533311-533319](../../../../../../reference/runtime/sand-eval-runner.cjs#L533311-L533319) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533311-533319](../../../../../../reference/runtime/sand-eval-runner.cjs#L533311-L533319) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:533311

Calls written directly in this body: `host.box.ensureReady`, `host.ctx.with`, `host.getConversationId`, `readShellTerminalSnapshot`, `sandTerminalFilePath`.

Assignment or increment targets: `outputPath`.

SHA-256 of the source span: `43537f8ea95d8b389971356d47e800cf4e2bbb311ff6ee2708a16e0f9b27ed9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
