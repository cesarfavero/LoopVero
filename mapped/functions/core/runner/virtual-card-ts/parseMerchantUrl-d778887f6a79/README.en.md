# `parseMerchantUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/virtual-card.ts` · [Module README](../../../../../modules/core/runner/virtual-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725621-725632](../../../../../../reference/runtime/host-main.cjs#L725621-L725632) | `FunctionDeclaration` | no | `raw` |
| [evaluation:538678-538689](../../../../../../reference/runtime/sand-eval-runner.cjs#L538678-L538689) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725621-725632](../../../../../../reference/runtime/host-main.cjs#L725621-L725632) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:538678-538689](../../../../../../reference/runtime/sand-eval-runner.cjs#L538678-L538689) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:725621

Calls written directly in this body: `new URL`, `parsed2.toString`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `645be18ec8980a3a538c0630ba0e9660273741ef0e6eb48719bd8cc968151dba`.

### evaluation:538678

Calls written directly in this body: `new URL`, `parsed.toString`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `d5a02733a334d3819e5c21c3c8413ce803e0da02329c2c02e929aa219054d9ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
