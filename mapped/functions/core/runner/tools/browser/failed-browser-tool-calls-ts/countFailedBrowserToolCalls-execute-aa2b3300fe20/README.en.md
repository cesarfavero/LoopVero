# `countFailedBrowserToolCalls/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/failed-browser-tool-calls.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/failed-browser-tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776111-776122](../../../../../../../../reference/runtime/host-main.cjs#L776111-L776122) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, args, meta3` |
| [evaluation:575767-575778](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575767-L575778) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, args, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776111-776122](../../../../../../../../reference/runtime/host-main.cjs#L776111-L776122) | 2 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:575767-575778](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575767-L575778) | 2 | 0 | 1 | 1 | 1 | 1 |

### host:776111

Calls written directly in this body: `isErrorResult`, `playwrightToolCallErrorClass`, `recordFailure`, `tool.execute`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `88d944282e52a0e0827a68e285b4cb1803dbfdea92970d5b6c903f83e3070d5d`.

### evaluation:575767

Calls written directly in this body: `isErrorResult`, `playwrightToolCallErrorClass`, `recordFailure`, `tool.execute`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `95d26a21654e3a0e7b666fde75680477b6a6f7ed8452e6f7474d104309fae646`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
