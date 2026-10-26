# `parseTranscriptEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db-serde.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-serde-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717995-718003](../../../../../../../reference/runtime/host-main.cjs#L717995-L718003) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717995-718003](../../../../../../../reference/runtime/host-main.cjs#L717995-L718003) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:717995

Chamadas escritas diretamente neste corpo: `JSON.parse`, `transcriptEntryOfJson`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `86236d17e497789e507e33fbeba843c168d85c73958c1cccb07b67d3e91ad11e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
