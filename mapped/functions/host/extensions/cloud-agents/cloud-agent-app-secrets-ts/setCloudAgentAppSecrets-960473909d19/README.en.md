# `setCloudAgentAppSecrets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-app-secrets.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-app-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538036-538076](../../../../../../../reference/runtime/host-main.cjs#L538036-L538076) | `FunctionDeclaration` | yes | `client, args, run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538036-538076](../../../../../../../reference/runtime/host-main.cjs#L538036-L538076) | 2 | 0 | 2 | 2 | 0 | 1 |

### host:538036

Calls written directly in this body: `appSecretsStoredNames`, `args.secrets.map`, `client.setAppSecrets`, `folderScope`, `new SetAppSecretsRequest`, `refusalOf`, `response.refused.map`, `tellRunAppSecretsSet`, `toSandCloudAgentAppSecrets`, `writeRefusalOf`.

Assignment or increment targets: `response`.

SHA-256 of the source span: `f4e9aba1d01ad419000c79bd046903f2c6392c7eda8c3ff8745567bfc24e2e47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
