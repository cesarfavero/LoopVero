# `normalizeSubagentIdArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780875-780899](../../../../../../../reference/runtime/host-main.cjs#L780875-L780899) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:581222-581246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581222-L581246) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780875-780899](../../../../../../../reference/runtime/host-main.cjs#L780875-L780899) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:581222-581246](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581222-L581246) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:780875

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`, `SUBAGENT_ID_ALIASES.filter`, `aliases.join`, `aliases.map`, `ctx.addIssue`, `isUnknownRecord2`, `new Set`, `reportShim`, `subagentIdAlias.applied`, `subagentIdAlias.refused`.

SHA-256 of the source span: `ffcc38335e79b6e9cf7081171d4747faa501e44089c5c36a4a7190c2c6390c3d`.

### evaluation:581222

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`, `SUBAGENT_ID_ALIASES.filter`, `aliases.join`, `aliases.map`, `ctx.addIssue`, `isUnknownRecord2`, `new Set`, `reportShim`, `subagentIdAlias.applied`, `subagentIdAlias.refused`.

SHA-256 of the source span: `b7b03a5496a233b5e5a7943b6c1a2d00fb8d19c90173a7a74e450dd6af8cc261`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
