# `SandAgentSessionStore.listAgentIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723704-723713](../../../../../../../reference/runtime/host-main.cjs#L723704-L723713) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723704-723713](../../../../../../../reference/runtime/host-main.cjs#L723704-L723713) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:723704

Chamadas escritas diretamente neste corpo: `keepAgentDirs`.

Alvos de atribuição ou incremento: `entries`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `2f0f2a15cf8bdb3119e5f87d517c3ff6df1e1c2d80b598b76e58d10cd981df2c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
