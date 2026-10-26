# `withCookieOriginApprovalCards/request/settleCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/cookie-origin-approval-cards.ts` · [README do módulo](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775038-775046](../../../../../../reference/runtime/host-main.cjs#L775038-L775046) | `ArrowFunctionExpression` | não | `settlement` |
| [evaluation:574667-574675](../../../../../../reference/runtime/sand-eval-runner.cjs#L574667-L574675) | `ArrowFunctionExpression` | não | `settlement` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775038-775046](../../../../../../reference/runtime/host-main.cjs#L775038-L775046) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:574667-574675](../../../../../../reference/runtime/sand-eval-runner.cjs#L574667-L574675) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:775038

Chamadas escritas diretamente neste corpo: `host.transport.onUpdate`.

SHA-256 do trecho: `c235225f044c1c60bb5450ae9e9d5da08d1ac406687f49fc7e35b0b95636eca0`.

### evaluation:574667

Chamadas escritas diretamente neste corpo: `host.transport.onUpdate`.

SHA-256 do trecho: `ff4f635998a8c288e841628b7137161ecfbba8556ce1cf198f9042eacce94c7d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
