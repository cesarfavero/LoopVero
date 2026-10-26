# `groupReasons`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756541-756550](../../../../../../../reference/runtime/host-main.cjs#L756541-L756550) | `FunctionDeclaration` | no | `groups` |
| [evaluation:542461-542470](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542461-L542470) | `FunctionDeclaration` | no | `groups` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756541-756550](../../../../../../../reference/runtime/host-main.cjs#L756541-L756550) | 2 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:542461-542470](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542461-L542470) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:756541

Calls written directly in this body: `GROUP_TOOLS.get`, `Object.entries`, `new Map`, `reasons.has`, `reasons.set`.

SHA-256 of the source span: `d34055c11769cc2519289f246730b8336d0d05d6c54e3c7b9c5906eebb53fe15`.

### evaluation:542461

Calls written directly in this body: `GROUP_TOOLS.get`, `Object.entries`, `new Map`, `reasons.has`, `reasons.set`.

SHA-256 of the source span: `d34055c11769cc2519289f246730b8336d0d05d6c54e3c7b9c5906eebb53fe15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
