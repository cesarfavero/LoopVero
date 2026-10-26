# `truncateDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639546-639552](../../../../../../reference/runtime/host-main.cjs#L639546-L639552) | `FunctionDeclaration` | não | `description9, maxLength` |
| [evaluation:430160-430166](../../../../../../reference/runtime/sand-eval-runner.cjs#L430160-L430166) | `FunctionDeclaration` | não | `description9, maxLength` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639546-639552](../../../../../../reference/runtime/host-main.cjs#L639546-L639552) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430160-430166](../../../../../../reference/runtime/sand-eval-runner.cjs#L430160-L430166) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:639546

Chamadas escritas diretamente neste corpo: `.trimEnd`, `Math.max`, `description9.slice`.

SHA-256 do trecho: `ff7e8f3bd63877f2e0b50373bbbeae84317bb48b8cb33d37263ceaf9a4902d91`.

### evaluation:430160

Chamadas escritas diretamente neste corpo: `.trimEnd`, `Math.max`, `description9.slice`.

SHA-256 do trecho: `ff7e8f3bd63877f2e0b50373bbbeae84317bb48b8cb33d37263ceaf9a4902d91`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
