# `selectBlockPrompts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620059-620073](../../../../../reference/runtime/host-main.cjs#L620059-L620073) | `FunctionDeclaration` | não | `blocks, ids` |
| [evaluation:304413-304427](../../../../../reference/runtime/sand-eval-runner.cjs#L304413-L304427) | `FunctionDeclaration` | não | `blocks, ids` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620059-620073](../../../../../reference/runtime/host-main.cjs#L620059-L620073) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:304413-304427](../../../../../reference/runtime/sand-eval-runner.cjs#L304413-L304427) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:620059

Chamadas escritas diretamente neste corpo: `blocks.get`, `new Set`, `promptTexts.push`, `seen.add`, `seen.has`.

SHA-256 do trecho: `eee83fa79637ed00c888bc2ae4a5aef190d58ef3ca269e384ab3279aa44bf0ff`.

### evaluation:304413

Chamadas escritas diretamente neste corpo: `blocks.get`, `new Set`, `promptTexts.push`, `seen.add`, `seen.has`.

SHA-256 do trecho: `eee83fa79637ed00c888bc2ae4a5aef190d58ef3ca269e384ab3279aa44bf0ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
