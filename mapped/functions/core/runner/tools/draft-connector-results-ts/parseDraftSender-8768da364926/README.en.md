# `parseDraftSender`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732720-732723](../../../../../../../reference/runtime/host-main.cjs#L732720-L732723) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540242-540245](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540242-L540245) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732720-732723](../../../../../../../reference/runtime/host-main.cjs#L732720-L732723) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540242-540245](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540242-L540245) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732720

Calls written directly in this body: `bareEmailAddress`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `5bd945348dafe7439b44af28d931fb309a578c7b20620bd0c52739b230ed2fa7`.

### evaluation:540242

Calls written directly in this body: `bareEmailAddress`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `5bd945348dafe7439b44af28d931fb309a578c7b20620bd0c52739b230ed2fa7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
