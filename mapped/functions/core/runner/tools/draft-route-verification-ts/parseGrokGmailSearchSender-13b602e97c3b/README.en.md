# `parseGrokGmailSearchSender`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735093-735095](../../../../../../../reference/runtime/host-main.cjs#L735093-L735095) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540667-540669](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540667-L540669) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735093-735095](../../../../../../../reference/runtime/host-main.cjs#L735093-L735095) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540667-540669](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540667-L540669) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735093

Calls written directly in this body: `.find`, `grokGmailSentMessages`.

SHA-256 of the source span: `84e3f4033778eae1314823fca8a9f75f7dfe7ead912fe304a16bd9dc1e42538b`.

### evaluation:540667

Calls written directly in this body: `.find`, `grokGmailSentMessages`.

SHA-256 of the source span: `84e3f4033778eae1314823fca8a9f75f7dfe7ead912fe304a16bd9dc1e42538b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
