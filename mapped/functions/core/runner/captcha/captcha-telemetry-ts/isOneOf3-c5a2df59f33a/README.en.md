# `isOneOf3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/captcha/captcha-telemetry.ts` · [Module README](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489620-489622](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489620-L489622) | `FunctionDeclaration` | no | `values, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489620-489622](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489620-L489622) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489620

Calls written directly in this body: `values.some`.

SHA-256 of the source span: `cb39b08f8e6d98d144d22d1b1cb277f4426d46492c19d5dcb9ef9d5d6ddb83b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
