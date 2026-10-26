# `runCodeFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700059-700075](../../../../../../reference/runtime/host-main.cjs#L700059-L700075) | `FunctionDeclaration` | no | `text3` |
| [evaluation:513837-513853](../../../../../../reference/runtime/sand-eval-runner.cjs#L513837-L513853) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700059-700075](../../../../../../reference/runtime/host-main.cjs#L700059-L700075) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:513837-513853](../../../../../../reference/runtime/sand-eval-runner.cjs#L513837-L513853) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:700059

Calls written directly in this body: `.join`, `.map`, `JSON.parse`, `failure3.data.stdio.filter`, `runCodeFailureSchema.safeParse`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `2596c78553f023df4b6f0978e7c8f6041a0e735c427a0b640add8a0771312e3c`.

### evaluation:513837

Calls written directly in this body: `.join`, `.map`, `JSON.parse`, `failure3.data.stdio.filter`, `runCodeFailureSchema.safeParse`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `9250cf6e80d416eb143aeea7da4622b7c01dc81dd503cbce0fb36fc91d7c6893`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
