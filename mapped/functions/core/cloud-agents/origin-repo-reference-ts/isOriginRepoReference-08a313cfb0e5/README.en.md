# `isOriginRepoReference`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-reference.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509116-509125](../../../../../../reference/runtime/host-main.cjs#L509116-L509125) | `FunctionDeclaration` | no | `raw, readOriginPrIdentityHosts` |
| [evaluation:556869-556878](../../../../../../reference/runtime/sand-eval-runner.cjs#L556869-L556878) | `FunctionDeclaration` | no | `raw, readOriginPrIdentityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509116-509125](../../../../../../reference/runtime/host-main.cjs#L509116-L509125) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556869-556878](../../../../../../reference/runtime/sand-eval-runner.cjs#L556869-L556878) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509116

Calls written directly in this body: `isOriginGitHost`, `originPrIdentityHostsFor`, `portalRepoCloneUrl`, `repoReferenceAsUrl`.

SHA-256 of the source span: `e2dbab76e0dc5f32446778980f5c058385f4e88b3dee6d336a93bd7e9f8fbce0`.

### evaluation:556869

Calls written directly in this body: `isOriginGitHost`, `originPrIdentityHostsFor`, `portalRepoCloneUrl`, `repoReferenceAsUrl`.

SHA-256 of the source span: `7238f235d161f514e9a8a48c9900ffb55126ec2b911b01fdee2333d89c0e9680`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
