# `prefersMarkdownPreviewLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/shared.js` · [README do módulo](../../../../../modules/agent-engine/prompts/shared-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636147-636156](../../../../../../reference/runtime/host-main.cjs#L636147-L636156) | `FunctionDeclaration` | não | `modelInfo` |
| [evaluation:424203-424212](../../../../../../reference/runtime/sand-eval-runner.cjs#L424203-L424212) | `FunctionDeclaration` | não | `modelInfo` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636147-636156](../../../../../../reference/runtime/host-main.cjs#L636147-L636156) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:424203-424212](../../../../../../reference/runtime/sand-eval-runner.cjs#L424203-L424212) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:636147

Chamadas escritas diretamente neste corpo: `modelInfo.modelName.toLowerCase`, `modelName.includes`, `modelName.startsWith`.

SHA-256 do trecho: `a03e5d3526b8d11bb11b695631a832e60cf100213ebae23f7dc6b05dd8cffa83`.

### evaluation:424203

Chamadas escritas diretamente neste corpo: `modelInfo.modelName.toLowerCase`, `modelName.includes`, `modelName.startsWith`.

SHA-256 do trecho: `a03e5d3526b8d11bb11b695631a832e60cf100213ebae23f7dc6b05dd8cffa83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
