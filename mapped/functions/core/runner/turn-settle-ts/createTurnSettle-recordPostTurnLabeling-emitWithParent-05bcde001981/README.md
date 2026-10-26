# `createTurnSettle/recordPostTurnLabeling/emitWithParent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590905-590931](../../../../../../reference/runtime/sand-eval-runner.cjs#L590905-L590931) | `ArrowFunctionExpression` | não | `calls, firstPartyToolCalls, reviewedCommits, hostListingFailed, parentPromptMessages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590905-590931](../../../../../../reference/runtime/sand-eval-runner.cjs#L590905-L590931) | 2 | 0 | 0 | 2 | 0 | 1 |

### evaluation:590905

Chamadas escritas diretamente neste corpo: `errorLogTag`, `externalSendForTurn`, `labelingIdentity`, `record4`, `reportHostDiagnostic`.

SHA-256 do trecho: `782233b98dde6113d33084de09d9044536e0ea4ff688e1849d59cea27f64c8cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
