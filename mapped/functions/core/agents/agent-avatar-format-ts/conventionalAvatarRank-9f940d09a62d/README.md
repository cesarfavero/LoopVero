# `conventionalAvatarRank`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-avatar-format.ts` · [README do módulo](../../../../../modules/core/agents/agent-avatar-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494454-494459](../../../../../../reference/runtime/host-main.cjs#L494454-L494459) | `FunctionDeclaration` | não | `name18` |
| [evaluation:543612-543617](../../../../../../reference/runtime/sand-eval-runner.cjs#L543612-L543617) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494454-494459](../../../../../../reference/runtime/host-main.cjs#L494454-L494459) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:543612-543617](../../../../../../reference/runtime/sand-eval-runner.cjs#L543612-L543617) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:494454

Chamadas escritas diretamente neste corpo: `.slice`, `.toLowerCase`, `CONVENTIONAL_AVATAR_EXTENSIONS.findIndex`.

SHA-256 do trecho: `61bbecf95fd9c4b57cfc54c1726fa7984c841ff4bc4f1be918271a755650890a`.

### evaluation:543612

Chamadas escritas diretamente neste corpo: `.slice`, `.toLowerCase`, `CONVENTIONAL_AVATAR_EXTENSIONS.findIndex`.

SHA-256 do trecho: `cc20329b0b1d06af869faa058e7984ba210b3d8671ea98144cc82d8612dedcb2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
