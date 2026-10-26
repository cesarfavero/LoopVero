# `grokGmailSentMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735074-735092](../../../../../../../reference/runtime/host-main.cjs#L735074-L735092) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540648-540666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540648-L540666) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735074-735092](../../../../../../../reference/runtime/host-main.cjs#L735074-L735092) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540648-540666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540648-L540666) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:735074

Calls written directly in this body: `.flatMap`, `Array.isArray`, `listField`, `parseDraftConnectorJson`.

SHA-256 of the source span: `da386123c5fbb34908e7cfd318cfffb72695742ab18fea99b89b1eeffc76668e`.

### evaluation:540648

Calls written directly in this body: `.flatMap`, `Array.isArray`, `listField`, `parseDraftConnectorJson`.

SHA-256 of the source span: `b8be79ec42991cbd027bcecb861ead65ba16e37d3f4e8ee4d17e8fc1fc9e577e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
