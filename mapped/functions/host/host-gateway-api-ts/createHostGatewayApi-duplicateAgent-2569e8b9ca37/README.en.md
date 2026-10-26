# `createHostGatewayApi/duplicateAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492632-492674](../../../../../reference/runtime/host-main.cjs#L492632-L492674) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492632-492674](../../../../../reference/runtime/host-main.cjs#L492632-L492674) | 3 | 0 | 1 | 1 | 1 | 1 |

### host:492632

Calls written directly in this body: `.logs.reportAgentDuplicated`, `deps.extensions.api`, `identity.noteAgentMinted`, `identity.rollbackRemoteAgent`, `manager.cloneAgent`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `581fbc490749a8f67e1b6c313cb1dbf9022b242d4d4c49b75049ccd3884dbd75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
