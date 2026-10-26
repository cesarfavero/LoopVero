# `exactAccessibleNameRef/inFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727079-727079](../../../../../../../reference/runtime/host-main.cjs#L727079-L727079) | `ArrowFunctionExpression` | no | `frameName` |
| [evaluation:561690-561690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561690-L561690) | `ArrowFunctionExpression` | no | `frameName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727079-727079](../../../../../../../reference/runtime/host-main.cjs#L727079-L727079) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:727079 uses an implicit arrow-function return.
| [evaluation:561690-561690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561690-L561690) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:561690 uses an implicit arrow-function return.

### host:727079

Calls written directly in this body: `frameName.startsWith`.

SHA-256 of the source span: `c63446e96d7d11227ff23c802e0e312a9b664a1b0d71e32460a2cfba09db0795`.

### evaluation:561690

Calls written directly in this body: `frameName.startsWith`.

SHA-256 of the source span: `c63446e96d7d11227ff23c802e0e312a9b664a1b0d71e32460a2cfba09db0795`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
