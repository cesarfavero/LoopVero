# `buildSandCloudAgentRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-cloud-agent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-cloud-agent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775821-775870](../../../../../../reference/runtime/host-main.cjs#L775821-L775870) | `FunctionDeclaration` | não | `args` |
| [evaluation:575464-575513](../../../../../../reference/runtime/sand-eval-runner.cjs#L575464-L575513) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775821-775870](../../../../../../reference/runtime/host-main.cjs#L775821-L775870) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575464-575513](../../../../../../reference/runtime/sand-eval-runner.cjs#L575464-L575513) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775821

Chamadas escritas diretamente neste corpo: `.map`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `target.images.map`.

SHA-256 do trecho: `1c92cf5834e3dd1f7cf7f831d046e02e961df46c449088f5e4e2a3f901a50007`.

### evaluation:575464

Chamadas escritas diretamente neste corpo: `.map`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `target.images.map`.

SHA-256 do trecho: `1c92cf5834e3dd1f7cf7f831d046e02e961df46c449088f5e4e2a3f901a50007`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
