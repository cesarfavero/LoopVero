# `createSandEvalInference`

**Fonte primária:** [sand-eval-runner.cjs:597549–597577](../../../reference/runtime/sand-eval-runner.cjs#L597549-L597577).

**Componente:** [inference](../../components/inference/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Responsabilidade

Fornecer as portas de inferência utilizadas pelo runner de avaliação, com backend e identidade recebidos por injeção.

## Entrada

`options` contém backend, getters de token/team/machine, seleção de modelo e contexto da requisição. A factory não descobre credenciais no desktop por conta própria.

## Saída

| Método | Resultado |
| --- | --- |
| `resolvePrivacyMode` | Resolve política de privacidade com opções do backend. |
| `getGeminiVideoAttachedMediaUrlProvider` | Retorna provider de URL de mídia anexada. |
| `createSession` | Constrói prompt session com callback de request ID e opções. |

## Seleção de modelo

Se a sessão pede um `modelId` diferente do principal, usa `createSandSubagentRequestedModel`. Caso contrário, usa a seleção principal com `maxMode` e parâmetros. Encaminha `inferenceReason`, `modelConfig`, contexto e lineage quando presentes.

## Ligação concreta

`main` do eval instancia essa factory em [sand-eval-runner.cjs:630767–630775](../../../reference/runtime/sand-eval-runner.cjs#L630767-L630775) e a entrega a `runSandEvalRequest`. A sessão principal é consumida pela run shell em [592061–592096](../../../reference/runtime/sand-eval-runner.cjs#L592061-L592096).

## Fronteira

A saída depende de `InferenceService` e de serviços de mídia/privacidade. O adapter recuperado não constitui um substituto autônomo compatível com qualquer API de modelo. A política interna do servidor e o modelo realmente servido continuam fora desta função.
