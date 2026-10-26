# `AgentWorkerConnection.send`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715181-715202](../../../../../../reference/runtime/host-main.cjs#L715181-L715202) | `method` | não | `build2, transfer = [], onProgress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715181-715202](../../../../../../reference/runtime/host-main.cjs#L715181-L715202) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:715181

Chamadas escritas diretamente neste corpo: `Date.now`, `Promise.reject`, `build2`, `new Error`, `new Promise`.

Alvos de atribuição ou incremento: `this.lastActivityAt`, `this.nextRequestId`.

SHA-256 do trecho: `626269d42778a0a243f19d923cfe512468e2aca6e62c739bfb3666bb4a5b4405`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
