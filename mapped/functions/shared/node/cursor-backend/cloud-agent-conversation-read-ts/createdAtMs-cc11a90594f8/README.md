# `createdAtMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-conversation-read.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-conversation-read-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508791-508795](../../../../../../../reference/runtime/host-main.cjs#L508791-L508795) | `FunctionDeclaration` | não | `createdAt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508791-508795](../../../../../../../reference/runtime/host-main.cjs#L508791-L508795) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:508791

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isFinite`, `createdAt.trim`.

SHA-256 do trecho: `56cd72bd40f500fdeb13b537bd4d270b96e1c68d6e8f930910e035bce51b7cbb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
