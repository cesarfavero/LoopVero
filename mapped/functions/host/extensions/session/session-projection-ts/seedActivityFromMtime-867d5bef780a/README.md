# `seedActivityFromMtime`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-projection.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-projection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722380-722394](../../../../../../../reference/runtime/host-main.cjs#L722380-L722394) | `FunctionDeclaration` | não | `db, agentId, dbStats` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722380-722394](../../../../../../../reference/runtime/host-main.cjs#L722380-L722394) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:722380

Chamadas escritas diretamente neste corpo: `db.get`, `db.getUnreadState`, `db.seedActivityAsRead`, `getDefaultAgentMetadata`, `getUpdatedAtFromStats`.

SHA-256 do trecho: `d03ad76453193e6ed88e3081322dd8777e31372f5232b2cf91ac2e9c7ea86b16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
