# `gateMessagesOnGrants/enabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/messages-grants-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777854-777854](../../../../../../../reference/runtime/host-main.cjs#L777854-L777854) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:577589-577589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577589-L577589) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777854-777854](../../../../../../../reference/runtime/host-main.cjs#L777854-L777854) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:777854 uses an implicit arrow-function return.
| [evaluation:577589-577589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577589-L577589) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:577589 uses an implicit arrow-function return.

### host:777854

Calls written directly in this body: `messages2.enabled`.

SHA-256 of the source span: `ef387d76c8a5621390fc75b1ab5245e48a0625a2ffbaad646db0e069b06828cd`.

### evaluation:577589

Calls written directly in this body: `messages.enabled`.

SHA-256 of the source span: `4fdd138544cd453b1255721e8c6fec39ee3a306ed35d080252a2c35a4124ea03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
