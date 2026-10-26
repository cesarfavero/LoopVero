# `createTurnSettle/prepareFinalizedFollowupLabeling`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591069-591087](../../../../../../reference/runtime/sand-eval-runner.cjs#L591069-L591087) | `ArrowFunctionExpression` | não | `args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591069-591087](../../../../../../reference/runtime/sand-eval-runner.cjs#L591069-L591087) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:591069

Chamadas escritas diretamente neste corpo: `host.latestPromptMessages`, `host.wasSupersededByUser`, `labelingIdentity`, `prepareFollowupLabeling`.

SHA-256 do trecho: `8061094bc3cde03b3494d04ee1a1ac110202e1099b2762593d63918425ede96d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
