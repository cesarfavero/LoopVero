# `serializeSandProfileFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490848-490867](../../../../../../reference/runtime/host-main.cjs#L490848-L490867) | `FunctionDeclaration` | no | `profile, binding = {}` |
| [evaluation:629076-629095](../../../../../../reference/runtime/sand-eval-runner.cjs#L629076-L629095) | `FunctionDeclaration` | no | `profile, binding = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490848-490867](../../../../../../reference/runtime/host-main.cjs#L490848-L490867) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629076-629095](../../../../../../reference/runtime/sand-eval-runner.cjs#L629076-L629095) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:490848

Calls written directly in this body: `.trim`, `JSON.stringify`, `profile.title.trim`.

SHA-256 of the source span: `2ffbcfa336fbb241876a806629cd332c8fea1509a0a1a2e1fcc1fc1b5bada0c7`.

### evaluation:629076

Calls written directly in this body: `.trim`, `JSON.stringify`, `profile.title.trim`.

SHA-256 of the source span: `2ffbcfa336fbb241876a806629cd332c8fea1509a0a1a2e1fcc1fc1b5bada0c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
