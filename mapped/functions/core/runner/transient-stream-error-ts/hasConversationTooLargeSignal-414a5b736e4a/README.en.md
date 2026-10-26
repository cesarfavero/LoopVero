# `hasConversationTooLargeSignal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736270-736285](../../../../../../reference/runtime/host-main.cjs#L736270-L736285) | `FunctionDeclaration` | no | `error64, seen` |
| [evaluation:589962-589977](../../../../../../reference/runtime/sand-eval-runner.cjs#L589962-L589977) | `FunctionDeclaration` | no | `error63, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736270-736285](../../../../../../reference/runtime/host-main.cjs#L736270-L736285) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:589962-589977](../../../../../../reference/runtime/sand-eval-runner.cjs#L589962-L589977) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736270

Calls written directly in this body: `Array.isArray`, `fields3.errors.some`, `hasConversationTooLargeSignal`, `seen.add`, `seen.has`.

SHA-256 of the source span: `3cce16cf6174b862ad9d382c09e5e68dbdb06fd9c8dfb66d363e30d9f0412041`.

### evaluation:589962

Calls written directly in this body: `Array.isArray`, `fields3.errors.some`, `hasConversationTooLargeSignal`, `seen.add`, `seen.has`.

SHA-256 of the source span: `af9640a148966833c09e80e3e3c452365a435b44553f2a548169ee648f9049a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
