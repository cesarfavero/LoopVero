# `canFetchCloudTranscript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649607-649609](../../../../../reference/runtime/host-main.cjs#L649607-L649609) | `FunctionDeclaration` | não | `config2, tools` |
| [evaluation:441260-441262](../../../../../reference/runtime/sand-eval-runner.cjs#L441260-L441262) | `FunctionDeclaration` | não | `config2, tools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649607-649609](../../../../../reference/runtime/host-main.cjs#L649607-L649609) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441260-441262](../../../../../reference/runtime/sand-eval-runner.cjs#L441260-L441262) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:649607

Chamadas escritas diretamente neste corpo: `hasCloudTranscriptFetchTool`.

SHA-256 do trecho: `6e19333a7f4b038f2238f59e9348cf4bab00006b30d3b6545e2519b8cd729c43`.

### evaluation:441260

Chamadas escritas diretamente neste corpo: `hasCloudTranscriptFetchTool`.

SHA-256 do trecho: `6e19333a7f4b038f2238f59e9348cf4bab00006b30d3b6545e2519b8cd729c43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
