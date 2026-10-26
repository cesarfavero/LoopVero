# `conciseSendToUserDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761180-761190](../../../../../../../reference/runtime/host-main.cjs#L761180-L761190) | `FunctionDeclaration` | no | `inputs` |
| [evaluation:551995-552005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551995-L552005) | `FunctionDeclaration` | no | `inputs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761180-761190](../../../../../../../reference/runtime/host-main.cjs#L761180-L761190) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551995-552005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551995-L552005) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761180

Calls written directly in this body: `.filter`, `.join`, `gatedInAppLinksGuidance`, `headings.widget.map`.

SHA-256 of the source span: `094e76802bb39d0bf57408919b842e2c9e031769d6abeeb97717f97ea9d3a32f`.

### evaluation:551995

Calls written directly in this body: `.filter`, `.join`, `gatedInAppLinksGuidance`, `headings.widget.map`.

SHA-256 of the source span: `094e76802bb39d0bf57408919b842e2c9e031769d6abeeb97717f97ea9d3a32f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
