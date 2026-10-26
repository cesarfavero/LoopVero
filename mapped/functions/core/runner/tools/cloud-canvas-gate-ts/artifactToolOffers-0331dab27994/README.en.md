# `artifactToolOffers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/cloud-canvas-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/cloud-canvas-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754521-754526](../../../../../../../reference/runtime/host-main.cjs#L754521-L754526) | `FunctionDeclaration` | no | `host, decisions` |
| [evaluation:537224-537229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537224-L537229) | `FunctionDeclaration` | no | `host, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754521-754526](../../../../../../../reference/runtime/host-main.cjs#L754521-L754526) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537224-537229](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537224-L537229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754521

Calls written directly in this body: `decisions.offers`, `host.gates.cloudCanvasTools`.

SHA-256 of the source span: `627bccd6bd42b7ea884ea877fad4fc4b945dedf7d841a3111209673d624d1b4b`.

### evaluation:537224

Calls written directly in this body: `decisions.offers`, `host.gates.cloudCanvasTools`.

SHA-256 of the source span: `627bccd6bd42b7ea884ea877fad4fc4b945dedf7d841a3111209673d624d1b4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
