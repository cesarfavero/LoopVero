# `toolResultText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616870-616875](../../../../../reference/runtime/host-main.cjs#L616870-L616875) | `FunctionDeclaration` | não | `result` |
| [evaluation:285410-285415](../../../../../reference/runtime/sand-eval-runner.cjs#L285410-L285415) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616870-616875](../../../../../reference/runtime/host-main.cjs#L616870-L616875) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:285410-285415](../../../../../reference/runtime/sand-eval-runner.cjs#L285410-L285415) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:616870

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `6e2dd633d3a32aebbbd27256e1dde2c6bd37e7c366518d184f9277d4e54e4a7b`.

### evaluation:285410

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `6e2dd633d3a32aebbbd27256e1dde2c6bd37e7c366518d184f9277d4e54e4a7b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
