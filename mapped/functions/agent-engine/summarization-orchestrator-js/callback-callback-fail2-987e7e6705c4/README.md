# `<callback>/<callback>/fail2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:441110-441113](../../../../../reference/runtime/sand-eval-runner.cjs#L441110-L441113) | `FunctionDeclaration` | não | `e` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:441110-441113](../../../../../reference/runtime/sand-eval-runner.cjs#L441110-L441113) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:441110

Chamadas escritas diretamente neste corpo: `new SuppressedError2`.

Alvos de atribuição ou incremento: `env.error`, `env.hasError`.

SHA-256 do trecho: `7bed3f6c8c9c77a31404d262ba32fe19eb1fed8d3af6cfa677e49d5c3fbe7ad0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
