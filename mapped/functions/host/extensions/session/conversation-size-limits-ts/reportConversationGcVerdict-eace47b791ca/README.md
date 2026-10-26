# `reportConversationGcVerdict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-size-limits.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-size-limits-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719322-719354](../../../../../../../reference/runtime/host-main.cjs#L719322-L719354) | `FunctionDeclaration` | não | `trigger2, dbPath, verdict, stillOverCap = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719322-719354](../../../../../../../reference/runtime/host-main.cjs#L719322-L719354) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:719322

Chamadas escritas diretamente neste corpo: `pinnedConversationGcReporter`.

SHA-256 do trecho: `639752bd2d5128989886e864708ccc854c0df6707b6e46f260da110ce6a630e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
