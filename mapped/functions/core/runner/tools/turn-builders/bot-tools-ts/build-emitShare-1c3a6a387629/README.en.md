# `build/emitShare`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/bot-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772036-772044](../../../../../../../../reference/runtime/host-main.cjs#L772036-L772044) | `ArrowFunctionExpression` | no | `message` |
| [evaluation:571269-571277](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571269-L571277) | `ArrowFunctionExpression` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772036-772044](../../../../../../../../reference/runtime/host-main.cjs#L772036-L772044) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772036 uses an implicit arrow-function return.
| [evaluation:571269-571277](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571269-L571277) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:571269 uses an implicit arrow-function return.

### host:772036

Calls written directly in this body: `Date.now`, `host.emitUpdate`.

SHA-256 of the source span: `1b55ae1a774182ba9785ce917a24c8d3182424f16579d105dba2364ee5789c97`.

### evaluation:571269

Calls written directly in this body: `Date.now`, `host.emitUpdate`.

SHA-256 of the source span: `1b55ae1a774182ba9785ce917a24c8d3182424f16579d105dba2364ee5789c97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
