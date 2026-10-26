# `SandSkillPublishService.listTargets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702131-702163](../../../../../../../reference/runtime/host-main.cjs#L702131-L702163) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702131-702163](../../../../../../../reference/runtime/host-main.cjs#L702131-L702163) | 1 | 0 | 2 | 2 | 0 | 1 |

### host:702131

Calls written directly in this body: `errorLogTag`, `errorMessage`, `new GetTeamsRequest`, `noPublishTargetsRefusal`, `publishableTeams`, `this.options.client.getTeams`, `this.options.log`, `this.options.readMemberPublishMarketplaces`, `this.options.reportEdgeFailed`.

Assignment or increment targets: `response`.

SHA-256 of the source span: `67e42e31e1e677f5b71f6697b018c9e7f414ad2530912bd137f110d6fc010147`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
