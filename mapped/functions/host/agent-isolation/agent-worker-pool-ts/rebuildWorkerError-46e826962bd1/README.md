# `rebuildWorkerError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/agent-worker-pool.ts` · [README do módulo](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715128-715135](../../../../../../reference/runtime/host-main.cjs#L715128-L715135) | `FunctionDeclaration` | não | `response` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715128-715135](../../../../../../reference/runtime/host-main.cjs#L715128-L715135) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:715128

Chamadas escritas diretamente neste corpo: `new Error`.

Alvos de atribuição ou incremento: `error64.code`, `error64.name`.

SHA-256 do trecho: `e88966f38f84820ff33d38a059a6b150fc04e4bfbbe613bfa911fec048bc01c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
