# `wrapMcpExecutorForAudit/execute/report`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512328-512353](../../../../../../reference/runtime/sand-eval-runner.cjs#L512328-L512353) | `ArrowFunctionExpression` | não | `status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512328-512353](../../../../../../reference/runtime/sand-eval-runner.cjs#L512328-L512353) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:512328

Chamadas escritas diretamente neste corpo: `.catch`, `Date.now`, `transportPromise.then`.

SHA-256 do trecho: `6bd423686315184197cc1f42c36459a58f12b8642c486981c63945f2352f6808`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
