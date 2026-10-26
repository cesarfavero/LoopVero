# `executorBuildsVisualsLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/multitask-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/multitask-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754466-754473](../../../../../../../reference/runtime/host-main.cjs#L754466-L754473) | `ArrowFunctionExpression` | no | `toolName` |
| [evaluation:537169-537176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537169-L537176) | `ArrowFunctionExpression` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754466-754473](../../../../../../../reference/runtime/host-main.cjs#L754466-L754473) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:754466 uses an implicit arrow-function return.
| [evaluation:537169-537176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537169-L537176) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:537169 uses an implicit arrow-function return.

### host:754466

Calls written directly in this body: `.join`.

SHA-256 of the source span: `b486e11af460c0ef1435ab158045f1ecf7732ad644646ba34ef5d3c0103ff940`.

### evaluation:537169

Calls written directly in this body: `.join`.

SHA-256 of the source span: `b486e11af460c0ef1435ab158045f1ecf7732ad644646ba34ef5d3c0103ff940`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
