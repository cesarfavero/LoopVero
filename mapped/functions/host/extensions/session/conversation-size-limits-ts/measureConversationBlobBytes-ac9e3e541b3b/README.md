# `measureConversationBlobBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-size-limits.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-size-limits-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719367-719376](../../../../../../../reference/runtime/host-main.cjs#L719367-L719376) | `FunctionDeclaration` | sim | `blobDbPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719367-719376](../../../../../../../reference/runtime/host-main.cjs#L719367-L719376) | 0 | 1 | 1 | 1 | 0 | 0 |

### host:719367

Chamadas escritas diretamente neste corpo: `.then`.

Alvos de atribuição ou incremento: `total`.

SHA-256 do trecho: `5d983a19882e309d814f3e05ea421b477344a16a8824bb95a1d1a2a22136961b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
