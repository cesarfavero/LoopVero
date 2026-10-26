# `cloneAvatarFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-clone.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-clone-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716946-716954](../../../../../../../reference/runtime/host-main.cjs#L716946-L716954) | `FunctionDeclaration` | no | `sourceDir, targetDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716946-716954](../../../../../../../reference/runtime/host-main.cjs#L716946-L716954) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:716946

Calls written directly in this body: `copySandDataFileSync`, `getSandProfilePath`, `listConventionalAvatarFilenames`, `readLegacyProfileAvatarField`, `resolveDerivedAvatarFilename`.

SHA-256 of the source span: `773171d413372811f9198f81ab9ee1ee5b9f49d15c73c6f2d2428bad41dba54a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
