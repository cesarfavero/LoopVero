# `readTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683017-683026](../../../../../../reference/runtime/host-main.cjs#L683017-L683026) | `FunctionDeclaration` | no | `data2` |
| [evaluation:534129-534138](../../../../../../reference/runtime/sand-eval-runner.cjs#L534129-L534138) | `FunctionDeclaration` | no | `data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683017-683026](../../../../../../reference/runtime/host-main.cjs#L683017-L683026) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:534129-534138](../../../../../../reference/runtime/sand-eval-runner.cjs#L534129-L534138) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:683017

Calls written directly in this body: `isUnknownRecord2`, `normalizeSchedule`.

SHA-256 of the source span: `db8ca533b9b29f32e82d6bf7396686514d0103b2a4191da53473eb760c2d3a63`.

### evaluation:534129

Calls written directly in this body: `isUnknownRecord2`, `normalizeSchedule`.

SHA-256 of the source span: `49119e8221904e64833f60af707eaea048976d05d438877287d55161ff6d1d54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
