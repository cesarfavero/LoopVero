# `createListMachinesTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-user-computer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-user-computer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778316-778331](../../../../../../../reference/runtime/host-main.cjs#L778316-L778331) | `ArrowFunctionExpression` | sim | `_ctx, _args, computers` |
| [evaluation:578051-578066](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578051-L578066) | `ArrowFunctionExpression` | sim | `_ctx, _args, computers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778316-778331](../../../../../../../reference/runtime/host-main.cjs#L778316-L778331) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:578051-578066](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578051-L578066) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:778316

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `computers.list`, `computers.status`, `machines.map`.

SHA-256 do trecho: `b756029d6bb593c7f0f5ae642b788bf965932822c6fdab14ba502bf1e77b67b3`.

### evaluation:578051

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `computers.list`, `computers.status`, `machines.map`.

SHA-256 do trecho: `4fd963567eee6ccace6d06874a2f0e90cf0a0b038e2c8a7740a0341851710ad1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
