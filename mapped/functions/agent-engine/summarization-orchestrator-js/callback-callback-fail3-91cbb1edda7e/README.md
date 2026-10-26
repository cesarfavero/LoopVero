# `<callback>/<callback>/fail3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649457-649460](../../../../../reference/runtime/host-main.cjs#L649457-L649460) | `FunctionDeclaration` | não | `e` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649457-649460](../../../../../reference/runtime/host-main.cjs#L649457-L649460) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:649457

Chamadas escritas diretamente neste corpo: `new SuppressedError2`.

Alvos de atribuição ou incremento: `env.error`, `env.hasError`.

SHA-256 do trecho: `c2293a0fefe7d4175ec44cc645b32711a2b7f7a77d5e604dfb52114e82c3480a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
