# `sendToUserOpenEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761162-761167](../../../../../../../reference/runtime/host-main.cjs#L761162-L761167) | `FunctionDeclaration` | no | `deps` |
| [evaluation:551977-551982](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551977-L551982) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761162-761167](../../../../../../../reference/runtime/host-main.cjs#L761162-L761167) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551977-551982](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551977-L551982) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761162

Calls written directly in this body: `deps.sandUiMap`, `deps.sandUiOpen`, `sandUiOpenUnlocked`.

SHA-256 of the source span: `ba87ebf4b5e422b9f4e0635a77796380d255eb4896374c10f0d5c71bbb434ad9`.

### evaluation:551977

Calls written directly in this body: `deps.sandUiMap`, `deps.sandUiOpen`, `sandUiOpenUnlocked`.

SHA-256 of the source span: `ba87ebf4b5e422b9f4e0635a77796380d255eb4896374c10f0d5c71bbb434ad9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
