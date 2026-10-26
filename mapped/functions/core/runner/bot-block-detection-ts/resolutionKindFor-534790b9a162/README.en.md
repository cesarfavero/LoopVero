# `resolutionKindFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484144-484155](../../../../../../reference/runtime/sand-eval-runner.cjs#L484144-L484155) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484144-484155](../../../../../../reference/runtime/sand-eval-runner.cjs#L484144-L484155) | 5 | 0 | 0 | 5 | 0 | 0 |

### evaluation:484144

Calls written directly in this body: `.hostname.toLowerCase`, `.replace`, `SENTINEL_SITE_BUCKETS.has`, `URL.canParse`, `boundedSiteBucket`, `new URL`.

SHA-256 of the source span: `467f71bb31d6da41402b843903f654b25eee0956c6d24e91e113820415987f95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
