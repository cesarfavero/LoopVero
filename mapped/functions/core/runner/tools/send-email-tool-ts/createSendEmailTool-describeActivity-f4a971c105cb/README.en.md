# `createSendEmailTool/describeActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764490-764492](../../../../../../../reference/runtime/host-main.cjs#L764490-L764492) | `ArrowFunctionExpression` | no | `args` |
| [evaluation:557858-557860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557858-L557860) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764490-764492](../../../../../../../reference/runtime/host-main.cjs#L764490-L764492) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:764490 uses an implicit arrow-function return.
| [evaluation:557858-557860](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557858-L557860) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:557858 uses an implicit arrow-function return.

### host:764490

Calls written directly in this body: `args.to.join`.

SHA-256 of the source span: `05dcaaec1916505f272d688e84b9253d75e940af24cdfe189d297963cdabd3e9`.

### evaluation:557858

Calls written directly in this body: `args.to.join`.

SHA-256 of the source span: `05dcaaec1916505f272d688e84b9253d75e940af24cdfe189d297963cdabd3e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
