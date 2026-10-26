# `parseGrokGmailRepliedTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735096-735104](../../../../../../../reference/runtime/host-main.cjs#L735096-L735104) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540670-540678](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540670-L540678) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735096-735104](../../../../../../../reference/runtime/host-main.cjs#L735096-L735104) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540670-540678](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540670-L540678) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:735096

Calls written directly in this body: `Object.entries`, `Object.fromEntries`, `grokGmailAddress`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `c04e7668ec1baa3221ef6c9d593b61101cc20d628c19a2d5a95a0badc1cea5e0`.

### evaluation:540670

Calls written directly in this body: `Object.entries`, `Object.fromEntries`, `grokGmailAddress`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `eb40c596e61640a492a9586d84d426aea2c43c269c841d039eec9f07521570ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
