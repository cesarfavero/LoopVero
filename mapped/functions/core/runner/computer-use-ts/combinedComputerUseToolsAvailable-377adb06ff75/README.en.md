# `combinedComputerUseToolsAvailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525265-525269](../../../../../../reference/runtime/sand-eval-runner.cjs#L525265-L525269) | `FunctionDeclaration` | no | `disabledToolIdentifiers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525265-525269](../../../../../../reference/runtime/sand-eval-runner.cjs#L525265-L525269) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525265

Calls written directly in this body: `disabledToolIdentifiers.some`.

SHA-256 of the source span: `9ceddb5fe51f56df45ce08ed1358cac41d73bde88fd9898dfcff52d25576b4a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
