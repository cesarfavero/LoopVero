# `SandPluginSkillsService.sync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701987-702007](../../../../../../../reference/runtime/host-main.cjs#L701987-L702007) | `method` | yes | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701987-702007](../../../../../../../reference/runtime/host-main.cjs#L701987-L702007) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:701987

Calls written directly in this body: `this.current`, `this.startPass`.

Assignment or increment targets: `this.pending`, `this.pending.trigger`.

SHA-256 of the source span: `61f7c857198c1819712912a8dc41c9d7d6c5bd34d08bd81cbe0e1ce6c13c77b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
