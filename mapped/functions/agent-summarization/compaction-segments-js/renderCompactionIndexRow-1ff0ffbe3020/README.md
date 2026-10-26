# `renderCompactionIndexRow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617136-617140](../../../../../reference/runtime/host-main.cjs#L617136-L617140) | `FunctionDeclaration` | não | `{ index, turnCount, approxBytes, keywords: keywords2 }` |
| [evaluation:285676-285680](../../../../../reference/runtime/sand-eval-runner.cjs#L285676-L285680) | `FunctionDeclaration` | não | `{ index, turnCount, approxBytes, keywords: keywords2 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617136-617140](../../../../../reference/runtime/host-main.cjs#L617136-L617140) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285676-285680](../../../../../reference/runtime/sand-eval-runner.cjs#L285676-L285680) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617136

Chamadas escritas diretamente neste corpo: `.join`, `compactionSegmentFilename`, `keywords2.map`, `segmentLabel`.

SHA-256 do trecho: `452b563efea6ff1f5aee837a497b04cfafc934f3a92b552847ae7c6b898c2eb5`.

### evaluation:285676

Chamadas escritas diretamente neste corpo: `.join`, `compactionSegmentFilename`, `keywords2.map`, `segmentLabel`.

SHA-256 do trecho: `452b563efea6ff1f5aee837a497b04cfafc934f3a92b552847ae7c6b898c2eb5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
