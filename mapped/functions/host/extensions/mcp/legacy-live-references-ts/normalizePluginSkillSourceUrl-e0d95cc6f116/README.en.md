# `normalizePluginSkillSourceUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/legacy-live-references.ts` · [Module README](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684745-684758](../../../../../../../reference/runtime/host-main.cjs#L684745-L684758) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684745-684758](../../../../../../../reference/runtime/host-main.cjs#L684745-L684758) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:684745

Calls written directly in this body: `.filter`, `new URL`, `parsed2.hostname.toLowerCase`, `parsed2.pathname.split`, `path33.join`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `98aa8958cb83a3dec67ec0f2170e816126d046ea58d78de4752e782310f4b14b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
