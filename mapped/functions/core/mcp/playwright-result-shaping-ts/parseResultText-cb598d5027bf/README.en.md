# `parseResultText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-result-shaping.ts` · [Module README](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585074-585082](../../../../../../reference/runtime/sand-eval-runner.cjs#L585074-L585082) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585074-585082](../../../../../../reference/runtime/sand-eval-runner.cjs#L585074-L585082) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:585074

Calls written directly in this body: `.push`, `line.slice`, `line.startsWith`, `sections.at`, `sections.push`, `text3.split`.

SHA-256 of the source span: `8b8752657082dfd2bf53d822281915c98e6212324f666975a7fd18f2770e5f33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
