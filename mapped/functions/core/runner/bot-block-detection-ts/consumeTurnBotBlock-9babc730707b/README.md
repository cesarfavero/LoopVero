# `consumeTurnBotBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454979-454983](../../../../../../reference/runtime/host-main.cjs#L454979-L454983) | `FunctionDeclaration` | não | `conversationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454979-454983](../../../../../../reference/runtime/host-main.cjs#L454979-L454983) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454979

Chamadas escritas diretamente neste corpo: `slotsByConversation.delete`, `slotsByConversation.get`.

SHA-256 do trecho: `133772c34265c2993735b3d82e4b8b50616c4fbbaae647d8f0590719948f8f6c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
