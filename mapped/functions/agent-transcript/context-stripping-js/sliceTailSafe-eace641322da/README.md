# `sliceTailSafe`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/context-stripping.js` · [README do módulo](../../../../modules/agent-transcript/context-stripping-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509541-509558](../../../../../reference/runtime/host-main.cjs#L509541-L509558) | `FunctionDeclaration` | não | `text3, maxUnits` |
| [evaluation:294719-294736](../../../../../reference/runtime/sand-eval-runner.cjs#L294719-L294736) | `FunctionDeclaration` | não | `text3, maxUnits` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509541-509558](../../../../../reference/runtime/host-main.cjs#L509541-L509558) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:294719-294736](../../../../../reference/runtime/sand-eval-runner.cjs#L294719-L294736) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:509541

Chamadas escritas diretamente neste corpo: `.containing`, `graphemeSegmenter.segment`, `isLowSurrogate`, `text3.charCodeAt`, `text3.slice`.

SHA-256 do trecho: `1c1701e14d7cd94b963857ca6f4648a63b2d51cc49f62fdca3623b0d13223d49`.

### evaluation:294719

Chamadas escritas diretamente neste corpo: `.containing`, `graphemeSegmenter.segment`, `isLowSurrogate2`, `text3.charCodeAt`, `text3.slice`.

SHA-256 do trecho: `f290a4ac5b0bf4293f4b2dbc949fda0782ea3cabe3ce4010142ebc07785852c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
