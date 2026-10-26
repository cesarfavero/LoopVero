# `wrapMcpExecutorForAudit/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512322-512362](../../../../../../reference/runtime/sand-eval-runner.cjs#L512322-L512362) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512322-512362](../../../../../../reference/runtime/sand-eval-runner.cjs#L512322-L512362) | 0 | 0 | 1 | 1 | 1 | 1 |

### evaluation:512322

Chamadas escritas diretamente neste corpo: `.catch`, `Date.now`, `ctx.with`, `deps.resolveTransport`, `deps.sequencer.next`, `inner.execute`, `mcpAuditStatus`, `report`, `turnAttributionFromContext`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `cc596619946844377b00d198f0cfaf252af6cb213b446251d91114a51e2a15e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
