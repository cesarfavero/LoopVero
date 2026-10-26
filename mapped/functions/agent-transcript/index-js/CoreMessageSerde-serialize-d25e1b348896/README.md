# `CoreMessageSerde.serialize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/index.js` · [README do módulo](../../../../modules/agent-transcript/index-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509751-509754](../../../../../reference/runtime/host-main.cjs#L509751-L509754) | `method` | não | `value` |
| [evaluation:304126-304129](../../../../../reference/runtime/sand-eval-runner.cjs#L304126-L304129) | `method` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509751-509754](../../../../../reference/runtime/host-main.cjs#L509751-L509754) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304126-304129](../../../../../reference/runtime/sand-eval-runner.cjs#L304126-L304129) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509751

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `textEncoder.encode`.

SHA-256 do trecho: `12dc4b654f615b16ee76a68136e7419f4f9b8ce39e3727c609297295f27f21fb`.

### evaluation:304126

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `textEncoder.encode`.

SHA-256 do trecho: `12dc4b654f615b16ee76a68136e7419f4f9b8ce39e3727c609297295f27f21fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
