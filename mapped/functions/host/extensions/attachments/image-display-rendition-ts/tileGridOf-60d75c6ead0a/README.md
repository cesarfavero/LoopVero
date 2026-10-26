# `tileGridOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/attachments/image-display-rendition.ts` · [README do módulo](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:498139-498159](../../../../../../../reference/runtime/host-main.cjs#L498139-L498159) | `FunctionDeclaration` | não | `group, streams` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498139-498159](../../../../../../../reference/runtime/host-main.cjs#L498139-L498159) | 4 | 1 | 0 | 5 | 0 | 0 |

### host:498139

Chamadas escritas diretamente neste corpo: `knownStreams.has`, `new Set`, `streams.map`, `tiles.push`.

SHA-256 do trecho: `398ca0f70440e9cf50e4cea9157cdc7a9e65c4a9b18e6d6d19a72207e667dcf7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
