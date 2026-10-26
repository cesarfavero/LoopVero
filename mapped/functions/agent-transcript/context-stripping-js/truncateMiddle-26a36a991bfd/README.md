# `truncateMiddle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/context-stripping.js` · [README do módulo](../../../../modules/agent-transcript/context-stripping-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509559-509566](../../../../../reference/runtime/host-main.cjs#L509559-L509566) | `FunctionDeclaration` | não | `text3, maxChars` |
| [evaluation:294737-294744](../../../../../reference/runtime/sand-eval-runner.cjs#L294737-L294744) | `FunctionDeclaration` | não | `text3, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509559-509566](../../../../../reference/runtime/host-main.cjs#L509559-L509566) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:294737-294744](../../../../../reference/runtime/sand-eval-runner.cjs#L294737-L294744) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:509559

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `sliceHeadSafe`, `sliceTailSafe`.

SHA-256 do trecho: `31085f63c2d58fcdb85b8820d331213ad16c300378919bd1d53307c1de87c06c`.

### evaluation:294737

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `sliceHeadSafe`, `sliceTailSafe`.

SHA-256 do trecho: `31085f63c2d58fcdb85b8820d331213ad16c300378919bd1d53307c1de87c06c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
