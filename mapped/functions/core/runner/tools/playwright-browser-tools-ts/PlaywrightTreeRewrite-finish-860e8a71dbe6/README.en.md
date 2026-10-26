# `PlaywrightTreeRewrite.finish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751071-751076](../../../../../../../reference/runtime/host-main.cjs#L751071-L751076) | `method` | no | `result` |
| [evaluation:523922-523927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523922-L523927) | `method` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751071-751076](../../../../../../../reference/runtime/host-main.cjs#L751071-L751076) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:523922-523927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523922-L523927) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:751071

Calls written directly in this body: `new McpToolResult`, `rewriteMcpSuccessText`, `successOf`.

SHA-256 of the source span: `0e97275ba35287b24a1676b05ff10d13154c9f4976c911111f33b54b902515ae`.

### evaluation:523922

Calls written directly in this body: `new McpToolResult`, `rewriteMcpSuccessText`, `successOf`.

SHA-256 of the source span: `0e97275ba35287b24a1676b05ff10d13154c9f4976c911111f33b54b902515ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
