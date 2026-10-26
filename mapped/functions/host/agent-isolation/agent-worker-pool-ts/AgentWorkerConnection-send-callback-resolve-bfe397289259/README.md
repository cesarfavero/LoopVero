# `AgentWorkerConnection.send/<callback>/resolve`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715190-715193](../../../../../../reference/runtime/host-main.cjs#L715190-L715193) | `ArrowFunctionExpression` | não | `response` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715190-715193](../../../../../../reference/runtime/host-main.cjs#L715190-L715193) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715190

Chamadas escritas diretamente neste corpo: `Date.now`, `resolve31`.

Alvos de atribuição ou incremento: `this.lastActivityAt`.

SHA-256 do trecho: `adf2b717d225371eab0993c46659087957b8f7db8567d8af4c5edac2ff03ab12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
