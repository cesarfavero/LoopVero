# `humanOnlyReviewLedger/ruleRefused`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-decision-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699207-699208](../../../../../../../reference/runtime/host-main.cjs#L699207-L699208) | `ArrowFunctionExpression` | no | `(none)` |
| [host:699213-699213](../../../../../../../reference/runtime/host-main.cjs#L699213-L699213) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:489939-489940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489939-L489940) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:489945-489945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489945-L489945) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699207-699208](../../../../../../../reference/runtime/host-main.cjs#L699207-L699208) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:699213-699213](../../../../../../../reference/runtime/host-main.cjs#L699213-L699213) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:699213 uses an implicit arrow-function return.
| [evaluation:489939-489940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489939-L489940) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489945-489945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489945-L489945) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:489945 uses an implicit arrow-function return.

### host:699207

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### host:699213

Calls written directly in this body: `audit.decide`.

SHA-256 of the source span: `a85ccf89e7905a851bfc35c736682857d85e6e7501724cc5f01261b477dbd16a`.

### evaluation:489939

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### evaluation:489945

Calls written directly in this body: `audit.decide`.

SHA-256 of the source span: `a85ccf89e7905a851bfc35c736682857d85e6e7501724cc5f01261b477dbd16a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
