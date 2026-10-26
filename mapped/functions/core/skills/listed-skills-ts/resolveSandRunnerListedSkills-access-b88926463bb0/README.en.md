# `resolveSandRunnerListedSkills/access`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/listed-skills.ts` · [Module README](../../../../../modules/core/skills/listed-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479492-479492](../../../../../../reference/runtime/sand-eval-runner.cjs#L479492-L479492) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:479498-479498](../../../../../../reference/runtime/sand-eval-runner.cjs#L479498-L479498) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479492-479492](../../../../../../reference/runtime/sand-eval-runner.cjs#L479492-L479492) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:479492 uses an implicit arrow-function return.
| [evaluation:479498-479498](../../../../../../reference/runtime/sand-eval-runner.cjs#L479498-L479498) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:479498 uses an implicit arrow-function return.

### evaluation:479492

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8176575f70b6e37156a9797b9223d5f53ccbabaf16a7d8c55b6061cc8559218e`.

### evaluation:479498

Calls written directly in this body: `args.remoteBoxAvailable`, `gates.skillTool`, `store`.

SHA-256 of the source span: `22966b13cdbd021832867b37f5759915c10c703309c0b2ea3debf3aa7ecb05b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
