# `toolsWithheldBy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756663-756670](../../../../../../../reference/runtime/host-main.cjs#L756663-L756670) | `FunctionDeclaration` | no | `keepList` |
| [evaluation:542583-542590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542583-L542590) | `FunctionDeclaration` | no | `keepList` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756663-756670](../../../../../../../reference/runtime/host-main.cjs#L756663-L756670) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542583-542590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542583-L542590) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756663

Calls written directly in this body: `.map`, `GROK_BOT_TOOL_IDS.filter`, `new Map`, `toolStrings`.

SHA-256 of the source span: `e7fd28517bbf5c434a1bccc1f134d43188fca5e1ad93b4bb135729cd6190eed0`.

### evaluation:542583

Calls written directly in this body: `.map`, `GROK_BOT_TOOL_IDS.filter`, `new Map`, `toolStrings`.

SHA-256 of the source span: `e7fd28517bbf5c434a1bccc1f134d43188fca5e1ad93b4bb135729cd6190eed0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
