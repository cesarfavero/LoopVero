# `SandManagedSetupClient.fetchSetupManifests`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/sand-managed-setup-client.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/sand-managed-setup-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684057-684099](../../../../../../../reference/runtime/host-main.cjs#L684057-L684099) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684057-684099](../../../../../../../reference/runtime/host-main.cjs#L684057-L684099) | 2 | 1 | 1 | 1 | 2 | 0 |

### host:684057

Calls written directly in this body: `assignedTeamIds.has`, `bundle.secrets.map`, `manifests.map`, `new SandManagedSetupClientError`, `new Set`, `response.manifests.map`, `seenTeams.add`, `seenTeams.has`, `teamSecrets.push`, `this.client.listSandSetupManifests`.

Explicit throw targets: `SandManagedSetupClientError`.

SHA-256 of the source span: `8e16d772e5e9f0bb5fb70426ec2e97edafff7e357f30c7679dd9bc2c91dc4c29`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
