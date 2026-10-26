# `sandToolCallAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/evals/turn-transcript.ts` · [README do módulo](../../../../../modules/core/evals/turn-transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628403-628439](../../../../../../reference/runtime/sand-eval-runner.cjs#L628403-L628439) | `FunctionDeclaration` | não | `transcripts, segments, updates` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628403-628439](../../../../../../reference/runtime/sand-eval-runner.cjs#L628403-L628439) | 6 | 4 | 0 | 1 | 0 | 0 |

### evaluation:628403

Chamadas escritas diretamente neste corpo: `agentFromClientToolArgs`, `agents.has`, `agents.set`, `isUnknownRecord2`, `new Map`, `new Set`, `requestAgent`, `segments.flatMap`, `subagentAgent`, `subagentByRequestId.set`, `toolCallIds2`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `4da87bdf1e8cf6d3d4ffd405b0e3eaf3a08d0e01d120a970bbea2f3e201538a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
