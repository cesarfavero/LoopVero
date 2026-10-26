# `tooLargeAttachmentMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760619-760623](../../../../../../../reference/runtime/host-main.cjs#L760619-L760623) | `FunctionDeclaration` | no | `sourcePath2, limitBytes` |
| [evaluation:551434-551438](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551434-L551438) | `FunctionDeclaration` | no | `sourcePath2, limitBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760619-760623](../../../../../../../reference/runtime/host-main.cjs#L760619-L760623) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551434-551438](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551434-L551438) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:760619

Calls written directly in this body: `Math.floor`.

SHA-256 of the source span: `332dc7852d1baeed4d3679cd530d98e200eac9d660a69a07b64719dd51535d5e`.

### evaluation:551434

Calls written directly in this body: `Math.floor`.

SHA-256 of the source span: `838118c2bff0ac6a15ea61b34809993f1129bd6c4f18b893601810e9c13352ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
