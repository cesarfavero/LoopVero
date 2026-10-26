# `sliceHeadSafe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/context-stripping.js` · [README do módulo](../../../../modules/agent-transcript/context-stripping-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509521-509540](../../../../../reference/runtime/host-main.cjs#L509521-L509540) | `FunctionDeclaration` | não | `text3, maxUnits` |
| [evaluation:294699-294718](../../../../../reference/runtime/sand-eval-runner.cjs#L294699-L294718) | `FunctionDeclaration` | não | `text3, maxUnits` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509521-509540](../../../../../reference/runtime/host-main.cjs#L509521-L509540) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:294699-294718](../../../../../reference/runtime/sand-eval-runner.cjs#L294699-L294718) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:509521

Chamadas escritas diretamente neste corpo: `graphemeSegmenter.segment`, `isHighSurrogate`, `text3.charCodeAt`, `text3.slice`.

Alvos de atribuição ou incremento: `out`.

SHA-256 do trecho: `c6bcfd1265598c80096f5e7f197f643fbb6adb20a83b9f931bb7e3ce4b19cfde`.

### evaluation:294699

Chamadas escritas diretamente neste corpo: `graphemeSegmenter.segment`, `isHighSurrogate`, `text3.charCodeAt`, `text3.slice`.

Alvos de atribuição ou incremento: `out`.

SHA-256 do trecho: `c6bcfd1265598c80096f5e7f197f643fbb6adb20a83b9f931bb7e3ce4b19cfde`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
