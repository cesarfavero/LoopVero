# `createSubagentRuntime/reset`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535624-535627](../../../../../../reference/runtime/sand-eval-runner.cjs#L535624-L535627) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535624-535627](../../../../../../reference/runtime/sand-eval-runner.cjs#L535624-L535627) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535624

Chamadas escritas diretamente neste corpo: `subagentRegistry.clear`, `subagentSessions.clear`.

SHA-256 do trecho: `79aad0b1667617955072b487d8fec7b7dbcb7b84232f50d7cfd08fa0180b4c2b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
