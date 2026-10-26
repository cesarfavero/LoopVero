# `setTurnTraceAttributes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/send-trace-host.ts` · [Module README](../../../../modules/core/send-trace-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528767-528777](../../../../../reference/runtime/sand-eval-runner.cjs#L528767-L528777) | `FunctionDeclaration` | no | `trace2, attributes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528767-528777](../../../../../reference/runtime/sand-eval-runner.cjs#L528767-L528777) | 1 | 1 | 0 | 1 | 0 | 1 |

### evaluation:528767

Calls written directly in this body: `Object.entries`, `errorLogTag`, `process.stderr.write`, `trace2.span.setAttribute`.

SHA-256 of the source span: `07ad7f48c2629b17d4cc1a55964eb3480a605f8aaad039f9ad513be7df5b154f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
