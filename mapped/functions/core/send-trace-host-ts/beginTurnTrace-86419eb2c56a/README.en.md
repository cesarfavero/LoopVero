# `beginTurnTrace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/send-trace-host.ts` · [Module README](../../../../modules/core/send-trace-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528723-528760](../../../../../reference/runtime/sand-eval-runner.cjs#L528723-L528760) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528723-528760](../../../../../reference/runtime/sand-eval-runner.cjs#L528723-L528760) | 6 | 1 | 0 | 5 | 0 | 1 |

### evaluation:528723

Calls written directly in this body: `Object.entries`, `base.withName`, `createContext`, `createContextFromRemoteSpanContext`, `getSpan2`, `mintTraceparent`, `new DisposableSpan`, `parseTraceparent`, `resolveTurnTraceSampleRatio`, `shouldSampleSend`, `span.setAttribute`, `withInheritableAttribute`, `withSpan`.

Assignment or increment targets: `base`, `ctx`.

SHA-256 of the source span: `7bc0a247cc6a2937104661a36c09369fd73473b62c94454f70bb8ba4a044fdd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
