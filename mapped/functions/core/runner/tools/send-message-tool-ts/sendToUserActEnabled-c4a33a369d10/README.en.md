# `sendToUserActEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761168-761174](../../../../../../../reference/runtime/host-main.cjs#L761168-L761174) | `FunctionDeclaration` | no | `deps` |
| [evaluation:551983-551989](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551983-L551989) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761168-761174](../../../../../../../reference/runtime/host-main.cjs#L761168-L761174) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551983-551989](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551983-L551989) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761168

Calls written directly in this body: `deps.sandUiAct`, `deps.sandUiMap`, `deps.sandUiOpen`, `sandUiActUnlocked`.

SHA-256 of the source span: `47d68a826ebea0bf39caa64b973b9ebacd5b889418751030fe656ef55faf876d`.

### evaluation:551983

Calls written directly in this body: `deps.sandUiAct`, `deps.sandUiMap`, `deps.sandUiOpen`, `sandUiActUnlocked`.

SHA-256 of the source span: `47d68a826ebea0bf39caa64b973b9ebacd5b889418751030fe656ef55faf876d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
