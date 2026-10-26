# `copyIfPresent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-clone.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-clone-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716915-716917](../../../../../../../reference/runtime/host-main.cjs#L716915-L716917) | `FunctionDeclaration` | no | `sourcePath2, targetPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716915-716917](../../../../../../../reference/runtime/host-main.cjs#L716915-L716917) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:716915

Calls written directly in this body: `copySandDataFileSync`.

SHA-256 of the source span: `bc59851ddfce884e5a8f4a3b7d44eafaff895850aa0d925bf6a38ba844011d83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
