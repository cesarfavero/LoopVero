# `pinnedProfileIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775135-775139](../../../../../../../reference/runtime/host-main.cjs#L775135-L775139) | `FunctionDeclaration` | não | `origins` |
| [evaluation:574782-574786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574782-L574786) | `FunctionDeclaration` | não | `origins` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775135-775139](../../../../../../../reference/runtime/host-main.cjs#L775135-L775139) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574782-574786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574782-L574786) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775135

Chamadas escritas diretamente neste corpo: `new Set`, `origins.flatMap`.

SHA-256 do trecho: `0aa923e33d05965202bbea5f93678cda36b79260292c8021711b379f9e7609fc`.

### evaluation:574782

Chamadas escritas diretamente neste corpo: `new Set`, `origins.flatMap`.

SHA-256 do trecho: `0aa923e33d05965202bbea5f93678cda36b79260292c8021711b379f9e7609fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
