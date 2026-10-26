# `resolveNamedSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762848-762853](../../../../../../../reference/runtime/host-main.cjs#L762848-L762853) | `FunctionDeclaration` | não | `deps, id` |
| [evaluation:555458-555463](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555458-L555463) | `FunctionDeclaration` | não | `deps, id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762848-762853](../../../../../../../reference/runtime/host-main.cjs#L762848-L762853) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:555458-555463](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555458-L555463) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:762848

Chamadas escritas diretamente neste corpo: `.find`, `deps.skillStore.list`, `resolveBotSkillWriteTarget`.

SHA-256 do trecho: `eef30385d6b2790ec12cda5823493974858b50db49316e11974cdefcc0119d33`.

### evaluation:555458

Chamadas escritas diretamente neste corpo: `.find`, `deps.skillStore.list`, `resolveBotSkillWriteTarget`.

SHA-256 do trecho: `eef30385d6b2790ec12cda5823493974858b50db49316e11974cdefcc0119d33`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
