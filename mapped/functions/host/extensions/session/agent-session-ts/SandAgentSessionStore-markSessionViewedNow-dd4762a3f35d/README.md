# `SandAgentSessionStore.markSessionViewedNow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723459-723461](../../../../../../../reference/runtime/host-main.cjs#L723459-L723461) | `method` | não | `session, at3 = Date.now(), options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723459-723461](../../../../../../../reference/runtime/host-main.cjs#L723459-L723461) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723459

Chamadas escritas diretamente neste corpo: `session.db.markViewed`.

SHA-256 do trecho: `2b2ed2d7a632c39bedd9b1867d9eddcf1452f2e2a69a591e1af08ed6208e8a51`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
