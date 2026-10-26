# `CoreMessageSerde.deserialize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/index.js` · [README do módulo](../../../../modules/agent-transcript/index-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509755-509761](../../../../../reference/runtime/host-main.cjs#L509755-L509761) | `method` | não | `blob` |
| [evaluation:304130-304136](../../../../../reference/runtime/sand-eval-runner.cjs#L304130-L304136) | `method` | não | `blob` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509755-509761](../../../../../reference/runtime/host-main.cjs#L509755-L509761) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304130-304136](../../../../../reference/runtime/sand-eval-runner.cjs#L304130-L304136) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:509755

Chamadas escritas diretamente neste corpo: `JSON.parse`, `json3.includes`, `textDecoder.decode`.

SHA-256 do trecho: `61e89e0130c1904c4039f40b059d8e6b005309b54995d376240cf2b8852395ca`.

### evaluation:304130

Chamadas escritas diretamente neste corpo: `JSON.parse`, `json3.includes`, `textDecoder.decode`.

SHA-256 do trecho: `61e89e0130c1904c4039f40b059d8e6b005309b54995d376240cf2b8852395ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
