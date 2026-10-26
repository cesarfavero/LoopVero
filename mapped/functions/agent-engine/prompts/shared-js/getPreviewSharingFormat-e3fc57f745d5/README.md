# `getPreviewSharingFormat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/shared.js` · [README do módulo](../../../../../modules/agent-engine/prompts/shared-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636157-636162](../../../../../../reference/runtime/host-main.cjs#L636157-L636162) | `FunctionDeclaration` | não | `{ agentPreviewCard, modelInfo }` |
| [evaluation:424213-424218](../../../../../../reference/runtime/sand-eval-runner.cjs#L424213-L424218) | `FunctionDeclaration` | não | `{ agentPreviewCard, modelInfo }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636157-636162](../../../../../../reference/runtime/host-main.cjs#L636157-L636162) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424213-424218](../../../../../../reference/runtime/sand-eval-runner.cjs#L424213-L424218) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:636157

Chamadas escritas diretamente neste corpo: `prefersMarkdownPreviewLink`.

SHA-256 do trecho: `ccd56c55d8ba70337c7232c85065f23219fa17b0073b5e134ba732e4bbcc4e88`.

### evaluation:424213

Chamadas escritas diretamente neste corpo: `prefersMarkdownPreviewLink`.

SHA-256 do trecho: `ccd56c55d8ba70337c7232c85065f23219fa17b0073b5e134ba732e4bbcc4e88`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
