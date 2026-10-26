# `readDurableTurnRequestIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719952-719992](../../../../../../../reference/runtime/host-main.cjs#L719952-L719992) | `FunctionDeclaration` | sim | `ctx, structure, blobStore` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719952-719992](../../../../../../../reference/runtime/host-main.cjs#L719952-L719992) | 12 | 3 | 7 | 11 | 0 | 1 |

### host:719952

Chamadas escritas diretamente neste corpo: `ConversationTurnStructure.fromBinary`, `blobStore.getBlob`, `requestIds.push`.

Alvos de atribuição ou incremento: `turnStructure`.

SHA-256 do trecho: `94ea6a49c4b46c1cd6e3db444dc8a4ef493621f6ba7b3b4d789f2bab2415cc58`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
