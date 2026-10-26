# `messageLooksTransient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736210-736213](../../../../../../reference/runtime/host-main.cjs#L736210-L736213) | `FunctionDeclaration` | no | `message` |
| [evaluation:589891-589894](../../../../../../reference/runtime/sand-eval-runner.cjs#L589891-L589894) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736210-736213](../../../../../../reference/runtime/host-main.cjs#L736210-L736213) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589891-589894](../../../../../../reference/runtime/sand-eval-runner.cjs#L589891-L589894) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736210

Calls written directly in this body: `TRANSIENT_MESSAGE_TOKENS.some`, `message.toLowerCase`.

SHA-256 of the source span: `1f6a986cbe0250988e2c57002d52d96cd53754ed09cea35af379c7b686c6efde`.

### evaluation:589891

Calls written directly in this body: `TRANSIENT_MESSAGE_TOKENS.some`, `message.toLowerCase`.

SHA-256 of the source span: `1f6a986cbe0250988e2c57002d52d96cd53754ed09cea35af379c7b686c6efde`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
