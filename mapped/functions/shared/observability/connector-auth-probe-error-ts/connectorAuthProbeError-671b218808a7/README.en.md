# `connectorAuthProbeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/connector-auth-probe-error.ts` · [Module README](../../../../../modules/shared/observability/connector-auth-probe-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685449-685457](../../../../../../reference/runtime/host-main.cjs#L685449-L685457) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685449-685457](../../../../../../reference/runtime/host-main.cjs#L685449-L685457) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:685449

Calls written directly in this body: `.toLowerCase`, `.trim`, `HTTP_STATUS_IN_TEXT.exec`, `Number`, `Number.isInteger`, `PROBE_ERROR_PATTERNS.find`, `probeErrorForStatus`.

SHA-256 of the source span: `1c1f8022d347288babe6632ce1e0ecda7690c65ebf66a3dc7ef4761f637588a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
