# `GroupChatOrchestrator.run/settleNext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat-orchestrator.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737459-737463](../../../../../../reference/runtime/host-main.cjs#L737459-L737463) | `ArrowFunctionExpression` | sim | `turn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737459-737463](../../../../../../reference/runtime/host-main.cjs#L737459-L737463) | 1 | 0 | 1 | 0 | 0 | 0 |

### host:737459

Chamadas escritas diretamente neste corpo: `mergeForced`, `new Map`, `this.settle`, `working.delete`.

Alvos de atribuição ou incremento: `forced`.

SHA-256 do trecho: `d4cf86ddcfde8668cd6e70a4748616fb7fb2bfdba48c8d5d6983b1fa0a5a1ecb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
