# `buildSandBrowserClassifierRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699749-699794](../../../../../../reference/runtime/host-main.cjs#L699749-L699794) | `FunctionDeclaration` | não | `args` |
| [evaluation:513505-513550](../../../../../../reference/runtime/sand-eval-runner.cjs#L513505-L513550) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699749-699794](../../../../../../reference/runtime/host-main.cjs#L699749-L699794) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513505-513550](../../../../../../reference/runtime/sand-eval-runner.cjs#L513505-L513550) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:699749

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `744e605e4fc20127e75b1ec33f36b46625afc66d95aeffa778f638ebae389643`.

### evaluation:513505

Chamadas escritas diretamente neste corpo: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 do trecho: `744e605e4fc20127e75b1ec33f36b46625afc66d95aeffa778f638ebae389643`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
