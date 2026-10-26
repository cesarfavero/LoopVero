# `normalizeSendMessageTextContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760748-760755](../../../../../../../reference/runtime/host-main.cjs#L760748-L760755) | `FunctionDeclaration` | no | `content` |
| [evaluation:551563-551570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551563-L551570) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760748-760755](../../../../../../../reference/runtime/host-main.cjs#L760748-L760755) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551563-551570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551563-L551570) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:760748

Calls written directly in this body: `replaceOutsideCode`.

SHA-256 of the source span: `2c4b9d07c8751afca7ef542b8ca5c6bc34089e959070ff52217465df336cdf21`.

### evaluation:551563

Calls written directly in this body: `replaceOutsideCode`.

SHA-256 of the source span: `2c4b9d07c8751afca7ef542b8ca5c6bc34089e959070ff52217465df336cdf21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
