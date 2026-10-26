# `humanOnlyReviewLedger/answered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699209-699210](../../../../../../../reference/runtime/host-main.cjs#L699209-L699210) | `ArrowFunctionExpression` | no | `(none)` |
| [host:699220-699222](../../../../../../../reference/runtime/host-main.cjs#L699220-L699222) | `ArrowFunctionExpression` | no | `approval` |
| [evaluation:489941-489942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489941-L489942) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:489952-489954](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489952-L489954) | `ArrowFunctionExpression` | no | `approval` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699209-699210](../../../../../../../reference/runtime/host-main.cjs#L699209-L699210) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:699220-699222](../../../../../../../reference/runtime/host-main.cjs#L699220-L699222) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489941-489942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489941-L489942) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489952-489954](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489952-L489954) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:699209

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### host:699220

Calls written directly in this body: `ruleRefused`.

SHA-256 of the source span: `c9d726a38f5af20e5f6f90844106e9fd5b0ecd3b3e1b468bb9af3ecb4fb1e5bf`.

### evaluation:489941

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### evaluation:489952

Calls written directly in this body: `ruleRefused`.

SHA-256 of the source span: `c9d726a38f5af20e5f6f90844106e9fd5b0ecd3b3e1b468bb9af3ecb4fb1e5bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
