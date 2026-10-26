# `SandSkillPublishService.publish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702164-702186](../../../../../../../reference/runtime/host-main.cjs#L702164-L702186) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702164-702186](../../../../../../../reference/runtime/host-main.cjs#L702164-L702186) | 3 | 0 | 2 | 1 | 1 | 0 |

### host:702164

Calls written directly in this body: `Number.isInteger`, `new SandSkillPublishError`, `this.confirmPublishLanded`, `this.library.remove`, `this.options.log`, `this.requireLibraryRecord`, `this.upload`.

Explicit throw targets: `SandSkillPublishError`.

SHA-256 of the source span: `462ebb97f0113e4b4fcfb89d1c5047b8c6f75487a720894f744ab869eb4a3eef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
