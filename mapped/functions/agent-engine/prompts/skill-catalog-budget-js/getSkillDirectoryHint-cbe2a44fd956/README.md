# `getSkillDirectoryHint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639563-639590](../../../../../../reference/runtime/host-main.cjs#L639563-L639590) | `FunctionDeclaration` | não | `fullPath` |
| [evaluation:430177-430204](../../../../../../reference/runtime/sand-eval-runner.cjs#L430177-L430204) | `FunctionDeclaration` | não | `fullPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639563-639590](../../../../../../reference/runtime/host-main.cjs#L639563-L639590) | 4 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:430177-430204](../../../../../../reference/runtime/sand-eval-runner.cjs#L430177-L430204) | 4 | 1 | 0 | 3 | 0 | 0 |

### host:639563

Chamadas escritas diretamente neste corpo: `fullPath.replace`, `normalizedPath.indexOf`, `normalizedPath.lastIndexOf`, `normalizedPath.slice`.

SHA-256 do trecho: `8ca03ace6b4cee68a97b13004de31a94ae832b94d56859957d15600c0954753a`.

### evaluation:430177

Chamadas escritas diretamente neste corpo: `fullPath.replace`, `normalizedPath.indexOf`, `normalizedPath.lastIndexOf`, `normalizedPath.slice`.

SHA-256 do trecho: `8ca03ace6b4cee68a97b13004de31a94ae832b94d56859957d15600c0954753a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
