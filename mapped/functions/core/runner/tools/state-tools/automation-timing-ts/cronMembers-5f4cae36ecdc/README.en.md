# `cronMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/tools/state-tools/automation-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/automation-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761951-761953](../../../../../../../../reference/runtime/host-main.cjs#L761951-L761953) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:554529-554531](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554529-L554531) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761951-761953](../../../../../../../../reference/runtime/host-main.cjs#L761951-L761953) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554529-554531](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554529-L554531) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:761951

Calls written directly in this body: `.filter`, `triggerList`.

SHA-256 of the source span: `1f3a7a823032bce4fda309bd127bec484958e91c2622b9579a0cbd6c5b8f689a`.

### evaluation:554529

Calls written directly in this body: `.filter`, `triggerList`.

SHA-256 of the source span: `4ff06db648df9353152063d49b175fc7a270ec8164f275b61bb102f6f052bd09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
