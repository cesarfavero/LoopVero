# `rowTool/<callback>/phased`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751176-751191](../../../../../../../reference/runtime/host-main.cjs#L751176-L751191) | `ArrowFunctionExpression` | no | `phase, run, attributes = {}` |
| [evaluation:524027-524042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524027-L524042) | `ArrowFunctionExpression` | no | `phase, run, attributes = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751176-751191](../../../../../../../reference/runtime/host-main.cjs#L751176-L751191) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:751176 uses an implicit arrow-function return.
| [evaluation:524027-524042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524027-L524042) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:524027 uses an implicit arrow-function return.

### host:751176

Calls written directly in this body: `playwrightPhaseSpanName`, `traceComputerUseSpan`.

SHA-256 of the source span: `f3e8dc62d8002fa942f8051eaf3cf0b06353787354f4df45ad6dad90b4edad7c`.

### evaluation:524027

Calls written directly in this body: `playwrightPhaseSpanName`, `traceComputerUseSpan`.

SHA-256 of the source span: `f3e8dc62d8002fa942f8051eaf3cf0b06353787354f4df45ad6dad90b4edad7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
