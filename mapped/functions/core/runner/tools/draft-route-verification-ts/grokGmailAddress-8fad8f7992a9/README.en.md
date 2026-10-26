# `grokGmailAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735066-735073](../../../../../../../reference/runtime/host-main.cjs#L735066-L735073) | `FunctionDeclaration` | no | `value` |
| [evaluation:540640-540647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540640-L540647) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735066-735073](../../../../../../../reference/runtime/host-main.cjs#L735066-L735073) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540640-540647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540640-L540647) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:735066

Calls written directly in this body: `/<([^\s<>]+@[^\s<>]+)>/.exec`, `Object.entries`, `Object.fromEntries`, `isPlainAddress`, `text3.trim`.

SHA-256 of the source span: `4037a0e4979613103fe29645c023d8eae8330cc6395150f561c6098e8d9a67ad`.

### evaluation:540640

Calls written directly in this body: `/<([^\s<>]+@[^\s<>]+)>/.exec`, `Object.entries`, `Object.fromEntries`, `isPlainAddress`, `text3.trim`.

SHA-256 of the source span: `4037a0e4979613103fe29645c023d8eae8330cc6395150f561c6098e8d9a67ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
