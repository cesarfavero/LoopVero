# `createUpdateChannelTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-channel-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-channel-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771280-771305](../../../../../../../reference/runtime/host-main.cjs#L771280-L771305) | `ArrowFunctionExpression` | sim | `_ctx, args, m2` |
| [evaluation:570514-570539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570514-L570539) | `ArrowFunctionExpression` | sim | `_ctx, args, m2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771280-771305](../../../../../../../reference/runtime/host-main.cjs#L771280-L771305) | 5 | 1 | 1 | 5 | 0 | 0 |
| [evaluation:570514-570539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570514-L570539) | 5 | 1 | 1 | 5 | 0 | 0 |

### host:771280

Chamadas escritas diretamente neste corpo: `.join`, `current2.map`, `m2.members`, `m2.setMembers`, `members2.map`, `new Set`, `next.includes`, `next.push`, `removals.has`.

SHA-256 do trecho: `cbde7552838730aa3fd2922e0c514ce3bbd2cf96ec1111ddedef6e6daf9efdc0`.

### evaluation:570514

Chamadas escritas diretamente neste corpo: `.join`, `current2.map`, `m2.members`, `m2.setMembers`, `members2.map`, `new Set`, `next.includes`, `next.push`, `removals.has`.

SHA-256 do trecho: `cbde7552838730aa3fd2922e0c514ce3bbd2cf96ec1111ddedef6e6daf9efdc0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
