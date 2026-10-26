# `describeSandCloudAgentReviewFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-cloud-agent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775732-775741](../../../../../../reference/runtime/host-main.cjs#L775732-L775741) | `FunctionDeclaration` | não | `files` |
| [evaluation:575375-575384](../../../../../../reference/runtime/sand-eval-runner.cjs#L575375-L575384) | `FunctionDeclaration` | não | `files` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775732-775741](../../../../../../reference/runtime/host-main.cjs#L775732-L775741) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575375-575384](../../../../../../reference/runtime/sand-eval-runner.cjs#L575375-L575384) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775732

Chamadas escritas diretamente neste corpo: `files.map`.

SHA-256 do trecho: `05745453521f2584a4e8c19c3f00f3586f4e70a4a820d89b001a330ab18433e8`.

### evaluation:575375

Chamadas escritas diretamente neste corpo: `files.map`.

SHA-256 do trecho: `f655760f4a03dd012b49df24e84fcd49f2429965e4248a58bb3f47ab69da6d17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
