# `describeGrants`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775187-775190](../../../../../../../reference/runtime/host-main.cjs#L775187-L775190) | `FunctionDeclaration` | não | `grants` |
| [evaluation:574834-574837](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574834-L574837) | `FunctionDeclaration` | não | `grants` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775187-775190](../../../../../../../reference/runtime/host-main.cjs#L775187-L775190) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574834-574837](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574834-L574837) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:775187

Chamadas escritas diretamente neste corpo: `.join`, `grants.map`.

SHA-256 do trecho: `5f8af84beddbb8a52cf9a957e2ffcde66cd35b5cc9f90aa18acfa90aef85eb33`.

### evaluation:574834

Chamadas escritas diretamente neste corpo: `.join`, `grants.map`.

SHA-256 do trecho: `5f8af84beddbb8a52cf9a957e2ffcde66cd35b5cc9f90aa18acfa90aef85eb33`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
