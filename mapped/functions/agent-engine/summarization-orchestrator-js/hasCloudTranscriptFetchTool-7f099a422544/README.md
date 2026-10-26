# `hasCloudTranscriptFetchTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649604-649606](../../../../../reference/runtime/host-main.cjs#L649604-L649606) | `FunctionDeclaration` | não | `tools` |
| [evaluation:441257-441259](../../../../../reference/runtime/sand-eval-runner.cjs#L441257-L441259) | `FunctionDeclaration` | não | `tools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649604-649606](../../../../../reference/runtime/host-main.cjs#L649604-L649606) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441257-441259](../../../../../reference/runtime/sand-eval-runner.cjs#L441257-L441259) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:649604

Chamadas escritas diretamente neste corpo: `tools.some`.

SHA-256 do trecho: `10b3bb14ea31d8f32dca2e0932b1b34ae107d6925c67e00c1e3f3039a2a23643`.

### evaluation:441257

Chamadas escritas diretamente neste corpo: `tools.some`.

SHA-256 do trecho: `10b3bb14ea31d8f32dca2e0932b1b34ae107d6925c67e00c1e3f3039a2a23643`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
