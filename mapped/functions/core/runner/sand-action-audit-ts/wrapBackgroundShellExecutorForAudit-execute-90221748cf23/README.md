# `wrapBackgroundShellExecutorForAudit/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512901-512912](../../../../../../reference/runtime/sand-eval-runner.cjs#L512901-L512912) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512901-512912](../../../../../../reference/runtime/sand-eval-runner.cjs#L512901-L512912) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:512901

Chamadas escritas diretamente neste corpo: `Date.now`, `deps.target`, `inner.execute`, `recordShellAudit`, `shellAuditAction`, `turnAttributionFromContext`.

SHA-256 do trecho: `a07b945bc8596f476ce365b75072f4fb1e466cddc650745013c10c7c2f25724e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
