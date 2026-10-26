# `validateTeamSecrets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/managed-setup-service.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683842-683870](../../../../../../../reference/runtime/host-main.cjs#L683842-L683870) | `FunctionDeclaration` | no | `manifests, bundles` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683842-683870](../../../../../../../reference/runtime/host-main.cjs#L683842-L683870) | 5 | 2 | 0 | 0 | 5 | 0 |

### host:683842

Calls written directly in this body: `Buffer.byteLength`, `assignedTeamIds.has`, `manifests.map`, `new SandManagedSetupError`, `new Set`, `seenNames.add`, `seenNames.has`, `seenTeams.add`, `seenTeams.has`, `validateBoxSecretKey`.

Assignment or increment targets: `totalBytes`.

Explicit throw targets: `SandManagedSetupError`.

SHA-256 of the source span: `57be572ece97e5911a2cc21353616e3a213dc7973632484aa4d9f595fc0611b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
