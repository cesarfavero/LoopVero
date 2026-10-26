# `computeTurnStats`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616958-616998](../../../../../reference/runtime/host-main.cjs#L616958-L616998) | `FunctionDeclaration` | não | `turns` |
| [evaluation:285498-285538](../../../../../reference/runtime/sand-eval-runner.cjs#L285498-L285538) | `FunctionDeclaration` | não | `turns` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616958-616998](../../../../../reference/runtime/host-main.cjs#L616958-L616998) | 4 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:285498-285538](../../../../../reference/runtime/sand-eval-runner.cjs#L285498-L285538) | 4 | 3 | 0 | 1 | 0 | 0 |

### host:616958

Chamadas escritas diretamente neste corpo: `.sort`, `.trim`, `FILE_ARG_KEYS.find`, `Object.entries`, `argValuePlain`, `lastCodePoints`, `new Map`, `new Set`, `roleCounts.get`, `roleCounts.set`, `toolCounts.get`, `toolCounts.set`, `turn.text.includes`, `turn.text.startsWith`, `uniqueFiles.add`, `utf8ByteLength`.

Alvos de atribuição ou incremento: `lastAssistant`, `toolErrorCount`, `verboseByteEstimate`.

SHA-256 do trecho: `9502d71df3b10d65a78ec22b6cfb0e64a7564b24108303baa8db4491b7b83c1c`.

### evaluation:285498

Chamadas escritas diretamente neste corpo: `.sort`, `.trim`, `FILE_ARG_KEYS.find`, `Object.entries`, `argValuePlain`, `lastCodePoints`, `new Map`, `new Set`, `roleCounts.get`, `roleCounts.set`, `toolCounts.get`, `toolCounts.set`, `turn.text.includes`, `turn.text.startsWith`, `uniqueFiles.add`, `utf8ByteLength`.

Alvos de atribuição ou incremento: `lastAssistant`, `toolErrorCount`, `verboseByteEstimate`.

SHA-256 do trecho: `9502d71df3b10d65a78ec22b6cfb0e64a7564b24108303baa8db4491b7b83c1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
