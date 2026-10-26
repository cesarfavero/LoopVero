# `acceptanceLookupFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491904-491929](../../../../../reference/runtime/host-main.cjs#L491904-L491929) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491904-491929](../../../../../reference/runtime/host-main.cjs#L491904-L491929) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:491904

Calls written directly in this body: `acceptanceStatusFrom`, `isUnknownRecord2`, `parseAgentId`.

SHA-256 of the source span: `fe92ddf02a24011c367fcb47478dc907b839e429a95b9afc3f8934496995e0f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
