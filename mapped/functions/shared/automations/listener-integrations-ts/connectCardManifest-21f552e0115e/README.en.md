# `connectCardManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/listener-integrations.ts` · [Module README](../../../../../modules/shared/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485697-485699](../../../../../../reference/runtime/host-main.cjs#L485697-L485699) | `FunctionDeclaration` | no | `platform2` |
| [evaluation:548098-548100](../../../../../../reference/runtime/sand-eval-runner.cjs#L548098-L548100) | `FunctionDeclaration` | no | `platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485697-485699](../../../../../../reference/runtime/host-main.cjs#L485697-L485699) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548098-548100](../../../../../../reference/runtime/sand-eval-runner.cjs#L548098-L548100) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485697

Calls written directly in this body: `SCM_CONNECT_CARD_INTEGRATIONS.find`, `listenerIntegrationManifest`.

SHA-256 of the source span: `38206b4fe365a6f565442e6d83d769457a975c838542b4cc72beedeb162b4ef2`.

### evaluation:548098

Calls written directly in this body: `SCM_CONNECT_CARD_INTEGRATIONS.find`, `listenerIntegrationManifest`.

SHA-256 of the source span: `66a3c61298bcf2dcf988add26ce2f1f3c7173a3ca206f890c6ebd64a5b96fd93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
