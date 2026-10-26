# `isWebpageAttachmentUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760676-760682](../../../../../../../reference/runtime/host-main.cjs#L760676-L760682) | `FunctionDeclaration` | no | `url2` |
| [evaluation:551491-551497](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551491-L551497) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760676-760682](../../../../../../../reference/runtime/host-main.cjs#L760676-L760682) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:551491-551497](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551491-L551497) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:760676

Calls written directly in this body: `classifyAttachment`, `new URL`.

SHA-256 of the source span: `5fe432d88c3209330258a37e19c8adc759910a8886e736ded541d33c0282401b`.

### evaluation:551491

Calls written directly in this body: `classifyAttachment`, `new URL`.

SHA-256 of the source span: `5fe432d88c3209330258a37e19c8adc759910a8886e736ded541d33c0282401b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
