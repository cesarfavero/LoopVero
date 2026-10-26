# `hostCapabilities`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491727-491737](../../../../../reference/runtime/host-main.cjs#L491727-L491737) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491727-491737](../../../../../reference/runtime/host-main.cjs#L491727-L491737) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:491727

Calls written directly in this body: `.ensureManagedSkill`, `deps.extensions.api`, `experiments.getDynamicConfig`, `sandShareBotExportPolicyOf`.

SHA-256 of the source span: `f2e23e56e23758eb8e2f509b4b42f80a62f05b7d74e578ec4a6137107602f2ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
