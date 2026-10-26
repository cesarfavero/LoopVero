# `reportThrownSendFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761316-761330](../../../../../../../reference/runtime/host-main.cjs#L761316-L761330) | `FunctionDeclaration` | no | `execute, onFailed` |
| [evaluation:552131-552145](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552131-L552145) | `FunctionDeclaration` | no | `execute, onFailed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761316-761330](../../../../../../../reference/runtime/host-main.cjs#L761316-L761330) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552131-552145](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552131-L552145) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761316

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `5c075e8d57c2887baed10fd978c47300a7e61d7072a797544985e378cb2c5ab0`.

### evaluation:552131

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f4fad674e09def212862f15e3ba56c698568872c2ec1ff46c8db0f821dff4249`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
