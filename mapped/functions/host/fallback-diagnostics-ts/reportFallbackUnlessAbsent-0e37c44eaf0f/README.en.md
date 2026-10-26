# `reportFallbackUnlessAbsent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/observability/README.en.md).

**Module:** `host/fallback-diagnostics.ts` · [Module README](../../../../modules/host/fallback-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453501-453503](../../../../../reference/runtime/host-main.cjs#L453501-L453503) | `FunctionDeclaration` | no | `stage, error64` |
| [evaluation:627665-627667](../../../../../reference/runtime/sand-eval-runner.cjs#L627665-L627667) | `FunctionDeclaration` | no | `stage, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453501-453503](../../../../../reference/runtime/host-main.cjs#L453501-L453503) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627665-627667](../../../../../reference/runtime/sand-eval-runner.cjs#L627665-L627667) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:453501

Calls written directly in this body: `isMissingPathError`, `reportFallback`.

SHA-256 of the source span: `01b1d25e00c9038ec80a0e5a402fd6fd00be2811606156950932b2617795d9a4`.

### evaluation:627665

Calls written directly in this body: `isMissingPathError`, `reportFallback`.

SHA-256 of the source span: `e808be61ad453a164c35f2d184a64830e8bbbfb6fc4a2fe8fb65058eedc82075`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
