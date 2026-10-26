# `createRequestBoxHelpTool/description`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/box-help-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725323-725323](../../../../../../../reference/runtime/host-main.cjs#L725323-L725323) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:560426-560426](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560426-L560426) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725323-725323](../../../../../../../reference/runtime/host-main.cjs#L725323-L725323) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:725323 uses an implicit arrow-function return.
| [evaluation:560426-560426](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560426-L560426) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:560426 uses an implicit arrow-function return.

### host:725323

Calls written directly in this body: `boxHelpHandoffMechanics`, `boxHelpLoginRoute`.

SHA-256 of the source span: `170a45937383556180934c8029626816fe277e820a6d53b4cf904d5a27bfe21b`.

### evaluation:560426

Calls written directly in this body: `boxHelpHandoffMechanics`, `boxHelpLoginRoute`.

SHA-256 of the source span: `170a45937383556180934c8029626816fe277e820a6d53b4cf904d5a27bfe21b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
