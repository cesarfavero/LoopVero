# `SandAgentSessionStore.loadCachedExtras`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723345-723361](../../../../../../../reference/runtime/host-main.cjs#L723345-L723361) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723345-723361](../../../../../../../reference/runtime/host-main.cjs#L723345-L723361) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:723345

Chamadas escritas diretamente neste corpo: `getSandAgentDbWriteGeneration`, `getSandProfilePath`, `readExtras`, `this.extrasCache.get`, `this.extrasCache.set`, `this.isAgentBeingDeleted`, `this.statIfExists`.

SHA-256 do trecho: `4258ce65250d9d31981a8d6ede002ac157d1c1dc548fd0fab3ee4bc38d2e3f2a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
