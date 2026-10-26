# `createHostGatewayApi/getSkillPublishTargets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492882-492882](../../../../../reference/runtime/host-main.cjs#L492882-L492882) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492882-492882](../../../../../reference/runtime/host-main.cjs#L492882-L492882) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:492882 uses an implicit arrow-function return.

### host:492882

Calls written directly in this body: `.skillPublish.listTargets`, `deps.extensions.api`.

SHA-256 of the source span: `31ce1dd33a3f66a01139e264edcc1d4d655c8beb15282dd9c882fa5cc25afacd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
