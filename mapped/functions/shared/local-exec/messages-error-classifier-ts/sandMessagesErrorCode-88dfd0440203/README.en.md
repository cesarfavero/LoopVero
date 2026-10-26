# `sandMessagesErrorCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/local-exec/messages-error-classifier.ts` · [Module README](../../../../../modules/shared/local-exec/messages-error-classifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770374-770382](../../../../../../reference/runtime/host-main.cjs#L770374-L770382) | `FunctionDeclaration` | no | `error64` |
| [evaluation:569082-569090](../../../../../../reference/runtime/sand-eval-runner.cjs#L569082-L569090) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770374-770382](../../../../../../reference/runtime/host-main.cjs#L770374-L770382) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:569082-569090](../../../../../../reference/runtime/sand-eval-runner.cjs#L569082-L569090) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:770374

Calls written directly in this body: `CODE_BY_LABELLED_SUFFIX.find`, `CODE_BY_MESSAGE.get`, `SAND_MESSAGES_ERROR_CODES.find`.

SHA-256 of the source span: `7f0d464b7f235ad2750a19ded4a935b5cc0cf7ee6b2d7614a005402f41bd09bd`.

### evaluation:569082

Calls written directly in this body: `CODE_BY_LABELLED_SUFFIX.find`, `CODE_BY_MESSAGE.get`, `SAND_MESSAGES_ERROR_CODES.find`.

SHA-256 of the source span: `fb5591501a32eab0e446691a10edf845a112796718db6e7cc9241a0f4beb60b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
