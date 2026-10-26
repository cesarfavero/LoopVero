# `placedBlockIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620043-620046](../../../../../reference/runtime/host-main.cjs#L620043-L620046) | `FunctionDeclaration` | não | `summarizer` |
| [evaluation:304397-304400](../../../../../reference/runtime/sand-eval-runner.cjs#L304397-L304400) | `FunctionDeclaration` | não | `summarizer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620043-620046](../../../../../reference/runtime/host-main.cjs#L620043-L620046) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304397-304400](../../../../../reference/runtime/sand-eval-runner.cjs#L304397-L304400) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620043

Chamadas escritas diretamente neste corpo: `new Set`.

SHA-256 do trecho: `f84b629b7c670e3192104122e6d2e8659e9d862597444782942151e3ca808399`.

### evaluation:304397

Chamadas escritas diretamente neste corpo: `new Set`.

SHA-256 do trecho: `f84b629b7c670e3192104122e6d2e8659e9d862597444782942151e3ca808399`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
