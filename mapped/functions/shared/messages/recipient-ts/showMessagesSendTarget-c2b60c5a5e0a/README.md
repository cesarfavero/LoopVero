# `showMessagesSendTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/messages/recipient.ts` · [README do módulo](../../../../../modules/shared/messages/recipient-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721654-721657](../../../../../../reference/runtime/host-main.cjs#L721654-L721657) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721654-721657](../../../../../../reference/runtime/host-main.cjs#L721654-L721657) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721654

Chamadas escritas diretamente neste corpo: `messagesRecipientHandle`, `target.slice`, `target.split`.

SHA-256 do trecho: `3e56805e5f59371ac47ec9e003060a764153fe03b41a2c992152f75b35635233`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
