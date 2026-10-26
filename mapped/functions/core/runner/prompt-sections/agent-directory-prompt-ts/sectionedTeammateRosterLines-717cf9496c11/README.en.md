# `sectionedTeammateRosterLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/agent-directory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/agent-directory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536971-536996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536971-L536996) | `FunctionDeclaration` | no | `unfilteredOthers, groupsListedWithMembers, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536971-536996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536971-L536996) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:536971

Calls written directly in this body: `.slice`, `.sort`, `Math.max`, `group.footer`, `groupsListedWithMembers.map`, `lines2.push`, `new Map`, `new Set`, `shown.map`, `shownByGroup.get`, `shownByGroup.set`, `sortedOthers.filter`, `unfilteredOthers.filter`.

Assignment or increment targets: `listed`.

SHA-256 of the source span: `6b0854be7d1fa34bed7ad384de42e49d6f0ce34b8990bc6a13c2411f5c453b7a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
