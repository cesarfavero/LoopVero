# `buildSandConnectorUploadRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/connector-files/auto-review.ts` · [README do módulo](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774824-774847](../../../../../../../reference/runtime/host-main.cjs#L774824-L774847) | `FunctionDeclaration` | não | `args` |
| [evaluation:574427-574450](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574427-L574450) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774824-774847](../../../../../../../reference/runtime/host-main.cjs#L774824-L774847) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574427-574450](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574427-L574450) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774824

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewArguments2`, `structFromRecord`.

SHA-256 do trecho: `1ae227e2ae2eda83aa1ab7d3b016842fc4b3f1589ec454911b5c9e7d410cd774`.

### evaluation:574427

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewArguments2`, `structFromRecord`.

SHA-256 do trecho: `1ae227e2ae2eda83aa1ab7d3b016842fc4b3f1589ec454911b5c9e7d410cd774`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
