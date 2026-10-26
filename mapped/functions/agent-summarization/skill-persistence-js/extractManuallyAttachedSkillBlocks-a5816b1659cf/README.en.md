# `extractManuallyAttachedSkillBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/skills/README.en.md).

**Module:** `agent-summarization/skill-persistence.js` · [Module README](../../../../modules/agent-summarization/skill-persistence-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620591-620609](../../../../../reference/runtime/host-main.cjs#L620591-L620609) | `FunctionDeclaration` | no | `redactedMessage` |
| [evaluation:304945-304963](../../../../../reference/runtime/sand-eval-runner.cjs#L304945-L304963) | `FunctionDeclaration` | no | `redactedMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620591-620609](../../../../../reference/runtime/host-main.cjs#L620591-L620609) | 3 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:304945-304963](../../../../../reference/runtime/sand-eval-runner.cjs#L304945-L304963) | 3 | 2 | 0 | 2 | 0 | 0 |

### host:620591

Calls written directly in this body: `.map`, `content.filter`, `fromRedactedCoreMessage`, `match2.trim`, `segment.match`, `skillBlocks.push`.

SHA-256 of the source span: `e6ce401060650175cadec1a9fc5cb0a093e8be31692cf0778380432278992248`.

### evaluation:304945

Calls written directly in this body: `.map`, `content.filter`, `fromRedactedCoreMessage`, `match2.trim`, `segment.match`, `skillBlocks.push`.

SHA-256 of the source span: `e6ce401060650175cadec1a9fc5cb0a093e8be31692cf0778380432278992248`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
