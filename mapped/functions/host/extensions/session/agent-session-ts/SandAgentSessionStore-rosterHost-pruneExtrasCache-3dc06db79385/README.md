# `SandAgentSessionStore.rosterHost/pruneExtrasCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723395-723399](../../../../../../../reference/runtime/host-main.cjs#L723395-L723399) | `ArrowFunctionExpression` | não | `present` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723395-723399](../../../../../../../reference/runtime/host-main.cjs#L723395-L723399) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:723395

Chamadas escritas diretamente neste corpo: `present.has`, `this.extrasCache.delete`, `this.extrasCache.keys`.

SHA-256 do trecho: `e200489a62c54929b293526bd5068adafc4c8acec7940768ae12eaeab835b88b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
