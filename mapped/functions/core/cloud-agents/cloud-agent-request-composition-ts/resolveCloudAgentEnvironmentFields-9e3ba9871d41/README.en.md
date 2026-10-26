# `resolveCloudAgentEnvironmentFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510306-510350](../../../../../../reference/runtime/host-main.cjs#L510306-L510350) | `FunctionDeclaration` | no | `repoUrl, environment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510306-510350](../../../../../../reference/runtime/host-main.cjs#L510306-L510350) | 8 | 0 | 0 | 5 | 2 | 0 |

### host:510306

Calls written directly in this body: `deriveRepoLabelValueFromUrl`, `environment.name.trim`, `labels.push`, `new PrivateWorkerLabel`, `new SandCloudAgentLaunchError`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `e44f784653da043b08b175ee2a8a6fb14965bce4a5986472f30205efeb0669ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
