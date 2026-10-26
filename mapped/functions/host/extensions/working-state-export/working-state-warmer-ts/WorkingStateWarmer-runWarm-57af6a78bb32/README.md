# `WorkingStateWarmer.runWarm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/working-state-warmer.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/working-state-warmer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786004-786035](../../../../../../../reference/runtime/host-main.cjs#L786004-L786035) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786004-786035](../../../../../../../reference/runtime/host-main.cjs#L786004-L786035) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:786004

Chamadas escritas diretamente neste corpo: `Promise.race`, `new AbortController`, `new Promise`, `this.deps.config`, `this.deps.operationTimeout.arm`, `this.deps.warmAgent`, `timeout2.dispose`.

Alvos de atribuição ou incremento: `this.cancelActiveWarm`.

SHA-256 do trecho: `4fdf35487ab189d8003c56e64de700df5617ce6ea6a188e8b87cbdecef5dc5a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
