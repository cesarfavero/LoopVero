# `watchStdioSignInDuring`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/stdio-sign-in-watch.ts` · [Module README](../../../../../modules/core/mcp/stdio-sign-in-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:579649-579679](../../../../../../reference/runtime/sand-eval-runner.cjs#L579649-L579679) | `FunctionDeclaration` | yes | `call, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579649-579679](../../../../../../reference/runtime/sand-eval-runner.cjs#L579649-L579679) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:579649

Calls written directly in this body: `.catch`, `Date.now`, `Promise.race`, `delayWith`, `new AbortController`, `settled.abort`, `stdioSignInProbes`, `watch2.finally`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `df9637444ad20c00f3efe01a16e6d6f9b72fe8ad7fa924b8aebbf22a25878853`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
