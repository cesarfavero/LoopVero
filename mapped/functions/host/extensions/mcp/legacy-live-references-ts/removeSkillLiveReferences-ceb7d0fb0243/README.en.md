# `removeSkillLiveReferences`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/legacy-live-references.ts` · [Module README](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684759-684770](../../../../../../../reference/runtime/host-main.cjs#L684759-L684770) | `FunctionDeclaration` | no | `sandRootDir, sourceUrls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684759-684770](../../../../../../../reference/runtime/host-main.cjs#L684759-L684770) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:684759

Calls written directly in this body: `getGlobalSkillsDir`, `isLiveReferencePointerBody`, `library.list`, `library.remove`, `new GlobalSkillLibrary`, `new Set`, `normalizePluginSkillSourceUrl`, `refs.has`, `sourceUrls.map`.

Assignment or increment targets: `removed`.

SHA-256 of the source span: `d0e0c7fa7aa1331dc8193466fe5f8b64465da37f3b5e486c0638377139ed7986`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
