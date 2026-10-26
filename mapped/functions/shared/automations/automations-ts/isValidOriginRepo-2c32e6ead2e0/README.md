# `isValidOriginRepo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485467-485469](../../../../../../reference/runtime/host-main.cjs#L485467-L485469) | `FunctionDeclaration` | não | `repo` |
| [evaluation:475199-475201](../../../../../../reference/runtime/sand-eval-runner.cjs#L475199-L475201) | `FunctionDeclaration` | não | `repo` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485467-485469](../../../../../../reference/runtime/host-main.cjs#L485467-L485469) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475199-475201](../../../../../../reference/runtime/sand-eval-runner.cjs#L475199-L475201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485467

Chamadas escritas diretamente neste corpo: `GITHUB_REPO_PATTERN.test`.

SHA-256 do trecho: `e8b1c419ef3651c0b7ac02a306d304d7ed890099536f07f780237b2e13427f88`.

### evaluation:475199

Chamadas escritas diretamente neste corpo: `GITHUB_REPO_PATTERN.test`.

SHA-256 do trecho: `e8b1c419ef3651c0b7ac02a306d304d7ed890099536f07f780237b2e13427f88`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
