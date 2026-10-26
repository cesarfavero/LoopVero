# `tryParseJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/trace-format.js` · [README do módulo](../../../../modules/agent-transcript/trace-format-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509587-509595](../../../../../reference/runtime/host-main.cjs#L509587-L509595) | `FunctionDeclaration` | não | `str3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509587-509595](../../../../../reference/runtime/host-main.cjs#L509587-L509595) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:509587

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `974530c43a5968875210104a2a6a8e46f2491136cdea512aae6cf44f0e575165`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
