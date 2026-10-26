# `listenerIntegrationManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/listener-integrations.ts` · [Module README](../../../../../modules/shared/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485677-485679](../../../../../../reference/runtime/host-main.cjs#L485677-L485679) | `FunctionDeclaration` | no | `platform2` |
| [evaluation:548078-548080](../../../../../../reference/runtime/sand-eval-runner.cjs#L548078-L548080) | `FunctionDeclaration` | no | `platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485677-485679](../../../../../../reference/runtime/host-main.cjs#L485677-L485679) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548078-548080](../../../../../../reference/runtime/sand-eval-runner.cjs#L548078-L548080) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485677

Calls written directly in this body: `LISTENER_INTEGRATIONS.find`.

SHA-256 of the source span: `abbf2fcf07259a46be0e85117204f69f2f4ffdcf0365fe1a28d347a58139e5bf`.

### evaluation:548078

Calls written directly in this body: `LISTENER_INTEGRATIONS.find`.

SHA-256 of the source span: `a1d74eba14108dbb4b286a347162b8631a65ac3db265c3d7a348a9653f386c4c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
