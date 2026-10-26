# `applies`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-notices.ts` · [Module README](../../../../../modules/core/automations/automation-notices-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715533-715535](../../../../../../reference/runtime/host-main.cjs#L715533-L715535) | `ArrowFunctionExpression` | no | `automation` |
| [host:715543-715543](../../../../../../reference/runtime/host-main.cjs#L715543-L715543) | `ArrowFunctionExpression` | no | `automation` |
| [evaluation:527211-527213](../../../../../../reference/runtime/sand-eval-runner.cjs#L527211-L527213) | `ArrowFunctionExpression` | no | `automation` |
| [evaluation:527221-527221](../../../../../../reference/runtime/sand-eval-runner.cjs#L527221-L527221) | `ArrowFunctionExpression` | no | `automation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715533-715535](../../../../../../reference/runtime/host-main.cjs#L715533-L715535) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:715533 uses an implicit arrow-function return.
| [host:715543-715543](../../../../../../reference/runtime/host-main.cjs#L715543-L715543) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:715543 uses an implicit arrow-function return.
| [evaluation:527211-527213](../../../../../../reference/runtime/sand-eval-runner.cjs#L527211-L527213) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:527211 uses an implicit arrow-function return.
| [evaluation:527221-527221](../../../../../../reference/runtime/sand-eval-runner.cjs#L527221-L527221) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:527221 uses an implicit arrow-function return.

### host:715533

Calls written directly in this body: `.some`, `triggerListeners`.

SHA-256 of the source span: `61479809d428f1c37c26bfa54bfa2a34b756e5de7b12a78ce29bcc28ae40d6b9`.

### host:715543

Calls written directly in this body: `automation.pendingNotices.includes`.

SHA-256 of the source span: `15569ee5f4792957c15bd6ca492f03678540927ca267f405f4024e3d76c86d6f`.

### evaluation:527211

Calls written directly in this body: `.some`, `triggerListeners`.

SHA-256 of the source span: `61479809d428f1c37c26bfa54bfa2a34b756e5de7b12a78ce29bcc28ae40d6b9`.

### evaluation:527221

Calls written directly in this body: `automation.pendingNotices.includes`.

SHA-256 of the source span: `15569ee5f4792957c15bd6ca492f03678540927ca267f405f4024e3d76c86d6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
