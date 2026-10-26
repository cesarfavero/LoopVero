# `normalizeSendToAgentArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757285-757321](../../../../../../../reference/runtime/host-main.cjs#L757285-L757321) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:543308-543344](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543308-L543344) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757285-757321](../../../../../../../reference/runtime/host-main.cjs#L757285-L757321) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:543308-543344](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543308-L543344) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:757285

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`, `SEND_TO_AGENT_FAN_OUT_KEYS.find`, `aliasesUsed.join`, `ctx.addIssue`, `isUnknownRecord2`, `pick2`, `preprocessLenientBoolean`, `reportShim`, `sendToAgentArgAlias.applied`.

SHA-256 of the source span: `c432d46496234f32c9de6296d624f5bd0d9f11a332195fecf01985193f735c68`.

### evaluation:543308

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`, `SEND_TO_AGENT_FAN_OUT_KEYS.find`, `aliasesUsed.join`, `ctx.addIssue`, `isUnknownRecord2`, `pick2`, `preprocessLenientBoolean`, `reportShim`, `sendToAgentArgAlias.applied`.

SHA-256 of the source span: `27567c8a338d52c707e730cbaa42ee0481e172cbed81123f477d751cc6f7938c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
