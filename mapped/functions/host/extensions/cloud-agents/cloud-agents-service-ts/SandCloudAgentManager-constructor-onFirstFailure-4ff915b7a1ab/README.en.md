# `SandCloudAgentManager.constructor/onFirstFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538332-538332](../../../../../../../reference/runtime/host-main.cjs#L538332-L538332) | `ArrowFunctionExpression` | no | `errorClass` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538332-538332](../../../../../../../reference/runtime/host-main.cjs#L538332-L538332) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:538332 uses an implicit arrow-function return.

### host:538332

Calls written directly in this body: `reportHostDiagnostic`.

SHA-256 of the source span: `883cd26e124da6adf75e880c02814692eb15ae19c3dd3198defb215bee6b21b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
