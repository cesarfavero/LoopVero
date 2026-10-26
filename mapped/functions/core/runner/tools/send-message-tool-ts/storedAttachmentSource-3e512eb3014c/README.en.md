# `storedAttachmentSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760624-760630](../../../../../../../reference/runtime/host-main.cjs#L760624-L760630) | `FunctionDeclaration` | no | `source` |
| [evaluation:551439-551445](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551439-L551445) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760624-760630](../../../../../../../reference/runtime/host-main.cjs#L760624-L760630) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551439-551445](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551439-L551445) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:760624

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `c0c54c2227d58e886a8a28c3009c7b6ba94a35d05584fd852b441d76214e8c1a`.

### evaluation:551439

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7b9fec84443065fc43a277a0a0f7571f02bdc8ea3b9c787d36e53970048f084c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
