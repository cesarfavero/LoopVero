# `listAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-roster.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-roster-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722901-722989](../../../../../../../reference/runtime/host-main.cjs#L722901-L722989) | `FunctionDeclaration` | sim | `host, activeAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722901-722989](../../../../../../../reference/runtime/host-main.cjs#L722901-L722989) | 1 | 0 | 2 | 2 | 1 | 1 |

### host:722901

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `Promise.all`, `entries.map`, `host.pruneExtrasCache`, `keepAgentDirs`, `new Set`, `summaries.filter`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `3d4a8b9695ed9e12f7da2330579712209667154de2aec66ef7991a7ce367afcf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
