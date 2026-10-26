# `parseOutlookRepliedToMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735021-735028](../../../../../../../reference/runtime/host-main.cjs#L735021-L735028) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540595-540602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540595-L540602) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735021-735028](../../../../../../../reference/runtime/host-main.cjs#L735021-L735028) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540595-540602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540595-L540602) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:735021

Calls written directly in this body: `isPlainAddress`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `acc79177cc032f89b2da43c1ac2cb95c17d3a00c72782f5b4519d2184ab0d38b`.

### evaluation:540595

Calls written directly in this body: `isPlainAddress`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `95188f8e69743637ad36dc8bab53dea8a78c26abf7522ccde8013930452f9336`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
