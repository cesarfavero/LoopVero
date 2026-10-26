# `sortConventionalAvatarFilenames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-avatar-format.ts` · [README do módulo](../../../../../modules/core/agents/agent-avatar-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494460-494462](../../../../../../reference/runtime/host-main.cjs#L494460-L494462) | `FunctionDeclaration` | não | `names3` |
| [evaluation:543618-543620](../../../../../../reference/runtime/sand-eval-runner.cjs#L543618-L543620) | `FunctionDeclaration` | não | `names3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494460-494462](../../../../../../reference/runtime/host-main.cjs#L494460-L494462) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:543618-543620](../../../../../../reference/runtime/sand-eval-runner.cjs#L543618-L543620) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494460

Chamadas escritas diretamente neste corpo: `.sort`, `names3.filter`.

SHA-256 do trecho: `a93e6a818642d5d1734fd46be116a96adac7125c180409cabaaaad21d86995d6`.

### evaluation:543618

Chamadas escritas diretamente neste corpo: `.sort`, `names3.filter`.

SHA-256 do trecho: `a93e6a818642d5d1734fd46be116a96adac7125c180409cabaaaad21d86995d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
