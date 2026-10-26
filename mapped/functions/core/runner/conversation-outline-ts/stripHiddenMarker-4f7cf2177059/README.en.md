# `stripHiddenMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719694-719696](../../../../../../reference/runtime/host-main.cjs#L719694-L719696) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526170-526172](../../../../../../reference/runtime/sand-eval-runner.cjs#L526170-L526172) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719694-719696](../../../../../../reference/runtime/host-main.cjs#L719694-L719696) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526170-526172](../../../../../../reference/runtime/sand-eval-runner.cjs#L526170-L526172) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719694

Calls written directly in this body: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 of the source span: `798a3db49b4d1dc530a843c0222b7c68cef6455d3d5d977d1514a80a44e17a55`.

### evaluation:526170

Calls written directly in this body: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 of the source span: `798a3db49b4d1dc530a843c0222b7c68cef6455d3d5d977d1514a80a44e17a55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
