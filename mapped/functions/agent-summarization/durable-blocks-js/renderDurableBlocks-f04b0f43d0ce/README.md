# `renderDurableBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620047-620058](../../../../../reference/runtime/host-main.cjs#L620047-L620058) | `FunctionDeclaration` | não | `summarizer, enrichments, context2 = {}` |
| [evaluation:304401-304412](../../../../../reference/runtime/sand-eval-runner.cjs#L304401-L304412) | `FunctionDeclaration` | não | `summarizer, enrichments, context2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620047-620058](../../../../../reference/runtime/host-main.cjs#L620047-L620058) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:304401-304412](../../../../../reference/runtime/sand-eval-runner.cjs#L304401-L304412) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:620047

Chamadas escritas diretamente neste corpo: `blocks.set`, `new Map`, `placedBlockIds`, `render2`.

SHA-256 do trecho: `4a5eff448a15881176be7c4e9db03eea426577b777a96f4cd0e0f9c49a1701f6`.

### evaluation:304401

Chamadas escritas diretamente neste corpo: `blocks.set`, `new Map`, `placedBlockIds`, `render2`.

SHA-256 do trecho: `4a5eff448a15881176be7c4e9db03eea426577b777a96f4cd0e0f9c49a1701f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
