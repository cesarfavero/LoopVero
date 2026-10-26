# `withRecordedToolCallNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/tool-wrappers.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/tool-wrappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768976-768984](../../../../../../../../reference/runtime/host-main.cjs#L768976-L768984) | `FunctionDeclaration` | no | `tool, record3` |
| [evaluation:564576-564584](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564576-L564584) | `FunctionDeclaration` | no | `tool, record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768976-768984](../../../../../../../../reference/runtime/host-main.cjs#L768976-L768984) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564576-564584](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564576-L564584) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768976

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `1917a66f857209c5c06cda925a36b4466322262dfb05539f9d784b3efbb4f23f`.

### evaluation:564576

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8643bd5dec0dc81ddbbc243457e5dd9779de414ed8970a44249bf6e1e0012487`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
