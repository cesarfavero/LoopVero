# `describeNonVideoBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/video-attachments/container.ts` · [Module README](../../../../../../modules/core/runner/video-attachments/container-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533588-533596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533588-L533596) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533588-533596](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533588-L533596) | 5 | 0 | 0 | 6 | 0 | 0 |

### evaluation:533588

Calls written directly in this body: `.decode`, `.replace`, `.trimStart`, `/^<(!doctype\s+html|html|head|body|script)/i.test`, `/^[[{]/.test`, `IMAGE_MARKERS.some`, `bytes.subarray`, `head.startsWith`, `new TextDecoder`.

SHA-256 of the source span: `cece53690459fb283d1d9455aa9749a71c4d05477bd39567f29c7860b60750a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
