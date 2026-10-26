# `parseGmailProfileSender`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735036-735039](../../../../../../../reference/runtime/host-main.cjs#L735036-L735039) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540610-540613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540610-L540613) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735036-735039](../../../../../../../reference/runtime/host-main.cjs#L735036-L735039) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540610-540613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540610-L540613) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:735036

Calls written directly in this body: `isPlainAddress`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `19a0419db0d39e5bd1c6e2617eedd8821bd4cd322933a1fdb886810acf8ecb3f`.

### evaluation:540610

Calls written directly in this body: `isPlainAddress`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `19a0419db0d39e5bd1c6e2617eedd8821bd4cd322933a1fdb886810acf8ecb3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
