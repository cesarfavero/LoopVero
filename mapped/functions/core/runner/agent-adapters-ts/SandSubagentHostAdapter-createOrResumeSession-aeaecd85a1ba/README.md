# `SandSubagentHostAdapter.createOrResumeSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/agent-adapters.ts` · [README do módulo](../../../../../modules/core/runner/agent-adapters-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582968-582978](../../../../../../reference/runtime/sand-eval-runner.cjs#L582968-L582978) | `method` | sim | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582968-582978](../../../../../../reference/runtime/sand-eval-runner.cjs#L582968-L582978) | 0 | 0 | 1 | 1 | 0 | 1 |

### evaluation:582968

Chamadas escritas diretamente neste corpo: `__callDispose`, `__using`, `createSpan`, `ctx.withName`, `this.createOrResume`.

SHA-256 do trecho: `8312bddcb80ada8fb4a6384e2005730d87280863aeb2b88a2581f6ee9029cf23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
