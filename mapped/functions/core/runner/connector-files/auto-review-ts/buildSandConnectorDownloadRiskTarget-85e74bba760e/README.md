# `buildSandConnectorDownloadRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/connector-files/auto-review.ts` · [README do módulo](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774884-774907](../../../../../../../reference/runtime/host-main.cjs#L774884-L774907) | `FunctionDeclaration` | não | `args` |
| [evaluation:574487-574510](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574487-L574510) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774884-774907](../../../../../../../reference/runtime/host-main.cjs#L774884-L774907) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574487-574510](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574487-L574510) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774884

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `downloadReviewArguments`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `d519f4a42dcb2f7c0bdcd5eea2b1e2ce7bf51c4e91fb3c2fef65c6c7935f317f`.

### evaluation:574487

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `downloadReviewArguments`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `d519f4a42dcb2f7c0bdcd5eea2b1e2ce7bf51c4e91fb3c2fef65c6c7935f317f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
