# `round`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743164-743164](../../../../../../../../reference/runtime/host-main.cjs#L743164-L743164) | `ArrowFunctionExpression` | no | `ms2` |
| [evaluation:516015-516015](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516015-L516015) | `ArrowFunctionExpression` | no | `ms2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743164-743164](../../../../../../../../reference/runtime/host-main.cjs#L743164-L743164) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:743164 uses an implicit arrow-function return.
| [evaluation:516015-516015](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516015-L516015) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:516015 uses an implicit arrow-function return.

### host:743164

Calls written directly in this body: `Math.round`.

SHA-256 of the source span: `b1b18673394368c950d9ea210513d38df5edc25a12fd98bf20ac6deb3b3c531f`.

### evaluation:516015

Calls written directly in this body: `Math.round`.

SHA-256 of the source span: `b1b18673394368c950d9ea210513d38df5edc25a12fd98bf20ac6deb3b3c531f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
