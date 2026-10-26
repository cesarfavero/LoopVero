# `playwrightRunCodeResultMeter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-meter.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-meter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479682-479685](../../../../../../reference/runtime/sand-eval-runner.cjs#L479682-L479685) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479682-479685](../../../../../../reference/runtime/sand-eval-runner.cjs#L479682-L479685) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:479682

Calls written directly in this body: `playwrightRunCodeSuccessMeter`.

SHA-256 of the source span: `e69bc3f2fc56b7fe16f6b7a93b17e044b10d636aeca4808c4f141401bb2f8d2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
