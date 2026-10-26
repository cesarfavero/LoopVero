# `createTurnSettle/recordPostTurnLabeling/recordSubagentSends`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590932-590959](../../../../../../reference/runtime/sand-eval-runner.cjs#L590932-L590959) | `ArrowFunctionExpression` | não | `calls, firstPartyToolCalls, reviewedCommits, hostListingFailed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590932-590959](../../../../../../reference/runtime/sand-eval-runner.cjs#L590932-L590959) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:590932

Chamadas escritas diretamente neste corpo: `errorLogTag`, `externalSendForTurn`, `labelingIdentity`, `recordSends`, `reportHostDiagnostic`.

SHA-256 do trecho: `78e8aa7c506f01c6a561449347efa2e9c629a55b7c743ac43a066573f593b5e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
