# `messagesEqualByValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649546-649554](../../../../../reference/runtime/host-main.cjs#L649546-L649554) | `FunctionDeclaration` | não | `storedMessage, liveMessage` |
| [evaluation:441199-441207](../../../../../reference/runtime/sand-eval-runner.cjs#L441199-L441207) | `FunctionDeclaration` | não | `storedMessage, liveMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649546-649554](../../../../../reference/runtime/host-main.cjs#L649546-L649554) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:441199-441207](../../../../../reference/runtime/sand-eval-runner.cjs#L441199-L441207) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:649546

Chamadas escritas diretamente neste corpo: `coreMessageJson`, `fromRedactedCoreMessage`.

SHA-256 do trecho: `2a8570aa983a0d8602505292cd3ab7401eed0e65de7375b5685b4b38d194b7f4`.

### evaluation:441199

Chamadas escritas diretamente neste corpo: `coreMessageJson`, `fromRedactedCoreMessage`.

SHA-256 do trecho: `2a8570aa983a0d8602505292cd3ab7401eed0e65de7375b5685b4b38d194b7f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
