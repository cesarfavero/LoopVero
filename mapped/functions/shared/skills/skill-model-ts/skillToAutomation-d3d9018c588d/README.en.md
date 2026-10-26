# `skillToAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683085-683101](../../../../../../reference/runtime/host-main.cjs#L683085-L683101) | `FunctionDeclaration` | no | `skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683085-683101](../../../../../../reference/runtime/host-main.cjs#L683085-L683101) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:683085

Calls written directly in this body: `cronTrigger`, `describeSchedule`.

SHA-256 of the source span: `4ff08bca3c2a22e20693fb8272ba915261971972d4e768a86d85b671beeddbea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
