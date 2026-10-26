# `ttfaPhaseSpans`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-latency/turn-ttfa-trace.ts` · [Module README](../../../../../../modules/core/runner/turn-latency/turn-ttfa-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546865-546895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546865-L546895) | `FunctionDeclaration` | no | `marks` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546865-546895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546865-L546895) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:546865

Calls written directly in this body: `Math.max`, `Math.min`, `known.slice`, `phases2.push`, `points.filter`.

Assignment or increment targets: `previousAt`.

SHA-256 of the source span: `419a371b37822577dc3b84a33d4aa813d4261aedcbdf998aee659600b5a9c7cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
