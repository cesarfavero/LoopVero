# `createSandAgentLoopModelTracker/attach`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-stream/agent-loop-model.ts` · [README do módulo](../../../../../../modules/core/runner/model-stream/agent-loop-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:513790-513793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513790-L513793) | `FunctionExpression` | não | `next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:513790-513793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513790-L513793) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:513790

Chamadas escritas diretamente neste corpo: `next.getResolvedModelId`.

Alvos de atribuição ou incremento: `initialServedModel`, `session`.

SHA-256 do trecho: `33a2f09609e828ff7390f70bd30f08c10cd52c158def08ac3af710d85eb6cf29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
