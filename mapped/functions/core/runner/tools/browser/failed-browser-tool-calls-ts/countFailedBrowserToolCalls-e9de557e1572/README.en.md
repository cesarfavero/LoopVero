# `countFailedBrowserToolCalls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/failed-browser-tool-calls.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/failed-browser-tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776108-776124](../../../../../../../../reference/runtime/host-main.cjs#L776108-L776124) | `FunctionDeclaration` | no | `tool, recordFailure` |
| [evaluation:575764-575780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575764-L575780) | `FunctionDeclaration` | no | `tool, recordFailure` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776108-776124](../../../../../../../../reference/runtime/host-main.cjs#L776108-L776124) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575764-575780](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575764-L575780) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776108

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2774cca7e39b51b1661e0cb3e4c751b2ec8ab9d42578a955bbde458447598490`.

### evaluation:575764

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `98bda64fd8fbbfaa458d102c0277d2cea92a70e587a4a6cc11608b0472386fe3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
