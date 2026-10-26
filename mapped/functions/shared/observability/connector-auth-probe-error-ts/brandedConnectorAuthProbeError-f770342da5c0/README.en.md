# `brandedConnectorAuthProbeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/connector-auth-probe-error.ts` · [Module README](../../../../../modules/shared/observability/connector-auth-probe-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685459-685461](../../../../../../reference/runtime/host-main.cjs#L685459-L685461) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685459-685461](../../../../../../reference/runtime/host-main.cjs#L685459-L685461) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:685459

Calls written directly in this body: `brandProbeError`, `connectorAuthProbeError`.

SHA-256 of the source span: `d90ac709c1a802af0b882d6189079caf7c0ffc931b193d7a0d8b9ffde20a84ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
