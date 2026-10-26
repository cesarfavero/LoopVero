# `SandAgentSessionStore.readActiveAgentId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723234-723251](../../../../../../../reference/runtime/host-main.cjs#L723234-L723251) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723234-723251](../../../../../../../reference/runtime/host-main.cjs#L723234-L723251) | 1 | 0 | 0 | 4 | 0 | 2 |

### host:723234

Chamadas escritas diretamente neste corpo: `JSON.parse`, `parseAgentId`, `readSandDataFileIfPresentSync`, `reportFallbackUnlessAbsent`, `this.activeAgentPointerPath`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `a5db6b18656a6c6b953e08adae09cdea946ac1578f034a508cefbb3708b1bfbb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
