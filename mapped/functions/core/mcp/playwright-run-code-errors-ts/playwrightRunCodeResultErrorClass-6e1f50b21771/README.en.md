# `playwrightRunCodeResultErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:514066-514073](../../../../../../reference/runtime/sand-eval-runner.cjs#L514066-L514073) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514066-514073](../../../../../../reference/runtime/sand-eval-runner.cjs#L514066-L514073) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:514066

Calls written directly in this body: `.join`, `playwrightRunCodeErrorClass`, `success2.content.flatMap`.

SHA-256 of the source span: `50f34ccdbbb95809bb1c6c67773a0f1d0aa0536acd46d08aa2f1cfc1eb463f21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
