# `rosterLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/send-to-agent-roster-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/send-to-agent-roster-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537065-537089](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537065-L537089) | `FunctionDeclaration` | no | `others, groups, agentsRootDir, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537065-537089](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537065-L537089) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:537065

Calls written directly in this body: `.join`, `agentFolderDiscoveryLine`, `group.members.map`, `groups.slice`, `lines2.push`, `teammateRosterLines`.

SHA-256 of the source span: `be8aa901231e48ba8776a098dc017b4862f1f7f780c85c4370d640ab246672a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
