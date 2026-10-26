# `createRequestCookieOriginApprovalTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775208-775229](../../../../../../../reference/runtime/host-main.cjs#L775208-L775229) | `ArrowFunctionExpression` | sim | `ctx, args, toolDeps` |
| [evaluation:574855-574876](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574855-L574876) | `ArrowFunctionExpression` | sim | `ctx, args, toolDeps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775208-775229](../../../../../../../reference/runtime/host-main.cjs#L775208-L775229) | 5 | 0 | 4 | 3 | 0 | 0 |
| [evaluation:574855-574876](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574855-L574876) | 5 | 0 | 4 | 3 | 0 | 0 |

### host:775208

Chamadas escritas diretamente neste corpo: `formatCookieOriginApprovalOutcome`, `normalizeCookieOriginApprovalOrigins`, `pinnedProfileIds`, `rejectUnknownCookieProfileIds`, `request5`, `resolveCardTaskThread`, `toolDeps.request`, `withToolExecutionTimeoutSuspended`.

SHA-256 do trecho: `c090f2d634dea8103709c5fac584e8a55a124481e37892f5a53ee364e6d624c1`.

### evaluation:574855

Chamadas escritas diretamente neste corpo: `formatCookieOriginApprovalOutcome`, `normalizeCookieOriginApprovalOrigins`, `pinnedProfileIds`, `rejectUnknownCookieProfileIds`, `request3`, `resolveCardTaskThread`, `toolDeps.request`, `withToolExecutionTimeoutSuspended`.

SHA-256 do trecho: `0895ede185bf4276f24de4fb947cd3a15a9d25ae3178a50d132099e489e92579`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
