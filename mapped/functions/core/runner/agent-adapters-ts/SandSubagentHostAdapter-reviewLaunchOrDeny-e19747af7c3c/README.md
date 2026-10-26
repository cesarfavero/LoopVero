# `SandSubagentHostAdapter.reviewLaunchOrDeny`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583086-583110](../../../../../../reference/runtime/sand-eval-runner.cjs#L583086-L583110) | `method` | sim | `ctx, agentId, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583086-583110](../../../../../../reference/runtime/sand-eval-runner.cjs#L583086-L583110) | 3 | 0 | 1 | 3 | 0 | 1 |

### evaluation:583086

Chamadas escritas diretamente neste corpo: `__callDispose`, `__using`, `createSpan`, `ctx.withName`, `this.releaseSession`, `this.reviewLaunch`.

SHA-256 do trecho: `92201b096db6d243eb666a10a1b5b7ab3cbc5d6e0717d6bd45037db6d5840237`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
