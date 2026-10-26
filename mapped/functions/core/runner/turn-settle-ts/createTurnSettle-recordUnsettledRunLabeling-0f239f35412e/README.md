# `createTurnSettle/recordUnsettledRunLabeling`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591059-591068](../../../../../../reference/runtime/sand-eval-runner.cjs#L591059-L591068) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591059-591068](../../../../../../reference/runtime/sand-eval-runner.cjs#L591059-L591068) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:591059

Chamadas escritas diretamente neste corpo: `host.latestPromptMessages`, `recordPostTurnLabeling`, `recordTurnTranscript`, `unresolvedToolCallIds`.

SHA-256 do trecho: `15af8e28f9efbe7f4c3bcd4180a292a0299afa0877387a09333aa3b9c89d0f31`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
