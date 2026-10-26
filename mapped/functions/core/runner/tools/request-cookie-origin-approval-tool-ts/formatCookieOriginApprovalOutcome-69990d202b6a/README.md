# `formatCookieOriginApprovalOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775158-775186](../../../../../../../reference/runtime/host-main.cjs#L775158-L775186) | `FunctionDeclaration` | não | `outcome` |
| [evaluation:574805-574833](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574805-L574833) | `FunctionDeclaration` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775158-775186](../../../../../../../reference/runtime/host-main.cjs#L775158-L775186) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:574805-574833](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574805-L574833) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:775158

Chamadas escritas diretamente neste corpo: `.join`, `describeGrants`, `outcome.items.map`.

SHA-256 do trecho: `5f561fe505b433d8bb472e7eb3182946a9d8db13948440717db0d96a1806c4a7`.

### evaluation:574805

Chamadas escritas diretamente neste corpo: `.join`, `describeGrants`, `outcome.items.map`.

SHA-256 do trecho: `5f561fe505b433d8bb472e7eb3182946a9d8db13948440717db0d96a1806c4a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
