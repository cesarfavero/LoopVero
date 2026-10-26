# `cloneAgentDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-clone.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-clone-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716955-716971](../../../../../../../reference/runtime/host-main.cjs#L716955-L716971) | `FunctionDeclaration` | no | `sourceDir, targetDir, newAgentId, profile, createAgentDb` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716955-716971](../../../../../../../reference/runtime/host-main.cjs#L716955-L716971) | 0 | 0 | 0 | 0 | 1 | 1 |

### host:716955

Calls written directly in this body: `cloneAutomations`, `cloneAvatarFiles`, `cloneStoreDb`, `copyIfPresent`, `ensureSandDataDirSync`, `getSandSettingsPath`, `removeSandDataTreeSync`, `rewriteClonedAgentIdentity`, `writeClonedProfile`, `writeSandSettingsFile`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ffde1d9e02b5403f82259234f8a12f41aafbf886bcae0dad9f81250e5b879f42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
