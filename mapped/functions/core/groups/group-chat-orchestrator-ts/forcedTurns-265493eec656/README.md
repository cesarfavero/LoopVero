# `forcedTurns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat-orchestrator.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737562-737583](../../../../../../reference/runtime/host-main.cjs#L737562-L737583) | `FunctionDeclaration` | não | `members2, isAttachmentOnlyTurn, receipts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737562-737583](../../../../../../reference/runtime/host-main.cjs#L737562-L737583) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:737562

Chamadas escritas diretamente neste corpo: `forced.set`, `members2.some`, `mergeForced`, `new Map`.

Alvos de atribuição ou incremento: `forced`.

SHA-256 do trecho: `cb943ee801e8dfd215ba2833d27f6f96a7683323d7375279138d4b0219f31372`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
