# `isValidGitBranch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485471-485473](../../../../../../reference/runtime/host-main.cjs#L485471-L485473) | `FunctionDeclaration` | não | `branch` |
| [evaluation:475203-475205](../../../../../../reference/runtime/sand-eval-runner.cjs#L475203-L475205) | `FunctionDeclaration` | não | `branch` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485471-485473](../../../../../../reference/runtime/host-main.cjs#L485471-L485473) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475203-475205](../../../../../../reference/runtime/sand-eval-runner.cjs#L475203-L475205) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485471

Chamadas escritas diretamente neste corpo: `GIT_BRANCH_INVALID_PATTERN.test`.

SHA-256 do trecho: `59db5317bfc3c58bdf087e5c8d224b0acda1a5124ce3ad170cc0cad29285c0c1`.

### evaluation:475203

Chamadas escritas diretamente neste corpo: `GIT_BRANCH_INVALID_PATTERN.test`.

SHA-256 do trecho: `59db5317bfc3c58bdf087e5c8d224b0acda1a5124ce3ad170cc0cad29285c0c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
