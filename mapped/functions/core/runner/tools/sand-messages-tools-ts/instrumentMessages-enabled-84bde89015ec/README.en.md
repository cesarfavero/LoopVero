# `instrumentMessages/enabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778196-778196](../../../../../../../reference/runtime/host-main.cjs#L778196-L778196) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:577931-577931](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577931-L577931) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778196-778196](../../../../../../../reference/runtime/host-main.cjs#L778196-L778196) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:778196 uses an implicit arrow-function return.
| [evaluation:577931-577931](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577931-L577931) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:577931 uses an implicit arrow-function return.

### host:778196

Calls written directly in this body: `messages2.enabled`.

SHA-256 of the source span: `ef387d76c8a5621390fc75b1ab5245e48a0625a2ffbaad646db0e069b06828cd`.

### evaluation:577931

Calls written directly in this body: `messages.enabled`.

SHA-256 of the source span: `4fdd138544cd453b1255721e8c6fec39ee3a306ed35d080252a2c35a4124ea03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
