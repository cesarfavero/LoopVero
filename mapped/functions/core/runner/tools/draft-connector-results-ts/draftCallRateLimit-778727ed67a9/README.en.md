# `draftCallRateLimit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732991-733000](../../../../../../../reference/runtime/host-main.cjs#L732991-L733000) | `FunctionDeclaration` | no | `result` |
| [evaluation:540513-540522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540513-L540522) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732991-733000](../../../../../../../reference/runtime/host-main.cjs#L732991-L733000) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540513-540522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540513-L540522) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:732991

Calls written directly in this body: `serverRefusedBeforeDispatch`.

SHA-256 of the source span: `9f20c750e4a60a67b623dce8dcb558c9a470975c9ae1469324c84cb83dde936f`.

### evaluation:540513

Calls written directly in this body: `serverRefusedBeforeDispatch`.

SHA-256 of the source span: `c14b730820a72dcc9cfbf85f4a71e1f5ea976583168e60c364ea8a4d6e1683cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
