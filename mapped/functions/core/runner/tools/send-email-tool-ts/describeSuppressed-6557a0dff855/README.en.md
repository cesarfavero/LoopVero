# `describeSuppressed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764374-764378](../../../../../../../reference/runtime/host-main.cjs#L764374-L764378) | `FunctionDeclaration` | no | `suppressed` |
| [evaluation:557742-557746](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557742-L557746) | `FunctionDeclaration` | no | `suppressed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764374-764378](../../../../../../../reference/runtime/host-main.cjs#L764374-L764378) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557742-557746](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557742-L557746) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:764374

Calls written directly in this body: `.join`, `suppressed.map`.

SHA-256 of the source span: `fb0c1cab9abc276c98c0f08dbd493e23feb2fc5a36d96feb9ce8acc1c0688b1d`.

### evaluation:557742

Calls written directly in this body: `.join`, `suppressed.map`.

SHA-256 of the source span: `fb0c1cab9abc276c98c0f08dbd493e23feb2fc5a36d96feb9ce8acc1c0688b1d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
