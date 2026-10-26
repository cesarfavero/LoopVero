# `traceSendPhase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/send-trace-host.ts` · [Module README](../../../../modules/core/send-trace-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528791-528828](../../../../../reference/runtime/sand-eval-runner.cjs#L528791-L528828) | `FunctionDeclaration` | yes | `ctx, name18, fn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528791-528828](../../../../../reference/runtime/sand-eval-runner.cjs#L528791-L528828) | 3 | 0 | 4 | 4 | 1 | 4 |

### evaluation:528791

Calls written directly in this body: `String`, `createContext`, `ctx.withName`, `errorLogTag`, `fn`, `getSpan2`, `new Error`, `process.stderr.write`, `span.end`, `span.recordException`, `span.setStatus`, `withSpan`.

Assignment or increment targets: `childCtx`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `72b5464d9922b29fb6ad6c1e84111b2189e53da9852a084d3b5c34f58904c002`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
