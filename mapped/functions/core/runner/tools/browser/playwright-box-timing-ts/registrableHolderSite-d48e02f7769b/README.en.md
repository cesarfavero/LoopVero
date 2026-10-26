# `registrableHolderSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743258-743262](../../../../../../../../reference/runtime/host-main.cjs#L743258-L743262) | `FunctionDeclaration` | no | `host` |
| [evaluation:516109-516113](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516109-L516113) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743258-743262](../../../../../../../../reference/runtime/host-main.cjs#L743258-L743262) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:516109-516113](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516109-L516113) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:743258

Calls written directly in this body: `boundedSiteBucket`, `bucket.includes`.

SHA-256 of the source span: `afe4d0ecd9cf3f641f69dbdfb13defadb60fee39d69c46df2d858158940242f8`.

### evaluation:516109

Calls written directly in this body: `boundedSiteBucket`, `bucket.includes`.

SHA-256 of the source span: `3b7a5861dcaacbf11cbe3e1ab73ebc888be3c30dcbf3ba86a7b33a1d85139031`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
